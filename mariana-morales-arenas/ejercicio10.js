function crearConversor(){
    let contador = 0;
    const tasas={
        COP:{USD:1 /4000,EUR:1 /4300},
        USD:{COP:4000,EUR:0.93},
        EUR:{COP:4300,USD:1.08}
    };
    return function convertir(monto,origen,destino){
        contador++;
        return {
            valor: monto * tasas[origen][destino],
            conversioneres: contador
        };
    };
}

module.exports = crearConversor;
