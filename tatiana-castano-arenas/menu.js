import { ejercicio1 } from "./ejercicio1.js";
import { aplicarLogicaPrecio } from "./ejercicio2.js";

let inventario = [
    { nombre: "Teclado", stock: 6, precio: 100 },
    { nombre: "Mouse", stock: 22, precio: 50 },
    { nombre: "Monitor", stock: 10, precio: 200 }
];

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const monto = prompt("Cajero: Ingrese el monto a retirar:");
            if (monto) alert(JSON.stringify(ejercicio1(Number(monto)), null, 2));
            break;
        case "2":
            let lista = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock}, Precio: $${p.precio})`).join("\n");
            const index = prompt("Seleccione el producto que desea adquirir:\n" + lista);
            
            if (inventario[index]) {
                if (inventario[index].stock > 0) {
                    inventario[index].stock -= 1;
                    inventario[index] = aplicarLogicaPrecio(inventario[index]);
                    alert(`Venta realizada. Nuevo estado:\n${JSON.stringify(inventario[index], null, 2)}`);
                } else {
                    alert("Sin stock disponible.");
                }
            }
            break;
        case "0":
            return false;
        default:
            alert("Opción no válida.");
            break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt("1. Cajero\n2. Inventario Dinámico\n0. Salir");
        continuar = (opcion === "0" || opcion === null) ? false : ejecutarOpcion(opcion);
    }
}

iniciarPrograma();