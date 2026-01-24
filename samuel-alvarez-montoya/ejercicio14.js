function calcularDescuentoLealtad(compras, antiguedadAnios) {
    
    let suma = 0;

    for (let i = 0; i < compras.length; i++) {
        suma += compras[i];
    }

    let promedio = suma / compras.length;

    if (promedio > 100000 && antiguedadAnios > 2) {
        return 0.25;
    }

    return 0;
}
