function specialNumbers (n) {

    for (let i = 1; i <= n; i++) {
        let num = String(i);

        let sum = 0;
        
        for (let j = 0; j < num.length; j++){
            let digit = num[j];
            sum += Number(digit);
        }

       switch(sum) {
           case 5: ;
           case 7: ; 
           case 11: console.log (`${num} -> True`); break;
           default: console.log (`${num} -> False`); break;
       }
    }

}
specialNumbers (15)