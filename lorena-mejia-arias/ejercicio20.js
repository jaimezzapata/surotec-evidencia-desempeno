export function ejercicio20() {
  let personas = [
    { id: 1, nombre: "Ana", email: "ana@mail.com" },
    { id: 2, nombre: "Carlos", email: "carlos@mail.com" },
    { id: 3, nombre: "Luisa", email: "luisa@mail.com" }
  ];

  let archivoCSV = crearCSV(personas);
  console.log(archivoCSV);
}

function crearCSV(lista) {
  let salida = "id,nombre,email\n";

  for (let persona of lista) {
    salida += `${persona.id},${persona.nombre},${persona.email}\n`;
  }

  return salida;
}
