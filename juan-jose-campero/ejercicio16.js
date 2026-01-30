function pedirDatosServicio() {
    const consumo = parseInt(prompt("Ingrese consumo de agua (m³): "));
    const estrato = parseInt(prompt("Ingrese estrato: "));
    return { consumo, estrato };
}

function calcularServicioAgua(consumo, estrato) {
    if (isNaN(consumo) || consumo < 0 || isNaN(estrato) || estrato < 0) {
        return "Datos inválidos";
    }

    let total = 0;

    if (consumo <= 15) {
        total = consumo * 1000;
    } else if (consumo <= 30) {
        total = (15 * 1000) + ((consumo - 15) * 1500);
    } else {
        total = (15 * 1000) + (15 * 1500) + ((consumo - 30) * 2500);
    }

    if (estrato === 1) {
        total *= 0.8;
    }

    return total;
}

export default calcularServicioAgua;
export { pedirDatosServicio };