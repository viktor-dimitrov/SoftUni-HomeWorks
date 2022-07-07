function dungeonestDark (input) {

  let newArray = input[0].split('|');
  let gameString = newArray.join(' ');
  let gameArray = gameString.split(' ');
  let health = 100;
  let money = 0;
  let monster = '';
  let room = 0;
  let index = 0;
  
  while (health > 0) {
    room++;
    if (index >= gameArray.length - 1) {
      break;
    }
    
    let command = gameArray[index];
    index++;
    let points = Number(gameArray[index]);
    index++;
    switch(command) {
      case'potion':health += points;
      if (health > 100) {
        points = (100 + points) - health;
        health = 100;
      }
          console.log(`You healed for ${points} hp.`);
          console.log(`Current health: ${health} hp.`); break;

      case'chest':money += points;
          console.log(`You found ${points} coins.`); break;

      default:
        monster = command;
        health -= points;

        if (health < 1) {
          continue;
        }

        console.log(`You slayed ${monster}.`)
        break;
    }
    command = gameArray[index];
  }
 
  if (health > 0) {
    console.log("You've made it!");
    console.log(`Coins: ${money}`);
    console.log(`Health: ${health}`);
  } else {
    console.log(`You died! Killed by ${monster}.`);
    console.log(`Best room: ${room}`);
  }
}
// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])



dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])