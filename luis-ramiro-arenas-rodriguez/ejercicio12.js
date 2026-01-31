function busquedaPalabrasProhibidas(texto, palabrasProhibidas) {
  const conteo = {};
  const textoMinusculas = texto.toLowerCase();

  for (let i = 0; i < palabrasProhibidas.length; i++) {
    conteo[palabrasProhibidas[i]] = 0;
    const palabraProhibida = palabrasProhibidas[i].toLowerCase();
    const palabrasTexto = textoMinusculas.split(" ");

    for (let j = 0; j < palabrasTexto.length; j++) {

        let palabraLimpia = palabrasTexto[j].replace(/[.,!?;:()"]/g, '');

      if (palabraLimpia === palabraProhibida) {
        conteo[palabrasProhibidas[i]]++;
      }
    }
  }
  return conteo;
}
