export function estadisticasPuntaje(puntajes) {
    if (puntajes.length < 3) {
        return 0
    }

    let maximo = puntajes[0]
    let minimo = puntajes[0]
    let sumaTotal = 0

    for (let i = 0; i < puntajes.length; i++) {
        let numero = puntajes[i]

        if (numero > maximo) {
            maximo = numero
        }

        if (numero < minimo) {
            minimo = numero
        }

        sumaTotal += numero
    }

    let sumaRestante = sumaTotal - maximo - minimo
    let cantidadRestante = puntajes.length - 2
    let promedio = sumaRestante / cantidadRestante

    return promedio
}