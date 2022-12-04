const btn =document.querySelector('#v2');
btn.onclick=function(){
    console.log("you clicked me");
    console.log("i hope it worked");
}
function scream(){
    console.log("aaaaaaahhhhhhh");
    console.log("stop touching me");

}
btn.onmouseenter=scream;


document.querySelector('h1').onclick=()=>{
    alert('you clicked h1 ');
}

// addEventListener
const btn3=document.querySelector('#v3');
btn3.addEventListener('click',function(){
    alert("clicked");
})
function twist(){
 console.log("twist");
}

function shout(){
    console.log("shout");
   }
   const tasButton=document.querySelector('#tas');
     
   // when we use the below method`1 we only get latest wriiten one
    //tasButton.onclick=twist;
    //tasButton.onclick=shout;

    //but when we use this method we get both
    tasButton.addEventListener('click',twist,{once:true});
    //{once:true} this make it run once only
    tasButton.addEventListener('click',shout);