/*special Hotline Miami*/
let hm = document.getElementById('hotline');
let shot = document.getElementById('shot');
let kill = document.getElementById('killingspree');
let monsterkill = document.getElementById('monsterkill');
let megakill = document.getElementById('megakill');
let ultrakill = document.getElementById('ultrakill');
let unstoppable = document.getElementById('unstoppable');
let godlike = document.getElementById('godlike');
/**********************/
let mouseX;
let mouseY;
let view = document.getElementById('view');
let map = document.getElementById('map');
let lapin = document.getElementById('rabbit');
let bonus = document.getElementById('bonus');
let rejouer = document.getElementById('rejouer');
let ratioW;
let ratioH;

/**************************************Timer*/
let timeLeft = 30;
let timer = document.getElementById("timer");
let popup = document.getElementById('score');
let cover = document.getElementById('cover');
/*******************************************/

let backgrounds = ["svg_decors/space.png", "svg_decors/forest.png", "svg_decors/polar.png"];
let table_background_space = [{
    top: 700,
    left: 1250,
    width: 40
}, {
    top: 1175,
    left: 3615,
    width: 30
}, {
    top: 2560,
    left: 700,
    width: 40
}, {
    top: 710,
    left: 3160,
    width: 30
}, {
    top: 2480,
    left: 1180,
    width: 30
}, {
    top: 2540,
    left: 3850,
    width: 40
}];

let table_background_forest = [{
    top: 1780,
    left: 1620,
    width: 30
}, {
    top: 1920,
    left: 2750,
    width: 40
}, {
    top: 2600,
    left: 700,
    width: 50
}, {
    top: 1720,
    left: 2490,
    width: 25
}, {
    top: 1620,
    left: 620,
    width: 25
}, {
    top: 1700,
    left: 3800,
    width: 40
}];

let table_background_polar = [{
    top: 396,
    left: 1385,
    width: 40
}, {
    top: 416,
    left: 313,
    width: 40
}, {
    top: 2110,
    left: 547,
    width: 40
}, {
    top: 2220,
    left: 1288,
    width: 40
}, {
    top: 675,
    left: 2450,
    width: 40
}];

let position_obj;
let score;

let updateMouse = function(e) {
    mouseX = (e.clientX) - (document.getElementById('mask_left').offsetWidth);
    mouseY = e.clientY;
};

let scrollBackground = function(map, ratioW, ratioH, position_obj) {
    map.style["top"] = -mouseY * ratioH + "px";
    map.style["left"] = -mouseX * ratioW + "px";
    lapin.style["top"] = -mouseY * ratioH + position_obj.top + "px";
    lapin.style["left"] = -mouseX * ratioW + position_obj.left + "px";
    lapin.style["width"] = position_obj.width + "px";
};

let countdown = function() {

    if (timeLeft < 0) {
        clearTimeout(timerId);
        let paragraph = document.getElementById('result');;
        if (score == 0){
          paragraph.innerHTML = "Tu n'as pas trouvé un seul lapin... T'es mauvais Jack!";
        }
        else if (score < 50) {
          paragraph.innerHTML = "Tu n'as fait que "+ score + " points, c'est vraiment pas terrible! Tu devrais améliorer ce score!";
        }
        else {
          paragraph.innerHTML = "Tu as fait " + score + " points, bien joué!";
        }

        cover.classList.add("visible");
        popup.classList.add("visible");
        document.getElementById('down').play();
    } else {
        timer.innerHTML = timeLeft;
        timeLeft--;
    }
};
let timerId = setInterval(countdown, 1000);

let ready = function() {
    countdown();
    /**************************************random first background*/
    map.src = backgrounds[Math.floor(Math.random() * 3)];
    if (map.src.match("space")) {
        position_obj = table_background_space[Math.floor(Math.random() * 6)];
    } else if (map.src.match("forest")) {
        position_obj = table_background_forest[Math.floor(Math.random() * 6)];
    } else if (map.src.match("polar")) {
        position_obj = table_background_polar[Math.floor(Math.random() * 5)];
    }
    /**************************************/

    score = 0;

    ratioW = (map.offsetWidth - view.offsetWidth) / view.offsetWidth;
    ratioH = (map.offsetHeight - view.offsetHeight) / view.offsetHeight;

    view.addEventListener("mousemove", updateMouse);
    view.addEventListener("mousemove", function() {
        scrollBackground(map, ratioW, ratioH, position_obj);
    });

    /*****************************************Play/Pause button*/
    document.getElementById('mute').addEventListener("click", function() {
        document.getElementById('hotline').pause();
        document.getElementById('sound').classList.toggle('visible');
        document.getElementById('mute').classList.toggle('visible');
    });

    document.getElementById('sound').addEventListener("click", function() {
        document.getElementById('hotline').play();
        document.getElementById('sound').classList.toggle('visible');
        document.getElementById('mute').classList.toggle('visible');
    });
    /***********************************************************/

    lapin.addEventListener("click", function() {
        /******************special Hotline Miami*/
        shot.play();
        lapin.src = "svg_personnages/rabbit_blood.png";
        /***************************************/
        setTimeout(function() {
            lapin.style.display = "none";
        }, 200);
        bonus.style.display = "block";
        setTimeout(function() {
            bonus.style.display = "none";
            lapin.style.display = "block";
            lapin.src = "svg_personnages/rabbit.png";
        }, 500);

        timeLeft += 5;
        score += 10;

        /*******************special Hotline Miami*/
        if (score == 50) {
            kill.play();
        } else if (score == 100) {
            monsterkill.play();
        } else if (score == 150) {
            megakill.play();
        } else if (score == 200) {
            ultrakill.play();
        } else if (score == 300) {
            unstoppable.play();
        } else if (score == 500) {
            godlike.play();
        }
        /****************************************/

        map.src = backgrounds[Math.floor(Math.random() * 3)];
        if (map.src.match("space")) {
            position_obj = table_background_space[Math.floor(Math.random() * 6)];
        } else if (map.src.match("forest")) {
            position_obj = table_background_forest[Math.floor(Math.random() * 6)];
        } else if (map.src.match("polar")) {
            position_obj = table_background_polar[Math.floor(Math.random() * 5)];
        }

    });

    rejouer.addEventListener("click", function(){
        cover.classList.remove("visible");
        popup.classList.remove("visible");
        score = 0;
        timeLeft = 30;
        countdown();
        timerId = setInterval(countdown, 1000);
    });

};

document.addEventListener("DOMContentLoaded", ready);
