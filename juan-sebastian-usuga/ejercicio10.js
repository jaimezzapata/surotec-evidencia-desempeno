let contadorConversiones = 0;

export function ejercicio10() {
  let monto = Number(prompt("Ingrese el monto"));
  let monedaOrigen = prompt("Ingrese moneda origen (COP, USD, EUR)");
  let monedaDestino = prompt("Ingrese moneda destino (COP, USD, EUR)");

  let resultado = convertirMoneda(monto, monedaOrigen, monedaDestino);

  alert(
    "Valor convertido: " +
      resultado +
      "\nConversiones realizadas: " +
      contadorConversiones
  );
}

function convertirMoneda(monto, origen, destino) {
  contadorConversiones++;

  let tasas = {
    COP: 1,
    USD: 4000,
    EUR: 4300,
  };

  let montoEnCop = monto * tasas[origen];
  let montoConvertido = montoEnCop / tasas[destino];

  return Number(montoConvertido.toFixed(2));
}
