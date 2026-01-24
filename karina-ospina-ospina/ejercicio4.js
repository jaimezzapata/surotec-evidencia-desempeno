function ejercicio4(productos) {
  let total = 0;
  let contadorElectronica = 0;
  
  productos.forEach(function(producto) {
    if (producto.categoria === "Electronica") {
      contadorElectronica++;
    }
  });
  
  productos.forEach(function(producto) {
    let precioProducto = producto.precio;
    
    if (producto.categoria === "Electronica" && contadorElectronica > 3) {
      precioProducto = precioProducto * 0.85;
    }
    
    total += precioProducto;
  });
  
  return total;
}

module.exports = { ejercicio4 };