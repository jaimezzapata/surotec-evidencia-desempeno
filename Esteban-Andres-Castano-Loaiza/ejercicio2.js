export function inventario(productos) {
  return productos.map(producto => {
    let nuevoPrecio = producto.precio

    if (producto.stock < 5) {
      nuevoPrecio = producto.precio * 1.15
    } else if (producto.stock > 20) {
      nuevoPrecio = producto.precio * 0.90
    }

    return {
      nombre: producto.nombre,
      stock: producto.stock,
      precio: nuevoPrecio
    }
  })
}
  console.log(inventario( [
    { nombre: 'Producto A', stock: 3, precio: 100 },]    ));   