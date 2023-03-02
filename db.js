const ditenv = require('dotenv').config()
const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
const mongoURI = "mongodb+srv://Rishabh:Rishabh009@cluster0.3mhgmdv.mongodb.net/testapp?retryWrites=true&w=majority"
// const mongoURI = "mongodb://localhost:27017/tailoth"
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected sucessfully")).catch((error) => error.message)



// module.exports = connectToMongo;

// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true)
// const DB = "mongodb+srv://Rishabh:Rishabh009@cluster0.3mhgmdv.mongodb.net/testapp?retryWrites=true&w=majority"
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>console.log("Database connected sucessfully")).catch((error)=>error.message)