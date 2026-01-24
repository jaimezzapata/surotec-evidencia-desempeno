function monitorearTransacciones(transacciones) {
    const alertas = []
    let sumaAcumulada = 0

    for (let i = 0; i < transacciones.length; i++) {
        const valorActual = transacciones[i]

        if (i > 0) {
            const promedioAnterior = sumaAcumulada / i
            if (valorActual > (promedioAnterior * 4)) {
                alertas.push({
                    valor: valorActual,
                    estado: "Sospechosa"
                })
            }
        }

        sumaAcumulada += valorActual
    }

    return alertas
}