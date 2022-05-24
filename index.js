function cuantasVecesAparece(palabra, caracter){
    let veces = [];
    for(var i = 0; i < palabra.length; i++) {
      if (palabra[i].toLowerCase() === caracter) veces.push(i);
    }
      return veces.length ;
}
