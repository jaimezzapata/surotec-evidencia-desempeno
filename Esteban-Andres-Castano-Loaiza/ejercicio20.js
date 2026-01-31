function generacionCSV(usuarios) {
    const encabezados = "id,nombre,email"
    
    const filas = usuarios.map(usuario => {
        return usuario.id + "," + usuario.nombre + "," + usuario.email
    })
    
    return encabezados + "\n" + filas.join("\n")
}