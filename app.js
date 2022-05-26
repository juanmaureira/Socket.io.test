const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRoutes = require('./routers/userRoutes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', userRoutes)

module.exports = app
