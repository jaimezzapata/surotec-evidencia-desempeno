let contador = 0;

function convertirDivisas(monto, origen, destino) {
    contador++;

    const tasas = {
        COP: { USD: 0.00025, EUR: 0.00022, COP: 1 },
        USD: { COP: 4000, EUR: 0.92, USD: 1 },
        EUR: { COP: 4500, USD: 1.09, EUR: 1 }
    };

    let valorConvertido = monto * tasas[origen][destino];

    return {
        valor: Number(valorConvertido.toFixed(2)),
        totalConversiones: contador
    };
}

export { convertirDivisas };