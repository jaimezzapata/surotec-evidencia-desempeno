export function calcularNomina(horasTrabajadas, valorHora) {
    let salarioTotal = 0;

    if (horasTrabajadas <= 40) {
        salarioTotal = horasTrabajadas * valorHora;
    } else if (horasTrabajadas <= 50) {
        const horasExtra50 = horasTrabajadas - 40;
        salarioTotal = (40 * valorHora) + (horasExtra50 * valorHora * 1.5);
    } else {
        const horasExtra100 = horasTrabajadas - 50;
        salarioTotal = (40 * valorHora) + (10 * valorHora * 1.5) + (horasExtra100 * valorHora * 2);
    }

    return Number(salarioTotal.toFixed(2));
}