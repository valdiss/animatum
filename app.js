let mouseX;
let mouseY;
let img;
let ratioW;
let ratioH;
let table_background_espace = [
  {top: 700, left: 1250, width: 40},
  {top:1175 ,left:3615, width: 30},
  {top:2560 ,left:700, width: 40},
  {top:710 ,left:3160, width: 30},
  {top:2480 ,left:1180, width: 30},
  {top:2540 ,left:3850, width: 40}
];
let table_background_foret = [
  {top: 1780, left: 1620, width:30},
  {top:1920 ,left:2750, width:40},
  {top:2600 ,left:700, width:50},
  {top:1720 ,left:2490, width:25},
  {top:1620 ,left:620, width:25},
  {top:1700 ,left:3800, width:40}
];
let position_obj;

let updateMouse = function()
{
    mouseX = event.clientX;
    mouseY = event.clientY;
}
let scrollBackground = function(img, ratioW, ratioH, position_obj)
{
    img.style["top"] = -mouseY*ratioH + "px";
    img.style["left"] = -mouseX*ratioW + "px";
    lapin.style["top"] = -mouseY*ratioH + position_obj.top +"px";
    lapin.style["left"] = -mouseX*ratioW + position_obj.left + "px";
    lapin.style["width"] = position_obj.width + "px";
}

let ready = function()
{
    lapin =document.getElementById('rabbit');
    img = document.getElementById("image");
    if (img.src.match("space")){
      position_obj = table_background_espace[Math.floor(Math.random()*6)];
      console.log(position_obj);
    }
    else if (img.src.match("forest")){
      position_obj = table_background_foret[Math.floor(Math.random()*6)];
      console.log(position_obj);
    }

    ratioW = (img.offsetWidth - window.innerWidth)/window.innerWidth;
    ratioH = (img.offsetHeight - window.innerHeight)/window.innerHeight;

    document.addEventListener("mousemove", updateMouse);
    document.addEventListener("mousemove", function()
            {
                scrollBackground(img, ratioW, ratioH, position_obj);
            });
    lapin.addEventListener("click", function(){
        alert ('Bien joué gros!');
    });
}
document.addEventListener("DOMContentLoaded", ready);


//
//
//
// let position_background_foret [
//   {top: 700, left: 1250},
//   {top: ,left:},
//   {top: ,left:},
//   {top: ,left:},
//   {top: ,left:},
//   {top: ,left:}
// ];
