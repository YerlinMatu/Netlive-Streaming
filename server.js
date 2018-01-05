/* Setup system */
const os = require("os");
const hostname = os.hostname();

const express = require('express');
const app = new express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 9009;

const Log = require('log');
let   log = new Log('debug')

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
   res.redirect('index.html');
});

// Escuchar conexión de usuario.
io.on('connection', (socket)=>{
   socket.on('stream', (imagen)=>{
   socket.broadcast.emit('stream', imagen);
  })
})

http.listen(PORT, ()=>{
   log.info(`\n Servidor ${hostname} arrancado en el puerto ${PORT}`);
});

