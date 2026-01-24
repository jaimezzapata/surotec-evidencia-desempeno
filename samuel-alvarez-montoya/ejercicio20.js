function generarCsvUsuarios(usuarios) {
    let csv = "";

    for (let i = 0; i < usuarios.length; i++) {
        csv += usuarios[i].id + ", " +
               usuarios[i].nombre + ", " +
               usuarios[i].email;

        if (i < usuarios.length - 1) {
            csv += "\n";
        }
    }

    return csv;
}
