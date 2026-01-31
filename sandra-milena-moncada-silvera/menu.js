import { calcularMonto } from './ejercicio1.js';
import { ajustarPreciosInventario } from './ejercicio2.js';
import { evaluarBecaEstudiante } from './ejercicio3.js';
import { calcularCarrito } from './ejercicio4.js';
import { evaluarAsistencia } from './ejercicio5.js';
import { calcularImpuestos } from './ejercicio6.js';
import { validarPassword } from './ejercicio7.js';
import { calcularEstadisticas } from './ejercicio8.js';
import { calcularNomina } from './ejercicio9.js';
import { convertirMoneda } from './ejercicio10.js';
import { calcularEstudiantesFuera } from './ejercicio11.js';
import { analizarPalabrasProhibidas } from './ejercicio12.js';
import { verificarTemperaturas } from './ejercicio13.js';
import { calcularDescuentoLealtad } from './ejercicio14.js';
import { filtrarTareasUrgentes } from './ejercicio15.js';
import { calcularCostoAgua } from './ejercicio16.js';
import { monitorearTransacciones } from './ejercicio17.js';
import { verificarPrestamo } from './ejercicio18.js';
import { planificarRuta } from './ejercicio19.js';
import { generarCSV } from './ejercicio20.js';

function ejecutarMenu() {
    let opcion = "";

    while (opcion !== "0") {
       opcion = prompt(
    "--- MENU DE EJERCICIOS - MILENA ---\n\n" +
    "1. Cajero Automatico\n" +
    "2. Ajuste Inventario\n" +
    "3. Beca Estudiante\n" +
    "4. Carrito Electronica\n" +
    "5. Asistencia y Multas\n" +
    "6. Impuestos\n" +
    "7. Validador Password\n" +
    "8. Promedio Atletico\n" +
    "9. Nomina y Horas Extra\n" +
    "10. Conversor Monedas\n" +
    "11. Aforo Estudiantes\n" +
    "12. Palabras Prohibidas\n" +
    "13. Sensor Temperatura\n" +
    "14. Descuento Lealtad\n" +
    "15. Tareas Urgentes\n" +
    "16. Factura de Agua\n" +
    "17. Transacciones Sospechosas\n" +
    "18. Prestamos Libros\n" +
    "19. Plan de Ruta\n" +
    "20. Generador CSV\n" +
    "0. Salir\n\n" +
    "Seleccione una opcion (0-20):"
);
        if (opcion === "0") {
            alert("Finalizando programa...");
            break;
        }

        switch (opcion) {


            case "1":
                let montoInput = parseInt(prompt("Monto a retirar:"));
                let resultado = calcularMonto(montoInput);
                if (typeof resultado === "string") {
                    alert(resultado);
                } else {
                    alert(`50k: ${resultado.billetes50}, 20k: ${resultado.billetes20}, 10k: ${resultado.billetes10}`);
                }
                break;
            case "2":
                let inventario = [
                { nombre: "Leche", stock: 3, precio: 2000 },
                { nombre: "Arroz", stock: 25, precio: 3000 },
                { nombre: "Huevo", stock: 10, precio: 500 }];
                let inventarioAjustado = ajustarPreciosInventario(inventario);
                let mensaje = "Inventario Actualizado:\n";
                inventarioAjustado.forEach(p => {
                mensaje += `- ${p.nombre}: $${p.precio} (Stock: ${p.stock})\n`; });
                alert(mensaje);
                break;
            
            case "3":
                let nombre = prompt("Nombre del estudiante:");
                let promedio = parseFloat(prompt("Promedio (0.0 - 5.0):"));
                let edad = parseInt(prompt("Edad:"));
                let estrato = parseInt(prompt("Estrato socioeconómico:"));
                let datosEstudiante = {
                    nombre: nombre,promedio: promedio,edad: edad,estrato: estrato
                };
                let esApto = evaluarBecaEstudiante(datosEstudiante);
                if (esApto) {
                    alert("¡Felicidades " + nombre + "! Eres apto para la beca.");
                } else {
                    alert("Lo sentimos, no cumples con los requisitos para la beca.");
                }
                break;
            case "4":
                const miCarrito = [
                    { nombre: "Laptop", categoria: "Electronica", precio: 2000000 },
                    { nombre: "Mouse", categoria: "Electronica", precio: 50000 },
                    { nombre: "Teclado", categoria: "Electronica", precio: 80000 },
                    { nombre: "Monitor", categoria: "Electronica", precio: 500000 },
                    { nombre: "Silla", categoria: "Muebles", precio: 300000 }
                ];
                const totalPagar = calcularCarrito(miCarrito);
                alert("Resumen de Compra:\n" +
                      "Artículos en carrito: " + miCarrito.length + "\n" +
                      "Total a pagar (con descuentos aplicados): $" + totalPagar
                    );
                    break;
                
            case "5":
                const registroLlegadas = ["08:05", "08:20", "08:10", "08:30"];
                const resultadoAsistencia = evaluarAsistencia(registroLlegadas);
                alert(
                    "Registro de asistencia:\n" +
                    "Horas reportadas: " + registroLlegadas.join(", ") + "\n\n" +
                    "Resultado del análisis: " + resultadoAsistencia
                );
                break;
            case "6":
                const historialVentas = [200000, 600000, 150000, 800000];
                const totalDeducible = calcularImpuestos(historialVentas);
                alert(
                    "Resumen de Impuestos:\n" +
                    "Ventas procesadas: " + historialVentas.length + "\n" +
                    "Monto total de IVA + Retenciones: $" + totalDeducible
                );
                break;
            case "7":
                let passwordIngresada = prompt("Ingrese la contraseña a validar (Mínimo 8 caracteres, debe incluir un número y un símbolo):");
                let resultadoValidacion = validarPassword(passwordIngresada);
                if (resultadoValidacion === "Segura") {
                    alert(" Contraseña Segura");
                } else {
                    alert(" Contraseña Insegura: Debe tener al menos 8 caracteres, un número y un carácter especial.");
                }
    break;
            case "8":
                let entrada = prompt("Ingrese los puntajes separados por comas (ejemplo: 10, 20, 30, 40, 50):");
                let listaPuntajes = entrada.split(",").map(n => parseFloat(n.trim()));
                if (listaPuntajes.length <= 2) {
                    alert("Error: Se necesitan más de 2 puntajes para calcular este promedio.");
                } else {
                    let promedioEspecial = calcularEstadisticas(listaPuntajes);
                    alert(
                        "Análisis de Puntajes:\n" +
                        "Cantidad ingresada: " + listaPuntajes.length + "\n" +
                        "Promedio (excluyendo el más alto y el más bajo): " + promedioEspecial
                    );
                }
                break;
            case "9":
                let horas = parseFloat(prompt("Ingrese el total de horas trabajadas:"));
                let valor = parseFloat(prompt("Ingrese el valor de la hora:"));
                if (isNaN(horas) || isNaN(valor)) {
                    alert("Por favor, ingrese valores numéricos válidos.");
                } else {
                    let nominaTotal = calcularNomina(horas, valor);
                    alert(
                        "Cálculo de Nómina:\n" +
                        "Horas laboradas: " + horas + "\n" +
                        "Valor hora: $" + valor + "\n\n" +
                        "Total a pagar (incluyendo recargos): $" + nominaTotal
                    );
                }
                break;
            case "10":
                let monto = parseFloat(prompt("Ingrese el monto a convertir:"));
                let monedaOrigen = prompt("Moneda origen (COP, USD, EUR):").toUpperCase();
                let monedaDestino = prompt("Moneda destino (COP, USD, EUR):").toUpperCase();
                if (isNaN(monto)) {
                    alert("Por favor, ingrese un monto válido.");
                } else {
                    let conversion = convertirMoneda(monto, monedaOrigen, monedaDestino);
                    alert(
                        "Conversión Exitosa:\n" +
                        monto + " " + monedaOrigen + " equivale a: " + 
                        conversion + " " + monedaDestino
                    );
                }
                break;
            case "11":
                let capMax = parseInt(prompt("Ingrese la capacidad máxima del aula:"));
                let gruposEntrada = prompt("Ingrese el tamaño de los grupos separados por comas (ej: 10, 15, 8):");
                let listaGrupos = gruposEntrada.split(",").map(n => parseInt(n.trim()));
                if (isNaN(capMax) || listaGrupos.some(isNaN)) {
                    alert("Por favor, ingrese números válidos.");
                } else {
                    let fuera = calcularEstudiantesFuera(capMax, listaGrupos);
                    alert(
            "Reporte de Ocupación:\n" +
            "Capacidad Máxima: " + capMax + "\n" +
            "Grupos intentando ingresar: " + listaGrupos.join(", ") + "\n\n" +
            "Total de estudiantes que quedaron fuera: " + fuera
        );
    }
    break;
            case "12":let textoAnalizar = prompt("Ingrese el texto a analizar:");
    let prohibidasInput = prompt("Ingrese las palabras prohibidas separadas por coma (ej: feo, malo, tonto):");
    let listaProhibidas = prohibidasInput.split(",").map(p => p.trim());

    if (!textoAnalizar || !prohibidasInput) {
        alert("Por favor, ingrese tanto el texto como las palabras.");
    } else {
        let reporte = analizarPalabrasProhibidas(textoAnalizar, listaProhibidas);
        let mensajeReporte = "Reporte de Palabras Prohibidas:\n";
        
        for (let palabra in reporte) {
            mensajeReporte += `- "${palabra}": ${reporte[palabra]} veces\n`;
        }
        
        alert(mensajeReporte);
    }
    break;
            case "13":let entradaTemps = prompt("Ingrese las temperaturas separadas por coma (ej: 34, 36, 38, 32, 39):");
    if (entradaTemps) {
        let listaTemps = entradaTemps.split(",").map(t => parseFloat(t.trim()));
        let estadoSensor = verificarTemperaturas(listaTemps);
        
        alert(
            "Reporte del Sensor:\n" +
            "Lecturas: " + listaTemps.join("°C, ") + "°C\n\n" +
            "Resultado: " + estadoSensor
        );
    }
    break;
            case "14":
                let historial = [120000, 150000, 90000, 110000]; // Promedio > 100k
                let añosCliente = parseInt(prompt("Ingrese los años de antigüedad del cliente:"));
                let valorCompra = parseFloat(prompt("Ingrese el valor de la compra actual:"));
                if (isNaN(añosCliente) || isNaN(valorCompra)) {
                    alert("Por favor, ingrese valores válidos.");
                } else {
                    let ahorro = calcularDescuentoLealtad(historial, añosCliente, valorCompra);
                    if (ahorro > 0) {
                        alert("¡Cliente VIP detectado!\n" +
                            "Descuento aplicado (25%): $" + ahorro + "\n" +
                            "Total a pagar: $" + (valorCompra - ahorro));
                        } else {
                            alert("Cliente estándar. No aplica para descuento de lealtad esta vez.");
                        }
                    }
                    break;
            case "15":
                const listaDeTareas = [
                    { descripcion: "Enviar reporte mensual", prioridad: "alta", dias: 1 },
                    { descripcion: "Comprar suministros", prioridad: "media", dias: 5 },
                    { descripcion: "Arreglar servidor", prioridad: "alta", dias: 0 },
                    { descripcion: "Llamar a cliente", prioridad: "baja", dias: 2 }
                ];
                let urgentesEncontradas = filtrarTareasUrgentes(listaDeTareas);
                if (urgentesEncontradas.length > 0) {
                    alert("⚠️ TAREAS URGENTES DETECTADAS:\n" + 
                        urgentesEncontradas.map(t => "- " + t).join("\n"));
                    } else {
                        alert("No hay tareas urgentes para hoy. ¡Buen trabajo!");
                    }
                    break;
            case "16":
                let m3Consumidos = parseFloat(prompt("Ingrese los metros cúbicos (m3) consumidos:"));
                let estratoSocio = parseInt(prompt("Ingrese su estrato (1-6):"));
                if (isNaN(m3Consumidos) || isNaN(estratoSocio)) {
                    alert("Por favor, ingrese valores numéricos válidos.");
                } else {
                    let totalFactura = calcularCostoAgua(m3Consumidos, estratoSocio);
                    let mensajeFactura = "Resumen de Facturación:\n" +
                    "Consumo: " + m3Consumidos + " m3\n" +
                    "Estrato: " + estratoSocio + "\n" +
                    "Total a pagar: $" + totalFactura;
                    if (estratoSocio === 1) {
                        mensajeFactura += "\n(Se aplicó un 20% de descuento por estrato 1)";
                    }
                    alert(mensajeFactura);
                }
                break;
            case "17":
                const historialPagos = [50000, 60000, 45000, 55000, 1000000]; 
                let alertas = monitorearTransacciones(historialPagos);
                let mensajeAlertas = "Análisis de Transacciones:\n";
                mensajeAlertas += "Historial procesado: " + historialPagos.join(", ") + "\n\n";
                if (alertas.length > 0) {
                    alertas.forEach(a => {
                        mensajeAlertas += " ALERTA: Monto $" + a.monto + " - " + a.estado + "\n";
                    });
                } else {
                    mensajeAlertas += " No se detectaron movimientos sospechosos.";
                }alert(mensajeAlertas);
                break;
            case "18":
                const misPrestamos = [
                    { libro: "El Quijote", multa: 2000, diasRetraso: 5 },
                    { libro: "Cien años de soledad", multa: 5000, diasRetraso: 12 },
                    { libro: "Javascript Pro", multa: 0, diasRetraso: 0 }
                ];
                let decision = verificarPrestamo(misPrestamos);
                let resumen = "Estado de cuenta de Biblioteca:\n";
                misPrestamos.forEach(p => {
                    resumen += `- ${p.libro}: Multa $${p.multa} (${p.diasRetraso} días)\n`;
                });
                alert(resumen + "\nResultado: " + decision);
                break;
            case "19":
                const miViaje = [
                    { ciudad: "Medellín", distancia: 50 },
                    { ciudad: "Marinilla", distancia: 30 },
                    { ciudad: "Guatapé", distancia: 40 },
                    { ciudad: "Manizales", distancia: 150 }
                 ];
                let destinosAlcanzados = planificarRuta(miViaje);
                let mensajeRuta = "Plan de Ruta (Combustible inicial: 200 gal):\n";
                destinosAlcanzados.forEach(d =>
                     {mensajeRuta += ` Llegamos a: ${d.ciudad} (${d.distancia} gal)\n`;});
                     if (destinosAlcanzados.length < miViaje.length) {
                        mensajeRuta += "\n El combustible se agotó antes de llegar a todos los destinos.";
                    } else {
                        mensajeRuta += "\n ¡Llegamos a todos los puntos con éxito!";
                    }
                    alert(mensajeRuta);
                    break;
            case "20":
                const listaUsuarios = [
                    { id: 1, nombre: "Andres", email: "andres@mail.com" },
                    { id: 2, nombre: "Beatriz", email: "bea@mail.com" },
                    { id: 3, nombre: "Carlos", email: "charles@mail.com" }
                ];
                let contenidoCSV = generarCSV(listaUsuarios);
                alert("Resultado del archivo CSV:\n\n" + contenidoCSV);
                console.log("Archivo CSV generado:\n" + contenidoCSV);
                break;
            default:
                if (opcion !== null) {
                    alert("Opción no válida. Por favor, selecciona un número del 0 al 20.");
                }
                break;
        }
    }
}

ejecutarMenu();


