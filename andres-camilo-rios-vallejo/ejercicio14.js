export function calcularDescuentoLealtad(compras, antiguedad) {
    let suma = 0
    for (let i = 0; i < compras.length; i++) {
        suma += compras[i]
    }
    
    const promedio = suma / compras.length

    if (promedio > 100000 && antiguedad > 2) {
        return "Aplica descuento del 25%"
    } else {
        return "No aplica descuento"
    }
}