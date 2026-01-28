function pedirHorasLlegada() {
    const cantidad = parseInt(prompt("Ingrese la cantidad de llegadas a registrar: "));
    const llegadas = [];

    for (let i = 0; i < cantidad; i++) {
        const hora = prompt(`Ingrese la hora de llegada ${i + 1} (formato HH:MM): `);
        llegadas.push(hora);
    }
    return llegadas;
}


function calcularMulta(llegadas) {

const horaLimite = 8*60;
let totalMulta = 0;
let retrasoGrave = 0;

    for (const hora of llegadas) {
        const [horas, minutos] = hora.split(':').map(Number);
        const minutosLlegada = horas * 60 + minutos;

        if (minutosLlegada > horaLimite) {
            const retraso = minutosLlegada - horaLimite;
            totalMulta += retraso * 2;

            if (retraso > 15) {
                retrasoGrave++;
            }
        }
    }

    if (retrasoGrave > 2) {
        return "Suspendido";
    }

    return totalMulta;
}

export default calcularMulta;
export { pedirHorasLlegada };


