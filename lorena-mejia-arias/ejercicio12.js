export function ejercicio12() {
  let mensaje = prompt("Ingrese el texto");
  let bloqueadas = ["malo", "feo", "tonto"];

  let conteoFinal = contarPalabras(mensaje, bloqueadas);
  alert(JSON.stringify(conteoFinal));
}

function contarPalabras(texto, listaProhibida) {
  let resultado = {};
  let palabras = texto.toLowerCase().split(" ");

  for (let i = 0; i < listaProhibida.length; i++) {
    resultado[listaProhibida[i]] = 0;
  }

  for (let i = 0; i < palabras.length; i++) {
    for (let j = 0; j < listaProhibida.length; j++) {
      if (palabras[i] === listaProhibida[j]) {
        resultado[listaProhibida[j]]++;
      }
    }
  }

  return resultado;
}
