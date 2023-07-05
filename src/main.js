import data from './data/ghibli/ghibli.js';
import { sorted, } from './data.js';

const films=data.films;

const pagemovies =document.getElementById("pagemovies");

const showAllCards= (films) => {
 
  for (let i = 0; i < films.length; i++) {
    let card = document.createElement("div");
    card.className = "card";

    let title = document.createElement("h2");
    title.innerText = "Title: " + films[i].title;

    let release_date = document.createElement("p");
    release_date.innerText = "Date " + films[i].release_date;

    let director = document.createElement("p");
    director.innerText = "Director: " + films[i].director;

    let producer = document.createElement("p");
    producer.innerText = "Producer: " + films[i].producer;

    let poster = document.createElement("img");
    poster.src = films[i].poster;

    card.appendChild(title);
    card.appendChild(release_date);
    card.appendChild(director);
    card.appendChild(producer);
    card.appendChild(poster);

    pagemovies.appendChild(card);
  }
}


console.log(sorted(films,"asc"));

//document.addEventListener("DOMContentLoaded", function() {
  //let moviesbutton = document.getElementById("moviesbutton");
  //let home = document.querySelector(".home");
  //let pagemovies = document.querySelector(".pagemovies");

  //moviesbutton.addEventListener("click", function() {
    //home.style.display = "none"; // Oculta el div "home"
    //pagemovies.style.display = "grid"; // Muestra el div "pagemovies"
 // });

  
  const sortTitle = document.getElementById("sort");
  sortTitle.addEventListener("change",()=>{
   const userOption = sortTitle.value;
   const sortedDataAsc = sorted(films, userOption);
   pagemovies.innerHTML =  "";
   showAllCards(sortedDataAsc);
   console.log(sortedDataAsc);
  })

  showAllCards(films);

 
