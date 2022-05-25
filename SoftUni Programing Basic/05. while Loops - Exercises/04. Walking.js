function walking(input) {
  let target = 10000;
  let index = 0;
  let command = input[index];
  index++;

  while (target >= 0) {
    if (command == "Going home") {
      command = input[index];
      let finalSteps = Number(command);
      target -= finalSteps;
      break;
    } else {
      let steps = Number(command);
      target -= steps;

      command = input[index];
      index++;
    }
  }
  let difference = Math.abs(target);
  if (target > 0) {
    console.log(`${difference} more steps to reach goal.`);
  } else {
    console.log("Goal reached! Good job!");
    console.log(`${difference} steps over the goal!`);
  }
}
walking([1500,
3000,
250,
1548,
2000,
`Going home`,
2000])