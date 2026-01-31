function capacidadAula (limiteAula, gruposEstudiantes) {
    let ocupados = 0;
    let fueraDelAula = 0;

    for (let i = 0; i < gruposEstudiantes.length; i++) {
        if (ocupados + gruposEstudiantes[i] <= limiteAula) {
            ocupados += gruposEstudiantes[i];
        } else {
            fueraDelAula += gruposEstudiantes[i];
        }
    }

    return fueraDelAula;

}