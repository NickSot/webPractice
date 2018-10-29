#!usr/bin/nodejs

express = require("express");

app = express();

var handleRequest = (request, response) => {
    //response.send("Hello");
    response.sendFile("/home/nicksot/Desktop/web/testWeb/index.html");
}

app.get('/', handleRequest);

app.get('/laino', function (request, response) {
    response.sendFile("/home/nicksot/Desktop/web/testWeb/killself/killself.html");   
});

app.listen(4000);