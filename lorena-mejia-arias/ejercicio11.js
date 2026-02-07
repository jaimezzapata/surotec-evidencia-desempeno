export function ejercicio11() {
  let limiteAula = Number(prompt("Ingrese la capacidad del aula"));
  let tamanosGrupos = [12, 8, 15, 10, 6];

  let sobrantes = calcularExceso(limiteAula, tamanosGrupos);
  alert(sobrantes);
}

function calcularExceso(capacidad, grupos) {
  let usados = 0;
  let excluidos = 0;
  let sinEspacio = false;

  for (let i = 0; i < grupos.length; i++) {
    if (!sinEspacio && usados + grupos[i] <= capacidad) {
      usados += grupos[i];
    } else {
      sinEspacio = true;
      excluidos += grupos[i];
    }
  }

  return excluidos;
}
