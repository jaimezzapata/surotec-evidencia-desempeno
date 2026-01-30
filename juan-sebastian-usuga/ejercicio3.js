export function ejercicio3() {
  let estudiante = {
    promedio: Number(prompt("Ingrese el promedio")),
    edad: Number(prompt("Ingrese la edad")),
    estrato: Number(prompt("Ingrese el estrato")),
  };

  let tieneBeca = evaluarBeca(estudiante);

  alert(tieneBeca);
}

function evaluarBeca(estudiante) {
  if (estudiante.promedio >= 4.5) {
    return true;
  }

  if (
    estudiante.edad > 18 &&
    (estudiante.estrato === 1 || estudiante.estrato === 2) &&
    estudiante.promedio >= 4.0
  ) {
    return true;
  }

  return false;
}
