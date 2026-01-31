export function calcularCostoAgua(consumo, estrato) {
    let costoTotal = 0;

    if (consumo <= 15) {
        costoTotal = consumo * 1000;
    } else if (consumo <= 30) {
        costoTotal = (15 * 1000) + ((consumo - 15) * 1500);
    } else {
        costoTotal = (15 * 1000) + (15 * 1500) + ((consumo - 30) * 2500);
    }

    if (estrato === 1) {
        costoTotal = costoTotal * 0.80;
    }

    return costoTotal;
}