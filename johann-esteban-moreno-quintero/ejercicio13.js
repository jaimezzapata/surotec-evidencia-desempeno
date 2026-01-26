export function monitorearSensores(temperaturas) {
    let lecturasConsecutivasAltas = 0;
    const historialAlertas = [];

    for (let i = 0; i < temperaturas.length; i++) {
        const tempActual = temperaturas[i];
        
        if (tempActual > 35) {
            lecturasConsecutivasAltas++;
        } else {
            lecturasConsecutivasAltas = 0;
        }

        if (lecturasConsecutivasAltas >= 3) {
            return "Alarma: Sobrecalentamiento";
        }
    }

    return "Estado Normal";
}