function browserHistory(inputObj, inputArray) {
    
    let index = 0;
    let command = inputArray[index];

    while(command){
        if (command === "Clear History and Cache") {
            inputObj['Open Tabs'] = [];
            inputObj['Recently Closed'] = [];
            inputObj['Browser Logs'] = [];
            index++;
            command = inputArray[index];
            continue;
        }

        let comArray = command.split(' ');
        let action = comArray[0];
        let page = comArray[1];

        switch(action) {
            case'Open':
            inputObj['Open Tabs'].push(page);
            inputObj['Browser Logs'].push(command);
            break;

            case'Close': if (inputObj['Open Tabs'].includes(page)) {
                inputObj['Open Tabs'].splice((inputObj['Open Tabs'].indexOf(page)), 1)
                inputObj['Recently Closed'].push(page);
                inputObj['Browser Logs'].push(command);
            }
            break;
        }

        index++
        command = inputArray[index]
    }
    console.log(inputObj['Browser Name']);
    console.log(`Open Tabs: ${inputObj['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${inputObj['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${inputObj['Browser Logs'].join(', ')}`);
    

  
}
browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

)