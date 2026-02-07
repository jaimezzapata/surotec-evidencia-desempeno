function obtenerTotalCompra(lista) {
  let cantidadElectronica = 0;

  for (let p of lista) {
    if (p.categoria === "Electronica") {
      cantidadElectronica++;
    }
  }

  let suma = 0;

  for (let p of lista) {
    let valor = p.precio;

    if (p.categoria === "Electronica" && cantidadElectronica > 3) {
      valor *= 0.85;
    }

    suma += valor;
  }

  return Math.round(suma);
}

export function ejercicio4() {
  let carrito = [
    { categoria: "Electronica", precio: 120000 },
    { categoria: "Electronica", precio: 90000 },
    { categoria: "Electronica", precio: 150000 },
    { categoria: "Electronica", precio: 80000 },
    { categoria: "Hogar", precio: 60000 },
  ];

  alert(obtenerTotalCompra(carrito));
}

