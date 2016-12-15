"use strict"

let timeLeft = 3;
let timer = document.getElementById("timer");
let timerId = setInterval(countdown, 1000);

function countdown(){
  if(timeLeft == 0){
    clearTimeout(timerId);
    alert("GAME OVER");
  }
  else{
    timer.innerHTML = timeLeft;
    timeLeft --;
  }
}

document.addEventListener("DOMContentLoaded", ready);
