function bills(input) {
  index = 0;
  let monthsCount = Number(input[index])
  index++;
  let electricity = 0;
  let water = 0;
  let internet = 0;
  
  for (let i = 0; i < monthsCount; i++) {
      let num = Number (input[index]);
      index++;
      electricity += num;
      water += 20;
      internet += 15;
  }
  let other = (electricity + water + internet) * 1.2;
  let average = (electricity + water + internet + other) / monthsCount; 
  console.log (`Electricity: ${electricity.toFixed(2)} lv`)
  console.log (`Water: ${water.toFixed(2)} lv`)
  console.log (`Internet: ${internet.toFixed(2)} lv`)
  console.log (`Other: ${other.toFixed(2)} lv`)
  console.log (`Average: ${average.toFixed(2)} lv`)
}
bills([5, 68.63, 89.25, 132.53, 93.53, 63.22]);
