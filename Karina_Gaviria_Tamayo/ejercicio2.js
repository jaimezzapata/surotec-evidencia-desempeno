export function ajustarPrecios(productos) {
  let productosAjustados = productos.map((producto) => {
    let nuevoPrecio = producto.precio;

    if (producto.stock < 5) {
      nuevoPrecio = Math.round(producto.precio * 1.15);
    } else if (producto.stock > 20) {
      nuevoPrecio = Math.round(producto.precio * 0.9);
    }

    return {
      nombre: producto.nombre,
      stock: producto.stock,
      precio: nuevoPrecio,
    };
  });

  return productosAjustados;
}
