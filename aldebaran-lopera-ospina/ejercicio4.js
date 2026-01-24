export function calcularTotalCarrito(productos) {
    let total = 0;

    const cantidadElectronica = productos.filter(p => p.categoria === 'Electronica').length;

    for (let producto of productos) {
        let precioFinal = producto.precio;


        if (cantidadElectronica > 3 && producto.categoria === 'Electronica') {
            precioFinal = producto.precio * 0.85; 
        }

        total += precioFinal;
    }

    return total;
}
