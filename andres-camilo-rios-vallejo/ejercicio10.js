let contador = 0

export function convertirDivisas(monto, origen, destino) {
    contador++
    let resultado = 0
    const tasaUSD = 4000
    const tasaEUR = 4500

    if (origen === "COP" && destino === "USD") {
        resultado = monto / tasaUSD
    } else if (origen === "COP" && destino === "EUR") {
        resultado = monto / tasaEUR
    } else if (origen === "USD" && destino === "COP") {
        resultado = monto * tasaUSD
    } else if (origen === "EUR" && destino === "COP") {
        resultado = monto * tasaEUR
    } else if (origen === "USD" && destino === "EUR") {
        resultado = (monto * tasaUSD) / tasaEUR
    } else if (origen === "EUR" && destino === "USD") {
        resultado = (monto * tasaEUR) / tasaUSD
    } else {
        resultado = monto
    }

    return {
        valor: resultado.toFixed(2),
        totalConversiones: contador
    }
}