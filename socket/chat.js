const db = require("../db/db");
function setupChat(io) {
  const onlineUsers = new Map();

  io.on("connection", (socket) => {
    // console.log(`Join the chat: ${socket.id}`);

    socket.on("register", (userId) => {
      onlineUsers.set(Number(userId), socket.id);
      //   console.log(`User ${userId} online`);
    });

    socket.on("new_message", async (data) => {
      const { senderId, receiverId, szoveg } = data;
      // console.log("DATA:", data);
      const [result] = await db.query(
        "INSERT INTO messages (giver, reciver, messages) VALUES (?, ?, ?)",
        [senderId, receiverId, szoveg],
      );
      const message = {
        message_id: result.insertId,
        giver: Number(senderId),
        reciver: Number(receiverId),
        messages: szoveg,
        created_at: new Date(),
      };

      const reciverSocket = onlineUsers.get(Number(receiverId));
      if (reciverSocket) {
        io.to(reciverSocket).emit("uzenet_jott", message);
      }
      socket.emit("uzenet_jott", message);
    });

    socket.on("disconnect", () => {
      for (const [userId, socketId] of onlineUsers) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }
    });
  });
}
module.exports = { setupChat };
