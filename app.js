"use strict";

/*//faire bouger la div background sur une img fixe
document.addEventListener("mousemove", function(ev) {
    //attribuer une variable let x = bouger horizontalement
      let x = ev.clientX;
    //attribuer une variable let y = bouger verticalement
      let y = ev.clientY;
//Je prends ma div background
//deb boucle for quand la souris bouge pas
  //si souris pas bouger alors pas bouger back
//Debut boucle For quand je bouge la souris bouge back
  //Deb si
    //si la souris bouge hor alors bouge horizontalement back
    //si souri bouge vert alors bouge verticalement back

});*/
function getMouse(e) {
  var posx;
  var posy;
  if (!e) var e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  }
  else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.getElementByClass("scene").scrollLeft;
    posy = e.clientY + document.body.scrollTop  + document.getElementByClass("scene").scrollTop;
  }
} //getMouse
