const express = require('express');
const router = express();


router.get("/", (req,res) =>{

    console.log(req.socket.remoteAddress)

    res.send('Pagina Inicial')

})

router.get("/sobre", (req,res) =>{

    res.send('Pagina Sobre')

})

router.get("/contato", (req,res) =>{

    res.send('Pagina Contato')

})

router.get("/*", (req,res) =>{

    res.send('Pagina Invalida')

})


module.exports = router