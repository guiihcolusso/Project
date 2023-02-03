const express = require('express')
const server = express()
const rotas = require('./config/router')

const config = require('./config/configuracao.json')


server.use(rotas)


server.listen(config.PORT,() =>{
    
    console.log("servidor Iniciado")

})