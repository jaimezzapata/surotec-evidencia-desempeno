let contadorConversiones = 0

export function ejercicio10() {
  let monto = Number(prompt("Ingrese el monto"))
  let monedaOrigen = prompt("Ingrese la moneda origen (COP, USD, EUR)")
  let monedaDestino = prompt("Ingrese la moneda destino (COP, USD, EUR)")

  let tasas = {
    COP: { USD: 0.00025, EUR: 0.00023 },
    USD: { COP: 4000, EUR: 0.92 },
    EUR: { COP: 4300, USD: 1.09 }
  }

  let resultado = monto

  if (monedaOrigen !== monedaDestino) {
    resultado = monto * tasas[monedaOrigen][monedaDestino]
  }

  contadorConversiones++

  alert("Conversiones realizadas: " + contadorConversiones)

  return resultado
}
