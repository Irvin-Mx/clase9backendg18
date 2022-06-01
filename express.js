const server = express();

server.get("/", (request,response)=>{
    response.send('You are in the home page, welcome!')
} )

server.post("/", (request,response)=>{
    const respuesta = {
        hola: 'vato loco'
    }
    response.json(respuesta)
} )

server.listen(8000, ()=>{
    console.log('express app listening...')
})