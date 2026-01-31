function verificarEstadoUsuario(prestamos) {
    let hoy = new Date();
    let totalMultas = 0;

    for (let prestamo of prestamos) {
        totalMultas += prestamo.multa;

        let fechaLimite = new Date(prestamo.fechaDevolucion);
        
        // Calculamos la diferencia en milisegundos y la pasamos a días
        if (hoy > fechaLimite) {
            let diferenciaTiempo = hoy - fechaLimite;
            let diasRetraso = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

            if (diasRetraso > 10) {
                return "Inhabilitado: Tiene un libro con más de 10 días de retraso.";
            }
        }
    }

    if (totalMultas > 10000) {
        return "Inhabilitado: Las multas superan los $10.000.";
    }

    return "Habilitado";
}

export { verificarEstadoUsuario };