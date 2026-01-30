import { cajeroAuto } from "./ejercicio1.js";
import { ajustarPrecios } from "./ejercicio2.js";
import { verificarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";
import { controlAsistencia } from "./ejercicio5.js";
import { calcularImpuestos } from "./ejercicio6.js";
import { validarContrasena } from "./ejercicio7.js";
import { calcularEstadisticas } from "./ejercicio8.js";
import { calcularNomina } from "./ejercicio9.js";
import { convertirMoneda } from "./ejercicio10.js";
import { gestionarAula } from "./ejercicio11.js";
import { analizarPalabras } from "./ejercicio12.js";
import { monitorearTemperatura } from "./ejercicio13.js";
import { calcularDescuentoLealtad } from "./ejercicio14.js";

function ejecutarMenu() {
  let salir = false;

  while (!salir) {
    let menuPrincipal = "--- SELECCIONE UN EJERCICIO ---\n";
    menuPrincipal += "1. Cajero de Denominaciones\n";
    menuPrincipal += "2. Inventario con Precios Dinámicos\n";
    menuPrincipal += "3. Sistema de Becas\n";
    menuPrincipal += "4. Carrito con Descuentos\n"
    menuPrincipal += "5. Control de Asistencia\n";
    menuPrincipal += "6. Calculadora de Impuestos\n";
    menuPrincipal += "7. Validador de Contraseñas\n";
    menuPrincipal += "8. Estadísticas de Puntaje\n";
    menuPrincipal += "9. Nómina con Recargos\n";
    menuPrincipal += "10. Conversor de Monedas\n";
    menuPrincipal += "11. Capacidad de Aula\n";
    menuPrincipal += "12. Detector de Palabras Prohibidas\n";
    menuPrincipal += "13. Alerta de Sensores\n";
    menuPrincipal += "14. Descuento por Lealtad\n";
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
      case "4":
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
      case "5":

        const asistenciaTest = ["08:05", "08:20", "08:00", "08:30", "08:16"];
        alert("Evaluando asistencias:\n" + JSON.stringify(asistenciaTest));

        const resultado5 = controlAsistencia(asistenciaTest);

        if (resultado5 === "Suspendido") {
            alert("EL EMPLEADO HA SIDO SUSPENDIDO.\n(Tiene más de 2 llegadas tarde superiores a 15 minutos).");
        } else {
            alert(`Empleado activo.\nDebe pagar una multa total de: $${resultado5}`);
        }
        break;
      case "6":

        const ventasTest = [100000, 1000000];

        alert("Ventas a procesar:\n" + JSON.stringify(ventasTest));

        const totalImpuestos = calcularImpuestos(ventasTest);

        alert(`Total de Impuestos Recaudados (IVA + Retenciones):\n$${totalImpuestos}`);
        break;

      case "7":
        const passInput = prompt("Ingrese la contraseña a validar:\n(Mínimo 8 caracteres, 1 número y 1 símbolo)");
        
        if (passInput) {
            const resultado = validarContrasena(passInput);
            
            if (resultado === "Segura") {
                alert(`La contraseña es: ${resultado}`);
            } else {
                alert(`La contraseña es: ${resultado}\n(Recuerda: Mínimo 8 letras, incluir números y símbolos como @, #, $, etc.)`);
            }
        } else {
            alert("No ingresaste ninguna contraseña.");
        }
        break;
      case "8":

        const puntajesTest = [7, 10, 1, 8, 9];

        alert("Puntajes recibidos:\n" + JSON.stringify(puntajesTest));

        const resultadoPromedio = calcularEstadisticas(puntajesTest);

        alert(`El promedio ajustado (sin extremos) es: ${resultadoPromedio}`);
        break;

      case "9":
        const horasInput = parseInt(prompt("Ingrese las horas trabajadas:"));
        const valorInput = parseFloat(prompt("Ingrese el valor de la hora:"));

        if (!isNaN(horasInput) && !isNaN(valorInput)) {
            const salarioTotal = calcularNomina(horasInput, valorInput);
            

            let mensaje = `Cálculo de Nómina:\n`;
            mensaje += `Horas trabajadas: ${horasInput}\n`;
            mensaje += `Valor hora: $${valorInput}\n`;
            mensaje += `--------------------------\n`;
            mensaje += `TOTAL A PAGAR: $${salarioTotal}`;
            
            alert(mensaje);
        } else {
            alert("Por favor ingrese valores numéricos válidos.");
        }
        break;
      case "10":
        const montoDivisa = parseFloat(prompt("Ingrese el monto a convertir:"));
        const monedaOrigen = prompt("Ingrese moneda origen (COP, USD, EUR):");
        const monedaDestino = prompt("Ingrese moneda destino (COP, USD, EUR):");

        if (!isNaN(montoDivisa) && monedaOrigen && monedaDestino) {
            

            const resp = convertirMoneda(montoDivisa, monedaOrigen, monedaDestino);


            if (typeof resp === 'string') {
                alert(resp);
            } else {
                alert(`Resultado: ${resp.resultado} ${resp.moneda}\n\nNota: Se han realizado ${resp.conversionesRealizadas} conversiones en esta sesión.`);
            }

        } else {
            alert("Datos inválidos.");
        }
        break;

      case "11":

        const capacidadMaxima = 40;
        const gruposEstudiantes = [15, 20, 10, 5];

        alert(`Capacidad del aula: ${capacidadMaxima}\nGrupos llegando: ${JSON.stringify(gruposEstudiantes)}`);

        const fuera = gestionarAula(gruposEstudiantes, capacidadMaxima);

        alert(`Estudiantes que se quedaron fuera: ${fuera}\n(El grupo de 10 no cabía en los 5 espacios restantes, y bloqueó al siguiente grupo).`);
        break;
      case "12":

        const textoUsuario = "Este es un texto de prueba. A veces la gente es tonta o se comporta como un bobo. No seas BOBO.";
        const malasPalabras = ["tonta", "bobo", "inútil"];

        alert(`Texto a analizar:\n"${textoUsuario}"\n\nLista negra: ${JSON.stringify(malasPalabras)}`);

        const resultadoAnalisis = analizarPalabras(textoUsuario, malasPalabras);

        alert(`Reporte de Infracciones:\n${JSON.stringify(resultadoAnalisis, null, 2)}`);
        break;

      case "13":
        const tempsPeligro = [30, 36, 37, 38, 30]; 
        
        const tempsNormal = [30, 40, 40, 34, 40];

        alert("Analizando sensores...");

        const resultadop = monitorearTemperatura(tempsPeligro);
        const resultadon = monitorearTemperatura(tempsNormal);

        alert(`Prueba 1 [30, 36, 37, 38, 30]:\n ${resultadop}\n\nPrueba 2 [30, 40, 40, 34, 40]:\n ${resultadon}`);
        break;

      case "14":
        const comprasA = [120000, 200000, 150000, 100000, 180000];
        const antiguedadA = 5;

        const comprasB = [20000, 50000, 10000, 40000, 50000];
        const antiguedadB = 1;

        alert("Analizando clientes...");

        const descuentoA = calcularDescuentoLealtad(comprasA, antiguedadA);
        const descuentoB = calcularDescuentoLealtad(comprasB, antiguedadB);

        let reporte = `Cliente A (5 años, compras altas):\nResultado: ${descuentoA}% de descuento.\n\n`;
        reporte += `Cliente B (1 año, compras bajas):\nResultado: ${descuentoB}% de descuento.`;

        alert(reporte);
        break;
      case "15":
        const listaTareas = [
            { descripcion: "Pagar el arriendo", prioridad: "alta", dias: 1 },
            { descripcion: "Ir al cine", prioridad: "baja", dias: 1 },
            { descripcion: "Estudiar JS", prioridad: "alta", dias: 5 },
            { descripcion: "Cita médica", prioridad: "media", dias: 0 },
            { descripcion: "Entregar proyecto", prioridad: "alta", dias: 0 }
        ];

        alert("Lista de tareas completa:\n" + JSON.stringify(listaTareas, null, 2));

        const resultadoUrgentes = filtrarTareasUrgentes(listaTareas);

        alert("TAREAS CRÍTICAS (Alta prioridad + < 2 días):\n" + JSON.stringify(resultadoUrgentes, null, 2));
        break;

      default:
        alert("Opción no válida");
        break;
    }
  }
}

ejecutarMenu();