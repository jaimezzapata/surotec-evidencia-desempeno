export function ejercicio5() {
  let cantidadDias = Number(prompt("Ingrese la cantidad de días a evaluar"))
  let llegadas = []

  for (let i = 0; i < cantidadDias; i++) {
    let hora = prompt("Ingrese la hora de llegada del día " + (i + 1) + " (HH:MM)")
    llegadas.push(hora)
  }

  let minutosLimite = 8 * 60
  let multaTotal = 0
  let retrasosGraves = 0

  for (let i = 0; i < llegadas.length; i++) {
    let partes = llegadas[i].split(":")
    let hora = Number(partes[0])
    let minutos = Number(partes[1])

    let minutosLlegada = hora * 60 + minutos
    let retraso = minutosLlegada - minutosLimite

    if (retraso > 0) {
      multaTotal += retraso * 2

      if (retraso > 15) {
        retrasosGraves++
      }
    }
  }

  let estado = retrasosGraves > 2 ? "Suspendido" : "Activo"

  return {
    llegadas: llegadas,
    multaTotal: multaTotal,
    retrasosGraves: retrasosGraves,
    estado: estado
  }
}
