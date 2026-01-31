export function calcularEstudiantesFuera(capacidadTotal, grupos) {
    let capacidadRestante = capacidadTotal;
    let totalEstudiantes = 0;

    for (let i = 0; i < grupos.length; i++) {
        totalEstudiantes += grupos[i];
    }

    let estudiantesQueEntraron = 0;
    for (let i = 0; i < grupos.length; i++) {
        const estudiantesGrupo = grupos[i];

        if (estudiantesGrupo <= capacidadRestante) {
            estudiantesQueEntraron += estudiantesGrupo;
            capacidadRestante -= estudiantesGrupo;
        } else {
            estudiantesQueEntraron += capacidadRestante;
            capacidadRestante = 0;
            break;
        }
    }

    return totalEstudiantes - estudiantesQueEntraron;
}