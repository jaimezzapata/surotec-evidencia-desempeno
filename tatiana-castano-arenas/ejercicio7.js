export function validarPassword(password) {
    if (password.length < 8) {
        return "Insegura";
    }

    let tieneNumero = false;
    let tieneCaracterEspecial = false;
    const especiales = "!@#$%^&*()-_=+[]{};:'\",.<>/?\\|`~";

    for (let i = 0; i < password.length; i++) {
        const caracter = password[i];

        if (!isNaN(caracter) && caracter !== " ") {
            tieneNumero = true;
        } else if (especiales.includes(caracter)) {
            tieneCaracterEspecial = true;
        }
    }

    return (tieneNumero && tieneCaracterEspecial) ? "Segura" : "Insegura";
}