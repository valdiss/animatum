let mouseX;
let mouseY;
let img;
let ratioW;
let ratioH;
let viewW;
let viewH;
let map;

let updateMouse = function()
{
    mouseX = event.clientX;
    mouseY = event.clientY;
}
let scrollBackground = function(img, ratioW, ratioH)
{
  map.style.transform = "translateX("-mouseX*ratioW + "px)";
  map.style.transform = "translateY("-mouseY*ratioH + "px)";
}

let ready = function()
{
    viewW = document.getElementById('view').offsetWidth;
    console.log("hauteur de la div au centre" + viewW)
    viewH = document.getElementById('view').offsetHeight;
    console.log("la largeur de la div au centre" + viewH)
    map = document.getElementById('map');
    ratioW = (map.offsetWidth - viewW)/viewW;
    ratioH = (map.offsetHeight - viewW)/viewW;

    mouseX = viewW/2;
    mouseY = viewH/2;

    document.addEventListener("mousemove", updateMouse);
    document.addEventListener("mousemove", function()
            {
                scrollBackground(img, ratioW, ratioH);
            });
}
document.addEventListener("DOMContentLoaded", ready);
