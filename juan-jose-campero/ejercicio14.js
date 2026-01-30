function pedirDatosCliente() {
    const compras = [];

    for (let i = 0; i < 5; i++) {
        let monto;

        do {
            monto = parseFloat(prompt(`Compra ${i + 1}: `));
        } while (isNaN(monto) || monto <= 0);

        compras.push(monto);
    }

    let antiguedad;
    do {
        antiguedad = parseInt(prompt("Años de antigüedad del cliente: "));
    } while (isNaN(antiguedad) || antiguedad < 0);

    return { compras, antiguedad };
}


function calcularDescuentoLealtad(compras, antiguedad) {
    let suma = 0;
    let validas = 0;

    for (const compra of compras) {
        if (!isNaN(compra) && compra > 0) {
            suma += compra;
            validas++;
        }
    }

    if (validas === 0) {
        return 0;
    }

    const promedio = suma / validas;

    if (promedio > 100000 && antiguedad > 2) {
        return 0.25;
    }

    return 0;
}


export default calcularDescuentoLealtad;
export { pedirDatosCliente };
