function makeADictionary(inputJSON) {
   
    let copyArray = inputJSON.slice();
    let newObject = {};   

    for (let line of copyArray) {
        let myObject = JSON.parse(line);
        let term = Object.keys(myObject)[0];
        let definition = Object.values(myObject)[0];
        newObject[term] = definition;
    }
    let sortedObject = Object.keys(newObject).sort((a,b)=> a.localeCompare(b))

  for (let el of sortedObject) {
    console.log(`Term: ${el} => Definition: ${newObject[el]}`);
  } 
}

makeADictionary([
    '{"xoffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"wfwf wefwef."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Tape":"srfdg."}'
    ])