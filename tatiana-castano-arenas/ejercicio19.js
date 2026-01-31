export function calcularRutaEntrega(destinos, combustibleMax = 200) {
    let distanciaAcumulada = 0;
    const destinosAlcanzables = [];

    for (const destino of destinos) {
        if (distanciaAcumulada + destino.distancia <= combustibleMax) {
            distanciaAcumulada += destino.distancia;
            destinosAlcanzables.push({
                ...destino,
                acumulado: distanciaAcumulada
            });
        } else {
            break; // Combustible insuficiente para el siguiente punto
        }
    }

    return { destinosAlcanzables, totalRecorrido: distanciaAcumulada };
}