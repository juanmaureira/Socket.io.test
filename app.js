const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routers/userRoutes");
const { Server } = require("socket.io");

const io = new Server(4000, {
  // options
});

io.on("connection", (socket) => console.log("Socket iniciado ..."));
io.emit("event", () => console.log("evento"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", userRoutes);

module.exports = app;
