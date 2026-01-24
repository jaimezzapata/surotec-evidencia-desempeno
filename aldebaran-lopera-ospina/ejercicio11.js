
export function gestionarAula(grupos, capacidad) {
    let capacidadActual = capacidad;
    let estudiantesFuera = 0;
    let aulaLlena = false;

    for (let grupo of grupos) {

        if (!aulaLlena && grupo <= capacidadActual) {
            capacidadActual -= grupo;
        } else {

            aulaLlena = true;
            estudiantesFuera += grupo;
        }
    }

    return estudiantesFuera;
}