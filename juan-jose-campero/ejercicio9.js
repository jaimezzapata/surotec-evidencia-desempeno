function pedirDatosNomina() {
    const horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas en la semana:"));
    const valorHora = parseFloat(prompt("Ingrese el valor de la hora trabajada:"));

    return { horasTrabajadas, valorHora };
}

function calcularSalario(horasTrabajadas, valorHora) {
    let salario = 0;
    if (horasTrabajadas <= 40) {
        salario = horasTrabajadas * valorHora;
    } else if (horasTrabajadas <= 50) {
        const horasExtras = horasTrabajadas - 40;
        salario = (40 * valorHora) + (horasExtras * valorHora * 1.5);
    }
    else {
        const horasExtras =  10;
        const horasAdicionales = horasTrabajadas - 50;

        salario = (40 * valorHora) + (horasExtras * valorHora * 1.5) + (horasAdicionales * valorHora * 2);
    }

    return salario;
}

export default calcularSalario;
export { pedirDatosNomina };