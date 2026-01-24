export function ejercicio7() {
  let password = prompt("Ingrese la contraseña")

  if (password.length < 8) {
    return "Insegura"
  }

  let tieneNumero = false
  let tieneEspecial = false
  let especiales = "!@#$%^&*()_+-=[]{}|;:,.<>?/"

  for (let i = 0; i < password.length; i++) {
    let caracter = password[i]

    if (caracter >= "0" && caracter <= "9") {
      tieneNumero = true
    }

    if (especiales.includes(caracter)) {
      tieneEspecial = true
    }
  }

  if (tieneNumero && tieneEspecial) {
    return "Segura"
  }

  return "Insegura"
}
