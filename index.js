const app = require("./app");
const port = 3000;

const io = require("socket.io")(4000, {
  cors: {
    origin: "http://localhost",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  socket.on("joinRoom", (data) => console.log(data));
  socket.emit("event", "Hola mundo desde servidor");
});

app.listen(port, () => console.log(`Server running at ${port}`));
