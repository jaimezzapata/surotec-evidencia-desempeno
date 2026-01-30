function pedirTemperaturas() {
    const cantidad = parseInt(prompt("Cantidad de mediciones: "));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad inválida.");
        return null;
    }

    const temperaturas = [];

    for (let i = 0; i < cantidad; i++) {
        const temp = parseFloat(prompt(`Temperatura ${i + 1}: `));

        if (isNaN(temp)) {
            console.log("Temperatura inválida.");
            i--;
            continue;
        }

        temperaturas.push(temp);
    }

    return temperaturas;
}


function detectarSobrecalentamiento(temperaturas) {
    if (!Array.isArray(temperaturas) || temperaturas.length === 0) {
        return "Estado Normal";
    }

    let consecutivas = 0;

    for (const temp of temperaturas) {
        if (typeof temp !== "number" || isNaN(temp)) {
            consecutivas = 0;
            continue;
        }

        if (temp >= 35) {
            consecutivas++;
            if (consecutivas === 3) {
                return "Alarma: Sobrecalentamiento";
            }
        } else {
            consecutivas = 0;
        }
    }

    return "Estado Normal";
}


export default detectarSobrecalentamiento;
export { pedirTemperaturas };