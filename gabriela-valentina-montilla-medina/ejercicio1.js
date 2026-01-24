// Ejercicio 1
export function ejercicio1() {
  let monto = Number(prompt("Ingrese el monto a retirar"))

  if (monto % 10000 !== 0) {
    return "Monto inválido"
  }

  let restante = monto

  let billetes50000 = Math.floor(restante / 50000)
  restante -= billetes50000 * 50000

  let billetes20000 = Math.floor(restante / 20000)
  restante -= billetes20000 * 20000

  let billetes10000 = Math.floor(restante / 10000)

  return {
    billetes50000: billetes50000,
    billetes20000: billetes20000,
    billetes10000: billetes10000
  }
}
