export function calcularRuta(destinos) {
    let combustible = 200
    const ruta = []

    for (let i = 0; i < destinos.length; i++) {
        const destino = destinos[i]
        
        if (combustible >= destino.distancia) {
            combustible -= destino.distancia
            ruta.push(destino.nombre)
        } else {
            break // Se detiene si no hay combustible para el siguiente tramo
        }
    }
    return ruta
}