let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    
    if (coinFlip < 1) {
        console.log("Heads");
        coinFlip==="heads";
    } else {
        console.log("Tails");
        coinFlip==="tails";
    }
    
} while (coinFlip==="tails");