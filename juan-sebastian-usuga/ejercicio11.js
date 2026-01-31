export function ejercicio11() {
  let capacidadAula = Number(prompt("Ingrese la capacidad del aula"));
  let grupos = [12, 8, 15, 10, 6];

  let estudiantesFuera = calcularEstudiantesFuera(capacidadAula, grupos);

  alert(estudiantesFuera);
}

function calcularEstudiantesFuera(capacidadAula, grupos) {
  let ocupados = 0;
  let fuera = 0;
  let aulaLlena = false;

  for (let i = 0; i < grupos.length; i++) {
    if (!aulaLlena && ocupados + grupos[i] <= capacidadAula) {
      ocupados += grupos[i];
    } else {
      aulaLlena = true;
      fuera += grupos[i];
    }
  }

  return fuera;
}
