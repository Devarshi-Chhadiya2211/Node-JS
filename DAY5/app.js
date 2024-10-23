const http = require("http");
const path = require("path");
const fs = require("fs");
let server = http.createServer((req, res) => {
  if (req.url == "/") {
    let a = fs.readFileSync("index.html",'utf-8')
    res.end(a);
  } else if (req.url == "/about") {
    res.end("About Us");
  } else if (req.url == "/service") {
    res.end("Services");
  } else {
    res.end("Page Not Found !!!!!");
  }
})

server.listen(4000, () => {
  console.log("server running at 4000");
})