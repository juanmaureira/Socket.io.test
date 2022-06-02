const low = require("lowdb")
const fileAsync = require("lowdb/adapters/FileAsync")
const moment = require("moment")

let backup

async function createBackup({deviceName}) {
    const adapter = new fileAsync(`${deviceName}.json`)
    
    backup = await low(adapter);
    
    backup
    .defaults({
        isConnect: {},
        canceledOrdersDisconnect: [],
        completedOrdersDisconnect: [],
        doorsFailsDisconnect: [],
        retiredOrders: [],
        errorsDoors: [],
        revokedOrders: [],
        conectedAt: [],
        canceledOrders: [],
    })
    .write()
}

module.exports= {
    createBackup,
}