const { initSocket, dataUser } = require("./socket.client1")
const { createBackup } = require('../db/createdb')
const { apiFetch } = require('../apiFetch')

const responses = {
    'ECONNREFUSED' : 'DISCONNECT',
    'ERR_BAD_REQUEST' : 'ERR_BAD_REQUEST'
}

createBackup(dataUser)
initSocket()

/* 
setInterval( async () => {
    let res

    const resp = await apiFetch()

    res = responses[resp] === undefined 
    ? resp.data 
    : responses[resp]

    console.log(res)

}, 3000 ); 
*/
