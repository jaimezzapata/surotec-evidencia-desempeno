
let contadorConversiones = 0;

export function convertirMoneda(monto, origen, destino) {

    contadorConversiones++;


    const tasas = {
        'COP': 1,
        'USD': 4000,
        'EUR': 4200
    };


    const or = origen.toUpperCase();
    const dest = destino.toUpperCase();


    if (!tasas[or] || !tasas[dest]) {
        return "Error: Moneda no válida. Use COP, USD o EUR.";
    }

    const valorEnPesos = monto * tasas[or];

    const resultadoFinal = valorEnPesos / tasas[dest];

    return {
        resultado: parseFloat(resultadoFinal.toFixed(2)),
        moneda: dest,
        conversionesRealizadas: contadorConversiones
    };
}