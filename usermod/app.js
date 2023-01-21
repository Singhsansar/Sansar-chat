const express = require('express')
const {mongoDataBase,finduser} = require('./Data/data.js')
const app = express()
const path = require('path') 
const port = 4500
const data = require('./Data/data.js')



// const person1 =
// {
//     name: "Nikhil",
//     email: "singhsansar433@gmail.com",
//     number: 46797947964,
//     password: "askjdghsadb"
// }

// mongo(person1)


// //Body-parser a middleware is requied to process with the post method 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname,"/views")))

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.get('/register',(req,res)=>
{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})


app.post('/register',(req,res)=>
{
    console.log(req.body)
    mongoDataBase(req.body)
    res.send('Form submitted Successfully')
})


app.post('/Homepage',(req,res)=>
{
    finduser(req.body)
    // console.log(req.body)
    res.send("Logged in Successfully")
})


app.listen(port,(result)=>
{
    console.log(`http://localhost:${port}`)
})  