import data from './data/ghibli/ghibli.js';
import { sorted, selectYear, selectDirPro } from './data.js';

const films=data.films;
const pagemoviebig= document.getElementById("pagemoviebig");
const pagemovies =document.getElementById("pagemovies");

const showAllCards= (films) => {
 
  for (let i = 0; i < films.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.innerText = "Title: " + films[i].title;

    const release_date = document.createElement("p");
    release_date.innerText = "Date " + films[i].release_date;

    const director = document.createElement("p");
    director.innerText = "Director: " + films[i].director;

    const producer = document.createElement("p");
    producer.innerText = "Producer: " + films[i].producer;

    const poster = document.createElement("img");
    poster.src = films[i].poster;

    card.appendChild(title);
    card.appendChild(release_date);
    card.appendChild(director);
    card.appendChild(producer);
    card.appendChild(poster);

    pagemovies.appendChild(card);
    pagemoviebig.appendChild(pagemovies);
  }
};


//  console.log(sorted(films,"asc"));

// document.addEventListener("DOMContentLoaded", function() {
//   let moviesbutton = document.getElementById("moviesbutton");
//   let home = document.querySelector(".home");
//   let pagemovies = document.querySelector(".pagemovies");

//   moviesbutton.addEventListener("click", function() {
//     home.style.display = "none"; // Oculta el div "home"
//     pagemovies.style.display = "grid"; // Muestra el div "pagemovies"
//  });

  
const sortTitle = document.getElementById("sort");
sortTitle.addEventListener("change",()=>{
  const userOption = sortTitle.value;
  const sortedDataAsc = sorted(films, userOption);
  pagemovies.innerHTML = "";
  showAllCards(sortedDataAsc);
  console.log(sortedDataAsc);


});

showAllCards(films);

  
const selectYearElement = document.getElementById("year");
selectYearElement.addEventListener("change", () => {
  const userSelect = selectYearElement.value;
  const byYear = films.filter((film) => film.release_date === userSelect);
  pagemovies.innerHTML = "";
  showAllCards(byYear);
  console.log(byYear);
});


const selectproductElement = document.getElementById("direcandproduc");
selectproductElement.addEventListener("change", () => {
  const userSelect2 = selectproductElement.value;
  const bydireprodu = films.filter((film) => film.director === userSelect2 || film.producer === userSelect2);
  pagemovies.innerHTML = "";
  showAllCards(bydireprodu);
  console.log(bydireprodu);
});










 
