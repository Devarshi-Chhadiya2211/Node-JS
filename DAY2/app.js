// core module 

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

// appendFile
