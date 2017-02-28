var exec = require("child_process").exec;

function start(response) {
    console.log("hi, I'm the start function!");
    exec("dir",{timeout:10,maxBuffer:1024*20000},
    	function(error, stdout, stderr) {
    		console.log("hi, I'm the exec!");
    		response.writeHead(200, {"Content-Type":"text/plain"});
    		response.write(stdout);
    		response.end();
    	});
}

function upload(response) {
    console.log("Hi, I'm the upload function!");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello upload");
    response.end();
}

exports.start = start;
exports.upload = upload;