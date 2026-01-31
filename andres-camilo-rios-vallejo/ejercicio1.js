export const cajeroDenominaciones = (montoRetirar) => {
  if (montoRetirar % 10000 !== 0) {
    return 'Error: El monto debe ser múltiplo de 10.000'
  }

  let montoActual = montoRetirar

  const billetes50 = Math.floor(montoActual / 50000)
  montoActual = montoActual % 50000

  const billetes20 = Math.floor(montoActual / 20000)
  montoActual = montoActual % 20000

  const billetes10 = Math.floor(montoActual / 10000)

  return {
    billetesDe50000: billetes50,
    billetesDe20000: billetes20,
    billetesDe10000: billetes10
  }
}