//Ejercicio 2
export function ejercicio2() {
  let cantidadProductos = Number(prompt("Ingrese la cantidad de productos"))
  let productos = []

  for (let i = 0; i < cantidadProductos; i++) {
    let nombre = prompt("Ingrese el nombre del producto")
    let stock = Number(prompt("Ingrese el stock del producto"))
    let precio = Number(prompt("Ingrese el precio del producto"))

    productos.push({
      nombre: nombre,
      stock: stock,
      precio: precio
    })
  }

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].stock < 5) {
      productos[i].precio = productos[i].precio * 1.15
    } else if (productos[i].stock > 20) {
      productos[i].precio = productos[i].precio * 0.9
    }
  }

  return productos
}
