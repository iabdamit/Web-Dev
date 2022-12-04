document.querySelector('button').addEventListener('click',function(evt){
  console.log(evt)
})
/*
const input=document.querySelector('input');
input.addEventListener('keydown',function(e){
    console.log(e.key);
    console.log(e.code);
})

input.addEventListener('keyup',function(e){
 console.log('KEYUP')
})
*/
window.addEventListener('keydown',function(e){
    switch(e.code){
        case 'ArrowUp':
            console.log("up");
            break;
        case 'ArrowDown':
            console.log("down");
            break;
        case 'ArrowLeft':
                console.log("left");
                break;
        case 'ArrowRight':
            console.log("right");
            break;
        default:
            console.log("ignored") ;   
    }
})