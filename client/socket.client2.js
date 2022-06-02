const io = require("socket.io-client")
const socket = io("http://localhost:4000")
var os = require("os")

let dataUser = {  
    'deviceName' : 'Client2'
  }

const initSocket = async () => {
  socket.on("connect", () => {
    console.log("Socket init ...")
    socket.emit("joinRoom", dataUser)
  });
};

socket.on("deviceConnected", async ({ deviceName }, response)  => {
    console.log(deviceName)
    response({status:'ok', dataUser})
})

initSocket()