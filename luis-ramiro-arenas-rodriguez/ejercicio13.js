function alertaSensores (temperaturas) {
    let consecutivas = 0;

    for (let i = 0; i < temperaturas.length; i++) {
        if (temperaturas[i] > 35) {
            consecutivas++;
            if (consecutivas === 3) {
                return "Alarma: Sobrecalentamiento";
            }
        } else {
            consecutivas = 0;
        }
    }
    return "Estado normal";
}