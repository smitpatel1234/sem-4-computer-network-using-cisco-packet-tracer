const express = require('express')
const mongoose = require('mongoose');
const cors = require("cors")
const bcrypt = require("bcrypt")
const UserModel = require('./mydb/user')
const app = express()
const port=3001
app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{console.log("Database connected successfully!");})
.catch((err)=>{console.log("Database does not connected!");})

app.post('/',async (req,res)=>
{

});
app.listen(port,(err)=>{
    console.log(`Example app listening on port ${port}`)
})