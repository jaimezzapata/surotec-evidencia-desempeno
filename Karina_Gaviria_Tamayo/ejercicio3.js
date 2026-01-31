export function evaluarBeca(estudiante) {
  const { promedio, edad, estrato } = estudiante;

  if (promedio >= 4.5) {
    return true;
  }

  if (edad > 18 && (estrato === 1 || estrato === 2) && promedio >= 4.0) {
    return true;
  }

  return false;
}
