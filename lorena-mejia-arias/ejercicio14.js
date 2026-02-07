export function ejercicio14() {
  let gastos = [120000, 95000, 110000, 130000, 105000];
  let tiempoCliente = Number(prompt("Ingrese años de antiguedad"));

  let beneficio = obtenerDescuento(gastos, tiempoCliente);
  alert(beneficio + "%");
}

function obtenerDescuento(listaCompras, antiguedad) {
  let total = 0;

  for (let i = 0; i < listaCompras.length; i++) {
    total += listaCompras[i];
  }

  let promedio = total / listaCompras.length;

  if (promedio > 100000 && antiguedad > 2) {
    return 25;
  }

  return 0;
}
