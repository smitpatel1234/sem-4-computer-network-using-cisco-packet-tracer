const bcrypt = require("bcrypt");
const UserModel = require('../mydb/user');
const express = require('express');

const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true
}));

module.exports.login = async (req, res) => {

    const userdata1 = req.body;
    const userdata2 = await UserModel.findOne({email: userdata1.email});
    if(userdata2) {
        const isMatch = await bcrypt.compare(userdata1.password, userdata2.password);
        if(isMatch) {
            const token =await  userdata2.generateAuthToken();
            console.log(token);
             res.cookie("jwt", token, {
                maxAge: new Date(Date.now() + 60*60*1000),
                httpOnly: true
            });
            return res.json({message: "login successful"});
           
        
        } else {
            return res.json({message: "password is incorrect"});
        }
    } else {
        return res.json({message: "email is incorrect"});
    }
};


// Middleware to check if the user is authenticated


