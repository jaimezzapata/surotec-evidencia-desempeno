function pedirDatosAula() {
    const capacidad = parseInt(prompt("Ingrese la capacidad del aula: "));
    if (isNaN(capacidad) || capacidad <= 0) {
        return null;
    }

    const cantidadGrupos = parseInt(prompt("Cantidad de grupos: "));
    if (isNaN(cantidadGrupos) || cantidadGrupos <= 0) {
        return null;
    }

    const grupos = [];

    for (let i = 0; i < cantidadGrupos; i++) {
        let alumnos = parseInt(prompt(`Estudiantes del grupo ${i + 1}: `));

        if (isNaN(alumnos) || alumnos < 0) {
            i--; // repite el grupo
            continue;
        }

        grupos.push(alumnos);
    }

    return { capacidad, grupos };
}


function estudiantesFuera(capacidad, grupos) {
    let ocupados = 0;
    let fuera = 0;

    for (const grupo of grupos) {
        if (ocupados + grupo <= capacidad) {
            ocupados += grupo;
        } else {
            fuera += grupo;
        }
    }

    return fuera;
}



export default estudiantesFuera;
export { pedirDatosAula };