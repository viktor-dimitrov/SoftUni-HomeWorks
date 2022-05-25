function lettersCombination (input) {

    let firstLetter = input[0];
    let finalLetter = input[1];
    let nonGrata = input[2];
    let passCounter = 0;
    let allPasses = "";
    
    for (let i = firstLetter.charCodeAt(0);i <= finalLetter.charCodeAt(0); i++ ){
        let letterA = String.fromCharCode(i);
        
      for (let j = firstLetter.charCodeAt(0);j <= finalLetter.charCodeAt(0); j++ ) {
        let letterB = String.fromCharCode(j);
      
          for (let k = firstLetter.charCodeAt(0);k <= finalLetter.charCodeAt(0); k++ ) {
            let letterC = String.fromCharCode(k);
            
            if (letterA != nonGrata && letterB != nonGrata && letterC != nonGrata) {
                allPasses += `${letterA}${letterB}${letterC} `;
                passCounter++;
            }
          }
      }
    }
    console.log(`${allPasses}${passCounter}`);

} 
lettersCombination(["f","k","h"])