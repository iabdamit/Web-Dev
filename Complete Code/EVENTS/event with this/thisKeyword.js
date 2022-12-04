const makeRandColor=() =>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;

}
const buttons=document.querySelectorAll('button');
for(let button of buttons){
    button.addEventListener('click',colorize);  
}
/*for(let button of buttons ){
    button.addEventListener('click',function(){
        button.style.backgroundColor=makeRandColor();// we can use 'this' insted of button here
        button.style.color=makeRandColor();// we can use 'this' insted of button here
    })
}*/
const h1s=document.querySelectorAll('h1');
for(let h1 of h1s){
    h1.addEventListener('click',colorize);  
}
/*for(let h1 of h1s){
  h1.addEventListener('click',function(){
    h1.style.backgroundColor=makeRandColor();// we can use 'this' insted of h1 here
    h1.style.color=makeRandColor();// we can use 'this' insted of h1 here
  })
}*/
function colorize(){
    this.style.backgroundColor=makeRandColor();
    this.style.color=makeRandColor();
}
