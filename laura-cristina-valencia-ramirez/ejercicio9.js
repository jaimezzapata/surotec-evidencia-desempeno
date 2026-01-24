function calcularNomina(horas, valorHora) {
    let salario = 0;

    if (horas <= 40) {
        salario = horas * valorHora;
    } else if (horas <= 50) {
        let extras = horas - 40;
        salario = (40 * valorHora) + (extras * valorHora * 1.5);
    } else {
        let extrasDobles = horas - 50;
        salario = (40 * valorHora) + (10 * valorHora * 1.5) + (extrasDobles * valorHora * 2);
    }

    return salario;
}

export { calcularNomina };