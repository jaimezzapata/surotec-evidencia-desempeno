import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";
import { calcularAsistenciaEmpleado } from "./ejercicio5.js";
import { calcularImpuestosVentas } from "./ejercicio6.js";
import { validarPassword } from "./ejercicio7.js";
import { calcularEstadisticas } from "./ejercicio8.js";
import { calcularNomina } from "./ejercicio9.js";
import { convertirMoneda } from "./ejercicio10.js";
import { calcularEstudiantesFuera } from "./ejercicio11.js";
import { analizarPalabrasProhibidas } from "./ejercicio12.js";
import { monitorearSensores } from "./ejercicio13.js";

const inventario = [
    { nombre: "Teclado", stock: 6, precio: 100 },
    { nombre: "Mouse", stock: 22, precio: 50 },
    { nombre: "Monitor", stock: 10, precio: 200 }
];

const catalogo = [
    { nombre: "Laptop", categoria: "Electronica", precio: 1000 },
    { nombre: "Celular", categoria: "Electronica", precio: 500 },
    { nombre: "Silla", categoria: "Muebles", precio: 150 }
];

const baseDatosAsistencia = {};
let carritoActual = [];

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const montoC = prompt("Cajero: Ingrese monto:");
            if (montoC) alert(JSON.stringify(ejercicio1(Number(montoC)), null, 2));
            break;
        case "2":
            let listaI = inventario.map((p, i) => `${i}. ${p.nombre} (${p.stock})`).join("\n");
            const idxI = prompt("Venta:\n" + listaI);
            if (inventario[idxI] && inventario[idxI].stock > 0) {
                inventario[idxI].stock -= 1;
                inventario[idxI] = aplicarLogicaPrecio(inventario[idxI]);
                alert("Actualizado: " + JSON.stringify(inventario[idxI], null, 2));
            }
            break;
        case "3":
            const est = { promedio: Number(prompt("Promedio:")), edad: Number(prompt("Edad:")), estrato: Number(prompt("Estrato:")) };
            alert(evaluarBeca(est) ? "Beca OTORGADA" : "Beca NO otorgada");
            break;
        case "4":
            let shop = true;
            while (shop) {
                let lC = catalogo.map((p, i) => `${i}. ${p.nombre} ($${p.precio})`).join("\n");
                let sel = prompt("Carrito (F para finalizar):\n" + lC);
                if (sel?.toUpperCase() === "F") {
                    const res = calcularTotalCarrito(carritoActual);
                    alert(`Total: $${res.totalGeneral}`);
                    carritoActual = []; shop = false;
                } else if (catalogo[sel]) carritoActual.push(catalogo[sel]);
            }
            break;
        case "5":
            let nom = prompt("Nombre:");
            if (nom) {
                let hor = prompt("Hora (HH:MM):");
                if (!baseDatosAsistencia[nom]) baseDatosAsistencia[nom] = [];
                baseDatosAsistencia[nom].push(hor);
                alert(calcularAsistenciaEmpleado(nom, baseDatosAsistencia[nom]));
            }
            break;
        case "6":
            const vts = prompt("Ventas (separadas por coma):").split(",").map(Number);
            alert("Impuestos: $" + calcularImpuestosVentas(vts));
            break;
        case "7":
            alert("Requisitos: 8+ carac, 1 num, 1 especial.");
            const pw = prompt("Pass:");
            alert("Resultado: " + validarPassword(pw));
            break;
        case "8":
            const pts = prompt("Puntajes (separados por coma):").split(",").map(Number);
            const res8 = calcularEstadisticas(pts);
            alert(typeof res8 === "string" ? res8 : `Promedio: ${res8.promedioRestante}`);
            break;
        case "9":
            alert("Salario: $" + calcularNomina(Number(prompt("Horas:")), Number(prompt("Valor:"))));
            break;
        case "10":
            const mon = Number(prompt("Monto:"));
            const res10 = convertirMoneda(mon, "USD", "COP");
            alert(`Total: ${res10.resultado} COP (Consultas: ${res10.totalConsultas})`);
            break;
        case "11":
            const cap = Number(prompt("Capacidad:"));
            const grs = prompt("Grupos (coma):").split(",").map(Number);
            alert("Fuera: " + calcularEstudiantesFuera(cap, grs));
            break;
        case "12":
            const txtP = "Este es un mensaje de SPAM. La oferta de SPAM es limitada.";
            const res12 = analizarPalabrasProhibidas(txtP, ["spam", "oferta"]);
            alert(`Análisis:\nTEXTO: "${txtP}"\nRESULTADO: ${JSON.stringify(res12, null, 2)}`);
            break;
       case "13":
    const entradaTemp = prompt("Ingrese las temperaturas por hora separadas por coma (ej: 30,36,38,37,32):");
    
    if (entradaTemp) {
    
        const historialUsuario = entradaTemp.split(",").map(Number);
        

        if (historialUsuario.some(isNaN)) {
            alert("Error: Por favor ingrese solo números separados por comas.");
        } else {
            const resultadoMonitoreo = monitorearSensores(historialUsuario);
            
            alert(
                "SISTEMA DE MONITOREO DE TEMPERATURA\n" +
                "---------------------------------------\n" +
                `Historial ingresado: [${historialUsuario.join(", ")}]\n` +
                `Estado del sistema: ${resultadoMonitoreo}`
            );
        }
    }
    break;
    }
    return true;
}

function iniciarPrograma() {
    let loop = true;
    while (loop) {
        const sel = prompt(
            "--- MENÚ DE EJERCICIOS ---\n" +
            "1. Cajero\n2. Inventario\n3. Becas\n4. Carrito\n5. Asistencia\n" +
            "6. Impuestos\n7. Passwords\n8. Estadísticas\n9. Nómina\n10. Moneda\n" +
            "11. Aula\n12. Palabras\n13. Sensores\n0. Salir"
        );
        loop = (sel === "0" || sel === null) ? false : ejecutarOpcion(sel);
    }
}

iniciarPrograma();