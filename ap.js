"use strict";

//create a variable
let rabbit = document.getElementById("rabbit");
//create a add event listener on click
document.addEventListener("click", function(event) {
//get the area concerned and then the display none
  document.getElementById("astronaut").style.display = "none";
  document.getElementById("robot").style.display = "none";
})
