function descuentoLealtad(compras, aniosAntiguedad) {
  let suma = 0;

  for (let i = 0; i < compras.length; i++) {
    suma += compras[i];
  }

  const promedio = suma / compras.length;

  if (promedio > 100000 && aniosAntiguedad > 2) {
    return "Descuento del 25% aplicado para su próxima compra.";
  }

  return "No aplica para descuento por lealtad.";
}
