export function verificarSensores(temperaturas) {
    for (let i = 0; i < temperaturas.length - 2; i++) {
        if (temperaturas[i] > 35 && temperaturas[i + 1] > 35 && temperaturas[i + 2] > 35) {
            return "Alarma: Sobrecalentamiento"
        }
    }
    return "Estado Normal"
}