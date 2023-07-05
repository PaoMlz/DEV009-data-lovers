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






