export function monitorearTransacciones(transacciones) {
    let sospechosas = []
    let suma = transacciones[0]

    // Empezamos desde la segunda transacción (índice 1)
    for (let i = 1; i < transacciones.length; i++) {
        const promedio = suma / i
        const actual = transacciones[i]

        // Superar por más del 300% equivale a ser mayor que 4 veces el promedio
        if (actual > (promedio * 4)) {
            sospechosas.push({ 
                posicion: i, 
                monto: actual, 
                estado: "Sospechosa" 
            })
        }
        
        suma += actual
    }
    return sospechosas
}