const express = require('express')
const path = require('path')
const app = express()
const port = 3700;
const handel = require('express-handlebars')

app.use(express.static(path.join(__dirname,"/static")))
app.listen(port,(e)=>
{
    console.log(`http://localhost::${port}`)
}) 