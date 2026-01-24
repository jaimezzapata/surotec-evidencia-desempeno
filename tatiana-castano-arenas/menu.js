import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";
import { calcularAsistenciaEmpleado } from "./ejercicio5.js";
import { calcularImpuestosVentas } from "./ejercicio6.js";
import { validarPassword } from "./ejercicio7.js";
import { calcularEstadisticas } from "./ejercicio8.js";
import { calcularNomina } from "./ejercicio9.js";

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
            const montoCajero = prompt("Cajero: Ingrese monto:");
            if (montoCajero) alert(JSON.stringify(ejercicio1(Number(montoCajero)), null, 2));
            break;
        case "2":
            let listaInv = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock})`).join("\n");
            const indexInv = prompt("Seleccione producto para vender:\n" + listaInv);
            if (inventario[indexInv] && inventario[indexInv].stock > 0) {
                inventario[indexInv].stock -= 1;
                inventario[indexInv] = aplicarLogicaPrecio(inventario[indexInv]);
                alert("Estado: " + JSON.stringify(inventario[indexInv], null, 2));
            }
            break;
        case "3":
            const estudiante = {
                promedio: Number(prompt("Promedio:")),
                edad: Number(prompt("Edad:")),
                estrato: Number(prompt("Estrato:"))
            };
            alert(evaluarBeca(estudiante) ? "Beca OTORGADA" : "Beca NO otorgada");
            break;
        case "4":
            let comprando = true;
            while (comprando) {
                let listaCat = catalogo.map((p, i) => `${i}. ${p.nombre} ($${p.precio})`).join("\n");
                let eleccion = prompt("Añadir al carrito o 'F' para finalizar:\n" + listaCat);
                if (eleccion?.toUpperCase() === "F") {
                    const resumen = calcularTotalCarrito(carritoActual);
                    alert("Total: $" + resumen.totalGeneral);
                    carritoActual = [];
                    comprando = false;
                } else if (catalogo[eleccion]) {
                    carritoActual.push(catalogo[eleccion]);
                }
            }
            break;
        case "5":
            let gestionando = true;
            while (gestionando) {
                let nombre = prompt("Ingrese nombre del trabajador o 'P' para ver reportes:");
                if (nombre?.toUpperCase() === "P") {
                    let reporteFinal = "";
                    for (let emp in baseDatosAsistencia) {
                        reporteFinal += calcularAsistenciaEmpleado(emp, baseDatosAsistencia[emp]) + "\n";
                    }
                    alert(reporteFinal || "Sin registros.");
                    gestionando = false;
                } else if (nombre) {
                    let hora = prompt(`Hora para ${nombre} (HH:MM):`);
                    if (/^\d{2}:\d{2}$/.test(hora)) {
                        if (!baseDatosAsistencia[nombre]) baseDatosAsistencia[nombre] = [];
                        baseDatosAsistencia[nombre].push(hora);
                    }
                }
            }
            break;
        case "6":
            let listaVentas = [];
            let ingresandoVentas = true;
            while (ingresandoVentas) {
                let venta = prompt("Ingrese venta o 'C' para calcular:");
                if (venta?.toUpperCase() === "C") {
                    alert(`Total Impuestos: $${calcularImpuestosVentas(listaVentas)}`);
                    ingresandoVentas = false;
                } else if (!isNaN(venta) && venta > 0) {
                    listaVentas.push(Number(venta));
                }
            }
            break;
        case "7":
            alert("Requisitos: Mínimo 8 caracteres, 1 número y 1 especial.");
            const password = prompt("Ingrese contraseña:");
            if (password !== null) alert(`Resultado: ${validarPassword(password)}`);
            break;
        case "8":
            let puntajes = [];
            let ingresandoPuntajes = true;
            while (ingresandoPuntajes) {
                let dato = prompt("Ingrese puntaje o 'P' para procesar:");
                if (dato?.toUpperCase() === "P") {
                    const stats = calcularEstadisticas(puntajes);
                    alert(typeof stats === "string" ? stats : `Promedio (sin extremos): ${stats.promedioRestante}`);
                    ingresandoPuntajes = false;
                } else if (!isNaN(dato) && dato !== "") {
                    puntajes.push(Number(dato));
                }
            }
            break;
        case "9":
            const horas = Number(prompt("Ingrese total de horas trabajadas:"));
            const valor = Number(prompt("Ingrese el valor de la hora normal:"));
            if (!isNaN(horas) && !isNaN(valor)) {
                const salario = calcularNomina(horas, valor);
                alert(`El salario total neto con recargos es: $${salario}`);
            } else {
                alert("Datos ingresados no válidos.");
            }
            break;
        case "0":
            return false;
        default:
            alert("Opción inválida.");
            break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const seleccion = prompt(
            "--- MENÚ DE EJERCICIOS ---\n" +
            "1. Cajero Automático\n" +
            "2. Inventario Dinámico\n" +
            "3. Sistema de Becas\n" +
            "4. Carrito de Compras\n" +
            "5. Control de Asistencia\n" +
            "6. Impuestos de Ventas\n" +
            "7. Validador de Contraseñas\n" +
            "8. Estadísticas de Puntaje\n" +
            "9. Nómina con Recargos\n" +
            "0. Salir\n\n" +
            "Seleccione una opción:"
        );
        continuar = (seleccion === "0" || seleccion === null) ? false : ejecutarOpcion(seleccion);
    }
}

iniciarPrograma();