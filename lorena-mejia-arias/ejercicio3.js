function validarBeca(datos) {
  if (datos.promedio >= 4.5) {
    return true;
  }

  return (
    datos.edad > 18 &&
    datos.promedio >= 4.0 &&
    (datos.estrato === 1 || datos.estrato === 2)
  );
}

export function ejercicio3() {
  let datosEstudiante = {
    promedio: Number(prompt("Promedio del estudiante")),
    edad: Number(prompt("Edad del estudiante")),
    estrato: Number(prompt("Estrato del estudiante")),
  };

  alert(validarBeca(datosEstudiante));
}
