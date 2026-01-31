export function gestionarAula(capacidad, grupos) {
    let ocupacion = 0
    let totalFuera = 0

    for (let i = 0; i < grupos.length; i++) {
        const grupo = grupos[i]
        if (ocupacion + grupo <= capacidad) {
            ocupacion += grupo
        } else {
            totalFuera += grupo
        }
    }

    return totalFuera
}