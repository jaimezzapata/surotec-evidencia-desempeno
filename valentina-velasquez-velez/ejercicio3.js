
function otorgarBeca(estudiante) {
  if (estudiante.promedio >= 4.5) {
    return true;
  } else if (estudiante.edad > 18 && (estudiante.estrato === 1 || estudiante.estrato === 2) && estudiante.promedio >= 4.0) {
    return true;
  } else {
    return false;
  }
}

module.exports = otorgarBeca;