import { calcularBilletes } from "./ejercicio1.js";
import { ajustarPrecios } from "./ejercicio2.js";
import { evaluarBeca } from "./ejercicio3.js";
import { calcularTotalCarrito } from "./ejercicio4.js";
import { evaluarAsistencia } from "./ejercicio5.js";
import { calcularImpuestos } from "./ejercicio6.js";
import { validarPassword } from "./ejercicio7.js";
import { calcularEstadisticas } from "./ejercicio8.js";
import { calcularNomina } from "./ejercicio9.js";
import { convertirMoneda } from "./ejercicio10.js";
import { gestionarCapacidad } from "./ejercicio11.js";
import { analizarPalabrasProhibidas } from "./ejercicio12.js";
import { monitorearSensores } from "./ejercicio13.js";
import { calcularDescuentoLealtad } from "./ejercicio14.js";
import { filtrarTareasUrgentes } from "./ejercicio15.js";
import { liquidarAgua } from "./ejercicio16.js";
import { monitorearTransacciones } from "./ejercicio17.js";
import { validarPrestamo } from "./ejercicio18.js";
import { planearRuta } from "./ejercicio19.js";
import { generarCSV } from "./ejercicio20.js";

function iniciarMenu() {
  let continuar = true;

  while (continuar) {
    const opcion = prompt(
      "Seleccione un ejercicio:\n" +
        "1. Cajero de Denominaciones\n" +
        "2. Inventario con Precios Dinámicos\n" +
        "3. Sistema de Becas\n" +
        "4. Carrito con Descuento\n" +
        "5. Control de Asistencia\n" +
        "6. Impuestos de Ventas\n" +
        "7. Validador de Contraseñas\n" +
        "8. Estadísticas de Puntaje\n" +
        "9. Nómina con Recargos\n" +
        "10. Conversor con Registro\n" +
        "11. Capacidad de Aula\n" +
        "12. Análisis de Palabras\n" +
        "13. Alerta de Sensores\n" +
        "14. Descuento por Lealtad\n" +
        "15. Filtro de Tareas\n" +
        "16. Liquidación de Servicios\n" +
        "17. Monitoreo de Transacciones\n" +
        "18. Restricción de Biblioteca\n" +
        "19. Plan de Ruta\n" +
        "20. Generador de CSV\n" +
        "21. Salir",
    );

    if (opcion === "21" || opcion === null) {
      continuar = false;
      alert("Programa finalizado.");
    } else {
      ejecutarOpcion(opcion);
    }
  }
}

function ejecutarOpcion(opcion) {
  console.clear();
  let resultado;

  switch (opcion) {
    case "1":
      const monto = parseInt(prompt("Monto a retirar:") || "50000");
      resultado = calcularBilletes(monto);
      break;

    case "2":
      const productosInv = [
        { nombre: "Arroz", stock: 4, precio: 1000 },
        { nombre: "Papa", stock: 25, precio: 2000 },
      ];
      resultado = ajustarPrecios(productosInv);
      break;

    case "3":
      const estudiante = {
        promedio: parseFloat(prompt("Ingrese promedio:") || "0"),
        edad: parseInt(prompt("Ingrese edad:") || "0"),
        estrato: parseInt(prompt("Ingrese estrato:") || "1"),
      };
      const resultadoBeca = evaluarBeca(estudiante);

      resultado = {
        mensaje: "Resultado del estudio de beca",
        datosEstudiante: estudiante,
        decisionFinal: resultadoBeca,
      };
      break;

    case "4":
      const carrito = [
        { categoria: "Electronica", precio: 100000 },
        { categoria: "Electronica", precio: 200000 },
        { categoria: "Ropa", precio: 50000 },
        { categoria: "Electronica", precio: 150000 },
        { categoria: "Electronica", precio: 300000 },
      ];

      const totalCalculado = calcularTotalCarrito(carrito);

      resultado =
        "DETALLE DEL CARRITO:\n" +
        "--------------------------\n" +
        "Productos: " +
        carrito.length +
        " items\n" +
        "Total a pagar: $" +
        totalCalculado +
        "\n" +
        "--------------------------";
      break;

    case "5":
      const asistencias = (
        prompt("Horas (HH:MM) separadas por coma:") || "08:10,07:50"
      ).split(",");
      resultado = evaluarAsistencia(asistencias);
      break;

    case "6":
      const ventas = [100000, 600000, 200000];
      const totalImpuestos = calcularImpuestos(ventas);

      resultado = {
        mensaje: "Liquidación mensual de impuestos",
        detalleVentas: ventas,
        totalACobrar: totalImpuestos,
      };
      break;

    case "7":
      const pass = prompt("Ingrese contraseña a validar:") || "";
      const validacion = validarPassword(pass);

      resultado = {
        mensaje: "Chequeo de seguridad de contraseña",
        longitudIngresada: pass.length,
        estadoValidacion: validacion,
      };
      break;

    case "8":
      const puntajes = [45, 12, 88, 56, 90, 23];

      const promedio = calcularEstadisticas(puntajes);

      resultado = {
        mensaje: "Análisis estadístico de puntajes",
        datosProcesados: puntajes,
        promedioObtenido: promedio,
      };
      break;

    case "9":
      resultado = {
        salario: calcularNomina(
          parseInt(prompt("Horas:") || "40"),
          parseInt(prompt("Valor:") || "20000"),
        ),
      };
      break;

    case "10":
      const montoC = parseFloat(prompt("Ingrese dólares a convertir:") || "50");
      resultado = convertirMoneda(montoC, "USD", "COP");
      break;

    case "11":
      const cap = 20;
      const grupos = [5, 8, 10, 3];

      const cantidadFuera = gestionarCapacidad(cap, grupos);

      resultado = {
        mensaje: "Cálculo de ocupación de aula",
        capacidadMaxima: cap,
        gruposIngresados: grupos,
        totalPersonasFuera: cantidadFuera,
      };
      break;

    case "12":
      const txt = prompt("Texto:") || "es una mentira";
      resultado = analizarPalabrasProhibidas(txt, [
        "mentira",
        "falso",
        "engaño",
      ]);
      break;

    case "13":
      const temperaturas = [30, 32, 36, 37, 38, 34];
      const estadoSensores = monitorearSensores(temperaturas);

      resultado = {
        mensaje: "Reporte de Sensores",
        lecturasRecibidas: temperaturas,
        estadoFinal: estadoSensores,
      };
      break;

    case "14":
      const compras = [120000, 90000, 150000, 80000, 200000];
      const antiguedadInput = prompt("Años de antigüedad:");
      const antiguedad = antiguedadInput ? parseInt(antiguedadInput) : 0;
      const tieneDescuento = calcularDescuentoLealtad(compras, antiguedad);

      resultado = {
        mensaje: "Análisis de lealtad completado",
        comprasRealizadas: compras,
        añosAntiguedad: antiguedad,
        aplicaDescuento: tieneDescuento,
      };
      break;

    case "15":
      const tareas = [
        { descripcion: "Reporte", prioridad: "alta", dias: 1 },
        { descripcion: "Correo", prioridad: "baja", dias: 1 },
        { descripcion: "Reunión", prioridad: "alta", dias: 3 },
        { descripcion: "Factura", prioridad: "alta", dias: 0 },
      ];
      resultado = filtrarTareasUrgentes(tareas);
      break;

    case "16":
      const m3 = parseInt(prompt("Metros cúbicos consumidos:") || "0");
      const estratoServ = parseInt(prompt("Estrato:") || "1");
      const totalServicios = liquidarAgua(m3, estratoServ);

      resultado = {
        mensaje: "Facturación de servicios públicos",
        consumo: m3 + " m3",
        estrato: estratoServ,
        totalAPagar: totalServicios,
      };
      break;

    case "17":
      const transacciones = [100, 120, 110, 130, 5000];
      const alertasEncontradas = monitorearTransacciones(transacciones);

      resultado = {
        mensaje: "Reporte de Análisis Financiero",
        valoresAnalizados: transacciones, // Aquí verás tus datos [100, 120, ...]
        totalTransacciones: transacciones.length,
        diagnostico: alertasEncontradas,
      };
      break;

    case "18":
      const prestamos = [
        { diasRetraso: 2, multa: 1000 },
        { diasRetraso: 12, multa: 5000 },
        { diasRetraso: 0, multa: 0 },
      ];
      const puedePrestar = validarPrestamo(prestamos);

      resultado = {
        mensaje: "Validación de Biblioteca",
        librosEnPosecion: prestamos, // Aquí verás la lista de días y multas
        totalLibros: prestamos.length,
        aprobadoParaNuevoPrestamo: puedePrestar,
      };
      break;

    case "19":
      const ruta = [
        { nombre: "Punto A", distancia: 50 },
        { nombre: "Punto B", distancia: 80 },
        { nombre: "Punto C", distancia: 60 },
        { nombre: "Punto D", distancia: 40 },
      ];

      const planGenerado = planearRuta(ruta);

      resultado = {
        mensaje: "Optimización de Ruta Logística",
        combustibleInicial: 200,
        destinosAnalizados: ruta,
        planSugerido: planGenerado,
      };
      break;

    case "20":
      const usuariosCSV = [
        { id: 1, nombre: "Juan", email: "juan@test.com" },
        { id: 2, nombre: "Ana", email: "ana@test.com" },
      ];

      resultado = generarCSV(usuariosCSV);
      break;

    default:
      resultado("Opción no válida.");
      break;
  }

  alert(
    typeof resultado === "object"
      ? JSON.stringify(resultado, null, 2)
      : resultado,
  );
}
iniciarMenu();
