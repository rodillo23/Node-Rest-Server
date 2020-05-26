require('./config/config')

const colors = require('colors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const bodyParser = require('body-parser')

//parse application/x-www-form-urlencoded MIDDLEWARES
app.use(bodyParser.urlencoded({ extended : false}))
// parse application/json
app.use(bodyParser.json())

//importamos y usamos las rutas de usuarios
app.use(require('./routes/usuario'))

//conexion a la bd
mongoose.connect('mongodb://localhost:27017/cafe', {useUnifiedTopology : true, useNewUrlParser : true}, (err, res)=> {
    if(err) throw err
    console.log('Base de Datos Online'.red)
})

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto: ${process.env.PORT}`.blue)
})

