
export function calcularMonto(monto) {
  if (monto % 10000 !== 0) {
    return "Error! Sólo puedes retirar cantidades en billetes de 10, 20 o 50 mil pesos.";
  }

  const billetes50 = Math.floor(monto / 50000);
  monto %= 50000;

  const billetes20 = Math.floor(monto / 20000);
  monto %= 20000;

  const billetes10 = Math.floor(monto / 10000);

  return {
    billetes50,
    billetes20,
    billetes10
  };
}

console.log(calcularMonto(80000));

