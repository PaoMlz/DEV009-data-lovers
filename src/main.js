import data from './data/ghibli/ghibli.js';
import { sorted, selectYear, selectDirPro,searchmovies } from './data.js';

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


  
const sortTitle = document.getElementById("sort");
sortTitle.addEventListener("change",()=>{
  const userOption = sortTitle.value;
  const sortedDataAsc = sorted(films, userOption);
  pagemovies.innerHTML = "";
  showAllCards(sortedDataAsc);
  // console.log(sortedDataAsc);
});

showAllCards(films);

  
const selectYearElement = document.getElementById("year");
selectYearElement.addEventListener("change", () => {
  const userSelect = selectYearElement.value;
  const byYear = selectYear(films, userSelect); 
  pagemovies.innerHTML = "";
  showAllCards(byYear);
});


const selectproductElement = document.getElementById("direcandproduc");
selectproductElement.addEventListener("change", () => {
  const userSelect2 = selectproductElement.value;
  const bydireprodu = selectDirPro(films, userSelect2);
  pagemovies.innerHTML = "";
  showAllCards(bydireprodu);
  // console.log(bydireprodu);
});


const searchmovie = document.getElementById("moviesearch2");
searchmovie.addEventListener("keydown", (event) => { //keydown se usa cuando uno quiere que una tecla especifica empiece el evento.
  if (event.key === "Enter") { /// la condicion para decir con que tecla sucede
    event.preventDefault();
    const usersearch = searchmovie.value;
    const searchresult = searchmovies(films, usersearch);
    pagemovies.innerHTML = "";
    showAllCards(searchresult);
  }
});



document.addEventListener("DOMContentLoaded", function() {
  let moviesbutton = document.getElementById("moviesbutton");
  let home = document.querySelector(".home");
  let pagemoviesbig = document.getElementById("pagemoviebig"); // Corregido el ID del elemento

  moviesbutton.addEventListener("click", function() {
    home.style.display = "none";//que no se vea la pagina inicial
    pagemoviesbig.style.display = "grid";//que se vea pagemoviebig
    pagemovies.style.display= "grid"; // que se vea pagemovies
  });

  btnhome.addEventListener("click", function() {
    home.style.display = "block";//que se vea
    pagemoviesbig.style.display = "none";
  });
});

















 
