function ejercicio7(contrasena) {
  if (typeof contrasena !== "string" || contrasena.length < 8) {
    return "Insegura"
  }

  let tieneNumero = false
  let tieneEspecial = false

  for (let i = 0; i < contrasena.length; i++) {
    const codigo = contrasena.charCodeAt(i)

    if (codigo >= 48 && codigo <= 57) {
      tieneNumero = true
    } else if (
      (codigo >= 33 && codigo <= 47) ||
      (codigo >= 58 && codigo <= 64) ||
      (codigo >= 91 && codigo <= 96) ||
      (codigo >= 123 && codigo <= 126)
    ) {
      tieneEspecial = true
    }

    if (tieneNumero && tieneEspecial) {
      return "Segura"
    }
  }

  return "Insegura"
}

module.exports = { ejercicio7 }

