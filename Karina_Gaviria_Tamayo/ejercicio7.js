export function validarPassword(password) {
  if (password.length < 8) {
    return "Insegura";
  }

  let tieneNumero = false;
  let tieneEspecial = false;
  const especiales = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  const numeros = "0123456789";

  for (let caracter of password) {
    if (numeros.includes(caracter)) {
      tieneNumero = true;
    } else if (especiales.includes(caracter)) {
      tieneEspecial = true;
    }
  }

  if (tieneNumero && tieneEspecial) {
    return "Segura";
  } else {
    return "Insegura";
  }
}
