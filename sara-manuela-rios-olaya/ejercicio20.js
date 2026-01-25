export function ejercicio20() {
    const usuarios = [
        { id: 1, nombre: "Juan", email: "juan@mail.com" },
        { id: 2, nombre: "Ana", email: "ana@mail.com" },
        { id: 3, nombre: "Luis", email: "luis@mail.com" }
    ];

    let csvContent = "id,nombre,email\n";

    usuarios.forEach(usuario => {
        csvContent += `${usuario.id},${usuario.nombre},${usuario.email}\n`;
    });

    console.log("Formato CSV generado:\n", csvContent);
    return csvContent;
}