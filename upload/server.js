var http = require("http");
var url = require("url");
var queryString = require("querystring");

function start(route, handle) {

    function onRequest(req, res) {
        var postData = "";
        var requestPathName = url.parse(req.url).pathname;
        var requestPathNameQuery = queryString.parse(req.url)["foo"];
        
        req.setEncoding("utf8");
        req.addListener("data", function(postDataChunk) {
        	postData += postDataChunk;
        	console.log("Received POST data chunk" + postDataChunk);
        });
        
        req.addListener("end", function(){
            route(requestPathName, handle,  res, postData);
        });
    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start = start;