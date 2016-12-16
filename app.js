
let mouseX;
let mouseY;
let view = document.getElementById("view");
let map = document.getElementById("map");
let ratioW;
let ratioH;
let rabbit = document.getElementById('rabbit');



let updateMouse = function()
{
    mouseX = (event.clientX) - (document.getElementById('mask_left').offsetWidth);
    mouseY = event.clientY;
    console.log('a');
}
let scrollBackground = function(map, ratioW, ratioH)
{
    map.style["top"] = -mouseY*ratioH + "px";
    map.style["left"] = -mouseX*ratioW + "px";
    console.log('b');

    rabbit.style["top"] = -mouseY*ratioH + "px";
    rabbit.style["left"] = -mouseX*ratioW + "px";

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
                console.log('d');
            });
    rabbit.addEventListener("click", function(){
        alert ('Bien joué gros!');
        console.log('e');
    });
    console.log('c');

}
document.addEventListener("DOMContentLoaded", ready);
