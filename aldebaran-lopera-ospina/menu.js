import { cajeroAuto } from "./ejercicio1.js";
import { ajustarPrecios } from "./ejercicio2.js";
import { verificarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";

function ejecutarMenu() {
  let salir = false;

  while (!salir) {
    let menuPrincipal = "--- SELECCIONE UN EJERCICIO ---\n";
    menuPrincipal += "1. Cajero de Denominaciones\n";
    menuPrincipal += "2. Inventario con Precios Dinámicos\n";
    menuPrincipal += "3. Sistema de Becas\n";
    menuPrincipal += "4. Carrito con Descuentos\n"
    menuPrincipal += "5. Ejercicio 5\n";
    menuPrincipal += "6. Ejercicio 6\n";
    menuPrincipal += "7. Ejercicio 7\n";
    menuPrincipal += "8. Ejercicio 8\n";
    menuPrincipal += "9. Ejercicio 9\n";
    menuPrincipal += "10. Ejercicio 10\n";
    menuPrincipal += "11. Ejercicio 11\n";
    menuPrincipal += "12. Ejercicio 12\n";
    menuPrincipal += "13. Ejercicio 13\n";
    menuPrincipal += "14. Ejercicio 14\n";
    menuPrincipal += "15. Ejercicio 15\n";
    menuPrincipal += "16. Ejercicio 16\n";
    menuPrincipal += "17. Ejercicio 17\n";
    menuPrincipal += "18. Ejercicio 18\n";
    menuPrincipal += "19. Ejercicio 19\n";
    menuPrincipal += "20. Ejercicio 20\n";
    menuPrincipal += "0. Salir";

    const opcion = prompt(menuPrincipal);

    if (opcion === null || opcion === "0") {
      salir = true;
      continue;
    }

    switch (opcion) {
      case "1":
        const monto = parseInt(prompt("Ingrese el monto a retirar:"));
        const resultado1 = cajeroAuto(monto);
        alert("Resultado:\n" + JSON.stringify(resultado1, null, 2));
        break;
      case "2":
        const inventarioTest = [
            { nombre: "Laptop Gamer", stock: 4, precio: 3000 },
            { nombre: "Mouse", stock: 25, precio: 20 },
            { nombre: "Teclado", stock: 10, precio: 100 }
        ];

        const resultado2 = ajustarPrecios(inventarioTest);

        alert("--- INVENTARIO ACTUALIZADO ---\n" + JSON.stringify(resultado2, null, 2));
        break;
      case "3":
        const promedio = parseFloat(prompt("Ingrese el Promedio (0.0 - 5.0):"));
        const edad = parseInt(prompt("Ingrese la Edad:"));
        const estrato = parseInt(prompt("Ingrese el Estrato (1-6):"));

        if (isNaN(promedio) || isNaN(edad) || isNaN(estrato)) {
            alert("Error: Por favor ingrese valores numéricos válidos.");
        } else {
            const estudiante = {
                promedio: promedio,
                edad: edad,
                estrato: estrato
            };

            const tieneBeca = verificarBeca(estudiante);

            if (tieneBeca) {
                alert("¡APROBADO! El estudiante ha obtenido la beca.");
            } else {
                alert("DENEGADO. El estudiante no cumple los requisitos.");
            }
        }
        break;
      case "4": // <--- LÓGICA DEL EJERCICIO 4
        // Datos de prueba: 4 productos de Electrónica (debe activar descuento) y 1 de Ropa
        const carritoTest = [
            { nombre: "TV", categoria: "Electronica", precio: 1000 },
            { nombre: "Radio", categoria: "Electronica", precio: 200 },
            { nombre: "Celular", categoria: "Electronica", precio: 800 },
            { nombre: "Cables", categoria: "Electronica", precio: 50 },
            { nombre: "Camisa", categoria: "Ropa", precio: 100 }
        ];

        alert("Calculando total para el siguiente carrito:\n" + JSON.stringify(carritoTest, null, 2));

        const totalPagar = calcularTotalCarrito(carritoTest);

        alert(`Total a pagar: $${totalPagar}\n(Se aplicó descuento a Electrónica por tener más de 3 artículos)`);
        break;  
      default:
        alert("Opción no válida");
        break;
    }
  }
}

ejecutarMenu();