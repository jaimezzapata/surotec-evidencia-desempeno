import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";
import { calcularAsistenciaEmpleado } from "./ejercicio5.js";
import { calcularImpuestosVentas } from "./ejercicio6.js";
import { validarPassword } from "./ejercicio7.js";

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
    const mensajeRequisitos = "REQUISITOS PARA UNA CONTRASEÑA SEGURA:\n" +
                              "- Mínimo 8 caracteres.\n" +
                              "- Al menos un número.\n" +
                              "- Al menos un carácter especial (ej: @, #, $, *).";
    
    alert(mensajeRequisitos);
    const password = prompt("Ingrese la contraseña a validar:");
    
    if (password !== null) {
        const resultado = validarPassword(password);
        alert(`La contraseña analizada es: ${resultado}`);
    }
    break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const seleccion = prompt(
            "MENÚ EVALUACIÓN\n1. Cajero\n2. Inventario\n3. Becas\n4. Carrito\n5. Asistencia\n6. Impuestos\n7. Validador Password\n0. Salir"
        );
        continuar = (seleccion === "0" || seleccion === null) ? false : ejecutarOpcion(seleccion);
    }
}

iniciarPrograma();