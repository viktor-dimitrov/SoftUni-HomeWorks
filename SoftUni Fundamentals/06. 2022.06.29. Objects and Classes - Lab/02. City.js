function city(objectInput) {

    for (let prop of Object.keys(objectInput)) {
        let key = prop;
        let value = objectInput[key];
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})