function validadorContrasenas(contrasena) {
  if (contrasena.length < 8) {
    return 'Insegura'
  }

  let tieneNumero = false
  let tieneEspecial = false
  const especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  for (let i = 0; i < contrasena.length; i++) {
    const caracter = contrasena[i]

    if (caracter >= '0' && caracter <= '9') {
      tieneNumero = true
    }

    if (especiales.includes(caracter)) {
      tieneEspecial = true
    }
  }

  if (tieneNumero && tieneEspecial) {
    return 'Segura'
  }

  return 'Insegura'
}

module.exports = validadorContrasenas
