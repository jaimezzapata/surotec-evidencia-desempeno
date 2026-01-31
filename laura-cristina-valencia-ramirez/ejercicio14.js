function calcularDescuentoLealtad(compras, antiguedad) {
    let total = compras.reduce((acc, val) => acc + val, 0);
    let promedio = total / compras.length;

    if (promedio > 100000 && antiguedad > 2) {
        return 25;
    }

    return 0;
}

export { calcularDescuentoLealtad };