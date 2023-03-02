const mongoose = require('mongoose');
const {Schema} = mongoose
const UserSchema = new Schema({
    name:{
        type : String,
        require : true
    },
    email:{
        type : String,
        require : true
    },
    phone:{
        type : Number,
        require : true
    },
    address:{
        type : String,
        require : true
    },
    message : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    }
})
const User = mongoose.model('users', UserSchema);
User.createIndexes();
module.exports = User