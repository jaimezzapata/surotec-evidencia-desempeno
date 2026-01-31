function evaluar(estudiante) {
    let beca = false;

    if (estudiante.promedio >= 4.5) {
        beca = true;
    } else if (
        estudiante.edad > 18 &&
        (estudiante.estrato === 1 || estudiante.estrato === 2) &&
        estudiante.promedio >= 4.0) 
        {
            beca = true;
        }

        return beca;    
}