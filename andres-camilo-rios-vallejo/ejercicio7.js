export function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return "Insegura"
    }

    let tieneNumero = false
    let tieneEspecial = false
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;':\",./<>?"

    for (let i = 0; i < contrasena.length; i++) {
        const caracter = contrasena[i]

        if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true
        }

        for (let j = 0; j < caracteresEspeciales.length; j++) {
            if (caracter === caracteresEspeciales[j]) {
                tieneEspecial = true
            }
        }
    }

    if (tieneNumero && tieneEspecial) {
        return "Segura"
    } else {
        return "Insegura"
    }
}