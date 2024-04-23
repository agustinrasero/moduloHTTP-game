/*
Programar un guego
"Obtener la palabra secreta"


LOGICA DE JUEGO


Por grupos de 3


En un tablero de coordenadas con filas (Letras) y columnas (numeros) de 5 X 5
Se esconden 3 llaves y 3 puertas que cada grupo asignará en las celdas.
No puede haber una llave en la misma celda que la puerta.
Una vez abiertas las puertas se descubrirá la palabra secreta



---


El juego consiste en, a traves de peticiones GET
con la ruta de la coordenada, por ejemplo /A2,
encontrar las 3 llaves para poder abrir las puertas.
Las puertas solo se abren si la llave de esa puerta es encontrada
y se podrán aprir con peticiones POST y la coordenada.
(almacenar en variables si la llave fue encontrada y la puerta encontrada)


Una vez abiertas las 3 puertas, se podrá acceder a la palabra oculta
a traves de la ruta /frase con el metodo GET.


Códigos de estado:


Llave encontrada 200 OK
Coordenada vacía 404 Not Found
Puerta abierta 200 OK
Puerta sin llav3 403 Forbidden
Frase encontrada 200 OK
Frase oculta 403 Forbidden



No hay turnos, el grupo que habra las tres puertas y obtenga la palabra oculta.
Gana.


uso de curl: 
*/
let llave1 = false
let llave2 = false
let llave3 = false
let puerta1 = false
let puerta2 = false
let puerta3 = false


import http, { Server } from 'node:http'

const server = http.createServer((peticion, respuesta)=>{
    const ruta = peticion.url
    const metodo = peticion.method
    
    if(metodo === "GET"){
        switch(ruta){
            case '/A5':
                respuesta.statusCode = 200 
                respuesta.end("Llave encontrada")
                
                llave1 = true
            break;

            case '/E1':
                respuesta.statusCode = 200 
                respuesta.end("Llave encontrada")
                
                llave2 = true
            break;

            case '/D4':
                respuesta.statusCode = 200 
                respuesta.end("Llave encontrada")
                
                llave3 = true
            break;

            case '/frase':
                if(puerta1 === true && puerta2 === true && puerta3 === true){
                    respuesta.statusCode = 200
                    respuesta.end("COLOCAR EL POLLO EN EL HORNO CHAU")
                    
                }
                else{
                    respuesta.statusCode = 403
                    respuesta.end('No se abrieron todas las puertas')
                    
                }
            break;

            default:
                //respuesta.setHeader('Access-Control-Allow-Origin','*');
                respuesta.statusCode = 404
                respuesta.end("Coordenada vacia")
              
            

        }



        
    }

    if(metodo === "POST"){
        switch(ruta){
            case '/A2':
                if(llave1 === true){
                    respuesta.statusCode = 200
                    respuesta.end("Puerta abierta")
                    puerta1 = true
                }
                else{
                    respuesta.statusCode = 403
                    respuesta.end("Puerta sin llave")
                    
                }
            break;

            case '/E3':
                if(llave2 === true){
                    respuesta.statusCode = 200
                    respuesta.end("Puerta abierta")
                    puerta2 = true
                }
                else{
                    respuesta.statusCode = 403
                    respuesta.end("Puerta sin llave")
                    
                } 
            break;

            case '/D1':
                if(llave3 === true){
                    respuesta.statusCode = 200
                    respuesta.end("Puerta abierta")
                    puerta3 = true
                }
                else{
                    respuesta.statusCode = 403
                    respuesta.end("Puerta sin llave")
                    
                }
            break;

            default:
                respuesta.statusCode = 404
                respuesta.end("Coordenada vacia")
                 
            


        }
    }

    

    

});



server.listen(3000)