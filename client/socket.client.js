const io = require("socket.io-client");
const socket = io("http://localhost:4000");
var os = require("os");

let dataUser = {
  arch: os.arch(),
  osType: os.type(),
  osPlataform: os.platform(),
  homedir: os.homedir(),
  hostname: os.hostname(),
  userInfo: os.userInfo(),
};

const initSocket = async () => {
  socket.on("connect", () => {
    socket.emit("joinRoom", dataUser);
  });
};

socket.on("event", (data) => console.log(data));
initSocket();
