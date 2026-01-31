function generadorCSV(usuarios) {
  let csv = "id, nombre, email\n";

  for (let i = 0; i < usuarios.length; i++) {
    csv +=
      usuarios[i].id +
      ", " +
      usuarios[i].nombre +
      ", " +
      usuarios[i].email +
      "\n";
  }

  return csv;
}
