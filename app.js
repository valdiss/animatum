
let mouseX;
let mouseY;
let view = document.getElementById("view");
let map = document.getElementById("map");
let ratioW;
let ratioH;
let updateMouse = function()
{
    mouseX = (event.clientX) - (document.getElementById('mask_left').offsetWidth);
    mouseY = event.clientY;
}
let scrollBackground = function(map, ratioW, ratioH)
{
    map.style["top"] = -mouseY*ratioH + "px";
    map.style["left"] = -mouseX*ratioW + "px";
}
let ready = function()
{
    mouseX = view.offsetWidth/2;
    mouseY = view.offsetHeight/2;
    ratioW = (map.offsetWidth - view.offsetWidth)/view.offsetWidth;
    ratioH = (map.offsetHeight - view.offsetHeight)/view.offsetHeight;
    view.addEventListener("mousemove", updateMouse);
    view.addEventListener("mousemove", function()
            {
                scrollBackground(map, ratioW, ratioH);
            });
}
document.addEventListener("DOMContentLoaded", ready);
