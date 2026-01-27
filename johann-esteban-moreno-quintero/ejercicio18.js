export const usuarioAprobado = [
    { titulo: "Cien años de soledad", diasRetraso: 5, multa: 2500 },
    { titulo: "Don Quijote", diasRetraso: 0, multa: 0 }
];

export const usuarioDenegado = [
    { titulo: "El resplandor", diasRetraso: 12, multa: 3000 },
    { titulo: "Rayuela", diasRetraso: 2, multa: 8000 }
];

export function validarPrestamoBiblioteca(prestamos) {
    let multaTotal = 0;
    let tieneRetrasoCritico = false;
    const detallesValidacion = [];

    prestamos.forEach(p => {
        multaTotal += p.multa;
        if (p.diasRetraso > 10) {
            tieneRetrasoCritico = true;
        }
        
        detallesValidacion.push({
            libro: p.titulo,
            estado: p.diasRetraso > 0 ? `Retraso de ${p.diasRetraso} días` : "Al día",
            multa: p.multa
        });
    });

    const autorizado = !tieneRetrasoCritico && multaTotal <= 10000;

    return {
        autorizado,
        resumen: {
            multaAcumulada: multaTotal,
            retrasoGrave: tieneRetrasoCritico
        },
        detalles: detallesValidacion
    };
}