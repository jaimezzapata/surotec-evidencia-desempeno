function validadorDeContrasenas(password) {
  if (password.length < 8) {
    return 'Insegura'
  }

  let tieneNumero = false
  let tieneCaracterEspecial = false
  const especiales = '!@#$%^&*(),.?":{}|<>'

  for (let i = 0; i < password.length; i++) {
    const char = password[i]
    if (!isNaN(parseInt(char))) {
      tieneNumero = true
    }
    if (especiales.includes(char)) {
      tieneCaracterEspecial = true
    }
  }

  if (tieneNumero && tieneCaracterEspecial) {
    return 'Segura'
  }

  return 'Insegura'
}
