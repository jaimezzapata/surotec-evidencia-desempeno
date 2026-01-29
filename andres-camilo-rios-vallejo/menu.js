import { cajeroDenominaciones } from './ejercicio1.js'
import { ajusteDePrecios } from './ejercicio2.js'
import { verificarBeca } from './ejercicio3.js'
import { calcularTotalCarrito } from './ejercicio4.js'
import { controlAsistencia } from './ejercicio5.js'
import { calcularImpuestos } from './ejercicio6.js'
import { validarContrasena } from './ejercicio7.js'
import { estadisticasPuntaje } from './ejercicio8.js'
import { calcularNomina } from './ejercicio9.js'
import { convertirDivisas } from './ejercicio10.js'
import { gestionarAula } from './ejercicio11.js'
import { analizarPalabras } from './ejercicio12.js'

function ejecutarMenu() {

    let salir = false;
    while (!salir) {

        let menu = "Seleccione una opción:\n";
        menu += "1. Calcular denominaciones para retiro de dinero\n";
        menu += "2. Ajustar precios de productos según stock\n";
        menu += "3. Sistema de Becas\n";
        menu += "4. Carrito con Descuento (Electrónica)\n";
        menu += "5. Control de Asistencia\n";
        menu += "6. Impuestos de Ventas\n";
        menu += "7. Validador de Contraseñas\n";
        menu += "8. Estadísticas de Puntaje\n";
        menu += "9. Nómina con Recargos\n";
        menu += "10. Conversor de Divisas con Registro\n";
        menu += "11. Capacidad de Aula\n";
        menu += "12. Análisis de Palabras Prohibidas\n";
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

            case '6':
                const entradaVentas = prompt("Ingrese los montos de ventas separados por coma (ej: 500000,100000)")
                const arrayStrings = entradaVentas.split(",")
                const ventas = []
                for (let i = 0; i < arrayStrings.length; i++) {
                    ventas.push(Number(arrayStrings[i]))
                }
                const totalImpuestos = calcularImpuestos(ventas)
                alert("TOTAL IMPUESTOS ACUMULADOS: " + totalImpuestos)
                break

            case '7':
                const password = prompt("Ingrese la contraseña a validar")
                const seguridad = validarContrasena(password)
                alert("LA CONTRASEÑA ES: " + seguridad)
                break

            case '8':
                const entradaPuntajes = prompt("Ingrese los puntajes separados por coma (ej: 10,50,80,20)")
                const arrayStrPuntajes = entradaPuntajes.split(",")
                const puntajes = []
                for (let i = 0; i < arrayStrPuntajes.length; i++) {
                    puntajes.push(Number(arrayStrPuntajes[i]))
                }
                const promedioAjustado = estadisticasPuntaje(puntajes)
                alert("PROMEDIO AJUSTADO: " + promedioAjustado)
                break

            case '9':
                const horas = parseInt(prompt("Ingrese las horas trabajadas"))
                const valorHora = parseFloat(prompt("Ingrese el valor de la hora"))
                const salario = calcularNomina(horas, valorHora)
                alert("SALARIO TOTAL: " + salario)
                break

            case '10':
                const montoDivisa = parseFloat(prompt("Ingrese el monto a convertir"))
                const origen = prompt("Ingrese moneda origen (COP, USD, EUR)").toUpperCase()
                const destino = prompt("Ingrese moneda destino (COP, USD, EUR)").toUpperCase()
                const resultado10 = convertirDivisas(montoDivisa, origen, destino)
                alert("RESULTADO: " + resultado10.valor + "\nCONVERSIONES TOTALES: " + resultado10.totalConversiones)
                break
            
            case '11':
                const capacidad = parseInt(prompt("Ingrese la capacidad del aula"))
                const entradaGrupos = prompt("Ingrese los grupos de estudiantes separados por coma (ej: 10,5,3)")
                const arrayStrGrupos = entradaGrupos.split(",")
                const grupos = []
                for (let i = 0; i < arrayStrGrupos.length; i++) {
                    grupos.push(Number(arrayStrGrupos[i]))
                }
                const fuera = gestionarAula(capacidad, grupos)
                alert("ESTUDIANTES QUE QUEDARON FUERA: " + fuera)
                break

            case '12':
                const texto = prompt("Ingrese el texto a analizar")
                const entradaProhibidas = prompt("Ingrese palabras prohibidas separadas por coma")
                const prohibidas = entradaProhibidas.split(",")
                const resultado12 = analizarPalabras(texto, prohibidas)
                alert("CONTEO PALABRAS: \n" + JSON.stringify(resultado12, null, 2))
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