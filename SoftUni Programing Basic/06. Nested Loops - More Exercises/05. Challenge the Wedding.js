function challengeTheWedding (input) {
   const menCount = Number(input[0]);
   const womenCount = Number(input[1]);
   const tableCount = Number(input[2]);
   let places = tableCount * 2;
   let couples = "";
   let isFull = false;
   
   for (let m =1; m <= menCount; m++){
       for (let w = 1; w <= womenCount; w++){
           couples += `(${m} <-> ${w}) `;
           places -= 2;
           
           if (places <= 0) {
               isFull = true;
               break;
           }
       }
       if(isFull) {
           break;
       }
   }

console.log(couples)

}
challengeTheWedding(['2','2','3'])