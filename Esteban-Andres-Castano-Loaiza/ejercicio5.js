function controlDeAsistencia(Llegadas) {
    let sanciones = 0
    let retardosGraves = 0
    const limiteLlegada = 480

    for (let i = 0; i < reporteLlegadas.length; i++) {
        const tiempo = Llegadas[i].split(':')
        const horas = parseInt(tiempo[0])
        const minutos = parseInt(tiempo[1])
        const minutosTotales = horas * 60 + minutos

        if (minutosTotales > limiteLlegada) {
            const diferencia = minutosTotales - limiteLlegada
            sanciones += diferencia * 2

            if (diferencia > 15) {
                retardosGraves++
            }
        }
    }

    if (retardosGraves > 2) {
        return "Suspendido"
    }

    return sanciones
}