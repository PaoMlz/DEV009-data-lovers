//funcion ordenar filtrar buscar y comparar
export const example = () => {
  return 'example';
};

export const sort = (data, sortOrder) => {
  data.sort((a,b)=>{
    if (sortOrder === 'asc'){
      return a.title < b.title;
    }
    else {
      return b.title > b.title;
    }
  })
};



export const sortData = (data, sortBy, sortOrder) => {
    // Verificar si data es un arreglo
    
  data.sort((a, b) => {
    //  método sort() de los arrays y una función de comparación
    // vamos a convertir los campos a ordenar a mayúsculas para asegurar una comparación correcta
    const fieldA = a[sortBy].toUpperCase();
    const fieldB = b[sortBy].toUpperCase();

    if (fieldA < fieldB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return data;
};



