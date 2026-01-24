function alertaSensores(temperaturas){
    let consecutivos = 0;
    for (let temp of temperaturas){
        if (temp > 35){
            consecutivos++;
            if (consecutivos === 3){
                return "alarma:sobrecalentamiento";
            }
        }else{
            consecutivos = 0;
        }
    }
    return "Estado Normal";
}   
module.exports = alertaSensores;
