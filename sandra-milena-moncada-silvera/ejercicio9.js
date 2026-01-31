export function calcularNomina(horasTrabajadas, valorHora) {
    let salarioTotal = 0

    if (horasTrabajadas <= 40) {
        salarioTotal = horasTrabajadas * valorHora
    } else if (horasTrabajadas <= 50) {
        let horasNormales = 40
        let horasExtras50 = horasTrabajadas - 40
        
        salarioTotal = (horasNormales * valorHora) + (horasExtras50 * valorHora * 1.5)
    } else {
        let horasNormales = 40
        let horasExtras50 = 10
        let horasExtras100 = horasTrabajadas - 50

        let pagoNormal = horasNormales * valorHora
        let pagoExtras50 = horasExtras50 * valorHora * 1.5
        let pagoExtras100 = horasExtras100 * valorHora * 2

        salarioTotal = pagoNormal + pagoExtras50 + pagoExtras100
    }

    return Number(salarioTotal.toFixed(2))
}

