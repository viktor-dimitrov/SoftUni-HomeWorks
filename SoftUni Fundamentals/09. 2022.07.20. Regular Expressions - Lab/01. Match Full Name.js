function matchFullNames (inputString) {
    let pattern = /\b[A-Z]{1}[a-z]{1,} [A-Z]{1}[a-z]{1,}/g;
    let namesArr = [];
    let match = pattern.exec(inputString);

    while (match != null) {
       namesArr.push(match)
        match = pattern.exec(inputString);
    }
   
    console.log(namesArr.join(' '));
}
matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
)