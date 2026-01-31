function inventarioPreciosDinamicos(productos) {
  return productos.map(producto => {
    let precioFinal = producto.precio

    if (producto.stock < 5) {
      precioFinal = precioFinal * 1.15
    } else if (producto.stock > 20) {
      precioFinal = precioFinal * 0.9
    }

    return {
      nombre: producto.nombre,
      stock: producto.stock,
      precio: Number(precioFinal.toFixed(2))
    }
  })
}

module.exports = inventarioPreciosDinamicos
