function weddingSeats (input) {
    let firstSector = "A";
    let endSector = input[0];
    let firstSectorRows = Number(input[1]);
    let oddRowSeats = Number(input[2]) + 97;
    let evenRowSeats = oddRowSeats + 2;
    let place = 97;
    let placeCounter = 0;
    for (let sector = firstSector.charCodeAt(0); sector <= endSector.charCodeAt(0); sector ++) {
        let sectorName = (String.fromCharCode(sector))
        
        for (let row = 1; row <= firstSectorRows; row++) {
            
            if (row % 2 != 0) {
                for (place = 97; place < oddRowSeats; place++) {
                    console.log(`${sectorName}${row}${String.fromCharCode(place)}`)
                    placeCounter++;
                } 

            } else {
                for (place = 97; place < evenRowSeats; place++) {
                    console.log(`${sectorName}${row}${String.fromCharCode(place)}`)
                    placeCounter++;
                }    
            }
        }
        firstSectorRows++;
    }
    console.log(placeCounter)
}
weddingSeats (["B", "3", "2"])