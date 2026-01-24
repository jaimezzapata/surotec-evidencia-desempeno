export function ejercicio20() {
  let cantidad = Number(prompt("Ingrese la cantidad de usuarios"))
  let usuarios = []

  for (let i = 0; i < cantidad; i++) {
    let id = prompt("Ingrese el ID del usuario")
    let nombre = prompt("Ingrese el nombre del usuario")
    let email = prompt("Ingrese el email del usuario")

    usuarios.push({ id, nombre, email })
  }

  // Construimos el CSV
  let csv = "id,nombre,email\n" // encabezado

  for (let i = 0; i < usuarios.length; i++) {
    csv += `${usuarios[i].id},${usuarios[i].nombre},${usuarios[i].email}\n`
  }

  return csv
}
