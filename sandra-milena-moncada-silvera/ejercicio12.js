function analizarPalabrasProhibidas(texto, palabrasProhibidas) {
    const resultado = {}
    const palabrasTexto = texto.split(' ')

    for (let i = 0; i < palabrasProhibidas.length; i++) {
        const palabraBuscada = palabrasProhibidas[i]
        let contador = 0

        for (let j = 0; j < palabrasTexto.length; j++) {
            if (palabrasTexto[j] === palabraBuscada) {
                contador++
            }
        }

        resultado[palabraBuscada] = contador
    }

    return resultado
}