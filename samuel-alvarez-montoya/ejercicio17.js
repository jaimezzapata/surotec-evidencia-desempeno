function detectarTransaccionSospechosa(transacciones) {
    
    let suma = transacciones[0];

    for (let i = 1; i < transacciones.length; i++) {
        let promedio = suma / i;

        if (transacciones[i] > promedio * 4) {
            return {
                monto: transacciones[i],
                estado: "Sospechosa"
            };
        }

        suma += transacciones[i];
    }

    return null;
}
