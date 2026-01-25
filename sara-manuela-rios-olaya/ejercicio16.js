export function ejercicio16(){
    const metrosConsumidos = 15; 
    const estratoUsuario = 1; 
    let costoTotal = 0;

    if(metrosConsumidos <= 15){
        costoTotal = metrosConsumidos * 1000;
    } else if (metrosConsumidos <= 30) {
        costoTotal = (15 * 1000) + ((metrosConsumidos - 15) * 1500);
    } else {
        costoTotal = (15 * 1000) + (15 * 1500) + ((metrosConsumidos - 30) * 2500);
    }

    if (estratoUsuario === 1) {
        costoTotal = costoTotal * 0.8; 
    }

    alert(`Total a pagar (Estrato ${estratoUsuario}): $${costoTotal}`);
    return costoTotal;
}