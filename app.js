const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routers/userRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/users", (req, res) => {

    const users = {
        'name' : 'Jhon',
        'lastname' : 'Doe'
    }


    req.query.id == 1 
    ?   res.status(200).json({
            users
        })
    :  res.status(404).json({message: 'error'})

})

module.exports = app;
