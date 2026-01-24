let contadorConversiones = 0

function ejercicio10(monto, monedaOrigen, monedaDestino, tasasCambio) {
  const tasasPorDefecto = { COP: 1, USD: 4000, EUR: 4400 }
  const tasas = tasasCambio && typeof tasasCambio === "object" ? tasasCambio : tasasPorDefecto

  if (typeof monto !== "number" || !tasas[monedaOrigen] || !tasas[monedaDestino]) {
    return "Moneda inválida"
  }

  contadorConversiones++

  const montoEnCop = monto * tasas[monedaOrigen]
  const convertido = montoEnCop / tasas[monedaDestino]

  return convertido
}

module.exports = { ejercicio10 }
