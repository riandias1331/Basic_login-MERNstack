const express = require('express')
const route = express.Router()

const controller = require('./src/controllers/homeController.js')

route.get('/users', controller.getUsers)
route.post('/users', controller.createUsers)
route.put('/users/:id', controller.updateUsers)
route.delete('/users/:id', controller.deleteUsers)

module.exports = route