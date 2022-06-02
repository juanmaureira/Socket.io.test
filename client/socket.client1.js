const io = require("socket.io-client")
const socket = io("http://localhost:4000")
var os = require("os");

let dataUser = { 
  'deviceName' : 'Client1'
}

/* arch: os.arch(),
osType: os.type(),
osPlataform: os.platform(),
homedir: os.homedir(),
hostname: os.hostname(),
userInfo: os.userInfo(), */

const initSocket = async () => {
  socket.on("connect", () => {
    console.log("Socket init ...")
    socket.emit("joinRoom", dataUser)
  });
  
  
  
};

socket.on('disconnected', () => console.log('Desconctado del servidor'))
socket.on("deviceConnected", async ({ deviceName }, response) => {
console.log( deviceName);
  response({status:'ok', dataUser})
})

initSocket()
