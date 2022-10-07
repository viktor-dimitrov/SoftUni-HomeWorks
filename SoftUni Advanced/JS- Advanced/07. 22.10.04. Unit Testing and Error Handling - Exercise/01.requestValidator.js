function requestValidator (inputObj) {

    let validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0" ];
    let invalidCharsInMessage = ['<', '>', "\\","&", "'",'"']
    let pattern = /^[\w.]+$/g;

    if (inputObj.hasOwnProperty("method")) {
        if (!validMethods.includes(inputObj["method"])) {
            throw new Error(`Invalid request header: Invalid Method`);
        }
    } else {
        throw new Error(`Invalid request header: Invalid Method`);
    };

    if (inputObj.hasOwnProperty("uri")) {
        if(!pattern.test(inputObj.uri) || inputObj.uri.length < 1) {
            if (inputObj.uri != "*") {
                throw new Error(`Invalid request header: Invalid URI`);
            } 
        }
    } else {
        throw new Error(`Invalid request header: Invalid URI`);
    };

    if (!inputObj.hasOwnProperty("version") || !validVersions.includes(inputObj.version) ) {
            throw new Error(`Invalid request header: Invalid Version`);
    };
    
    if (inputObj.hasOwnProperty('message')) {
        inputObj.message.split('').forEach(element => {
            if (invalidCharsInMessage.includes(element)) {
                throw new Error(`Invalid request header: Invalid Message`);
            }
        });
    } else {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    


return inputObj
}
requestValidator( {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
})