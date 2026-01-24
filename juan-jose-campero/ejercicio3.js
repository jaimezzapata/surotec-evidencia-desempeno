function tendraBeca(estudiante) {
   const condicionPromedioAlto = estudiante.promedio >= 4.5;

   const condicionSocial = estudiante.edad > 18 && (estudiante.estrato === 1 || estudiante.estrato === 2) && estudiante.promedio >= 4.0;

   return condicionPromedioAlto || condicionSocial;
}

export default tendraBeca;