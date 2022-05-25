function sumNumbers(input) {
  let index = 0;
  let total = Number(input[index]);
  index++;
  let sum = 0;

  while (sum < total) {
    let num = Number(input[index]);
    sum += num;
    index++;
  }
  console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);
