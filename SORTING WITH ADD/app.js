const express = require("express")
const connection = require("./Config/db");
const ProductRouter = require("./Route/productRoute")
require("dotenv").config()


const app = express()
app.use(express.json())

app.use("/product",ProductRouter)

app.listen(process.env.PORT,()=>{
    connection()
    console.log(`Server running at ${process.env.PORT}`);
})