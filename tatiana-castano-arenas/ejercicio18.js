export function validarPrestamoBiblioteca(prestamos, multaMaxima = 10000, diasMaximoRetraso = 10) {
    const hoy = new Date("2024-05-20"); // Fecha de referencia simulada para la prueba
    let multaTotal = 0;
    let tieneRetrasoGrave = false;

    prestamos.forEach(prestamo => {
        multaTotal += prestamo.multa;
        
        const fechaDevolucion = new Date(prestamo.fechaDevolucion);
        const diferenciaTiempo = hoy - fechaDevolucion;
        const diasRetraso = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

        if (diasRetraso > diasMaximoRetraso) {
            tieneRetrasoGrave = true;
        }
    });

    if (tieneRetrasoGrave) {
        return { concedido: false, motivo: "Tiene un libro con más de 10 días de retraso." };
    }

    if (multaTotal > multaMaxima) {
        return { concedido: false, motivo: `La multa acumulada ($${multaTotal}) supera el límite de $10.000.` };
    }

    return { concedido: true, motivo: "Préstamo autorizado." };
}