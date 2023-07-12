import data from './data/ghibli/ghibli.js';
import { sorted, selectYear, selectDirPro, searchmovies, calculateGenderSpecies } from './data.js';

const films = data.films;
const pagemoviebig = document.getElementById("pagemoviebig");
const pagemovies = document.getElementById("pagemovies");
const characterList = document.getElementById("characterList");
const percentageContainer = document.getElementById("percentageContainer");

const showAllCards = (films) => {
  for (let i = 0; i < films.length; i++) {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.innerText = "Title: " + films[i].title;

    const release_date = document.createElement("h1");
    release_date.innerText = "Date: " + films[i].release_date;

    const director = document.createElement("h1");
    director.innerText = "Director: " + films[i].director;

    const producer = document.createElement("h1");
    producer.innerText = "Producer: " + films[i].producer;

    const poster = document.createElement("img");
    poster.src = films[i].poster;

    card.appendChild(title);
    card.appendChild(poster);
    card.appendChild(release_date);
    card.appendChild(director);
    card.appendChild(producer);

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const description = document.createElement("p");
    description.innerText = "Description: " + films[i].description;

    const score = document.createElement("h3");
    score.innerText = "Score: " + films[i].rt_score;

    const titleCopy = title.cloneNode(true);
    const release_dateCopy = release_date.cloneNode(true);
    const directorCopy = director.cloneNode(true);
    const producerCopy = producer.cloneNode(true);
    const posterCopy = poster.cloneNode(true);

    cardContent.appendChild(titleCopy);
    cardContent.appendChild(release_dateCopy);
    cardContent.appendChild(directorCopy);
    cardContent.appendChild(producerCopy);
    cardContent.appendChild(score);
    cardContent.appendChild(description);
    cardContent.appendChild(posterCopy);

    card.addEventListener("click", () => {
      card.style.display = "none";
      pagemovies.style.display = "none";
      cardContent.style.display = "grid";
    });

    pagemovies.appendChild(card);
    pagemoviebig.appendChild(cardContent);
    pagemoviebig.appendChild(pagemovies);
  }
};

const showAllCharacters = () => {
  const allCharacters = films.reduce((characters, film) => {
    const people = film.people;

    if (people) {
      characters.push(...people);
    }
    return characters;
  }, []);

  if (allCharacters.length === 0) {
    // console.log("No hay personajes para mostrar.");
  } else {
    for (let i = 0; i < allCharacters.length; i++) {
      const character = allCharacters[i];
      const characterCard = document.createElement("div");
      characterCard.className = "character-card";

      const img = document.createElement("img");
      img.src = character.img;
      img.alt = character.name;

      const name = document.createElement("h2");
      name.innerText = character.name;

      const gender = document.createElement("p");
      gender.innerText = "Gender: " + character.gender;

      const specie = document.createElement("p");
      specie.innerText = "Species: " + character.specie;

      const age = document.createElement("p");
      age.innerText = "Age: " + character.age;

      characterCard.appendChild(img);
      characterCard.appendChild(name);
      characterCard.appendChild(gender);
      characterCard.appendChild(specie);
      characterCard.appendChild(age);

      characterList.appendChild(characterCard);
    }
  }

  const genderSpeciesDistribution = calculateGenderSpecies(allCharacters);

  const maleCountElement = document.createElement("p");
  maleCountElement.id = "maleCount";
  maleCountElement.innerText = "Male Count: " + genderSpeciesDistribution.maleCount;

  const femaleCountElement = document.createElement("p");
  femaleCountElement.id = "femaleCount";
  femaleCountElement.innerText = "Female Count: " + genderSpeciesDistribution.femaleCount;

  const humanCountElement = document.createElement("p");
  humanCountElement.id = "humanCount";
  humanCountElement.innerText = "Human Count: " + genderSpeciesDistribution.humanCount;

  const nonHumanCountElement = document.createElement("p");
  nonHumanCountElement.id = "nonHumanCount";
  nonHumanCountElement.innerText = "Non-Human Count: " + genderSpeciesDistribution.nonHumanCount;

  percentageContainer.appendChild(maleCountElement);
  percentageContainer.appendChild(femaleCountElement);
  percentageContainer.appendChild(humanCountElement);
  percentageContainer.appendChild(nonHumanCountElement);

  // Función para mostrar u ocultar los datos según las casillas de verificación
  const toggleGenderSpeciesData = (dataKey, isChecked) => {
    const dataElement = document.getElementById(dataKey);
    if (isChecked) {
      dataElement.style.display = "block";
    } else {
      dataElement.style.display = "none";
    }
  };

  // Event listeners para las casillas de verificación
  const maleCheckbox = document.getElementById("maleCheckbox");
  const femaleCheckbox = document.getElementById("femaleCheckbox");
  const humanCheckbox = document.getElementById("humanCheckbox");
  const nonHumanCheckbox = document.getElementById("nonHumanCheckbox");

  maleCheckbox.addEventListener("change", () => {
    toggleGenderSpeciesData("maleCount", maleCheckbox.checked);
  });

  femaleCheckbox.addEventListener("change", () => {
    toggleGenderSpeciesData("femaleCount", femaleCheckbox.checked);
  });

  humanCheckbox.addEventListener("change", () => {
    toggleGenderSpeciesData("humanCount", humanCheckbox.checked);
  });

  nonHumanCheckbox.addEventListener("change", () => {
    toggleGenderSpeciesData("nonHumanCount", nonHumanCheckbox.checked);
  });
};

const sortTitle = document.getElementById("sort");
sortTitle.addEventListener("change", () => {
  const userOption = sortTitle.value;
  const sortedDataAsc = sorted(films, userOption);
  pagemovies.innerHTML = "";
  showAllCards(sortedDataAsc);
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
});

const searchmovie = document.getElementById("moviesearch2");
searchmovie.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const usersearch = searchmovie.value;
    const searchresult = searchmovies(films, usersearch);
    pagemovies.innerHTML = "";
    showAllCards(searchresult);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const moviesbutton = document.getElementById("moviesbutton");
  const characterButton = document.getElementById("characterButton");
  const home = document.querySelector(".home");
  const pagemoviesbig = document.getElementById("pagemoviebig");
  const btnhome = document.getElementById("btnhome");
  const btnhome2 = document.getElementById("btnhome2");

  moviesbutton.addEventListener("click", function() {
    home.style.display = "none";
    pagemoviesbig.style.display = "grid";
    pagemovies.style.display = "grid";
  });

  characterButton.addEventListener("click", function() {
    home.style.display = "none";
    pagemoviesbig.style.display = "none";
    pagemovies.style.display = "none";
    showAllCharacters();
    characterList.style.display = "flex";
  });

  btnhome.addEventListener("click", function() {
    home.style.display = "block";
    pagemoviesbig.style.display = "none";
  });

  btnhome2.addEventListener("click", function() {
    home.style.display = "block";
    characterList.style.display = "none";
  });
});

