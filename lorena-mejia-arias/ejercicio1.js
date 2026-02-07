function procesarRetiro(valor) {
  if (valor % 10000 !== 0) {
    return "Monto invalido";
  }

  let restante = valor;

  let cantidad50 = Math.floor(restante / 50000);
  restante -= cantidad50 * 50000;

  let cantidad20 = Math.floor(restante / 20000);
  restante -= cantidad20 * 20000;

  let cantidad10 = Math.floor(restante / 10000);

  return {
    billetes50000: cantidad50,
    billetes20000: cantidad20,
    billetes10000: cantidad10,
  };
}

export function ejercicio1() {
  let valor = Number(prompt("Digite el monto a retirar"));
  let resultado = procesarRetiro(valor);
  alert(JSON.stringify(resultado));
}