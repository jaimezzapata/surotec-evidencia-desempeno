
export function calcularFacturaAgua(consumo, estrato) {
    let costoTotal = 0;

    if (consumo <= 15) {
        costoTotal = consumo * 1000;
    } else {
        costoTotal += 15 * 1000; 
        
        if (consumo <= 30) {
            const restante = consumo - 15; 
            costoTotal += restante * 1500;
        } else {
            costoTotal += 15 * 1500;

            const exceso = consumo - 30;
            costoTotal += exceso * 2500;
        }
    }

    if (estrato === 1) {
        costoTotal = costoTotal * 0.80; 
    }

    return costoTotal;
}