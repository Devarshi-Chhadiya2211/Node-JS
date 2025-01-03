const express = require("express");
const UserModel = require("../Model/UserSchema");
const BLogModel = require("../Model/BlogSchema");
const UserRouter = express.Router();

UserRouter.post("/signup", async (req, res) => {
  try {
    const UserData = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    let data = await UserModel.create(UserData);
    res.status(200).send({ msg: "User Added successfully", data: data });
  } catch (error) {
    res.status(401).send({ msg: error.message });
  }
});

UserRouter.post("/login",async(req,res)=>{
  const {email,password}  = req.body
  console.log(email,password)
try {
    let user = await UserModel.findOne({email : email})
    console.log(user)
    if(!user){
      return res.status(401).json({msg : "Email is Not Registered"})
    }
    if(user.password != password){
        return res.status(401).json({msg : "Password Incorrect"})
    }
    res.status(200).json({msg : "User Login Successfully"})
} catch (error) {
    res.status(401).json({msg : error.message})
}
})

UserRouter.post("/createblog",async(req,res)=>{
    try {
      const BlogData = {
        blogname: req.body.blogname,
        heading: req.body.heading,
        des: req.body.des,
        imgURL: req.body.imgURL,
        date: req.body.all,
      };
      let data = await BLogModel.create(BlogData);
      res.status(200).send({ msg: "User Added successfully", data: data });
    } catch (error) {
      res.status(401).send({ msg: error.message });
    }
  });

module.exports = UserRouter;