function gestionarAula(grupos, capacidad) {
    let ocupacion = 0;
    let fuera = 0;
    let puertaCerrada = false;

    for (let grupo of grupos) {
        if (!puertaCerrada && ocupacion + grupo <= capacidad) {
            ocupacion += grupo;
        } else {
            puertaCerrada = true;
            fuera += grupo;
        }
    }

    return fuera;
}

export { gestionarAula };