const mongoose = require("mongoose")

const proSchema = mongoose.Schema({
    price : {type : Number},
    proname : {type : String},
    des : {type : String}
})

const proModel = mongoose.model("product", proSchema)

module.exports = proModel