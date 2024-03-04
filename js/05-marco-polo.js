for (let num=1; num <= 100 ; num++) {
    if(num % 3 === 0) {
        console.log(`Marco!`)
    } 

    if(num % 5 === 0) {
        console.log(`Polo!`)
    } 

    if(num % 3 === 0 && num % 5 === 0) {
        console.log(`Marco! Polo!`)
    } 
    
}