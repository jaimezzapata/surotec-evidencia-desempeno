function calcularCajero(monto) {
  if (monto % 10000 !== 0) {
    return "Monto invalido";
  }

  let billetes50000 = Math.floor(monto / 50000);
  monto = monto % 50000;

  let billetes20000 = Math.floor(monto / 20000);
  monto = monto % 20000;

  let billetes10000 = Math.floor(monto / 10000);

  return {
    billetes50000: billetes50000,
    billetes20000: billetes20000,
    billetes10000: billetes10000,
  };
}

export function ejercicio1() {
  let monto = Number(prompt("Ingrese el monto a retirar"));

  let resultado = calcularCajero(monto);

  if (typeof resultado === "string") {
    alert(resultado);
    return;
  }

  alert(JSON.stringify(resultado));
}
