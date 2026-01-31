function restriccionEnBiblioteca(prestamos){
    let multas = 0
    let retrasosMayores= false

    const fechaActual = new Date()
    for (let i = 0; i < prestamos.length; i++) {
    multas += prestamos[i].multa 

    const fechaDevolucion = new Date(prestamos[i].fechaDevolucion)
    const diferenciaEnDias = fechaActual - fechaDevolucion
    const diasRetraso = Math.floor(diferenciaEnDias / (1000 * 60 * 60 * 24))
    if(diasRetraso > 10){
        retrasosMayores = true  }
    }
    if( retrasosMayores || multas > 10000){
        return false
    }
    return true
}