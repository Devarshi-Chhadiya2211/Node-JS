const mongoose = require("mongoose")


const connect = async()=>{
    await mongoose.connect("")
    console.log("Database Connected!!!")
}



module.exports = connect