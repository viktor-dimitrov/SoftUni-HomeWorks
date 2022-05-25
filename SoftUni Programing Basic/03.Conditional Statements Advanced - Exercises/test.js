function  usdtobgn(input) { // 22
    let town = input[0];
    let volume = Number(input[1]); 
     
    if (town === `Sofia`) {
      if(0 <= volume && volume <=500){
        let sum = volume*0.05;
        console.log(sum.toFixed(2))
      } else if (500 < volume && volume <=1000){
        let sum = volume*0.07;
        console.log(sum.toFixed(2))
      } else if (1000 < volume && volume <=10000){
        let sum = volume*0.08;
        console.log(sum.toFixed(2))
      } else if (volume > 10000){
        let sum = volume*0.12;
        console.log(sum.toFixed(2))
      }  else {
        console.log(`error`)
      }
    }
     
    if (town === `Varna`) {
      if(0 <= volume && volume <=500){
        let sum = volume*0.045;
        console.log(sum.toFixed(2))
      } else if (500 < volume && volume <=1000){
        let sum = volume*0.075;
        console.log(sum.toFixed(2))
      } else if (1000 < volume && volume <=10000){
        let sum = volume*0.1;
        console.log(sum.toFixed(2))
      } else if (volume > 10000){
        let sum = volume*0.13;
        console.log(sum.toFixed(2))
      }  else {
        console.log(`error`)
      }
    }
     
    if (town === `Plovdiv`) {
      if(0 <= volume && volume <=500){
        let sum = volume*0.055;
        console.log(sum.toFixed(2))
      } else if (500 < volume && volume <=1000){
        let sum = volume*0.08;
        console.log(sum.toFixed(2))
      } else if (1000 < volume && volume <=10000){
        let sum = volume*0.12;
        console.log(sum.toFixed(2))
      } else if (volume > 10000){
        let sum = volume*0.145;
        console.log(sum.toFixed(2)) 
        }  else {
            console.log(`error`)
          }
        }
      }
      usdtobgn(["May", "15"])