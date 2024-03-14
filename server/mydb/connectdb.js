const mongoose = require('mongoose');

const connectdb =   () => {
mongoose.connect('mongodb://localhost:27017/mydb')
.then(()=>{console.log("Database connected successfully!");})
.catch((err)=>{console.log("Database does not connected!");})
}
module.exports = connectdb;