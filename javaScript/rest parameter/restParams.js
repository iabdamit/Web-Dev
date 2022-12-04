/*
function sum(){
    return arguments.reduce((total,el)=> total+el)
}
*/
function sum(...nums){
    return nums.reduce((total,el)=> total+el)
}

function raceResults(gold,silver,...everyOneElse){
    console.log(`gold medal goes to:${gold}`)
    console.log(`silver medal goes to:${silver}`)
    console.log(`everyone else:${everyOneElse}`)
}