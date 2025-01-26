const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const userRoutes = require("./routes/userRoutes")
const bookingRoutes = require("./routes/bookingRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err))

app.use("/", userRoutes)
app.use("/", bookingRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

