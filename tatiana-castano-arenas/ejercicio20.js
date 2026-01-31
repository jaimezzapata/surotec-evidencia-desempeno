export function generarCSV(usuarios) {
    if (!usuarios || usuarios.length === 0) return "";

    
    const cabeceras = Object.keys(usuarios[0]).join(",");

    
    const filas = usuarios.map(usuario => 
        Object.values(usuario).join(",")
    );

    
    return [cabeceras, ...filas].join("\n");
}