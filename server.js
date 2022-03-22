const express = require('express');

const path = require('path')
const pool = require('./db')

require('dotenv').config()


const PORT = process.env.PORT
const app = express();

app.use(express.urlencoded({extended: true }))
app.use(express.json({extended:false}))
app.use(express.static(path.join(__dirname,'public')))



app.use('/', require('./routes'))


app.listen(PORT, ()=> console.log(`Server running on ${PORT}`))