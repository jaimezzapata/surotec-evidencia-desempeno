let contadorConversiones = 0;

export function convertirMoneda(monto, origen, destino) {
  contadorConversiones++;


  let tasas = {
    USD_COP: 4000,
    COP_USD: 1 / 4000,
    EUR_COP: 4300,
    COP_EUR: 1 / 4300,
    EUR_USD: 1.08,
    USD_EUR: 1 / 1.08,
  };

  if (origen === destino) {
    return { valor: monto, totalConsultas: contadorConversiones };
  }

  let clave = `${origen}_${destino}`;
  let valorConvertido = monto * (tasas[clave] || 1);

  return {
    valor: Math.round(valorConvertido),
    totalConsultas: contadorConversiones,
  };
}
