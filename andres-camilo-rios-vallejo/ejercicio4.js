export function calcularTotalCarrito(productos) {
    let contadorElectronica = 0
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria === 'Electronica') {
            contadorElectronica++
        }
    }

    let total = 0
    const aplicarDescuento = contadorElectronica > 3

    for (let i = 0; i < productos.length; i++) {
        let precioFinal = productos[i].precio
        if (productos[i].categoria === 'Electronica' && aplicarDescuento) {
            precioFinal = precioFinal * 0.85 
        }
        total += precioFinal
    }

    return total
}