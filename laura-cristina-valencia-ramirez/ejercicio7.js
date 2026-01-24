function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return "Insegura";
    }

    let tieneNumero = false;
    let tieneEspecial = false;
    let numeros = "0123456789";
    let especiales = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    for (let i = 0; i < contrasena.length; i++) {
        let caracter = contrasena[i];

        if (numeros.includes(caracter)) {
            tieneNumero = true;
        }

        if (especiales.includes(caracter)) {
            tieneEspecial = true;
        }
    }

    if (tieneNumero && tieneEspecial) {
        return "Segura";
    }

    return "Insegura";
}

export { validarContrasena };