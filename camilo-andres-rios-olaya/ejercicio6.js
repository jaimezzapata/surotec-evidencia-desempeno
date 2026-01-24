function calcularImpuestos(ventas) {
    let totalImpuestos = 0

    for (let i = 0; i < ventas.length; i++) {
        const venta = ventas[i]
        const iva = venta * 0.19
        
        totalImpuestos += iva

        if (venta > 500000) {
            const retencion = venta * 0.04
            totalImpuestos += retencion
        }
    }

    return totalImpuestos
}