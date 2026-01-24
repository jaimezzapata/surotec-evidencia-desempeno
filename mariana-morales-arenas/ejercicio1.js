function cajeroDenominaciones (monto) {
    if (monto % 10000 !== 0) {
        return "monto no válido";
    }
    let billetes50 = Math.floor(monto / 50000);
    monto=monto % 50000;
    let billetes20 = Math.floor(monto / 20000);
    monto=monto % 20000;
    let billetes10 = Math.floor(monto / 10000);

    return {
        billetes50,
        billetes20,
        billetes10
    };
    

}
module.exports = cajeroDenominaciones;

