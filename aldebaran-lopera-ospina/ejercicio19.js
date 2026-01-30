
export function planificarRuta(ruta) {
    let combustible = 200;
    let rutaPosible = [];

    for (let destino of ruta) {
        if (combustible >= destino.distancia) {
            
            rutaPosible.push(destino.nombre);
            
            combustible -= destino.distancia;
        } else {
            break; 
        }
    }

    return rutaPosible;
}