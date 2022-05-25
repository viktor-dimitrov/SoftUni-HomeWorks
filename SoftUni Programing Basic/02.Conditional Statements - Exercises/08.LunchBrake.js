function lunchBreak(input) {
  const movie = String(input[0]);
  const movieTime = Number (input[1]);
  const breakTime = Number(input[2]);
  const lunchTIme = (breakTime * 1) / 8;
  const lazyTime = (breakTime * 1) / 4;
  const remainingTime = Math.abs(breakTime - lunchTIme - lazyTime);
  const freeTime = Math.abs(remainingTime - movieTime)
  if (remainingTime >= movieTime) {
      
     console.log (`You have enough time to watch ${movie} and left with ${Math.ceil(freeTime)} minutes free time.`)
  } else {
      
      console.log (`You don't have enough time to watch ${movie}, you need ${Math.ceil(freeTime)} more minutes.`)
  }
}
lunchBreak (["Game of Thrones", "37", "0.786"]);
