function start() {
    console.log("hi, I'm the start function!");
    
    function sleep(sleepMills) {
    	var startTime = new Date().getTime();
    	while ( new Date().getTime() < startTime + sleepMills ) {
    		console.log("I am sleep, don't wake up me!");
    	}
    }
    
    sleep(10000);
    
    return "Hello start";
}

function upload() {
    console.log("Hi, I'm the upload function!");
    return "Hello upload";
}

exports.start = start;
exports.upload = upload;