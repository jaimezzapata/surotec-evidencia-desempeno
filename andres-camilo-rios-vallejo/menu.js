import { cajeroDenominaciones } from './ejercicio1.js'
import { ajusteDePrecios } from './ejercicio2.js'
import { verificarBeca } from './ejercicio3.js'
import { calcularTotalCarrito } from './ejercicio4.js'
import { controlAsistencia } from './ejercicio5.js'

function ejecutarMenu() {

    let salir = false;
    while (!salir) {

        let menu = "Seleccione una opción:\n";
        menu += "1. Calcular denominaciones para retiro de dinero\n";
        menu += "2. Ajustar precios de productos según stock\n";
        menu += "3. Sistema de Becas\n";
        menu += "4. Carrito con Descuento (Electrónica)\n";
        menu += "5. Control de Asistencia\n";
        menu += "0. Salir\n";

        const opcion = prompt(menu);

        if (opcion === null || opcion === '0') {
            salir = true;
            continue;
        }

        switch (opcion) {
            case '1':
                const monto = parseInt(prompt("ingreese el monto a retirar"))
                const calculo = cajeroDenominaciones(monto)
                alert("DEMONICAIONES\n" + JSON.stringify(calculo, null, 2))
                break

            case '2':
                const productos = [
                    { nombre: "Producto A", precio: 100, stock: 3 },
                    { nombre: "Producto B", precio: 200, stock: 10 },
                    { nombre: "Producto C", precio: 300, stock: 25 }
                ];
                const resultado2 = ajusteDePrecios(productos);
                alert("PRECIOS AJUSTADOS\n" + JSON.stringify(resultado2, null, 2));
                break

            case '3':
                const promedio = parseFloat(prompt("Ingrese el promedio del estudiante"))
                const edad = parseInt(prompt("Ingrese la edad del estudiante"))
                const estrato = parseInt(prompt("Ingrese el estrato del estudiante"))
                
                const estudiante = { promedio, edad, estrato }
                const tieneBeca = verificarBeca(estudiante)
                
                alert("RESULTADO BECA: " + tieneBeca)
                break

            case '4':
                const carrito = [
                    { nombre: "Laptop", categoria: "Electronica", precio: 2000 },
                    { nombre: "Mouse", categoria: "Electronica", precio: 50 },
                    { nombre: "Teclado", categoria: "Electronica", precio: 100 },
                    { nombre: "Monitor", categoria: "Electronica", precio: 500 },
                    { nombre: "Silla", categoria: "Hogar", precio: 150 }
                ]
                const total = calcularTotalCarrito(carrito)
                alert("TOTAL CARRITO: " + total)
                break

            case '5':
                
                const llegadas = ["08:05", "07:20", "07:30", "07:50", "08:16"]
                const resultado5 = controlAsistencia(llegadas)
                alert("RESULTADO ASISTENCIA: " + resultado5)
                break

            case '0':
                alert("Saliendo del menú.")
                break
            default:
                alert("Opción no válida. Por favor, intente de nuevo.")
                break
        }
    }
}

ejecutarMenu();