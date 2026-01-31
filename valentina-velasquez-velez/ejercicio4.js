function calcularTotalCarrito(productos) {
  let total = 0
  let totalElectronica = 0
  let cantidadElectronica = 0

  for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio

    if (productos[i].categoria === 'Electronica') {
      cantidadElectronica++
      totalElectronica += productos[i].precio
    }
  }

  if (cantidadElectronica > 3) {
    total -= (totalElectronica * 0.15)
  }

  return total
}

module.exports = calcularTotalCarrito