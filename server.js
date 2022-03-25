const http = require("http");

const server = http.createServer((req,res)=>{
    // res.end("Server is responding. Welcome to Server of Appointment Sysytem");
    console.log(req.url);
    if(req.url == "/"){
        // res.writeHead(200,{"content_type" : "text"})
        res.end("<h3>Hey Welcome to Appoinment Sysytem, You can set Appointment.</h3>");
    }
    else if(req.url=="/about"){
        // res.writeHead(200,{"content_type" : "text"})
        res.end("<h3>This is a website from where you can set appointment for meeting Pro V.C. of Dsvv</h3>");
    }
    else if(req.url=="/dev"){
        // res.writeHead(200,{"content_type" : "text"})
        res.end("<h3>This Web App is building by Kumar Sutikshan, Shashwat Harsh, Sweta Chaudary.</h3>");
    }
    else{
        res.writeHead(404,{"content_type" : "text"})
        res.end("<h1>This Page is under Development.</h1>");
    }
});
server.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port no 5002.");
    console.log("http://127.0.0.1:8000")
});
