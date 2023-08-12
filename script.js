let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5 =document.getElementById("btn5");
let display1 =document.getElementById("display");
let background=document.body;
let animationName= "colorChangeAnimation";
let keyframes = `@keyframes ${animationName} {
    0% {
      background-color: ${Randomrbg().toString()};
    }
    25% {
      background-color: ${Randomrbg().toString()};
    }
    50% {
      background-color: ${Randomrbg().toString()};
    }
    75% {
      background-color: ${Randomrbg().toString()};
    }
    100% {
      background-color: ${Randomrbg().toString()};
    }
  }`
  const styleSheet=document.styleSheets[0];
  styleSheet.insertRule(keyframes,styleSheet.cssRules.length);

btn1.addEventListener("click",function(){
 display1.innerText=getRandomColor();
 background.style.backgroundColor=getRandomColor();
 
});
btn2.addEventListener("click",function(){
    display1.innerText=`${getRandomColor()} ${Rannum1()}%, ${getRandomColor()} ${Rannum2()}%`;
background.style.backgroundColor=` color-mix(in srgb, ${getRandomColor()} ${Rannum1()}%, ${getRandomColor()} ${Rannum2()}%)`;
display1.style.textAlign="center";
});
btn3.addEventListener("click", function () {
    display1.innerHTML = `${getRandomColor()}       ,${getRandomColor()}      ,${getRandomColor()}        ,${getRandomColor()},     ${getRandomColor()}`;
    display1.style.textAlign = "center";
    background.style.animation =`${animationName} 3s infinite`;
  });
  btn4.addEventListener("click",function () {
    display1.innerText=` ${Rannum1()}deg, ${getRandomColor()},${getRandomColor()}`;
    background.style.background=`linear-gradient(${Rannum1()}deg, ${getRandomColor()}, ${getRandomColor()})`;
    display1.style.textAlign="center";
  })
  btn5.addEventListener("click",function(){
    display1.innerText="#FFFFFF";
    background.style.background="white";
    background.style.backgroundColor="white";
    background.style.animation="none";
  })

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;}
function Rannum1(){
    const numone= Math.floor(1+Math.random()*100);
    return numone;
}
function Rannum2(){
    const numtwo= Math.floor(1+Math.random()*100);
    return numtwo;
}


function Randomrbg(){
    const r= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);  
    const color=`rgb(${r},${g},${b})`;
    return color;
}
