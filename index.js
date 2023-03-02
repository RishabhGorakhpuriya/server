const express = require('express');
const connectToMongo = require('./db');
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors')
app.use(cors())
const path = require('path')
const port = process.env.PORT || 1100;
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.listen(port, ()=>{
    console.log(`Server start port number ${port}`)
});