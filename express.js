const express = require("express")
const server = express();

server.get("/", (request,response)=>{
    response.send('You are in the home page, welcome!')
} )

server.post("/users", (request,response)=>{
    const respuesta = {
        hola: 'vato loco'
    }

    //va a cnvertir el objeto a json
    //lo va a mandar como respuesta
    //y va a crear el header
    response.json(respuesta)
} )

server.listen(8000, ()=>{
    console.log('express app listening...')
})