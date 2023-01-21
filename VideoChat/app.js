const port = 5000; 
const { listen } = require('engine.io');
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const {v4: uuidV4} = require('uuid')



app.set('view engine','ejs')
app.use(express.static('public'))


app.get("/",(req,res)=>
{
    // ea1864df-d023-4f6d-a7c0-0430cd38e179
    res.redirect(`${uuidV4()}`)
   
})
app.get('/:room',(req,res)=>
{
     // req.params.room returns the room id , That the user is searching for 
     res.render('room',{roomId:req.params.room})
})
server.listen(port,()=>
{
    console.log("http://localhost:5000")
})



io.on('connection',socket =>
{
    socket.on("joined-room",(roomId , userId)=>
    {  
         console.log(roomId,userId)
        socket.join(roomId) //what this will do 
        socket.to(roomId).emit('user-connected',userId)
    }
    )


        socket.on('disconnect',(roomId , userId)=> {
        socket.to(roomId).emit('user-disconnected', userId)
      })
})