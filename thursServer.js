// Instructions
//
//
//
//
// Using the previous example as a guide, create an app that has two web servers.
//
//     One that listens on port 7000 and one that listens on port 7500.
//
// The one listening on port 7000 will always tell the user something good about themselves.
//
//     The one listening on 7500 will always tell the user something bad about themselves.
//
//     Make sure you create a Github repo and commit this code!



// Dependencies
var http = require("http");
var fs = require("fs");
const PORT = 7000;
const PORTTWO = 7500;

const server = http.createServer(handleRequest);

// function displayRoot(url, req, res) {
//     console.log(url);
//     var myHTML = "<html>" +
//         "<body><h1>Home Page</h1>" +
//         "<a href='/portfolio'><Portfolio</a>" +
//         "</body></html>";
// }

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    
    var path = req.url;
    switch (path) {
        case "/":
            return displayRoot(path, req, res);

        case "/portfolio":
            return displayPortfolio(path, req, res);

        default:
            return display404(path, req, res);
    }

}


function displayRoot(url, req, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/index.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayPortfolio(url, req, res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/indexTwo.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

}

function display404(url,req,res) {
    console.log("Danger Will Robinson, Danger!");
}



server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%S", PORT);


});

const serverTwo = http.createServer(handleRequestTwo);

serverTwo.listen(PORTTWO, function () {
    console.log("Server listening on: http://localhost:%S", PORTTWO);

});

function handleRequestTwo(request, response) {
    response.end("Hello thar, I be a serva! " + request.url);

}






































































