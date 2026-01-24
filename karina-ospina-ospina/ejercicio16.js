function ejercicio16(consumo, estrato) {
  if (typeof consumo !== "number" || consumo < 0) {
    return 0
  }

  let total = 0
  const tramo1 = Math.min(consumo, 15)
  total += tramo1 * 1000

  if (consumo > 15) {
    const tramo2 = Math.min(consumo - 15, 15)
    total += tramo2 * 1500
  }

  if (consumo > 30) {
    const tramo3 = consumo - 30
    total += tramo3 * 2500
  }

  if (estrato === 1) {
    total = total * 0.8
  }

  return total
}

module.exports = { ejercicio16 }

