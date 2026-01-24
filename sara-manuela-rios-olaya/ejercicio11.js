export function ejercicio11(){
    const capacidadMaximaAula = 25; 
    const gruposDeEstudiantes = [8, 12, 5, 10, 4];

    let estudiantesDentroDelAula = 0;
    let indiceGrupoActual = 0; 

    while (indiceGrupoActual < gruposDeEstudiantes.length){
        const cantidadEstudiantesGrupo = gruposDeEstudiantes[indiceGrupoActual];
        if(estudiantesDentroDelAula + cantidadEstudiantesGrupo <= capacidadMaximaAula){
            estudiantesDentroDelAula += cantidadEstudiantesGrupo;
            indiceGrupoActual++;
        } else{
            break;
        }
    }
    let estudiantesFueraDelAula = 0; 
    for(let i = indiceGrupoActual; i < gruposDeEstudiantes.length; i++){
        estudiantesFueraDelAula += gruposDeEstudiantes[i];
    }
    alert(`Aula llena con: ${estudiantesDentroDelAula} estudiantes. Quedaron fuera: ${estudiantesFueraDelAula} estudiantes`);
    return estudiantesFueraDelAula;

}