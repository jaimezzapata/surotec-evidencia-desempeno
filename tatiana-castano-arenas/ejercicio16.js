export function calcularLiquidacionAgua(consumo, estrato) {
    let total = 0;

    if (consumo <= 15) {
        total = consumo * 1000;
    } else if (consumo <= 30) {
        total = (15 * 1000) + ((consumo - 15) * 1500);
    } else {
        total = (15 * 1000) + (15 * 1500) + ((consumo - 30) * 2500);
    }

    if (estrato === 1) {
        total = total * 0.8;
    }

    return Number(total.toFixed(2));
}