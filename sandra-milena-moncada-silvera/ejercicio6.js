export function calcularImpuestos(ventas) {
    let totalImpuestos = 0

    for (let i = 0; i < ventas.length; i++) {
        let ventaActual = ventas[i]
        let iva = ventaActual * 0.19
        let retencion = 0

        if (ventaActual > 500000) {
            retencion = ventaActual * 0.04
        }

        totalImpuestos = totalImpuestos + iva + retencion
    }

    return Number(totalImpuestos.toFixed(2))
}