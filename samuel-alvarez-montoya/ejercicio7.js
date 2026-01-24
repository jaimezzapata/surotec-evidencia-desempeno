function validarContrasena(contrasena) {

    if (contrasena.length < 8) {
        return "Insegura";
    }

    let tieneNumero = false;
    let tieneEspecial = false;
    let caracteresEspeciales = "!@#$%&*?.;,-[]{}()¿";

    for (let i = 0; i < contrasena.length; i++) {
        let caracter = contrasena[i];

        if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
        }

        if (caracteresEspeciales.includes(caracter)) {
            tieneEspecial = true;
        }
    }

    if (tieneNumero && tieneEspecial) {
        return "Segura";
    }

    return "Insegura";
}
