function calcularDescuentoLealtad(compras, antiguedad, montoProximaCompra) {
    let sumaTotal = 0;

    for (let i = 0; i < compras.length; i++) {
        sumaTotal += compras[i];
    }

    let promedioCompras = sumaTotal / compras.length;

    if (promedioCompras > 100000 && antiguedad > 2) {
        let descuento = montoProximaCompra * 0.25;
        return descuento;
    }

    return 0;
}