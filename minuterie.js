"use strict"

let timeLeft = 30;
let timer = document.getElementById("timer");
let popup = document.getElementById('score');
let cover = document.getElementById('cover');

let countdown = function() {

    if (timeLeft < 0) {
        clearTimeout(timerId);
        let paragraph = document.getElementById('result');
        if (score == 0){
          paragraph.innerHTML = "Tu n'as pas trouvé un seul lapin... T'es mauvais Jack!";
        }
        else if (score < 50) {
          paragraph.innerHTML = "Tu n'as fait que "+ score + " points, c'est vraiment pas terrible! Tu devrais améliorer ce score!";
        }
        else {
          paragraph.innerHTML = "Tu as fait " + score + " points, bien joué!";
        }

        document.querySelector('h1').appendChild(paragraph);
        cover.classList.add("visible");
        popup.classList.add("visible");
        document.getElementById('down').play();
    } else {
        timer.innerHTML = timeLeft;
        timeLeft--;
    }
};
let timerId = setInterval(countdown, 1000);
document.addEventListener("DOMContentLoaded", countdown());
