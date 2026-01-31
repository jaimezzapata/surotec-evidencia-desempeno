export function ejercicio1(montoRetirar) {
    if (montoRetirar % 10000 !== 0) {
        return "Error: El monto debe ser múltiplo de 10.000";
    }

    let saldo = montoRetirar;
    const billetes50 = Math.floor(saldo / 50000);
    saldo %= 50000;

    const billetes20 = Math.floor(saldo / 20000);
    saldo %= 20000;

    const billetes10 = Math.floor(saldo / 10000);

    return {
        billetes50,
        billetes20,
        billetes10
    };
}