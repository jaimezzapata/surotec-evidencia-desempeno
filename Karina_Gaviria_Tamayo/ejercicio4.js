export function calcularTotalCarrito(productos) {
  let contadorElectronica = 0;
  let total = 0;

  for (let producto of productos) {
    if (producto.categoria === "Electronica") {
      contadorElectronica++;
    }
  }

  for (let producto of productos) {
    let precioFinal = producto.precio;

    if (producto.categoria === "Electronica" && contadorElectronica > 3) {
      precioFinal = producto.precio * 0.85;
    }

    total += precioFinal;
  }

  return Math.round(total);
}
