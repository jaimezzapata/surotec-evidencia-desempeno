export function verificarPrestamo(prestamos) {
    let multaTotal = 0;
    let tieneRetrasoGrave = false;

    for (let i = 0; i < prestamos.length; i++) {
        multaTotal += prestamos[i].multa;

        if (prestamos[i].diasRetraso > 10) {
            tieneRetrasoGrave = true;
        }
    }

    if (tieneRetrasoGrave || multaTotal > 10000) {
        return "Préstamo Denegado";
    }

    return "Préstamo Autorizado";
}