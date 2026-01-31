let contadorConversiones = 0;

export function convertirMoneda(monto, origen, destino) {
    const tasas = {
        USD: 1,
        EUR: 0.92,
        COP: 3900
    };

    const montoEnUsd = monto / tasas[origen];
    const montoConvertido = montoEnUsd * tasas[destino];
    
    contadorConversiones++;

    return {
        resultado: Number(montoConvertido.toFixed(2)),
        totalConsultas: contadorConversiones
    };
}