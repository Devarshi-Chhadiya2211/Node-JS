const { Router } = require("express")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const UserModel = require("../Model/UserModel")
const nodemailer = require("nodemailer")
require('dotenv').config()
const secret = process.env.SECRET
const UserRouter = Router()

let otpStore = {

}

UserRouter.post("/register", async (req, res) => {
    const {username,email,password,role,secretKey} = req.body
    try {
        // let data = await new UserModel({username,email,password,role})
        // await data.save()
        if( role == 'admin' && secretKey != secret){
            return res.send({msg : "Unauthorised !!"})
        }
        let data = await UserModel.create({username,email,password,role})
        res.status(200).send({msg : "User Registered Successfully"})
    } catch (error) {
        res.status(501).send({msg : error.message})
    }

    // try {
    //     bcrypt.hash(req.body.password, 5, async (err, hash) => {
    //         if (err) {
    //             return res.send({ msg: err })
    //         }
    //         let obj = {
    //             username: req.body.username,
    //             email: req.body.email,
                
    //             password: hash
    //         }
    //         let data = await UserModel.create(obj)

    //         res.status(200).send({ msg: "User registered successfully" })
    //     })
    // } catch (error) {
    //     res.status(501).send({ msg: error.message })
    // }
})


UserRouter.post("/login", async (req, res) => {
    // const { email, password } = req.body
    // try {
    //     let user = await UserModel.findOne({ email })
    //     console.log(user);

    //     if (user) {
    //         bcrypt.compare(password, user.password, (err, result) => {
    //             if (result) {
    //                 const token = jwt.sign({ userID: user._id, username: user.username }, process.env.SECRET)
    //                 console.log(token)
    //                 res.status(200).send({ msg: "User Logged in successfully", token })
    //             } else {
    //                 res.status(501).send({ msg: "Incorrect Passwrod" })
    //             }
    //         })
    //     } else {
    //         res.status(501).send({ msg: "User not registered" })
    //     }
    // } catch (error) {
    //     res.status(501).send({ msg: error.message })
    // }
    try {
        const {email,password} = req.body
        let user = await UserModel.findOne({email : email})
        if(!user){
          return res.send({msg : "User not Registered"})
        }
        if(user.password != password){
            return res.send({msg : "Wrong Password"})
        }
        const token = jwt.sign({userId : user._id, role : user.role},"nodejs")
        res.send({msg : "User Login Successfull", token : token})
    } catch (error) {
        res.status(501).send({msg : error.message})
    }
})







module.exports = UserRouter