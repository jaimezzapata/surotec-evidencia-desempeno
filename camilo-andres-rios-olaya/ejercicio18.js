function verificarPrestamo(prestamos) {
    let totalMultas = 0

    for (let i = 0; i < prestamos.length; i++) {
        const prestamo = prestamos[i]

        if (prestamo.diasRetraso > 10) {
            return false
        }

        totalMultas += prestamo.multa
    }

    if (totalMultas > 10000) {
        return false
    }

    return true
}