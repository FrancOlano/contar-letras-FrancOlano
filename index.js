function cuantasVecesAparece(palabra, caracter){
    let veces = [];
    for(var i = 0; i < palabra.length; i++) {
      if (palabra[i].toLowerCase() === caracter) veces.push(i);
    }
      return veces.length ;
}

const contar = require('contar-letras-francolano')

 contar("tengo un perro que se llama milo", "o")

console.log( contar("tengo un perro que se llama milo", "o"))