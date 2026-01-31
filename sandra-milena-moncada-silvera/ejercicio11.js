export function calcularEstudiantesFuera(capacidadMax, grupos) {
    let capacidadActual = 0;
    let estudiantesFuera = 0;
    let aulaLlena = false;

    for (let i = 0; i < grupos.length; i++) {
        let grupoActual = grupos[i];

        if (aulaLlena === false && (capacidadActual + grupoActual) <= capacidadMax) {
            capacidadActual = capacidadActual + grupoActual;
        } else {
            aulaLlena = true;
            estudiantesFuera = estudiantesFuera + grupoActual;
        }
    }

    return estudiantesFuera;
}

