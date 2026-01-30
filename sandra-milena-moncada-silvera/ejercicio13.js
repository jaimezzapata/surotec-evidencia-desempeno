function verificarTemperaturas(lecturas) {
    let consecutivas = 0;

    for (let i = 0; i < lecturas.length; i++) {
        if (lecturas[i] > 35) {
            consecutivas++;
        } else {
            consecutivas = 0;
        }

        if (consecutivas === 3) {
            return "Alarma: Sobrecalentamiento";
        }
    }

    return "Estado Normal";
}