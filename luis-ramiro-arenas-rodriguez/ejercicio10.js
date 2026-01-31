let contadorConversiones = 0;

function conversorRegistro(valor, monedaOrigen, monedaDestino) {
  let tasas = {
    COP: 1,
    USD: 4000,
    EUR: 4500,
  };

  let montoEnCOP = valor * tasas[monedaOrigen];

  let resultado = montoEnCOP / tasas[monedaDestino];

  contadorConversiones++;

  return (
    "conversión #" +
    contadorConversiones +
    ": " +
    resultado.toFixed(2) +
    " " +
    monedaDestino
  );
}
