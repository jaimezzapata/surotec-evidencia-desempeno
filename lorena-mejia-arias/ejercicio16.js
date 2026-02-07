export function ejercicio16() {
  let metrosConsumidos = 40;
  let nivel = 1;

  let valorFinal = calcularFactura(metrosConsumidos, nivel);
  alert(`Valor a pagar: $${valorFinal}`);
}

function calcularFactura(consumo, estrato) {
  let costo = 0;

  if (consumo > 0) {
    let bloque1 = Math.min(consumo, 15);
    costo += bloque1 * 1000;
  }

  if (consumo > 15) {
    let bloque2 = Math.min(consumo - 15, 15);
    costo += bloque2 * 1500;
  }

  if (consumo > 30) {
    let bloque3 = consumo - 30;
    costo += bloque3 * 2500;
  }

  if (estrato === 1) {
    costo *= 0.8;
  }

  return Math.round(costo);
}
