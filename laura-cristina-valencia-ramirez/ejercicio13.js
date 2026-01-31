function monitorizarTemperatura(temperaturas) {
    let consecutivos = 0;

    for (let temp of temperaturas) {
        if (temp > 35) {
            consecutivos++;
            if (consecutivos === 3) {
                return "Alarma: Sobrecalentamiento";
            }
        } else {
            consecutivos = 0;
        }
    }

    return "Estado Normal";
}

export { monitorizarTemperatura };