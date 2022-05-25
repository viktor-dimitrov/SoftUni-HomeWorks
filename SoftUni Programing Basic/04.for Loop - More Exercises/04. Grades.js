function grades(input) {
  index = 0;
  const studentsCount = Number(input[index]);
  index++;
  let exellent = 0;
  let good = 0;
  let middle = 0;
  let fail = 0;
  let totalRating = 0;

  for (let i = 0; i < studentsCount; i++) {
      let rate = Number(input[index]);
      index ++

      if (rate >= 5) {
          exellent++
          totalRating += rate;
      } else if (rate >= 4 && rate < 5) {
          good++;
          totalRating += rate;
      } else if (rate >= 3 && rate < 4) {
          middle++;
          totalRating += rate;
      } else if (rate < 3) {
          fail++;
          totalRating += rate;
      }
  }
  console.log (`Top students: ${(exellent / studentsCount * 100).toFixed(2)}%`)
  console.log (`Between 4.00 and 4.99: ${(good / studentsCount * 100).toFixed(2)}%`)
  console.log (`Between 3.00 and 3.99: ${(middle / studentsCount * 100).toFixed(2)}%`)
  console.log (`Fail: ${(fail / studentsCount * 100).toFixed(2)}%`)
  console.log (`Average: ${(totalRating / studentsCount).toFixed(2)}`) 
}
grades([10, 3.0, 2.99, 5.68, 3.01, 4, 4, 6.0, 4.5, 2.44, 5]);
