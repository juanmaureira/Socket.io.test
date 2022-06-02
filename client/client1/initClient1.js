const { initSocket, dataUser } = require("./socket.client1")
const { createBackup } = require('../db/createdb')
const { updateOrderApi } = require('./queries')

createBackup(dataUser)
initSocket()

const apiFetch = async () => {
    const resp = await updateOrderApi( 'users', {id:2})
    console.log(resp.data)
}

setInterval( apiFetch, 3000 );
