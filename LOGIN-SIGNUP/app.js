const express = require("express")
const connect = require("./Config/db")
const cookie = require("cookie-parser")
const UserRouter = require("./Routes/UserRoute")
const BlogRouter = require("./Routes/BlogRoute")

const app = express()
app.use(cookie())
app.set("view engine", "ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))

app.use("/",UserRouter)

app.use("/blog",BlogRouter)

app.listen(6276,()=>{
    connect()
    console.log("Server is connected && running at 6276 !!!")
})