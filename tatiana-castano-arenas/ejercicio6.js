export function calcularImpuestosVentas(ventas) {
    const tasaIva = 0.19;
    const tasaRetencion = 0.04;
    const umbralRetencion = 500000;

    let totalImpuestos = ventas.reduce((acumulado, venta) => {
        let impuestoVenta = venta * tasaIva;

        if (venta > umbralRetencion) {
            impuestoVenta += venta * tasaRetencion;
        }

        return acumulado + impuestoVenta;
    }, 0);

    return Number(totalImpuestos.toFixed(2));
}