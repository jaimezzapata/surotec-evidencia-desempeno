let totalConversiones = 0;

export function ejercicio10() {
  let cantidad = Number(prompt("Ingrese el monto"));
  let origen = prompt("Ingrese moneda origen (COP, USD, EUR)");
  let destino = prompt("Ingrese moneda destino (COP, USD, EUR)");

  let valorFinal = cambiarDivisa(cantidad, origen, destino);

  alert(
    "Valor convertido: " +
      valorFinal +
      "\nConversiones realizadas: " +
      totalConversiones
  );
}

function cambiarDivisa(valor, desde, hacia) {
  totalConversiones++;

  let conversion = {
    COP: 1,
    USD: 4000,
    EUR: 4300,
  };

  return Number(((valor * conversion[desde]) / conversion[hacia]).toFixed(2));
}
