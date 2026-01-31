const cajero = monto => {
  if (monto % 10000 !== 0) {
    return 'Monto inválido'
  }

  let restante = monto
  const billetes50000 = Math.floor(restante / 50000)
  restante -= billetes50000 * 50000
  const billetes20000 = Math.floor(restante / 20000)
  restante -= billetes20000 * 20000
  const billetes10000 = Math.floor(restante / 10000)

  return { billetes50000, billetes20000, billetes10000 }
}

