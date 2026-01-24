function estadisticasPuntaje(puntajes) {
    if (puntajes.length < 3) {
        return "Error: Se requieren al menos 3 puntajes";
    }

    let ordenados = [...puntajes].sort((a, b) => a - b);

    ordenados.shift();
    ordenados.pop();

    let suma = ordenados.reduce((acc, val) => acc + val, 0);
    let promedio = suma / ordenados.length;

    return Number(promedio.toFixed(2));
}

export { estadisticasPuntaje };