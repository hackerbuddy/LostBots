var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.send('Connected');
});

io.on('connection', function(socket){
    var addedUser = false;
    
    console.log('A user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', {username: socket.username, message: msg});
    });
    
    socket.on('add user', function(username){
        if(addedUser) return;
        socket.username = username;
        addedUser = true;
    });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});