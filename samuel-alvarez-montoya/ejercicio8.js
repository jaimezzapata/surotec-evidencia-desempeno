function calcularPromedioSinExtremos(numeros) {
    
    let maximo = numeros[0];
    let minimo = numeros[0];
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];

        if (numero > maximo) {
            maximo = numero;
        }

        if (numero < minimo) {
            minimo = numero;
        }

        suma = suma + numero;
    }

    let sumaSinExtremos = suma - maximo - minimo;
    let cantidad = numeros.length - 2;

    let promedio = sumaSinExtremos / cantidad;

    return promedio;
}
