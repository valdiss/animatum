let input = document.getElementById('age');
let hardcore = document.getElementById('hardcore');
let cover = document.getElementById('cover');
let submit = document.getElementById('submit');

let ready = function (){

  input.value = localStorage.getItem("age");
  if (!input.value) {
    submit.addEventListener("click",function(){

      if (input.value < 16) {
        hardcore.style.display = 'none';
        cover.style.display = 'none';
        localStorage.setItem("age", input.value);
      }
      else if (input.value >= 16) {
        cover.style.display = 'none';
        localStorage.setItem("age", input.value);
      }
    });
  }
  else if (input.value < 16) {
    hardcore.style.display = 'none';
    cover.style.display = 'none';
    localStorage.setItem("age", input.value);
  }
  else if (input.value >= 16) {
    cover.style.display = 'none';
    localStorage.setItem("age", input.value);
  }
};

document.addEventListener("DOMContentLoaded", ready);
