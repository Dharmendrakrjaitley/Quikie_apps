const express = require('express')
const mongoose = require('mongoose')
const app = express()

//database url
const url = "mongodb+srv://Myuser:JAITLEy41@dharmendra.lfsnb.mongodb.net/Mydatabase?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const con = mongoose.connection;
con.on('open', (req, res) => {
    console.log("Connected to database");
})



app.use(express.json());
// code for cross-origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



const userRouter = require('./routes/UserRoutes');
app.use('/user', userRouter);



app.listen(5000);