export function calcularNomina(horas, valorHora) {
    let salarioTotal = 0

    if (horas <= 40) {
        salarioTotal = horas * valorHora
    } else if (horas <= 50) {
        const horasExtras = horas - 40
        salarioTotal = (40 * valorHora) + (horasExtras * valorHora * 1.5)
    } else {
        const horasExtrasDobles = horas - 50
        salarioTotal = (40 * valorHora) + (10 * valorHora * 1.5) + (horasExtrasDobles * valorHora * 2)
    }

    return salarioTotal
}