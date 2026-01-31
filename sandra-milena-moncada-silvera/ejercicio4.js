export function calcularCarrito(productos) {
    const productosElectronica = productos.filter(p => p.categoria === "Electronica");
    const aplicaDescuento = productosElectronica.length > 3;

    const totalProcesado = productos.reduce((acumulado, producto) => {
        let precioFinal = producto.precio;

        if (aplicaDescuento && producto.categoria === "Electronica") {
            precioFinal = producto.precio * 0.85;
        }

        return acumulado + precioFinal;
    }, 0);

    return Number(totalProcesado.toFixed(2));
}

