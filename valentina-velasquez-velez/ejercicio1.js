function cajeroCantidadMinima(monto) {
  if (monto % 10000 !== 0) {
    return 'Error: El monto debe ser múltiplo de 10.000'
  }

  const billetes = {
    billetes50000: 0,
    billetes20000: 0,
    billetes10000: 0
  }

  billetes.billetes50000 = Math.floor(monto / 50000)
  monto %= 50000

  billetes.billetes20000 = Math.floor(monto / 20000)
  monto %= 20000

  billetes.billetes10000 = Math.floor(monto / 10000)

  return billetes
}

module.exports = cajeroCantidadMinima
