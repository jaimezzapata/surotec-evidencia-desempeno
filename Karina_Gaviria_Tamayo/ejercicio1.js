// ejercicio1.js
export function calcularBilletes(monto) {
  if (monto % 10000 !== 0) {
    return "Error: Monto no válido";
  }

  let billetes50 = Math.floor(monto / 50000);
  monto %= 50000;
  let billetes20 = Math.floor(monto / 20000);
  monto %= 20000;
  let billetes10 = Math.floor(monto / 10000);

  return { billetes50, billetes20, billetes10 };
}
