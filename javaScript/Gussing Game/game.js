let maximum=parseInt(prompt("Enter the maximum number"));
while(!maximum){
 maximum=parseInt(prompt("Enter the maximum number"));
}
const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum);
let guess= parseInt(prompt("enter first guess"));
let attempts=1;
while(parseInt(guess!==targetNum)){
    // q is use to quit game
    if(guess==='q') break;
    attempts++;
    if(guess>targetNum){
        guess=(prompt("too high! enter a new guess"));
    }
    else{
        guess=(prompt("too low! enter a new guess"));
    }
}
if(guess==='q'){
    console.log("OK,YOU QUIT");

}
else{
    console.log("congrats you win");
}
console.log(`you got it! it took you${attempts}guesses`);