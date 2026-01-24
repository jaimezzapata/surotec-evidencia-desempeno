function restriccionBiblioteca(prestamos) {
    let multaTotal = 0;

    for (let prestamo of prestamos) {
        if (prestamo.diasAtraso > 10) {
            return false;
        }
        multaTotal +=prestamo.multa;
    }
    if (multaTotal > 10000) {
        return false;
    }
    return true;
}
module.exports = restriccionBiblioteca;
