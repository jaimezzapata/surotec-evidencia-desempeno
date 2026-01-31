function liquidacionServicios(consumo, estrato) {
  let costo = 0

  if (consumo <= 15) {
    costo = consumo * 1000
  } else if (consumo <= 30) {
    costo = (15 * 1000) + ((consumo - 15) * 1500)
  } else {
    costo = (15 * 1000) + (15 * 1500) + ((consumo - 30) * 2500)
  }

  if (estrato === 1) {
    costo = costo * 0.80
  }

  return costo
}