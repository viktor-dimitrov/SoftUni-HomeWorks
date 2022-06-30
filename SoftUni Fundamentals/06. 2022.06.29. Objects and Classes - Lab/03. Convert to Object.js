function convertToObject(jsonString) {
    let convertedObject = JSON.parse(jsonString);

    for (let prop of Object.keys(convertedObject)) {
        let value = convertedObject[prop]
        console.log(`${prop}: ${value}`)
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')