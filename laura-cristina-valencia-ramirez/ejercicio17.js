function detectarFraude(transacciones) {
    if (transacciones.length < 2) return [];

    let sospechosas = [];
    let sumaAcumulada = transacciones[0];

    for (let i = 1; i < transacciones.length; i++) {
        let valorActual = transacciones[i];
        let promedioAnterior = sumaAcumulada / i;

        if (valorActual > (promedioAnterior * 4)) {
            sospechosas.push({
                indice: i,
                valor: valorActual,
                promedioBase: Number(promedioAnterior.toFixed(2))
            });
        }

        sumaAcumulada += valorActual;
    }

    return sospechosas;
}

export { detectarFraude };