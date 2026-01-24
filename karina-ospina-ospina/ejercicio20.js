function ejercicio20(usuarios) {
  if (!Array.isArray(usuarios)) {
    return ""
  }

  let csv = "id,nombre,email"

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i] || {}
    const id = usuario.id !== undefined && usuario.id !== null ? String(usuario.id) : ""
    const nombre = usuario.nombre !== undefined && usuario.nombre !== null ? String(usuario.nombre) : ""
    const email = usuario.email !== undefined && usuario.email !== null ? String(usuario.email) : ""

    csv += `\n${id},${nombre},${email}`
  }

  return csv
}

module.exports = { ejercicio20 }
