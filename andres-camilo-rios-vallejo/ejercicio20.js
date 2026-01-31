export function generarCSV(usuarios) {
    let csv = "id,nombre,email\n"
    
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i]
        csv += usuario.id + "," + usuario.nombre + "," + usuario.email
        
        if (i < usuarios.length - 1) {
            csv += "\n"
        }
    }
    return csv
}