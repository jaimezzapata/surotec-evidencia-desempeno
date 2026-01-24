import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";

let inventario = [
    { nombre: "Teclado", stock: 6, precio: 100 },
    { nombre: "Mouse", stock: 22, precio: 50 },
    { nombre: "Monitor", stock: 10, precio: 200 }
];

const catalogo = [
    { nombre: "Laptop", categoria: "Electronica", precio: 1000 },
    { nombre: "Celular", categoria: "Electronica", precio: 500 },
    { nombre: "Tablet", categoria: "Electronica", precio: 300 },
    { nombre: "Audifonos", categoria: "Electronica", precio: 100 },
    { nombre: "Silla", categoria: "Muebles", precio: 150 }
];

let carritoActual = [];

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const monto = prompt("Cajero: Ingrese el monto a retirar:");
            if (monto !== null) {
                alert(JSON.stringify(ejercicio1(Number(monto)), null, 2));
            }
            break;
        case "2":
            let listaInv = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock})`).join("\n");
            const indexInv = prompt("Seleccione producto para vender:\n" + listaInv);
            if (inventario[indexInv]) {
                if (inventario[indexInv].stock > 0) {
                    inventario[indexInv].stock -= 1;
                    inventario[indexInv] = aplicarLogicaPrecio(inventario[indexInv]);
                    alert("Venta exitosa. Estado: " + JSON.stringify(inventario[indexInv]));
                } else {
                    alert("Sin stock.");
                }
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
                let eleccion = prompt("Añadir al carrito (0-4) o 'F' para finalizar:\n" + listaCat);
                if (eleccion?.toUpperCase() === "F") {
                    const resumen = calcularTotalCarrito(carritoActual);
                    alert("RESUMEN\nTotal: $" + resumen.totalGeneral + "\n¿Descuento aplicado?: " + (resumen.descuentoAplicado ? "SÍ" : "NO"));
                    carritoActual = [];
                    comprando = false;
                } else if (catalogo[eleccion]) {
                    carritoActual.push(catalogo[eleccion]);
                    alert(catalogo[eleccion].nombre + " agregado.");
                }
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
            "MENÚ EVALUACIÓN\n1. Cajero\n2. Inventario\n3. Becas\n4. Carrito Dinámico\n0. Salir"
        );
        if (seleccion === "0" || seleccion === null) {
            continuar = false;
        } else {
            continuar = ejecutarOpcion(seleccion);
        }
    }
}

iniciarPrograma();