function cajeroAutomatico(monto) {
    if (monto <= 0 || monto % 10000 !== 0) {
        return "Error: El monto debe ser múltiplo de $10.000 y mayor a 0";
    }

    let resultado = {
        billetes50000: 0,
        billetes20000: 0,
        billetes10000: 0
    };

    resultado.billetes50000 = Math.floor(monto / 50000);
    monto = monto % 50000;

    resultado.billetes20000 = Math.floor(monto / 20000);
    monto = monto % 20000;

    resultado.billetes10000 = Math.floor(monto / 10000);

    return resultado;
}

export {cajeroAutomatico}
