const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000; 
app.set('port', port);
//direccion ip V4 de la maquina, consultar con ipconfig
server.listen(3000, '192.168.1.43' || 'localhost', function() {
 console.log('Aplicación de NodeJS ' + process.pid + 'inicio en el puerto ' + port);
})