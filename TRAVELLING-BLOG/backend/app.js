const express=require('express')
const UserRouter = require('./Routes/UserRouter')
const ProductRouter = require('./Routes/ProductRouter')
const cors=require('cors')
const connection = require('./Config/db')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// app.use('/user',UserRouter)
// app.use('/',ProductRouter)

app.listen(6276,()=>{
    connection()
    console.log('server running at 6276')
})