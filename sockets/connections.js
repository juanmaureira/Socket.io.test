const io = require("socket.io")(4000, {
    cors: {
      origin: "http://localhost",
      methods: ["GET", "POST"],
    },
})

let rooms = {}

const getSocketFromRoom = async (deviceName) => {
    const [socket] = await io.fetchSockets().filter((socket) => socket.rooms.has(deviceName))
    return socket
}

const saveDataRoom = (idDevice, deviceName) => {
    let room = rooms[deviceName]
    if (!room) room = rooms[deviceName] = {};
    rooms[deviceName] = idDevice;
    console.log('rooms -> ', rooms)
}

const initSocket = () => {

    io.on("connect", (socket) => {

        socket.on("joinRoom", ({ deviceName }) => {
            socket.join(deviceName)
            saveDataRoom(socket.id, deviceName)

            return socket
            .timeout(10000)
            .emit("deviceConnected", { deviceName }, (e, response) => {
                if (e) {
                console.log(e.message)
                } else console.log(response)
            })
        })

        socket.on("disconnect",  (reason) => {
            const [idDevice] = Object.entries(rooms).filter(([, id]) => id === socket.id)
            const [deviceName] = idDevice ? idDevice : ["undefined"]
            delete rooms[deviceName]
            console.log('rooms -> ', rooms)
            console.log(
                 `status: offline lockername: ${deviceName} desconectado : ${reason} `
            )
        })
    })

}

const sendToDevices = 
async ({ 
    deviceName, 
    eventName, 
    data }, 
    callback ) =>  getSocketFromRoom(deviceName)
                   .timeout(3000).emit(`${eventName}`, data, (e,response) => (e) 
                   ? callback(e.message) 
                   : callback(response))


module.exports = {
    initSocket,
    sendToDevices
}