let mouseX;
let mouseY;
let img;
let ratioW;
let ratioH;
let viewW;
let viewH;
let map;
let view;

let updateMouse = function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log("e");

}
let scrollBackground = function(img, ratioW, ratioH) {
    map.style["top"] = -mouseY * ratioH + "px";
    map.style["left"] = -mouseX * ratioW + "px";

}

let ready = function() {
    view = document.getElementById('view');
    viewW = view.offsetWidth;
    viewH = view.offsetHeight;
    map = document.getElementById('map');
    mouseX = viewW / 2;
    mouseY = viewH / 2;
    ratioW = (map.offsetWidth - viewW) / viewW;
    ratioH = (map.offsetHeight - viewH) / viewH;



    view.addEventListener("mousemove", updateMouse);
    view.addEventListener("mousemove", function() {
        scrollBackground(img, ratioW, ratioH);
    });
}

document.addEventListener("DOMContentLoaded", ready);
