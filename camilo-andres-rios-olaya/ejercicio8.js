function calcularEstadisticas(puntajes) {
    if (puntajes.length < 3) {
        return 0
    }

    let maximo = puntajes[0]
    let minimo = puntajes[0]
    let sumaTotal = 0

    for (let i = 0; i < puntajes.length; i++) {
        const valor = puntajes[i]
        sumaTotal += valor

        if (valor > maximo) {
            maximo = valor
        }

        if (valor < minimo) {
            minimo = valor
        }
    }

    const sumaAjustada = sumaTotal - maximo - minimo
    const cantidadAjustada = puntajes.length - 2

    return sumaAjustada / cantidadAjustada
}