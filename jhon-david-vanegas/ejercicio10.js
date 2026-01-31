const conversor = (function () {
  let contador = 0

  const tasas = {
    COP: { USD: 1 / 4000, EUR: 1 / 4400 },
    USD: { COP: 4000, EUR: 0.91 },
    EUR: { COP: 4400, USD: 1.1 }
  }

  return function (monto, origen, destino) {
    if (origen === destino) {
      contador++
      return monto
    }

    if (!tasas[origen] || !tasas[origen][destino]) {
      return 'Conversión no válida'
    }

    contador++
    return monto * tasas[origen][destino]
  }
})()

module.exports = conversor
