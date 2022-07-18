function extractFile (inputString) {
    let file = inputString.split('\\').pop();
    let fileName = file.slice(0, file.lastIndexOf('.'));
    let extension = file.slice(file.lastIndexOf('.') + 1);
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}
extractFile ('C:\\Internal\\training-internal\\Temp.ate.pptx')
