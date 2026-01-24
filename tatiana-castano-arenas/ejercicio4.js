export function calcularTotalCarrito(productos) {
    const productosElectronica = productos.filter(p => p.categoria === "Electronica");
    const aplicaDescuento = productosElectronica.length > 3;

    const total = productos.reduce((acumulado, producto) => {
        let precioFinal = producto.precio;

        if (producto.categoria === "Electronica" && aplicaDescuento) {
            precioFinal = producto.precio * 0.85;
        }

        return acumulado + precioFinal;
    }, 0);

    return {
        totalGeneral: Number(total.toFixed(2)),
        descuentoAplicado: aplicaDescuento
    };
}