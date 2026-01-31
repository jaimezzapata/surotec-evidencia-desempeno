function actualizarPrecios(productos) {
  return productos.map(producto => {
    let nuevoPrecio = producto.precio

    if (producto.stock < 5) {
      nuevoPrecio *= 1.15
    } else if (producto.stock > 20) {
      nuevoPrecio *= 0.90
    }

    return {
      nombre: producto.nombre,
      stock: producto.stock,
      precio: nuevoPrecio
    }
  })
}

module.exports = actualizarPrecios

