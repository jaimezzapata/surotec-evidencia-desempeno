export function analizarPalabrasProhibidas(texto, prohibidas) {
    const conteo = {};
    const textoLimpio = texto.toLowerCase().replace(/[.,!?;:]/g, "");
    const palabrasEnTexto = textoLimpio.split(/\s+/);

    prohibidas.forEach(prohibida => {
        const palabraBaja = prohibida.toLowerCase();
        conteo[palabraBaja] = 0;

        palabrasEnTexto.forEach(palabra => {
            if (palabra === palabraBaja) {
                conteo[palabraBaja]++;
            }
        });
    });

    return conteo;
}