export function evaluarAsistencia(llegadas) {
    let multaTotal = 0
    let vecesMuyTarde = 0

    for (let i = 0; i < llegadas.length; i++) {
        let horaTexto = llegadas[i]
        
        let hora = Number(horaTexto[0] + horaTexto[1])
        let minutos = Number(horaTexto[3] + horaTexto[4])

        let minutosTotales = (hora * 60) + minutos
        let limite = 480 

        if (minutosTotales > limite) {
            let retraso = minutosTotales - limite
            multaTotal = multaTotal + (retraso * 2)

            if (retraso > 15) {
                vecesMuyTarde = vecesMuyTarde + 1
            }
        }
    }

    if (vecesMuyTarde > 2) {
        return "Suspendido"
    }

    return "Multa total: $" + multaTotal
}