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
const baseDatosAsistencia = {};

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const monto = prompt("Cajero: Ingrese el monto a retirar:");
            if (monto) alert(JSON.stringify(ejercicio1(Number(monto)), null, 2));
            break;
        case "2":
            let lista = inventario.map((p, i) => `${i}. ${p.nombre} (Stock: ${p.stock}, Precio: $${p.precio})`).join("\n");
            const index = prompt("Seleccione el índice del producto a vender:\n" + lista);
            
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
            case "3":
    const estudiante = {
        promedio: Number(prompt("Ingrese el promedio del estudiante:")),
        edad: Number(prompt("Ingrese la edad del estudiante:")),
        estrato: Number(prompt("Ingrese el estrato del estudiante:"))
    };
    
    const esApto = evaluarBeca(estudiante);
    alert(esApto ? "Beca OTORGADA" : "Beca NO otorgada");
    break;
    case "4":
    let continuarSeleccion = true;
    while (continuarSeleccion) {
        let listaCatalogo = catalogo.map((p, i) => `${i}. ${p.nombre} ($${p.precio})`).join("\n");
        let eleccion = prompt("Seleccione producto para añadir al carrito o 'F' para finalizar compra:\n" + listaCatalogo);

        if (eleccion?.toUpperCase() === "F") {
            const resumen = calcularTotalCarrito(carritoActual);
            alert(
                "RESUMEN DE COMPRA\n" +
                "Productos: " + carritoActual.length + "\n" +
                "¿Descuento 15% (Eletro): " + (resumen.descuentoAplicado ? "SÍ" : "NO") + "\n" +
                "TOTAL A PAGAR: $" + resumen.totalGeneral
            );
            carritoActual = []; // Limpiar carrito para la próxima vez
            continuarSeleccion = false;
        } else if (catalogo[eleccion]) {
            carritoActual.push(catalogo[eleccion]);
            alert(catalogo[eleccion].nombre + " añadido.");
        }
    }
    break;
    case "5":
            let gestionando = true;
            while (gestionando) {
                let nombre = prompt("Ingrese nombre del trabajador o 'P' para ver reportes:");
                
                if (nombre?.toUpperCase() === "P") {
                    let reporteFinal = "REPORTES DE ASISTENCIA:\n";
                    for (let emp in baseDatosAsistencia) {
                        reporteFinal += calcularAsistenciaEmpleado(emp, baseDatosAsistencia[emp]) + "\n";
                    }
                    alert(reporteFinal);
                    gestionando = false;
                } else if (nombre) {
                    let hora = prompt(`Hora de llegada para ${nombre} (HH:MM):`);
                    if (/^\d{2}:\d{2}$/.test(hora)) {
                        if (!baseDatosAsistencia[nombre]) {
                            baseDatosAsistencia[nombre] = [];
                        }
                        baseDatosAsistencia[nombre].push(hora);
                        alert(`Registro exitoso para ${nombre}`);
                    } else {
                        alert("Formato de hora inválido.");
                    }
                }
            }
            break;
    case "6":
            let listaVentas = [];
            let ingresandoVentas = true;
            while (ingresandoVentas) {
                let venta = prompt("Ingrese monto de venta bruta o 'C' para calcular impuestos:");
                if (venta?.toUpperCase() === "C") {
                    const totalImpuestos = calcularImpuestosVentas(listaVentas);
                    alert(`Total Impuestos a pagar (IVA + Retenciones): $${totalImpuestos}`);
                    ingresandoVentas = false;
                } else if (!isNaN(venta) && venta > 0) {
                    listaVentas.push(Number(venta));
                    alert("Venta registrada.");
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
    case "8":
            let puntajes = [];
            let ingresandoPuntajes = true;
            while (ingresandoPuntajes) {
                let dato = prompt("Ingrese un puntaje numérico o 'P' para procesar estadística:");
                if (dato?.toUpperCase() === "P") {
                    const stats = calcularEstadisticas(puntajes);
                    alert(typeof stats === "string" ? stats : `Máximo: ${stats.maximo}\nMínimo: ${stats.minimo}\nPromedio restantes: ${stats.promedioRestante}`);
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
    case "10":
            const num = Number(prompt("Monto a convertir:"));
            const origen = prompt("Moneda origen (USD, EUR, COP):").toUpperCase();
            const destino = prompt("Moneda destino (USD, EUR, COP):").toUpperCase();
            
            const conversion = convertirMoneda(num, origen, destino);
            alert(`Resultado: ${conversion.resultado} ${destino}\nConversiones realizadas: ${conversion.totalConsultas}`);
            break;
    case "11":
    const limite = Number(prompt("Capacidad del aula (ej: 11):"));
    let gruposEstudiantes = [];
    let agregando = true;
    while (agregando) {
        let grupo = prompt("Cantidad de estudiantes en el grupo o 'F' para finalizar:");
        if (grupo?.toUpperCase() === "F") {
            const fuera = calcularEstudiantesFuera(limite, gruposEstudiantes);
            alert(`Total estudiantes: ${gruposEstudiantes.reduce((a, b) => a + b, 0)}\nEntraron: ${limite}\nQuedaron fuera: ${fuera}`);
            agregando = false;
        } else if (!isNaN(grupo) && grupo !== "") {
            gruposEstudiantes.push(Number(grupo));
        }
    }
    break;
   case "12":
    const textoAnalizar = "Este es un mensaje de SPAM. La oferta de SPAM es limitada, aprovecha la oferta.";
    const palabrasABuscar = ["spam", "oferta"];
    const resultadoFrecuencia = analizarPalabrasProhibidas(textoAnalizar, palabrasABuscar);

  
    const mensajeAlerta = `Análisis de Texto Hardcoded:
---------------------------------------
TEXTO: "${textoAnalizar}"
PALABRAS PROHIBIDAS: [${palabrasABuscar.join(", ")}]
---------------------------------------
RESULTADO:
${JSON.stringify(resultadoFrecuencia, null, 2)}`;

    alert(mensajeAlerta);
    break;
    case "13":
    const entradaTemp = prompt("Ingrese las temperaturas por hora separadas por coma (ej: 30,36,38,37,32):");
    
    if (entradaTemp) {
       
        const historialUsuario = entradaTemp.split(",").map(Number);
        
        
        if (historialUsuario.some(isNaN)) {
            alert("Error: Por favor ingrese solo números separados por comas.");
        } else {
            const resultadoMonitoreo = monitorearSensores(historialUsuario);
            
            alert(
                "SISTEMA DE MONITOREO DE TEMPERATURA\n" +
                "---------------------------------------\n" +
                `Historial ingresado: [${historialUsuario.join(", ")}]\n` +
                `Estado del sistema: ${resultadoMonitoreo}`
            );
        }
    }
    break;
    case "14":
    
    const clientePremium = { compras: [120000, 95000, 150000, 80000, 110000], años: 3 };
    const clienteNuevo = { compras: [50000, 40000, 30000, 60000, 20000], años: 1 };

    const resultadoPremium = calcularDescuentoLealtad(clientePremium.compras, clientePremium.años);
    const resultadoNuevo = calcularDescuentoLealtad(clienteNuevo.compras, clienteNuevo.años);

    alert(
        "DETALLES DE CLIENTES Y DESCUENTOS\n" +
        "---------------------------------------\n" +
        "CLIENTE 1 (Frecuente):\n" +
        `• Compras Recientes: $${clientePremium.compras.join(", $")}\n` +
        `• Antigüedad: ${clientePremium.años} años\n` +
        `• Estatus: ${resultadoPremium}\n\n` +
        "CLIENTE 2 (Ocasional):\n" +
        `• Compras Recientes: $${clienteNuevo.compras.join(", $")}\n` +
        `• Antigüedad: ${clienteNuevo.años} año\n` +
        `• Estatus: ${resultadoNuevo}`
    );
    break;
    case "15":

    const listaTareas = [
        { descripcion: "Corregir bug de login", prioridad: "alta", dias: 1 },
        { descripcion: "Revisar correo", prioridad: "baja", dias: 0 },
        { descripcion: "Preparar presentación", prioridad: "alta", dias: 5 },
        { descripcion: "Subir cambios a producción", prioridad: "alta", dias: 0 },
        { descripcion: "Reunión de equipo", prioridad: "media", dias: 1 }
    ];

   
    let visualizacion = "LISTA COMPLETA DE TAREAS:\n";
    visualizacion += "---------------------------------------\n";
    listaTareas.forEach((t, i) => {
        visualizacion += `${i + 1}. [${t.prioridad.toUpperCase()}] ${t.descripcion} (Vence en: ${t.dias}d)\n`;
    });

    
    const urgentes = filtrarTareasUrgentes(listaTareas);

    visualizacion += "\n---------------------------------------\n";
    visualizacion += "FILTRO: PRIORIDAD ALTA Y VENCE EN < 2 DÍAS\n";
    visualizacion += "---------------------------------------\n";

    if (urgentes.length > 0) {
        urgentes.forEach((t, i) => {
            visualizacion += `URGENTE: ${t.descripcion.toUpperCase()} (${t.dias} días)\n`;
        });
    } else {
        visualizacion += "No se encontraron tareas que cumplan ambos criterios.";
    }

    alert(visualizacion);
    break;
    case "16":
  
    const pruebasAgua = [
        { m3: 10, estrato: 1, desc: "Consumo Bajo (Rango 1) + Subsidio" },
        { m3: 25, estrato: 2, desc: "Consumo Medio (Rango 1 y 2) Sin Subsidio" },
        { m3: 35, estrato: 1, desc: "Consumo Alto (Rango 1, 2 y 3) + Subsidio" }
    ];

    let reporteAgua = "DETALLE DE LIQUIDACIÓN DE AGUA\n";
    reporteAgua += "---------------------------------------\n";

    pruebasAgua.forEach((prueba, index) => {
        const valorFinal = calcularLiquidacionAgua(prueba.m3, prueba.estrato);
        
        reporteAgua += `PRUEBA ${index + 1}: ${prueba.desc}\n`;
        reporteAgua += `• Consumo Total: ${prueba.m3} m³\n`;
        reporteAgua += `• Estrato: ${prueba.estrato}\n`;
        
        
        if (prueba.m3 <= 15) {
            reporteAgua += `  -> Todo en Rango 1 ($1.000)\n`;
        } else if (prueba.m3 <= 30) {
            reporteAgua += `  -> 15m³ Rango 1 + ${prueba.m3 - 15}m³ Rango 2 ($1.500)\n`;
        } else {
            reporteAgua += `  -> 15m³ Rango 1 + 15m³ Rango 2 + ${prueba.m3 - 30}m³ Rango 3 ($2.500)\n`;
        }

        if (prueba.estrato === 1) {
            reporteAgua += `  -> Subsidio aplicado: -20%\n`;
        }

        reporteAgua += `TOTAL A PAGAR: $${valorFinal}\n`;
        reporteAgua += "---------------------------------------\n";
    });

    alert(reporteAgua);
    break;
    case "17":
   
    const historialVentas = [50000, 60000, 45000, 55000, 800000, 52000];
    
    const analisisCompleto = monitorearTransacciones(historialVentas);
    
    const sospechosas = analisisCompleto.filter(t => t.estado === "Sospechosa");

    let reporteFinanciero = "MONITOREO DE TRANSACCIONES (Detección de Fraude)\n";
    reporteFinanciero += "------------------------------------------------\n";
    reporteFinanciero += "HISTORIAL COMPLETO:\n";
    
    analisisCompleto.forEach((t, i) => {
        reporteFinanciero += `${i + 1}. $${t.monto} -> [${t.estado}]\n`;
    });

    reporteFinanciero += "\n------------------------------------------------\n";
    reporteFinanciero += "ALERTAS GENERADAS (Retorno):\n";
    
    if (sospechosas.length > 0) {
        sospechosas.forEach(s => {
            reporteFinanciero += `ALERTA: Transacción de $${s.monto} supera el 300% del promedio.\n`;
        });
    } else {
        reporteFinanciero += "No se detectaron movimientos inusuales.";
    }

    alert(reporteFinanciero);
    break;
    case "18":
    
    const usuariosBiblioteca = [
        { nombre: "Ana Gómez", prestamos: [{ fechaDevolucion: "2024-05-15", multa: 12000 }] },
        { nombre: "Luis Pérez", prestamos: [{ fechaDevolucion: "2024-05-01", multa: 2000 }] },
        { nombre: "Carla Ruiz", prestamos: [{ fechaDevolucion: "2024-05-19", multa: 0 }] },
        { nombre: "Juan Mora", prestamos: [{ fechaDevolucion: "2024-05-10", multa: 5000 }] }
    ];

    let reporteBiblioteca = "ESTADO DE USUARIOS - BIBLIOTECA\n";
    reporteBiblioteca += "---------------------------------------\n";

    usuariosBiblioteca.forEach(u => {
    
        const multaTotal = u.prestamos.reduce((acc, p) => acc + p.multa, 0);
        const validacion = validarPrestamoBiblioteca(u.prestamos);
        
        reporteBiblioteca += `  ${u.nombre}\n`;
        reporteBiblioteca += `   Multa acumulada: $${multaTotal}\n`;
        reporteBiblioteca += `   Estado: ${validacion.concedido ? "Apto" : "No Apto"}\n\n`;
    });

    const conMultas = usuariosBiblioteca.filter(u => 
        u.prestamos.some(p => p.multa > 0)
    );

    reporteBiblioteca += "---------------------------------------\n";
    reporteBiblioteca += "USUARIOS CON MULTAS PENDIENTES:\n";
    reporteBiblioteca += "---------------------------------------\n";

    if (conMultas.length > 0) {
        conMultas.forEach(u => {
            const deuda = u.prestamos.reduce((acc, p) => acc + p.multa, 0);
            reporteBiblioteca += ` ${u.nombre}: Debe $${deuda}\n`;
        });
    } else {
        reporteBiblioteca += "No hay usuarios con deudas registradas.";
    }

    alert(reporteBiblioteca);
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
            reporte += ` ${i + 1}. ${d.nombre} (${d.distancia} km) - Acumulado: ${d.acumulado} km\n`;
        });
        reporte += `\nKilómetros totales recorridos: ${totalRecorrido} km\n`;
        reporte += `Combustible sobrante: ${200 - totalRecorrido} km`;
    } else {
        reporte += " El vehículo no tiene combustible suficiente para el primer destino.";
    }

    alert(reporte);
    break;
    case "20":
    
    const listaUsuarios = [
        { id: 1, nombre: "Tatiana", email: "tati@correo.com" },
        { id: 2, nombre: "Andrés", email: "andres@correo.com" },
        { id: 3, nombre: "Beatriz", email: "bea@correo.com" }
    ];

    const csvResultado = generarCSV(listaUsuarios);

    let reporteCSV = "GENERADOR DE FORMATO CSV\n";
    reporteCSV += "---------------------------------------\n";
    reporteCSV += "DATOS DE ORIGEN (JSON):\n";
    reporteCSV += JSON.stringify(listaUsuarios, null, 2) + "\n\n";
    
    reporteCSV += "---------------------------------------\n";
    reporteCSV += "RESULTADO EN FORMATO CSV:\n";
    reporteCSV += "---------------------------------------\n";
    reporteCSV += csvResultado;

    console.log("CSV Generado:\n", csvResultado); 
    break;
    case "0": return false;
        default: alert("Opción no válida."); break;
    }
    return true;
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt(
            "EVALUACIÓN JAVASCRIPT\n" +
            "1. Cajero Automático\n" +
            "2. Inventario Dinámico\n" +
            "3. Sistema de Becas\n" +
            "4. Carrito\n" +
            "5. Asistencia\n" +
            "6. Impuestos\n" +
            "7. Validador password\n" +
            "8. Estadísticas\n" +
            "9. Nómina con Recargos\n" +
            "10. Conversor de Moneda\n" +
            "11. Capacidad de Aula\n" +
            "12. Palabras Prohibidas\n" +
            "13. Alerta de Sensores\n" +
            "14. Lealtad\n" +
            "15. Tareas Urgentes\n" +
            "16. Liquidación Agua\n" +
            "17. Monitoreo Transacciones\n" +
            "18. Biblioteca\n" +
            "19. Ruta de Entrega\n" +
            "20. Generador CSV\n" +
            "0. Salir"
        );

        if (opcion === null || opcion === "0") {
            continuar = false;
        } else {
            continuar = ejecutarOpcion(opcion);
        }
    }
}

iniciarPrograma();