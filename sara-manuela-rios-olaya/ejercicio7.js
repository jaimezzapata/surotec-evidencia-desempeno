export function ejercicio7() {
    const contrasenaIngresada = prompt("Ingrese la contraseña a validar:");
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;':\",./<>? ";
    const numeros = "0123456789";

    let tieneNumero = false;
    let tieneCaracterEspecial = false;

    if (contrasenaIngresada.length < 8) {
        alert("Contraseña Insegura: Debe tener al menos 8 caracteres.");
        return "Insegura";
    }

    for (let indice = 0; indice < contrasenaIngresada.length; indice++) {
        const caracterActual = contrasenaIngresada[indice];

        if (numeros.includes(caracterActual)) {
            tieneNumero = true;
        } else if (caracteresEspeciales.includes(caracterActual)) {
            tieneCaracterEspecial = true;
        }
    }

    if (tieneNumero && tieneCaracterEspecial) {
        alert("La contraseña es Segura");
        return "Segura";
    }

    alert("Contraseña Insegura: Falta un número o un carácter especial.");
    return "Insegura";
}