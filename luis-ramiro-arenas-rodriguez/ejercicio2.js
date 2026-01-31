function gestionPrecios (productos) {
    const actualizacion = productos.map(producto => {
        let nuevoPrecio = producto.precio;

        if (producto.stock < 5) {
            nuevoPrecio = producto.precio * 1.15;
        } else if (producto.stock > 20) {
            nuevoPrecio = producto.precio * 0.90;
        }
        return {
            nombre: producto.nombre,
            precio: producto.precio,
            stock: producto.stock
        }
    })
    return actualizacion;
}