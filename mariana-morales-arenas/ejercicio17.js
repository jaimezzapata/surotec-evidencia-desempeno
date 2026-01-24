function monitoreoTransacciones(transacciones){
    let resultado = [];
    for(let i = 0; i < transacciones.length; i++){
        if(i === 0){
            resultado.push({
                valor:transacciones[i],
                estado:"Normal"
            });
            
        }else{
            let suma =0;
            for(let j = 0; j < i; j++){
                suma += transacciones[j];
            }
            let promedio = suma / i;
            if(transacciones[i] > promedio * 4){
                resultado.push({
                    valor:transacciones[i],
                    estado:"sospechosa"
                });
            } else {
                resultado.push({
                    valor:transacciones[i],
                    estado:"Normal"
                });
            }
        }
}
return resultado;
}
module.exports = monitoreoTransacciones;