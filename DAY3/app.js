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
    }else if(req.url == '/about'){
        res.end("about page")
    }else if(req.url == '/service'){
        res.end("service page")
    }else{
        res.end("page not error")
    }
})
server.listen(5000,()=>{
    console.log("server running 5000");    
})



