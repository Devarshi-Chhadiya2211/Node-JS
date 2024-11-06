const http = require("http")
const path = require("path")
const fs = require("fs")


// console.log(a);


let server = http.createServer((req,res)=>{
        // res.end(a)
    if(req.url == '/'){
        // let home = path.join(__dirname,'index.html')
        let a = fs.readFileSync('index.html','utf-8')
        res.end(a)
    }else if(req.url == '/login'){
        let b = fs.readFileSync('login.html','utf-8')
        res.end(b)
    }else if(req.url == '/signup'){
        let c = fs.readFileSync('signup.html','utf-8')
        res.end(c)
    }else{
        let d = fs.readFileSync('pagenotfound.html','utf-8')
        res.end(d)
    }
})
server.listen(5000,()=>{
    console.log("server running 5000");    
})



