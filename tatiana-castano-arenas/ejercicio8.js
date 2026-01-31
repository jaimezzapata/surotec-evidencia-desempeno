export function calcularEstadisticas(puntajes) {
    if (puntajes.length <= 2) {
        return "Error: Se requieren más de 2 puntajes para calcular el promedio restante";
    }

    const maximo = Math.max(...puntajes);
    const minimo = Math.min(...puntajes);

    const filtrados = puntajes.filter(p => p !== maximo && p !== minimo);

    if (filtrados.length === 0) {
        return "Error: Todos los valores son iguales";
    }

    const suma = filtrados.reduce((acumulado, valor) => acumulado + valor, 0);
    const promedio = suma / filtrados.length;

    return {
        maximo,
        minimo,
        promedioRestante: Number(promedio.toFixed(2))
    };
}