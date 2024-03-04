let coinFlip;
let userChoice = prompt("How many times do you want to run the loop");



for (let i = 0; i <userChoice; i++) {
    coinFlip = Math.round(Math.random());

    if (coinFlip < 1) {
        console.log("Heads");
      } else {
        console.log("Tails");
      }

}