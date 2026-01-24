function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return "Insegura"
    }

    let tieneNumero = false
    let tieneCaracterEspecial = false
    const especiales = "!@#$%^&*(),.?\":{}|<>"

    for (let i = 0; i < contrasena.length; i++) {
        const caracter = contrasena[i]

        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true
        }

        if (especiales.includes(caracter)) {
            tieneCaracterEspecial = true
        }
    }

    if (tieneNumero && tieneCaracterEspecial) {
        return "Segura"
    }

    return "Insegura"
}