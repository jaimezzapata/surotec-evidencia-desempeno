function monitorearTransacciones(transacciones) {
  let sumaAcumulada = 0
  const sospechosas = []

  for (let i = 0; i < transacciones.length; i++) {
    const montoActual = transacciones[i].monto

    if (i > 0) {
      const promedioAnterior = sumaAcumulada / i
      
      if (montoActual > promedioAnterior * 4) {
        sospechosas.push({
          id: transacciones[i].id,
          monto: montoActual,
          fecha: transacciones[i].fecha,
          estado: 'Sospechosa'
        })
      }
    }

    sumaAcumulada += montoActual
  }

  return sospechosas
}

module.exports = monitorearTransacciones
