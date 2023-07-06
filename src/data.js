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

export const selectYear = ( data, ) => {
  return data. filter (films => films.release_date === release_date);
};

export const selectDirPro = (data, directorOrProducer) => {
  return data.filter((films) => films.director === directorOrProducer || films.producer === directorOrProducer);
};


 
  










