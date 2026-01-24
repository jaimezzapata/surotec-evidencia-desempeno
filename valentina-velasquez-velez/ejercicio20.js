function generarCSV(usuarios) {
  if (usuarios.length === 0) {
    return ''
  }

  const encabezados = Object.keys(usuarios[0]).join(',')
  
  const filas = usuarios.map(usuario => {
    return Object.values(usuario).join(',')
  })

  return [encabezados, ...filas].join('\n')
}

module.exports = generarCSV