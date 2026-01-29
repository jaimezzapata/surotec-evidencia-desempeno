function monitoreoDeTransacciones (transacciones) {
    const sospechosos = []
    let acumuladoDeSuma=0
    for (let i = 0; i < transacciones.length; i++) {
        const actual = transacciones[i]

        if(i>0){
            const anterior = acumuladoDeSuma/i
            if(actual > anterior *4){
                sospechosos.push({indice:i, valor:actual, estado:'sospechosa'})
            }
        }
        acumuladoDeSuma += actual
    }
    return sospechosos
}