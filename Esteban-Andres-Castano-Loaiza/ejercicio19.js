function planDeRuta(destinos) {
    let combustible = 200
    const visitados = []

    for (let i = 0; i < destinos.length; i++) {
        const tramo = destinos[i]

        if (combustible >= tramo.distancia) {
            rutaViable.push(tramo)
            combustible -= tramo.distancia
        } else {
            break
        }
    }

    return visitados
}