function carritoConDescuento(productos) {
    let electronicos = productos.filter(p => p.categoria === 'Electronica').length;
    let total = 0;

    productos.forEach(producto => {
        let precioFinal = producto.precio;

        if (electronicos > 3 && producto.categoria === 'Electronica') {
            precioFinal = producto.precio * 0.85; 
        }

        total += precioFinal;
    });

    return total;
}

export { carritoConDescuento };