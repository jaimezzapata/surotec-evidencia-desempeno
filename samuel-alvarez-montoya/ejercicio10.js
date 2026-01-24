function crearConversorMonedas() {
    
    let contadorConversiones = 0;

    return function convertirMoneda(monto, monedaOrigen, monedaDestino) {
        contadorConversiones++;

        let montoEnCop = 0;

        if (monedaOrigen === "COP") {
            montoEnCop = monto;
        } else if (monedaOrigen === "USD") {
            montoEnCop = monto * 4000;
        } else if (monedaOrigen === "EUR") {
            montoEnCop = monto * 4400;
        }

        let montoConvertido = 0;

        if (monedaDestino === "COP") {
            montoConvertido = montoEnCop;
        } else if (monedaDestino === "USD") {
            montoConvertido = montoEnCop / 4000;
        } else if (monedaDestino === "EUR") {
            montoConvertido = montoEnCop / 4400;
        }

        return montoConvertido;
    };
}
