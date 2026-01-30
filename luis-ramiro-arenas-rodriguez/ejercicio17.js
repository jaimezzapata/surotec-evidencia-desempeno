function monitoreoTransacciones(transacciones) {
    const transaccionSospechosa =[];

    for (let i = 0; i < transacciones.length; i++) {
        if (i > 0) {
            let suma = 0;
            for (let k = 0; k < i; k++){
                suma += transacciones[k];
            }
            const promedio = suma / i;

            if (transacciones[i] > promedio * 3) {
                transaccionSospechosa.push ({
                    monto: transacciones[i],
                    estado: "Sospechosa"
                });
            }
        }
    }

    return transaccionSospechosa;
}