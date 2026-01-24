function ejercicio17(historialTransacciones) {
  if (!Array.isArray(historialTransacciones)) {
    return []
  }

  let sumaAnterior = 0
  let cantidadAnterior = 0
  const resultado = []

  for (let i = 0; i < historialTransacciones.length; i++) {
    const actual = historialTransacciones[i]
    const monto = typeof actual === "number" ? actual : actual && typeof actual.monto === "number" ? actual.monto : NaN

    let estado = "Normal"

    if (cantidadAnterior > 0 && Number.isFinite(monto)) {
      const promedioAnterior = sumaAnterior / cantidadAnterior
      if (monto > promedioAnterior * 4) {
        estado = "Sospechosa"
      }
    }

    resultado.push({ monto: monto, estado: estado })

    if (Number.isFinite(monto)) {
      sumaAnterior += monto
      cantidadAnterior++
    }
  }

  return resultado
}

module.exports = { ejercicio17 }
