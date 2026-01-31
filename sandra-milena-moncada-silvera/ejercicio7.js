export function validarPassword(password) {
    if (password.length < 8) {
        return "Insegura"
    }

    let tieneNumero = false
    let tieneEspecial = false
    let caracteresEspeciales = "!@#$%^&*()-_=+[]{};:,.<>?/"

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i]

        if (caracter >= "0" && caracter <= "9") {
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
    }

    return "Insegura"
}

