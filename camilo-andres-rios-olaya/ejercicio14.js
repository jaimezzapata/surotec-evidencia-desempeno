function calcularDescuentoLealtad(compras, antiguedad) {
    let sumaTotal = 0

    for (let i = 0; i < compras.length; i++) {
        sumaTotal += compras[i]
    }

    const promedio = sumaTotal / compras.length

    if (promedio > 100000 && antiguedad > 2) {
        return 25
    }

    return 0
}