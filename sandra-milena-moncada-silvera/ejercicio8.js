export function calcularEstadisticas(puntajes) {
    if (puntajes.length <= 2) {
        return 0
    }

    let maximo = puntajes[0]
    let minimo = puntajes[0]
    let suma = 0

    for (let i = 0; i < puntajes.length; i++) {
        if (puntajes[i] > maximo) {
            maximo = puntajes[i]
        }
        if (puntajes[i] < minimo) {
            minimo = puntajes[i]
        }
        suma = suma + puntajes[i]
    }

    let sumaRestante = suma - maximo - minimo
    let promedio = sumaRestante / (puntajes.length - 2)

    return Number(promedio.toFixed(2))
}


