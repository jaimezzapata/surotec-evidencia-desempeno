export function ejercicio18() {
    const prestamos = [
        { fechaDevolucion: "2024-05-15", diasRetraso: 5, multa: 20000 }
    ];

    let multasAcumuladas = 0;
    let tieneRetrasosGraves = false;

    for (const item of prestamos) {
        multasAcumuladas += item.multa;
        if (item.diasRetraso > 10) {
            tieneRetrasosGraves = true;
        }
    }

    if (tieneRetrasosGraves || multasAcumuladas > 10000) {
        alert(`Préstamo denegado. Multa total: $${multasAcumuladas}. Retraso grave: ${tieneRetrasosGraves ? "Sí" : "No"}`);
        return;
    }

    alert(`Préstamo autorizado. Multa acumulada: $${multasAcumuladas}`);
}