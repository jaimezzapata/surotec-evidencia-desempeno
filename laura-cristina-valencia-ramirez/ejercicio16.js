function calcularServicioAgua(consumo, estrato) {
    let pago = 0;

    if (consumo <= 15) {
        pago = consumo * 1000;
    } else if (consumo <= 30) {
        pago = (15 * 1000) + ((consumo - 15) * 1500);
    } else {
        pago = (15 * 1000) + (15 * 1500) + ((consumo - 30) * 2500);
    }

    if (estrato === 1) {
        pago = pago * 0.80;
    }

    return pago;
}

export { calcularServicioAgua };