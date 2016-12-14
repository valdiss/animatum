let mouseX;
let mouseY;
let img;
let ratioW;
let ratioH;

let updateMouse = function()
{
    mouseX = event.clientX;
    mouseY = event.clientY;
}
let scrollBackground = function(img, ratioW, ratioH)
{
    img.style["top"] = -mouseY*ratioH + "px";
    img.style["left"] = -mouseX*ratioW + "px";
    lapin.style["top"] = -mouseY*ratioH + 700 +"px";
    lapin.style["left"] = -mouseX*ratioW + 1250 + "px";

}

let ready = function()
{
    lapin =document.getElementById('rabbit')
    img = document.getElementById("image");
    ratioW = (img.offsetWidth - window.innerWidth)/window.innerWidth;
    ratioH = (img.offsetHeight - window.innerHeight)/window.innerHeight;

    document.addEventListener("mousemove", updateMouse);
    document.addEventListener("mousemove", function()
            {
                scrollBackground(img, ratioW, ratioH);
            });
    lapin.addEventListener("click", function(){
        alert ('Bien joué gros!');
    });
}
document.addEventListener("DOMContentLoaded", ready);
