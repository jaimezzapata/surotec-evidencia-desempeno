
export function analizarPalabras(texto, listaProhibida) {
    let reporte = {};

    for (let palabra of listaProhibida) {

        const regex = new RegExp(`\\b${palabra}\\b`, 'gi');
        
        const coincidencias = texto.match(regex);

        reporte[palabra] = coincidencias ? coincidencias.length : 0;
    }

    return reporte;
}