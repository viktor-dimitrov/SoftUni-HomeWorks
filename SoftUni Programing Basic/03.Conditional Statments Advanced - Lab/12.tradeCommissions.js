function tradeCommissions (input) {
    const town = input[0];
    const volume = Number (input[1]);
    let percent = 0;
    

    switch (town) {
        case "Sofia": if (volume >= 0 && volume <=500) {
            percent = 0.05;
        } else if (volume > 500 && volume <= 1000) {
            percent = 0.07;
        } else if (volume > 1000 && volume <= 10000) {
            percent = 0.08;
        } else if (volume > 10000) {
            percent = 0.12;
        } else {
            percent = 0;
        } break;

        case "Varna": if (volume >= 0 && volume <=500) {
            percent = 0.045;
        } else if (volume > 500 && volume <= 1000) {
            percent = 0.075;
        } else if (volume > 1000 && volume <= 10000) {
            percent = 0.1;
        } else if (volume > 10000){
            percent = 0.13;
        } else {
            percent = 0;
        } break;
        
        case "Plovdiv": if (volume >= 0 && volume <=500) {
            percent = 0.055;
        } else if (volume > 500 && volume <= 1000) {
            percent = 0.08;
        } else if (volume > 1000 && volume <= 10000) {
            percent = 0.12;
        } else if (volume > 10000){
            percent = 0.145;
        } else {
            percent = 0;
        } break;
        
    }

    const commission = percent * volume;

    if (town === "Sofia" && commission !== 0 || town === "Varna" && commission !== 0 || town === "Plovdiv" && commission !== 0 ) {
        console.log (commission.toFixed(2))
    } else {
        console.log ("error")
    }


    
    // Град    	0 ≤ s ≤ 500 	500 < s ≤ 1 000	    1 000 < s ≤ 10 000    	s > 10 000
    // Sofia	        5%	           7%                 	8%                	12%
    // Varna	      4.5%	            7.5%	             10%	              13%
    // Plovdiv     	5.5%	        8%               	12%	                 14.5%


}
tradeCommissions(["Varna", 3874.50])