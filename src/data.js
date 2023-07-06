//funcion ordenar filtrar buscar y comparar
export const example = () => {
  return 'example';
};

export const sorted = (data, sortOrder) => {
  return data.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
};

export const selectYear = (data, release_date) => {
  return data.filter(film => film.release_date === release_date);
};

export const selectDirPro = (data, directorOrProducer) => {
  return data.filter((film) => film.director === directorOrProducer || film.producer === directorOrProducer);
};

export const searchmovies = (data, input) => {
  return data.filter(film => film.title.toLowerCase().includes(input.toLowerCase()));
};



 
  










