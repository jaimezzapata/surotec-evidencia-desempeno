let contadorGlobal = 0

function convertirMoneda(monto, origen, destino) {
  contadorGlobal++

  if (origen === destino) {
    return monto
  }

  const tasas = {
    COP: { USD: 0.00027, EUR: 0.00023 },
    USD: { COP: 3700, EUR: 0.85 },
    EUR: { COP: 4300, USD: 1.18 }
  }

  if (!tasas[origen] || !tasas[origen][destino]) {
    return 'Error: Moneda no soportada'
  }

  return monto * tasas[origen][destino]
}

module.exports = convertirMoneda
