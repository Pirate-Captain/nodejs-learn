function route(pathName,handle) {
    console.log("About to route a request for " + pathName);
    if ( typeof handle[pathName] == 'function' ) {
        handle[pathName]();
    } else {
        console.log("No request route found for" + pathName);
    }
}

exports.route=route;