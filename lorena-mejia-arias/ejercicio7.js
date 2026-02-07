export function ejercicio7() {
  let clave = prompt("Ingrese la contraseña");
  alert(evaluarClave(clave));
}

function evaluarClave(texto) {
  if (texto.length < 8) {
    return "Insegura";
  }

  let contieneNumero = false;
  let contieneSimbolo = false;

  for (let pos = 0; pos < texto.length; pos++) {
    let ascii = texto.charCodeAt(pos);

    if (ascii >= 48 && ascii <= 57) {
      contieneNumero = true;
    } else if (
      !(ascii >= 65 && ascii <= 90) &&
      !(ascii >= 97 && ascii <= 122)
    ) {
      contieneSimbolo = true;
    }
  }

  return contieneNumero && contieneSimbolo ? "Segura" : "Insegura";
}
