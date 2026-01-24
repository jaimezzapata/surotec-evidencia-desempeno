function ejercicio2(productos) {
  const productosModificados = productos.map(function(producto) {
    const productoModificado = {...producto};
    
    if (productoModificado.stock < 5) {
      productoModificado.precio = productoModificado.precio * 1.15;
    } else if (productoModificado.stock > 20) {
      productoModificado.precio = productoModificado.precio * 0.90;
    }
    
    return productoModificado;
  });
  
  return productosModificados;
}

module.exports = { ejercicio2 };