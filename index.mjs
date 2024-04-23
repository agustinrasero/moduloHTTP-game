import http, { Server } from 'node:http'

const server = http.createServer((peticion, respuesta)=>{
    const ruta = peticion.url
    const metodo = peticion.method
    //respuesta.end(`la ruta solicitada es  ${ruta} y el metodo es ${metodo} `)
    if(ruta === "/"){
        respuesta.statusCode = 200
        respuesta.end("Hola raiz")
    }
    else{
        respuesta.end("Estoy en el inicio")
        respuesta.statusCode = 404
    }


});

server.listen(3000)