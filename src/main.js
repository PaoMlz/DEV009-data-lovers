import data from './data/ghibli/ghibli.js';
import { sortData } from './data.js';


console.log(data);

document.addEventListener("DOMContentLoaded", function() {
  let moviesbutton = document.getElementById("moviesbutton");
  let home = document.querySelector(".home");
  let pagemovies = document.querySelector(".pagemovies");

  moviesbutton.addEventListener("click", function() {
    home.style.display = "none"; // Oculta el div "home"
    pagemovies.style.display = "grid"; // Muestra el div "pagemovies"
  });

  
  const sortTitle = document.getElementById("sort");
  sortTitle.addEventListener("change",()=>{
   const useroption = sortTitle.value;
   const sortedDataAsc = sortData(data, useroption);
   console.log(sortedDataAsc);
  })
//   // Ejemplo de uso de sortData para ordenar de forma ascendente
//    const sortedDataAsc = sortData(data, useroption);
//    console.log(sortedDataAsc);
 
//    // Ejemplo de uso de sortData para ordenar de forma descendente
//    const sortedDataDesc = sortData(data, 'title', 'desc');
//    console.log(sortedDataDesc);
 });


  
