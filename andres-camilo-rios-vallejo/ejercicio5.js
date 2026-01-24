export function controlAsistencia(llegadas) {
    let multaTotal = 0
    let llegadasTardeCriticas = 0

    for (let i = 0; i < llegadas.length; i++) {
        const partes = llegadas[i].split(':')
        const horas = parseInt(partes[0])
        const minutos = parseInt(partes[1])
        
        const tiempoEnMinutos = horas * 60 + minutos
        const limiteEnMinutos = 8 * 60 

        if (tiempoEnMinutos > limiteEnMinutos) {
            const retraso = tiempoEnMinutos - limiteEnMinutos
            multaTotal += retraso * 2 

            if (retraso > 15) {
                llegadasTardeCriticas++
            }
        }
    }

    if (llegadasTardeCriticas > 2) {
        return "Suspendido"
    }

    return multaTotal
}