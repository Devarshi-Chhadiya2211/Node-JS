const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username : {type : String, require : true},
    email : {type : String,require : true,unique : true},
    password : {type : String, require : true},
    role : {type : String, enum : ['user', 'admin'], default : 'user'}
})

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel