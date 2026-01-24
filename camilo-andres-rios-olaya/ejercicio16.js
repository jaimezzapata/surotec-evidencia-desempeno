function calcularServicios(consumo, estrato) {
    let totalPagar = 0

    if (consumo <= 15) {
        totalPagar = consumo * 1000
    } else if (consumo <= 30) {
        totalPagar = (15 * 1000) + ((consumo - 15) * 1500)
    } else {
        totalPagar = (15 * 1000) + (15 * 1500) + ((consumo - 30) * 2500)
    }

    if (estrato === 1) {
        totalPagar = totalPagar * 0.8
    }

    return totalPagar
}