/*
// While loop
// 1 to 10 
let count=0;
while(count<10){
    count++;
console.log(count);
}
*/
// EXAMPLE #1
/*
const Secret ="BabyHippo";
let guess=prompt("enter th secret code");
while(guess!==Secret){
    guess=prompt("enter th secret code");
}
console.log("congrats you got the secret");
*/
//EXAMPLE #2
let input=prompt("hey, say something");
while(true){
    input=prompt(input);
    if(input==="stop")   break;
}
console.log("OK YOU WIN");