export const listaUsuariosPrueba = [
    { id: 1, nombre: "Juan Perez", email: "juan@example.com" },
    { id: 2, nombre: "Maria Lopez", email: "maria@example.com" },
    { id: 3, nombre: "Carlos Ruiz", email: "carlos@example.com" }
];

export function generarYDescargarCsv(usuarios) {
    if (usuarios.length === 0) return;

    const cabecera = Object.keys(usuarios[0]).join(",");
    const filas = usuarios.map(usuario => Object.values(usuario).join(","));
    const contenidoCsv = [cabecera, ...filas].join("\n");

    const blob = new Blob([contenidoCsv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const enlace = document.createElement("a");
    enlace.setAttribute("href", url);
    enlace.setAttribute("download", "usuarios_registrados.csv");
    enlace.style.visibility = 'hidden';
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    
    URL.revokeObjectURL(url);

    return contenidoCsv; 
}