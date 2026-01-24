function calcularValorServicioAgua(consumoMetrosCubicos, estrato) {
    
    let total = 0;

    if (consumoMetrosCubicos <= 15) {
        total = consumoMetrosCubicos * 1000;
    } else if (consumoMetrosCubicos <= 30) {
        total = 15 * 1000;
        total += (consumoMetrosCubicos - 15) * 1500;
    } else {
        total = 15 * 1000;
        total += 15 * 1500;
        total += (consumoMetrosCubicos - 30) * 2500;
    }

    if (estrato === 1) {
        total = total * 0.8;
    }

    return total;
}
