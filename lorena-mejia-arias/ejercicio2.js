function recalcularInventario(lista) {
  let salida = [];

  for (let item of lista) {
    let precioFinal = item.precio;

    if (item.stock < 5) {
      precioFinal *= 1.15;
    }

    if (item.stock > 20) {
      precioFinal *= 0.9;
    }

    salida.push({
      nombre: item.nombre,
      stock: item.stock,
      precio: Math.round(precioFinal),
    });
  }

  return salida;
}

export function ejercicio2() {
  let inventario = [
    { nombre: "Arroz", stock: 3, precio: 2500 },
    { nombre: "Azucar", stock: 10, precio: 1800 },
    { nombre: "Cafe", stock: 25, precio: 4200 },
  ];

  let actualizado = recalcularInventario(inventario);
  alert(JSON.stringify(actualizado));
}


