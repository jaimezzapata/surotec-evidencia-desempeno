function generadorCSV(usuarios) {
  if (usuarios.length === 0) {
    return ''
  }

  let csv = 'id,nombre,email\n'

  for (let i = 0; i < usuarios.length; i++) {
    csv +=
      usuarios[i].id + ',' +
      usuarios[i].nombre + ',' +
      usuarios[i].email

    if (i < usuarios.length - 1) {
      csv += '\n'
    }
  }

  return csv
}

module.exports = generadorCSV
