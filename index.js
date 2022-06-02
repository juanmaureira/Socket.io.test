const app = require("./app")
const { initSocket } = require('./sockets/connections')

const port = 3000
initSocket();

app.listen(port, () => console.log(`Server running at ${port}`))
