const mongoose=require('mongoose')

const connect = async()=>{
    await mongoose.connect('mongodb+srv://devarshi:chhadiya@cluster0.e2wbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('database conncetd susscessfully')
}

module.exports=connect