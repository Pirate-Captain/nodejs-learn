var http = require("http");
var url = require("url");
var queryString = require("querystring");

function start(route, handle) {

    function onRequest(req, res) {
        var requestPathName = url.parse(req.url).pathname;
        var requestPathNameQuery = queryString.parse(req.url)["foo"];
        //console.log("request path Name : " + requestPathName);
        //console.log("requestPathNameQuery:" + requestPathNameQuery);
        
        var result = route(requestPathName, handle);
        
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write(result);
        res.end();
    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start = start;