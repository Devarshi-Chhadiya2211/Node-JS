const express=require('express')

const UserRouter = require('./Routes/UserRouter')
const connect = require('./Config/server')
const cors=require('cors')
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use('/',UserRouter)

app.listen(6276,()=>{
    connect()
    console.log('server running at 6276')
})