export function ejercicio19() {
  let cantidad = Number(prompt("Ingrese la cantidad de destinos"))
  let destinos = []

  for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese el nombre del destino")
    let distancia = Number(prompt("Ingrese la distancia en km"))

    destinos.push({
      nombre: nombre,
      distancia: distancia
    })
  }

  let combustible = 200
  let ruta = []

  for (let i = 0; i < destinos.length; i++) {
    if (destinos[i].distancia <= combustible) {
      ruta.push(destinos[i].nombre)
      combustible -= destinos[i].distancia
    } else {
      break
    }
  }

  return ruta
}
