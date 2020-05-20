require('./config/config')

const express = require('express')
const mongoose = require('mongoose')

const app = express()

const bodyParser = require('body-parser')
//parse application/x-www-form-urlencoded MIDDLEWARES
app.use(bodyParser.urlencoded({ extended : false}))
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'))

mongoose.connect('mongodb://localhost:27017/cafe', {useUnifiedTopology : true, useNewUrlParser : true}, (err, res)=> {
    if(err) throw err
    console.log('Base de Datos Online')
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ', process.env.PORT)
})

