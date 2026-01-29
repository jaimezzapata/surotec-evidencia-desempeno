function validarContrasena(contrasena) {
    let numero = false;
    let especial = false;

    for (let i = 0; i < contrasena.length; i++) {
        const caracter = contrasena[i]
        
        if (caracter >= "0" && caracter <= "9") {
            numero = true;
        } else if (
            caracter === "!" ||            
            caracter === "@" ||
            caracter === "#" ||
            caracter === "$" ||
            caracter === "%" ||
            caracter === "^" ||
            caracter === "&" ||
            caracter === "*" ||
            caracter === "."
         ) {
            especial = true;
        }
    }

    if (contrasena.length >= 8 && numero && especial) {
        return "Segura";
    }
    return "Insegura";

}