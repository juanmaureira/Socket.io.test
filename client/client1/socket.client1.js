const io = require("socket.io-client")
const socket = io("http://localhost:4000")

let dataUser = { 
  'deviceName' : 'Client1'
}

const initSocket = async () => socket.on("connect", () => socket.emit("joinRoom", dataUser))

socket.on('disconnect', () => {
  console.log(`${dataUser['deviceName']} desconectado del servidor`)
}) 

socket.on("deviceConnected", async ({ deviceName }, response) => {
  console.log(`${deviceName} conectado al servidor`)
  response({status:'ok', dataUser})
})

module.exports = {
  initSocket,
  dataUser
}
