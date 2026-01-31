function calculadoraImpuestos(ventas) {
    let totalImpuestos = 0;

    for (let venta of ventas) {
        let iva = venta * 0.19;
        let retencion = 0;

        if (venta > 500000) {
            retencion = venta * 0.04;
        }

        totalImpuestos += iva + retencion;
    }

    return totalImpuestos;
}

export { calculadoraImpuestos };