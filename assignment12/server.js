const express= require('express');
const server=express();
const port=3000;


server.get('/js/Knockoutv3.5.1.js',(req,Resp)=>{
    Resp.sendfile(__dirname+'/js/Knockoutv3.5.1.js');
});

server.get('/index.html',(req,Resp)=>{
    Resp.sendfile(__dirname+'/index.html');
});
server.get('/',(req,Resp)=>{
    Resp.sendfile(__dirname+'/index.html');
});
server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
})

