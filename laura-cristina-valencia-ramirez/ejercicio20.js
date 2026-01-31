function generarReporteCSV(usuarios) {
    if (usuarios.length === 0) {
        return "";
    }

    let csv = "id,nombre,email\n";

    for (let usuario of usuarios) {
        csv += `${usuario.id},${usuario.nombre},${usuario.email}\n`;
    }

    return csv.trim();
}

export { generarReporteCSV };