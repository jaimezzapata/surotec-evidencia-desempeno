let contadorConversiones = 0

export function convertirMoneda(monto, origen, destino) {

    let resultado = 0

    let montoEnCop = 0
    if (origen === "COP") {
        montoEnCop = monto
    } else if (origen === "USD") {
        montoEnCop = monto * 4000
    } else if (origen === "EUR") {
        montoEnCop = monto * 4300
    }

    if (destino === "COP") {
        resultado = montoEnCop
    } else if (destino === "USD") {
        resultado = montoEnCop / 4000
    } else if (destino === "EUR") {
        resultado = montoEnCop / 4300
    }

    contadorConversiones = contadorConversiones + 1
    
    
    return resultado.toFixed(2)
}