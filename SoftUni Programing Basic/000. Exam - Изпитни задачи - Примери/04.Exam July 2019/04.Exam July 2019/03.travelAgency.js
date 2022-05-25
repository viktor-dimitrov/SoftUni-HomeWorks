function travelAgency (input) {
    const cityName = input[0];
    const typeVacation = input[1];
    const vip = input[2];
    const days = Number(input[3]);
    let dayPrice = 0;
    switch(cityName){
        case "Bansko":
        case "Borovets": 
        switch (typeVacation) {
            case "noEquipment": dayPrice += 80;
            if (vip == "yes"){
                dayPrice *= 0.95;
            } break;
            case "withEquipment": dayPrice += 100; 
            if (vip == "yes") {
                dayPrice *= 0.9;
            } break;
        }
        case "Varna":
        case "Burgas":
            switch(typeVacation) {
                case "noBreakfast": dayPrice += 100;
                if(vip == "yes") {
                    dayPrice *= 0.93;
                } break;
                case "withBreakfast": dayPrice += 130;
                if(vip == "yes"){
                    dayPrice *= 0.88;
                }break;
            }        
    }
    let totalPrice = days * dayPrice;
    if (days > 7) {
        totalPrice -= dayPrice;
    }

    if (days < 1) {
        console.log (`Days must be positive number!`);
    } else if (cityName == "Bansko" || cityName == "Borovets") {
        if ( typeVacation == "noEquipment" || typeVacation == "withEquipment") {
            console.log (`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        } else {
         console.log (`Invalid input!`);
        }
    } else if (cityName == "Burgas" || cityName == "Varna") {
        if (typeVacation == "noBreakfast" || typeVacation == "whithBreakfast") {
            console.log (`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        } else {
            console.log (`Invalid input!`);
        }
    }   else {
        console.log (`Invalid input!`);
    }   
}
travelAgency (["Varnaa",
    "withEquipment",
    "no",
    9])