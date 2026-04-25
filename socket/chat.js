const db = require("../db/db");
function setupChat(io) {
  const onlineUsers = new Map();

  io.on("connection", (socket) => {
    socket.on("register", (userId) => {
      const id = Number(userId);
      socket.userId = id;
      onlineUsers.set(Number(userId), socket.id);
    });

    socket.on("new_message", async (data) => {
      try {
        const { senderId, receiverId, szoveg } = data;
        const [result] = await db.query(
          "INSERT INTO messages (giver, reciver, messages) VALUES (?, ?, ?)",
          [senderId, receiverId, szoveg],
        );
        const message = {
          message_id: result.insertId,
          giver: Number(senderId),
          receiver: Number(receiverId),
          messages: szoveg,
          created_at: new Date(),
        };

        const reciverSocket = onlineUsers.get(Number(receiverId));
        if (reciverSocket) {
          io.to(reciverSocket).emit("uzenet_jott", message);
        }
        socket.emit("uzenet_jott", message);
      } catch (err) {
        console.error("new_message hiba:", err);
      }
    });
    socket.on("delete_conversation", ({ partnerId }) => {
      try {
        const partnerSocket = onlineUsers.get(Number(partnerId));
        if (partnerSocket) {
          io.to(partnerSocket).emit("conversation_deleted", {
            partnerId: Number(socket.userId),
          });
        }
      } catch (err) {
        console.error("delete conversation hiba:", err);
      }
    });

    socket.on("delete_message", ({ messageId, partnerId }) => {
      try {
        console.log("BACKEND: delete_message event:", { messageId, partnerId });
        console.log("BACKEND: onlineUsers:", [...onlineUsers.entries()]);
        const partnerSocket = onlineUsers.get(Number(partnerId));
        console.log("BACKEND: partnerSocket:", partnerSocket);
        if (partnerSocket) {
          io.to(partnerSocket).emit("message_deleted", {
            messageId: Number(messageId),
            partnerId: Number(socket.userId),
          });
          console.log("BACKEND: message_deleted elküldve");
        } else {
          console.log("BACKEND: partner nincs online!");
        }
      } catch (err) {
        console.error("delete_message hiba:", err);
      }
    });

    socket.on("disconnect", () => {
      if (socket.userId) {
        onlineUsers.delete(socket.userId);
      } else {
        for (const [userId, socketId] of onlineUsers) {
          if (socketId === socket.id) {
            onlineUsers.delete(userId);
            break;
          }
        }
      }
    });
  });
}
module.exports = { setupChat };
