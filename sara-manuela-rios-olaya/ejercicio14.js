export function ejercicio14(){
    const comprasRecientes = [120000, 95000, 150000, 80000, 1100000];
    const anosAntiguedad = 3; 

    const sumaTotalCompras = comprasRecientes.reduce((acumulador, actual) => acumulador + actual, 0);
    const promedioCompras = sumaTotalCompras / comprasRecientes.length; 

    if(promedioCompras > 100000 && anosAntiguedad > 2){
       alert(`¡Felicidades! Promedio: $${promedioCompras}. Aplica para descuento del 25%.`);
        return "Descuento del 25%";
    }

    alert(`Promedio: $${promedioCompras}. No cumple los requisitos para el descuento.`);
    return "Sin descuento";
}