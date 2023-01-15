//Node server will handle socket io connections
const express = require('express')
const path = require('path')
const app = express()
const server = require('http').Server(app);

const port = 8000;
const handel = require('express-handlebars')
const io = require('socket.io')(server)
const users ={}


app.use(express.static(path.join(__dirname,"/frontend")))

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"/frontend/index.html"))
})

// app.listen(port,(e)=>
// {
//     console.log(`http://localhost::${port}`)
// }) 


io.on('connection',socket=>{

    socket.on('new-user-joined',name=>
    {
        console.log('newuser',name)
        users[socket.id]= name;
        socket.broadcast.emit('user-joined',name) })

    socket.on('send',message=>
    {
        socket.broadcast.emit('receive',{name:users[socket.id],message:message})
    })

    socket.on('disconnect',message=>
{
    socket.broadcast.emit('left',{name:users[socket.id] ,message:message})
    delete users[socket.id]
    
})

})






server.listen(8000, () => {
    console.log('Server listening on port 8000');
});


