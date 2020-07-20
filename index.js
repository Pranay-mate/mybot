var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

io.on('connection', function a(socket){
  console.log('a user connected');
  socket.emit("welcome", 'select any number 1,2,3,4,5');

  socket.on('linkClicked', function a(msg){
    console.log("msg: " + msg);
//    io.emit('linkClicked','ans of IP');

    if (msg ==='groupName - General IP Queries') {
      io.emit('linkClicked','select any number', bitrix());

    }else if (msg ==='groupName - Learning Path 1') {
      io.emit('linkClicked',msg);

    }else if (msg ==='groupName - Learning Path 2') {
      io.emit('linkClicked',msg);

    }else if (msg ==='groupName - Learning Path 3') {
      io.emit('linkClicked',msg);

    }else if (msg ==='groupName - Live Projects') {
      io.emit('linkClicked',msg);

    }
    // broadcast to all other users -- originating client does not receive this message.
    // to see it, open another browser window
   socket.broadcast.emit('newClick', 'Someone clicked ' + msg) // attention: this is a general broadcas -- check how to emit to a room
  });

////  socket.emit("bitrix", 'select any bitrix 1,2,3,4,5');

function bitrix(){
  socket.emit('linkClicked', "select bitrixxx 1,2,3,4,5");
  socket.on('chat message', function (msg){
    io.emit('chat message', msg);

      if (msg === "1") {
        io.emit('chat message', "bitrix ans of one");
        
      }else if (msg==='2') {
        io.emit('chat message', "bitrix ans of two");

      }else if (msg==='3') {
        io.emit('chat message', "botrix ans of three");
      }else if (msg === '*') {
        io.emit('chat message', "previous menu");
      }else {
        io.emit('chat message', "not ");

      }
  });

};
//
//function s() {
//  io.emit('chat message', "ssssssssssssssss");
//
//}
//  //////////////listen for chat message from front-ends
//    socket.on('chat message', function (msg){
//      io.emit('chat message', msg);
//      if (msg === "hi") {
//        io.emit('chat message', result);
//
//      }else if (msg === "1") {
//        io.emit('chat message', "ans of one");
//
//      }else if (msg==='2') {
//        io.emit('chat message', "ans of two");
//      }
/////////
//      else if (msg === '3') {
//        io.emit('chat message',"select bitrixxx 1,2,3,4,5", bitrix(msg));
//      }
//      else if (msg === '*') {
//        io.emit('chat message', 'select any number 1,2,3,4,5');
//      }
//      else {
//        io.emit('chat message', "please select once more");
//      }
//  //  io.emit('chat message', "hello");
//
//
//    console.log('message: ' + msg);
//  });
////  socket.on('chat reply', function(reply){
////  io.emit('chat message', reply);
//////  io.emit('chat message', "hello");
//////  io.emit('chat reply', msg);
////
////
////  console.log('message: ' + reply);
////});
////
//
//    //  else if (msg === '3') {
//    //    io.emit('chat message', "Please select any bitrix question 1,2,3,4,5");
//    //  }else if (msg === '1') {
//    //    io.emit('chat message', "Ans of bitrix question 1");
//    //  }else if (msg === '2') {
//    //    io.emit('chat message', "Ans of bitrix question 2");
//    //  }else if (msg === '*') {
//    //    io.emit('chat message', "Ans of bitrix question 2");
//    //  }
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
