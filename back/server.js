require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routes = require('./routes.js')
app.use(routes)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        app.emit('dataBase')
        console.log('Connected to database')
    }).catch((e) => {
        console.log(e)
    })

app.on('dataBase', () => {
    app.listen(port, () => {
        console.log('Server is running')
    })
})

