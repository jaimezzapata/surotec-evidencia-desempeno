function Carrito(productos) {
    let totalGeneral = 0
    let totalElectronica = 0
    let cantidadElectronica = 0

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i]
        totalGeneral += producto.precio

        if (producto.categoria === 'Electronica') {
            cantidadElectronica++
            totalElectronica += producto.precio
        }
    }

    if (cantidadElectronica > 3) {
        const descuento = totalElectronica * 0.15
        totalGeneral -= descuento
    }

    return totalGeneral
}