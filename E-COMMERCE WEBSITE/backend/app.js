const express = require("express")
const connection = require("./Config/db");
const UserRouter = require("./Routes/UserRoute");
require("dotenv").config()
const cors = require("cors");
const ProductRouter = require("./Routes/ProductRoute");

const app = express()
app.use(express.json());
app.use(cors())
app.use(express.static('public'))

app.use("/user", UserRouter)
app.use("/",ProductRouter)

app.listen(process.env.PORT,()=>{
    connection()
    console.log(`Server running at ${process.env.PORT}`);
})