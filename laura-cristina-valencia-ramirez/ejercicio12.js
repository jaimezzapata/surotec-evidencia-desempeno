function verificarPalabrasProhibidas(texto, listaProhibida) {
    let reporte = {};
    let textoMin = texto.toLowerCase();

    listaProhibida.forEach(palabra => {
        let pMin = palabra.trim().toLowerCase();
        
        if (pMin) {
            let partes = textoMin.split(pMin);
            let cantidad = partes.length - 1;

            if (cantidad > 0) {
                reporte[palabra.trim()] = cantidad;
            }
        }
    });

    return reporte;
}

export { verificarPalabrasProhibidas };