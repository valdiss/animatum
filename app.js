let mouseX;
let mouseY;
let view = document.getElementById('view');
let map = document.getElementById('map');
let lapin = document.getElementById('rabbit');;
let ratioW;
let ratioH;
let backgrounds = ["svg_decors/space.png", "svg_decors/forest.png"];
let table_background_espace = [{
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

let table_background_foret = [{
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

let refreshPage= function () {
    window.location.reload();
};

let ready = function() {
    score = 0;
    position_obj = table_background_espace[Math.floor(Math.random() * 6)];

    ratioW = (map.offsetWidth - view.offsetWidth) / view.offsetWidth;
    ratioH = (map.offsetHeight - view.offsetHeight) / view.offsetHeight;

    view.addEventListener("mousemove", updateMouse);
    view.addEventListener("mousemove", function() {
        scrollBackground(map, ratioW, ratioH, position_obj);
    });

    document.getElementById('mute').addEventListener("click", function() {
        document.getElementById('space').pause();
        document.getElementById('sound').classList.toggle('visible');
        document.getElementById('mute').classList.toggle('visible');
    });

    document.getElementById('sound').addEventListener("click", function() {
        document.getElementById('space').play();
        document.getElementById('sound').classList.toggle('visible');
        document.getElementById('mute').classList.toggle('visible');
    });

    lapin.addEventListener("click", function() {

        timeLeft+=5;
        score+= 10;
        map.src = backgrounds[Math.floor(Math.random() * 2)];
        if (map.src.match("space")) {
            position_obj = table_background_espace[Math.floor(Math.random() * 6)];
        } else if (map.src.match("forest")) {
            position_obj = table_background_foret[Math.floor(Math.random() * 6)];
        }
    });

};

document.addEventListener("DOMContentLoaded", ready);
