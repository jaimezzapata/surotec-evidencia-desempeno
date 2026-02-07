export function ejercicio15() {
  let pendientes = [
    { descripcion: "Entregar informe", prioridad: "alta", dias: 1 },
    { descripcion: "Responder correos", prioridad: "media", dias: 1 },
    { descripcion: "Pagar factura", prioridad: "alta", dias: 3 },
    { descripcion: "Preparar exposicion", prioridad: "alta", dias: 0 },
  ];

  let urgentes = obtenerUrgentes(pendientes);
  alert(JSON.stringify(urgentes));
}

function obtenerUrgentes(lista) {
  let filtradas = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].prioridad === "alta" && lista[i].dias < 2) {
      filtradas.push(lista[i]);
    }
  }

  return filtradas;
}
