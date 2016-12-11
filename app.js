"use strict";
 function moves(e){
  var cordx = 0;
  var cordy = 0;
  if (!e) {
   var e = window.event;
  }
  if (e.pageX || e.pageY){
   cordx = e.pageX;
   cordy = e.pageY;
  }
  else if (e.clientX || e.clientY){
   cordx = e.clientX;
   cordy = e.clientY;
  }
  document.getElementById('box').style.left = cordx;
  document.getElementById('box').style.top = cordy;
 }
