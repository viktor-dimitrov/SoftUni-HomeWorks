function courieerExpress (input) {
    const weight = Number(input[0]);
    const serviceType = input[1];
    const distance = Number(input[2]);
    const under1 = 0.03;
    const from1To10 = 0.05;
    const from10To40 = 0.10;
    const from40To90 = 0.15;
    const from90To150 = 0.20;
    let price = 0;

    

           if (weight < 1) {
                 price = under1;
             } else if (weight >=1 && weight < 10) {
                 price = from1To10;
             } else if (weight >= 10 && weight < 40) {
                 price = from10To40;
             } else if (weight >= 40 && weight < 90) {
                 price = from40To90;
             } else if (weight >= 90 && weight < 150) {
                 price = from90To150
             }
             let overCost = 0;
            

         if (serviceType === "express") {
            if (weight < 1) {
                overCost = under1 * 0.8 * weight * distance;
            } else if (weight >=1 && weight < 10) {
                overCost = from1To10 * 0.4 * weight * distance;
            } else if (weight >= 10 && weight < 40) {
                overCost = (from10To40 * 0.05) * weight * distance;
            } else if (weight >= 40 && weight < 90) {
                overCost = (from40To90 * 0.02) * weight * distance;
            } else if (weight >= 90 && weight < 150) {
                overCost = (from90To150 * 0.01) * weight * distance;
            }
         }   
         let cost = (price * distance);
         let expresCost =cost + overCost;
    

         if (serviceType === "express") {
             console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${expresCost.toFixed(2)} lv.`)
         } else {
            console.log (`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${cost.toFixed(2)} lv.`)
         }
}

courieerExpress(["87",
"express",
"130"])
