const button=document.querySelector('button');
const h1=document.querySelector('h1');

button.addEventListener('click',function(){
    const newColor=makeRandColor()
    document.body.style.backgroundColor=newColor;
    h1.innerText=newColor;
})
const makeRandColor=() =>{
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    const total = r + g + b;
    if(total < 300){
        h1.style.color = "white";
    } else{
        h1.style.color = "black";
    }
    // here 256 is because it give value 0-255
    //floor gives 0.999 as a 0
    return `rgb(${r},${g},${b})`;

}
