

//Importar express
const express = require('express');
const path = require('path');
require('dotenv').config();

//DB config
const { dbConnection } = require('./database/config');
dbConnection();


//Crea una instancia de la app
const app = express();


// Lectura y parseo del body
app.use(express.json())


// Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');




//Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//Mis rutas
app.use('/api/login', require('./routes/auth'))



//Escuchar en un puerto
server.listen(process.env.PORT, (err) => {

    if(err) throw new Error(err);


    console.log('Servidor corriendo en puerto', process.env.PORT);

});





