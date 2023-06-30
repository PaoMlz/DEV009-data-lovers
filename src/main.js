import data from './data/ghibli/ghibli.js';
import { example } from './data.js';
console.log(example, data);

document.addEventListener("DOMContentLoaded", function() {
  let moviesbutton = document.getElementById("moviesbutton");
  let home = document.querySelector(".home");
  let pagemovies = document.querySelector(".pagemovies");

  moviesbutton.addEventListener("click", function() {
    home.style.display = "none"; // Oculta el div "home"
    pagemovies.style.display = "grid"; // Muestra el div "pagemovies"
  });
});




  
