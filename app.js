if ($(window).width() > 880) {
    let mouseX;
    let mouseY;
    let img;
    let ratioW;
    let ratioH;
    
    let updateMouse = function() {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    let scrollBackground = function(img, ratioW, ratioH) {
        img.style["top"] = -mouseY * ratioH + "px";
        img.style["left"] = -mouseX * ratioW + "px";
    }
    let ready = function() {
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;

        img = document.getElementById("D");
        ratioW = (img.offsetWidth - window.innerWidth) / window.innerWidth;
        ratioH = (img.offsetHeight - window.innerHeight) / window.innerHeight;

        document.addEventListener("mousemove", updateMouse);
        document.addEventListener("mousemove", function() {
            scrollBackground(img, ratioW, ratioH);
        });
    }
    document.addEventListener("DOMContentLoaded", ready);
}
