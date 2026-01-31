export function planificarRuta(destinos) {
    let combustible = 200;
    let rutaViable = [];

    for (let i = 0; i < destinos.length; i++) {
        let tramo = destinos[i];

        if (combustible >= tramo.distancia) {
            rutaViable.push(tramo);
            combustible -= tramo.distancia;
        } else {
            break;
        }
    }

    return rutaViable;
}