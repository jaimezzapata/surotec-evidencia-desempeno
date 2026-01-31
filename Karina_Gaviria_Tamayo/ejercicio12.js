export function analizarPalabrasProhibidas(texto, prohibidas) {
  let conteo = {};
  let palabrasTexto = texto.toLowerCase().split(" ");

  for (let palabraProhibida of prohibidas) {
    let contador = 0;
    let pBuscada = palabraProhibida.toLowerCase();

    for (let palabra of palabrasTexto) {
      if (palabra === pBuscada) {
        contador++;
      }
    }
    conteo[palabraProhibida] = contador;
  }

  return conteo;
}