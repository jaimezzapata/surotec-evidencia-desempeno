export function analizarPalabras(texto, prohibidas) {
    const resultado = {}
    const palabrasDelTexto = texto.split(" ")

    for (let i = 0; i < prohibidas.length; i++) {
        let contador = 0
        const palabraBuscada = prohibidas[i]

        for (let j = 0; j < palabrasDelTexto.length; j++) {
            if (palabrasDelTexto[j] === palabraBuscada) {
                contador++
            }
        }
        resultado[palabraBuscada] = contador
    }
    return resultado
}