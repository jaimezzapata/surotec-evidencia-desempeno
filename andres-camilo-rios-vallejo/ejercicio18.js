export function verificarPrestamo(prestamos) {
    let totalMultas = 0
    
    for (let i = 0; i < prestamos.length; i++) {
        const prestamo = prestamos[i]
        totalMultas += prestamo.multa

        if (prestamo.diasRetraso > 10) {
            return "Préstamo Denegado (Libro con mucho retraso)"
        }
    }

    if (totalMultas > 10000) {
        return "Préstamo Denegado (Multas superan $10.000)"
    }

    return "Préstamo Aprobado"
}