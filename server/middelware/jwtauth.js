const jwt = require("jsonwebtoken");
const UserModel = require('../mydb/user');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
module.exports = async function jwtauth(req, res, next) {
    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, 'GFDETYUIOIUYTRTYUIOIUYTRTYUIOIUYTRTYUIOOIUYTYUIOP');
        const user = await UserModel.findOne({ _id: verifyUser._id });
        req.user = user;
      
    } catch (error) {
        res.status(401).json({ message: "unauthorized" });
    }
    next();
};