const http = require('http');

function codeHandel(req, resp){
    resp.write("<h1> Nameste World<h1>");
    resp.end();
}

http.createServer(codeHandel).listen(4200);