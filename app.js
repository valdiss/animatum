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
}

let ready = function()
{
    mouseX = window.innerWidth/2;
    mouseY = window.innerHeight/2;

    img = document.getElementById("image");
    ratioW = (img.offsetWidth - window.innerWidth)/window.innerWidth;
    ratioH = (img.offsetHeight - window.innerHeight)/window.innerHeight;

    document.addEventListener("mousemove", updateMouse);
    document.addEventListener("mousemove", function()
            {
                scrollBackground(img, ratioW, ratioH);
            });
}
/*Quand le pers
create a variable*/
let rabbit = document.getElementById("rabbit");
let astronaut = document.getElementById("astronaut");
let robot = document.getElementById("robot");
//create a add event listener on click
document.addEventListener("onclick", function(event) {
//get the area concerned and then the display none
  document.getElementById("astronaut").style.display = "none";
  document.getElementById("robot").style.display = "none";
})
document.addEventListener("DOMContentLoaded", ready);
