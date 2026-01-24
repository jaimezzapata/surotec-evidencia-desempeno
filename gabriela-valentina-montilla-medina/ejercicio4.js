export function ejercicio4() {
  let productos = []

  for (let i = 0; i < 3; i++) {
    let categoria = prompt("Ingrese la categoría del producto " + (i + 1))
    let precio = Number(prompt("Ingrese el precio del producto " + (i + 1)))

    productos.push({
      categoria: categoria,
      precio: precio
    })
  }

  let contadorElectronica = 0

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].categoria === "Electronica") {
      contadorElectronica++
    }
  }

  let total = 0

  for (let i = 0; i < productos.length; i++) {
    let precioFinal = productos[i[i].precio]

    if (productos[i].categoria === "Electronica" && contadorElectronica > 3) {
      precioFinal = precioFinal * 0.85
    }

    total += precioFinal
  }

  return {
    productos: productos,
    total: total
  }
}
