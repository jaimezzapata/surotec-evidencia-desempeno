function monitoreoTransacciones(transacciones) {
  let suma = 0

  for (let i = 0; i < transacciones.length; i++) {
    if (i > 0) {
      const promedio = suma / i

      if (transacciones[i] > promedio * 4) {
        return {
          monto: transacciones[i],
          estado: 'Sospechosa'
        }
      }
    }

    suma += transacciones[i]
  }

  return null
}

module.exports = monitoreoTransacciones
