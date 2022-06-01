const io = require("socket.io-client");
const socket = io("http://localhost:4000");

const initSocket = async () => {
  socket.on("connect", () => {
    socket.emit("joinRoom", "Hola mundo desde el cliente en el puerto 4000");
  });

  socket.on("event", (data) => console.log(data));
};

initSocket();
