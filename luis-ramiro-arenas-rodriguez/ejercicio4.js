function carritoDescuento(bienes) {
  let total = 0;
  let electronicaTotal = 0;

  bienes.forEach((producto) => {
    if (producto.categoria === "Electrónica") {
      electronicaTotal++;
    }
  });

  bienes.forEach(producto => {
    let precioFinal = producto.precio;

    if (producto.categoria === "Electrónica" && electronicaTotal > 3) {
        precioFinal = producto.precio * 0.85
    }
    
    total += precioFinal;
  })

  return total;
}
