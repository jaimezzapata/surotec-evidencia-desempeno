export const datosNominaPrueba = { horas: 40, valorHora: 20000 };

export function calcularNomina(horasTrabajadas, valorHora) {
    let normal = 0;
    let extra50 = 0;
    let extra100 = 0;

    if (horasTrabajadas <= 40) {
        normal = horasTrabajadas * valorHora;
    } else if (horasTrabajadas <= 50) {
        normal = 40 * valorHora;
        extra50 = (horasTrabajadas - 40) * (valorHora * 1.5);
    } else {
        normal = 40 * valorHora;
        extra50 = 10 * (valorHora * 1.5);
        extra100 = (horasTrabajadas - 50) * (valorHora * 2);
    }

    const total = normal + extra50 + extra100;

    return {
        normal: Number(normal.toFixed(2)),
        extra50: Number(extra50.toFixed(2)),
        extra100: Number(extra100.toFixed(2)),
        total: Number(total.toFixed(2))
    };
}