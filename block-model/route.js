function route(pathName,handle) {
    console.log("About to route a request for " + pathName);
    if ( typeof handle[pathName] == 'function' ) {
        return handle[pathName]();
    } else {
        console.log("No request route found for" + pathName);
        return "Hello ,there is a 404 request";
    }
}

exports.route=route;