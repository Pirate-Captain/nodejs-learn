function route(pathName,handle, response, postData) {
    console.log("About to route a request for " + pathName);
    if ( typeof handle[pathName] == 'function' ) {
        handle[pathName](response, postData);
    } else {
        console.log("No request route found for" + pathName);
    }
}

exports.route=route;