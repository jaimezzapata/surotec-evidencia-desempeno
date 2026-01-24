function ejercicio2(productos) {
  return productos.map((producto) => {
    let precio = producto.precio

    if (producto.stock < 5) {
      precio = precio * 1.15
    } else if (producto.stock > 20) {
      precio = precio * 0.9
    }

    return {
      nombre: producto.nombre,
      stock: producto.stock,
      precio: precio
    }
  })
}

module.exports = { ejercicio2 }