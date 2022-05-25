function equalPairs(input) {
  let pairsCount = Number(input[0])
  let index = 1;
 

  for (let i = 1; i<= pairsCount; i++) {
    let a = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
   
    console.log(a)
    console.log(b)
    

  }



}
equalPairs([3,
1,
2,
0,
3,
4,
-1
  ])
