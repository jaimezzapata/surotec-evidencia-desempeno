export function ejercicio14() {
  let compras = []

  for (let i = 0; i < 5; i++) {
    compras.push(Number(prompt("Ingrese el valor de la compra")))
  }

  let antiguedad = Number(prompt("Ingrese los años de antigüedad del cliente"))

  let suma = 0

  for (let i = 0; i < compras.length; i++) {
    suma += compras[i]
  }

  let promedio = suma / compras.length

  if (promedio > 100000 && antiguedad > 2) {
    return 0.25
  }

  return 0
}
