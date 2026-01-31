function cajeroDenominaciones(monto) {
    if (monto % 10000 !== 0) {
        return "El monto debe ser múltiplo de 10,000";
    }

    let devuelta = monto

    const billetes50 = Math.floor(devuelta / 50000);
    devuelta -= billetes50 * 50000;

    const billetes20 = Math.floor(devuelta / 20000);
    devuelta -= billetes20 * 20000;

    const billetes10 = Math.floor(devuelta / 10000);

    return {
        billetes50,
        billetes20,
        billetes10
    }
}
