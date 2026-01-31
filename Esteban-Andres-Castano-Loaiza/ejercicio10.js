let Conversiones = 0

function convertirMoneda(monto, monedaOrigen, monedaDestino) {
    Conversiones++

    const origen = monedaOrigen.toUpperCase().trim()
    const destino = monedaDestino.toUpperCase().trim()

    const tasaUSD = 4000
    const tasaEUR = 4250
    
    let valorEnCOP = 0

    if (origen === 'COP') {
        valorEnCOP = monto
    } else if (origen === 'USD') {
        valorEnCOP = monto * tasaUSD
    } else if (origen === 'EUR') {
        valorEnCOP = monto * tasaEUR
    } else {
        return "Error: Moneda de origen no válida"
    }

    let resultadoFinal = 0

    if (destino === 'COP') {
        resultadoFinal = valorEnCOP
    } else if (destino === 'USD') {
        resultadoFinal = valorEnCOP / tasaUSD
    } else if (destino === 'EUR') {
        resultadoFinal = valorEnCOP / tasaEUR
    } else {
        return "Error: Moneda de destino no válida"
    }

    return resultadoFinal
}