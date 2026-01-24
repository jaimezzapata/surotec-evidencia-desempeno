function calcularImpuestosVentas(ventas){
    let totalImpuestos = 0;                 
    for (let venta of ventas) {
        let iva = venta * 0.19;
        let impuestoTotal = iva;
        if (venta > 500000) {
            impuestoTotal += venta * 0.04;
        }
        totalImpuestos += impuestoTotal;
    }
    return totalImpuestos;
}   
module.exports = calcularImpuestosVentas;

