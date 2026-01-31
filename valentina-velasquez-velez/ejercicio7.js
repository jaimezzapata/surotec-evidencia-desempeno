function validarContrasena(contrasena) {
  if (contrasena.length < 8) {
    return 'Insegura';
  }
    let tieneNumero = false;
    let tieneCaracterEspecial = false;

    const caracteresEspeciales = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
    for (let i = 0; i < contrasena.length; i++) {
        const char = contrasena[i]; 
        if (char >= '0' && char <= '9') {
            tieneNumero = true;
        }
        if (caracteresEspeciales.indexOf(char) !== -1) {
            tieneCaracterEspecial = true;
        }   
    if (tieneNumero && tieneCaracterEspecial) {
        return 'Segura';
    }           

    }
    return 'Insegura';
}
module.exports = validarContrasena;