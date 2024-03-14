const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors")
const bcrypt = require("bcrypt")
const app = express()

const port=3001
app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const  connectDB = require( './mydb/connectdb.js');
connectDB();
app.use('/',require('./router/register.js'));
app.use('/',require('./router/login.js'));
app.use('/',require('./router/user.js'));


 app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
 });
