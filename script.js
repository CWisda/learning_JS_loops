// Lets write a for loop 


/**
 * 1. Initialization
 * 2. Conditional
 * 3. Variable Change (increment)

 */

for (let bottles = 100; bottles > 0; bottles--) { 
   console.log(
     `${bottles} bottles of milk on the wall, ${bottles} bottles of milk on the wall`
   );
   console.log("Take one down, pass it around");
   console.log(`${bottles - 1} bottles of milk on the wall...`);
}

console.log("Aww, no more bottles");


// new for loop

let wallet = 100.00;
let friendCount = 8; 
const admission = 5.00;

for (let i = 0; i < friendCount; i++) {
    wallet = wallet - admission;
}

console.log(wallet);


// while loop 

i = 0; 
while (i < friendCount) {
    wallet = wallet - admission;
    //Make sure you still change the variable
    i++; 
}

console.log(wallet);


// scope  - where does your variable live? 

const x = 10;

if (x > 5) {
    console.log("hello");
    let y = 11;
}
    console.log(y);