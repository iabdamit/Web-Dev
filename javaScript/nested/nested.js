 const password=prompt("please enter a new password");
 // password must be 6+ characters
 if(password.length >= 6){
    //password cannot include space
if(password.indexOf(' ')=== -1){
    console.log("valid password ");
}
else{
    console.log("password cannot contain space")
}
}
else{
    console.log("PASSWORD TOO SHORT! MUST BE 6 0R 6+ CHARACTERS");
}
