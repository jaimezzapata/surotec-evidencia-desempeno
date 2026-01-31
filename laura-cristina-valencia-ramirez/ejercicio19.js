function planificarRuta(destinos) {
    let combustible = 200;
    let rutaViable = [];

    for (let destino of destinos) {
        if (combustible >= destino.distancia) {
            rutaViable.push(destino.nombre);
            combustible -= destino.distancia;
        } else {
            // Si no alcanza para el siguiente, terminamos la planificación aquí
            break;
        }
    }

    return rutaViable;
}

export { planificarRuta };