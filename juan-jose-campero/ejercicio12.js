function pedirDatosTexto() {
    const texto = prompt("Ingrese el texto:");

    if (!texto || !texto.trim()) {
        console.log("Texto inválido.");
        return null;
    }

    const cantidad = parseInt(prompt("Cantidad de palabras prohibidas: "));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Debe ingresar al menos una palabra prohibida.");
        return null;
    }

    const prohibidas = [];

    for (let i = 0; i < cantidad; i++) {
        let palabra = prompt(`Palabra prohibida ${i + 1}: `);

        if (!palabra || !palabra.trim()) {
            console.log("Palabra vacía no permitida.");
            i--;
            continue;
        }

        prohibidas.push(palabra);
    }

    return { texto, prohibidas };
}

function analizarPalabrasProhibidas(texto, prohibidas) {

    if (!texto || !Array.isArray(prohibidas) || prohibidas.length === 0) {
        return {};
    }

    const resultado = {};
    const palabrasTexto = texto
    .toLowerCase()
    .replace(/[.,!?;:]/g, "")
    .split(/\s+/);

    for (const palabra of prohibidas) {
    if (!palabra) continue;
    }

    for (const palabra of prohibidas) {
        let contador = 0;

        for (const palabraTexto of palabrasTexto) {
            if (palabraTexto === palabra.toLowerCase()) {
                contador++;
            }
        }

        resultado[palabra] = contador;
    }

    return resultado;
}


export default analizarPalabrasProhibidas;
export { pedirDatosTexto };

