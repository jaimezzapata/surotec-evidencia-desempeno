
function carritoDescuentoCategoria(productos) {
  const cantidadElectronica = productos.filter(
    producto => producto.categoria === 'Electronica'
  ).length

  return productos.reduce((total, producto) => {
    let precioFinal = producto.precio

    if (producto.categoria === 'Electronica' && cantidadElectronica > 3) {
      precioFinal = precioFinal * 0.85
    }

    return total + precioFinal
  }, 0)
}

module.exports = carritoDescuentoCategoria
