const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routers/userRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use("/", (req, res) => res.send("Servidor en puerto 3000"));

app.get("/users", (req, res) => {
    const users = {
        'name' : 'Jhon',
        'lastname' : 'Doe'
    }
    console.log("LLego la peticion")
    console.log("req -> ", req.query.id)
    req.query.id == 1 
    ?   res.status(200).json({
            users
        })
    :  res.status(404).json({message: 'error'})

})

module.exports = app;
