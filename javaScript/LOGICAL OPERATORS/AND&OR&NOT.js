 /*
 const password =prompt("enter your password");
if(password.length>=6 && password.indexOf(" ")===-1){
    console.log("valid password");
}
else{
    console.log(" incorrect format");
} 
*/
/*
// 0-5f ree
// 5-10 $10
// 10-65  $20
// 65+ free
const age =prompt("enter the age");
if(( age>=0 && age<5)||age>65){
  console.log(" FREE ");
}
else if( age>=5 && age<10){
    console.log("$10");
}
else if(age>=10 && age<65){
    console.log(" $20 ");
}
*/
/*
const firstName =prompt("enter your firstname");
if(!firstName){
firstName=prompt("TRY AGAIN");
}
*/
const age=prompt("enter age");
if(!(age>=0 && age<5||age>65)){
    console.log("you are not a baby or senior ");
  }