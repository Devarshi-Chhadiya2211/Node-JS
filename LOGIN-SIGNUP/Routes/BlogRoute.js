const express = require("express")
const isAuth = require("../Middleware/isAuth")

const BlogRouter = express.Router()


BlogRouter.get("/",isAuth,(req,res)=>{
    res.render("blog.ejs")
})

module.exports = BlogRouter