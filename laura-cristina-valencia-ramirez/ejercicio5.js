function controlAsistencia(llegadas) {
    let sancionTotal = 0;
    let llegadasTardeSeveras = 0;

    for (let hora of llegadas) {
        let partes = hora.split(':');
        let horas = parseInt(partes[0]);
        let minutos = parseInt(partes[1]);
        
        let minutosLlegada = (horas * 60) + minutos;
        let minutosLimite = (8 * 60); // 08:00 son 480 minutos

        let retraso = minutosLlegada - minutosLimite;

        if (retraso > 0) {
            sancionTotal += retraso * 2;
            
            if (retraso > 15) {
                llegadasTardeSeveras++;
            }
        }
    }

    if (llegadasTardeSeveras > 2) {
        return "Suspendido";
    }

    return sancionTotal;
}

export { controlAsistencia };