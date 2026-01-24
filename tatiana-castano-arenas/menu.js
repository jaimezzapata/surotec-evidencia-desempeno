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
import { calcularDescuentoLealtad } from "./ejercicio14.js";
import { filtrarTareasUrgentes } from "./ejercicio15.js";
import { calcularLiquidacionAgua } from "./ejercicio16.js";
import { monitorearTransacciones } from "./ejercicio17.js";
import { validarPrestamoBiblioteca } from "./ejercicio18.js";
import { calcularRutaEntrega } from "./ejercicio19.js";

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
            let listaI = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock})`).join("\n");
            const idxI = prompt("Seleccione producto para vender:\n" + listaI);
            if (inventario[idxI] && inventario[idxI].stock > 0) {
                inventario[idxI].stock -= 1;
                inventario[idxI] = aplicarLogicaPrecio(inventario[idxI]);
                alert("Estado: " + JSON.stringify(inventario[idxI], null, 2));
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
                let sel = prompt("Añadir al carrito o 'F' para finalizar:\n" + lC);
                if (sel?.toUpperCase() === "F") {
                    const resumen = calcularTotalCarrito(carritoActual);
                    alert("Total Carrito: $" + resumen.totalGeneral);
                    carritoActual = [];
                    shop = false;
                } else if (catalogo[sel]) {
                    carritoActual.push(catalogo[sel]);
                }
            }
            break;
        case "5":
            let nombreE = prompt("Nombre del trabajador:");
            if (nombreE) {
                let horaL = prompt(`Hora de llegada para ${nombreE} (HH:MM):`);
                if (!baseDatosAsistencia[nombreE]) baseDatosAsistencia[nombreE] = [];
                baseDatosAsistencia[nombreE].push(horaL);
                alert(calcularAsistenciaEmpleado(nombreE, baseDatosAsistencia[nombreE]));
            }
            break;
        case "6":
            const vts = prompt("Ventas brutas (separadas por coma):").split(",").map(Number);
            alert("Total Impuestos: $" + calcularImpuestosVentas(vts));
            break;
        case "7":
            const pw = prompt("Ingrese contraseña para validar:");
            alert("Resultado: " + validarPassword(pw));
            break;
        case "8":
            const pts = prompt("Puntajes (separados por coma):").split(",").map(Number);
            const res8 = calcularEstadisticas(pts);
            alert(typeof res8 === "string" ? res8 : `Promedio Final: ${res8.promedioRestante}`);
            break;
        case "9":
            const h = Number(prompt("Horas trabajadas:"));
            const v = Number(prompt("Valor hora:"));
            alert(`Nómina Total: $${calcularNomina(h, v)}`);
            break;
        case "10":
            const conv = convertirMoneda(Number(prompt("Monto:")), "USD", "COP");
            alert(`Equivalente: ${conv.resultado} COP (Consultas: ${conv.totalConsultas})`);
            break;
        case "11":
            const capAula = Number(prompt("Capacidad del aula:"));
            const gruposEst = prompt("Tamaños de grupos (coma):").split(",").map(Number);
            alert(`Estudiantes sin cupo: ${calcularEstudiantesFuera(capAula, gruposEst)}`);
            break;
        case "12":
            const textoHard = "Este es un SPAM. La oferta de SPAM es limitada, aprovecha la oferta.";
            const res12 = analizarPalabrasProhibidas(textoHard, ["spam", "oferta"]);
            alert(`Análisis de Texto:\n"${textoHard}"\n\nConteo: ${JSON.stringify(res12, null, 2)}`);
            break;
        case "13":
            const tempEntrada = prompt("Historial temperaturas (coma):").split(",").map(Number);
            alert("Monitoreo Sensores: " + monitorearSensores(tempEntrada));
            break;
        case "14":
            const cP = { compras: [120000, 95000, 150000, 80000, 110000], años: 3 };
            const cN = { compras: [50000, 40000, 30000, 60000, 20000], años: 1 };
            alert(`Premium (3 años): ${calcularDescuentoLealtad(cP.compras, cP.años)}\nNuevo (1 año): ${calcularDescuentoLealtad(cN.compras, cN.años)}`);
            break;
        case "15":
            const listaTareas = [
                { descripcion: "Corregir bug login", prioridad: "alta", dias: 1 },
                { descripcion: "Revisar correo", prioridad: "baja", dias: 0 },
                { descripcion: "Subir a producción", prioridad: "alta", dias: 0 }
            ];
            const urgentes = filtrarTareasUrgentes(listaTareas);
            alert("Tareas de Alta Prioridad (<2 días):\n" + JSON.stringify(urgentes, null, 2));
            break;
        case "16":
            const liq = calcularLiquidacionAgua(35, 1);
            alert(`Liquidación Agua (35m3, Estrato 1): $${liq}`);
            break;
        case "17":
            const hVentas = [50000, 55000, 45000, 800000, 52000];
            const sospechosas = monitorearTransacciones(hVentas).filter(t => t.estado === "Sospechosa");
            alert("Transacciones Sospechosas detectadas:\n" + JSON.stringify(sospechosas, null, 2));
            break;
        case "18":
            const prestamosU = [{ fechaDevolucion: "2024-05-01", multa: 2000 }];
            alert("Resultado Biblioteca: " + validarPrestamoBiblioteca(prestamosU).motivo);
            break;
        case "19":
    const rutaPlaneada = [
        { nombre: "Bodega A", distancia: 40 },
        { nombre: "Punto B", distancia: 60 },
        { nombre: "Cliente C", distancia: 80 },
        { nombre: "Sede D", distancia: 30 }, 
        { nombre: "Punto E", distancia: 50 }
    ];

    const { destinosAlcanzables, totalRecorrido } = calcularRutaEntrega(rutaPlaneada);

    let reporte = "PLANIFICACIÓN DE RUTA (Límite 200km)\n";
    reporte += "=======================================\n";
    reporte += "RUTA ORIGINAL PROGRAMADA:\n";
    rutaPlaneada.forEach(d => reporte += ` ${d.nombre}: ${d.distancia} km\n`);

    reporte += "\n=======================================\n";
    reporte += "DESTINOS QUE PUEDE VISITAR:\n";
    
    if (destinosAlcanzables.length > 0) {
        destinosAlcanzables.forEach((d, i) => {
            reporte += `${i + 1}. ${d.nombre} (${d.distancia} km) - Acumulado: ${d.acumulado} km\n`;
        });
        reporte += `\nKilómetros totales recorridos: ${totalRecorrido} km\n`;
        reporte += `Combustible sobrante: ${200 - totalRecorrido} km`;
    } else {
        reporte += "El vehículo no tiene combustible suficiente para el primer destino.";
    }

    alert(reporte);
    break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const seleccion = prompt(
            "--- EVALUACIÓN JAVASCRIPT CONSOLIDADA ---\n" +
            "1. Cajero | 2. Inventario | 3. Becas\n" +
            "4. Carrito | 5. Asistencia | 6. Impuestos\n" +
            "7. Passwords | 8. Estadísticas | 9. Nómina\n" +
            "10. Moneda | 11. Aula | 12. Palabras\n" +
            "13. Sensores | 14. Lealtad | 15. Tareas\n" +
            "16. Agua | 17. Transacciones | 18. Biblioteca\n" +
            "19. Ruta de Entrega\n" +
            "0. Salir"
        );
        continuar = (seleccion === "0" || seleccion === null) ? false : ejecutarOpcion(seleccion);
    }
}

iniciarPrograma();