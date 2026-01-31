export function generarCSV(usuarios) {
  let csv = "id,nombre,email\n";

  for (let usuario of usuarios) {
    let fila = usuario.id + "," + usuario.nombre + "," + usuario.email + "\n";
    csv += fila;
  }

  return csv;
}
