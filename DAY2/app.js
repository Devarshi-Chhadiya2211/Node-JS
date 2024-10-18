// core module 
// File System 
const fs = require("fs")

// readfile, readfileSync

fs.readFile('hello.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

let a = fs.readFileSync('hello.txt','utf-8')
console.log(a);

// writeFile, writeFileSync

fs.writeFile('file.txt',"Today's technology",(err)=>{
      if(err){
        console.log(err)
      }else{
      console.log("File written successfully")
      }
})

fs.writeFileSync("hello.txt","Technology")

// appendFile, appendFile

fs.appendFile('add.txt',"welcome to the world",(err)=>{
    if(err){
      console.log(err)
    }else{
    console.log("File written successfully")
    }
})

fs.appendFileSync("add.txt","it's Technology")


const os = require("os")

// OS 

console.log("platform : " + os.platform())
console.log("freemem : " + os.freemem())
console.log("totalmem : " + os.totalmem())
console.log("hostname : " + os.hostname())
console.log("cpus : " + os.cpus())
console.log("cpus.length : " + os.cpus().length)
console.log("homedir : " + os.homedir())


// Path 

const path = require("path")

let hy = path.join(__dirname,'hello.txt')
console.log("dirname : " + path.dirname(hy));
console.log("extension-name : " + path.extname(hy));


