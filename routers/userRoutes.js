const express = require('express')
const { setUser } = require('../controllers')
const Router = express.Router()

Router.post('/user', setUser)

module.exports = Router
