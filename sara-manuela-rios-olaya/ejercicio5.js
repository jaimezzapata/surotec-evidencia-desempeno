export function ejercicio5() {
    const reporteLlegadas = ["08:05", "08:20", "08:16", "07:55", "08:25"];
    let totalMultaAcumulada = 0;
    let contadorRetrasosGraves = 0;

    for (let indice = 0; indice < reporteLlegadas.length; indice++) {
        const [horas, minutos] = reporteLlegadas[indice].split(':').map(Number);
        const minutosTotales = horas * 60 + minutos;
        const diferenciaRetraso = minutosTotales - 480;

        if (diferenciaRetraso > 0) {
            totalMultaAcumulada += diferenciaRetraso * 2;
            if (diferenciaRetraso > 15) {
                contadorRetrasosGraves++;
            }
        }
    }

    if (contadorRetrasosGraves > 2) {
        alert("Tiene más de dos faltas al horario, su estado es: Suspendido");
        return "Suspendido";
    }

    alert(`Proceso completado. Multa total: $${totalMultaAcumulada}`);
    return totalMultaAcumulada;
}