import { calcularDenominacionesBilletes } from './ejercicio1.js';
import { actualizarPreciosInventario } from './ejercicio2.js';
import { evaluarBeca } from './ejercicio3.js';
import { calcularTotalCarrito, carritoPrueba } from './ejercicio4.js';
import { evaluarAsistencia, asistenciasPrueba1, asistenciasPrueba2 } from './ejercicio5.js';
import { calcularImpuestosVentas, ventasPrueba } from './ejercicio6.js';
import { validarPassword, passwordPruebaSegura, passwordPruebaInsegura } from './ejercicio7.js';
import { calcularEstadisticasPuntaje, puntajesPrueba } from './ejercicio8.js';
import { calcularNomina, datosNominaPrueba } from './ejercicio9.js';
import { convertirMoneda } from './ejercicio10.js';
import { calcularCapacidadAula } from './ejercicio11.js';
import { analizarPalabrasProhibidas } from './ejercicio12.js';
import { monitorearSensores } from './ejercicio13.js';
import { evaluarLealtadClientes, clientesPrueba } from './ejercicio14.js';
import { filtrarTareasUrgentes, tareasPrueba } from './ejercicio15.js';
import { liquidarServicioAgua } from './ejercicio16.js';
import { monitorearTransacciones, historialTransaccionesPrueba } from './ejercicio17.js';
import { validarPrestamoBiblioteca, usuarioAprobado, usuarioDenegado } from './ejercicio18.js';
import { planificarRutaEficiente, rutaPrueba } from './ejercicio19.js';
import { generarYDescargarCsv, listaUsuariosPrueba } from './ejercicio20.js';

function menuPrincipal() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "--- TALLER DE LÓGICA DE PROGRAMACIÓN ---\n" +
            "1. Cajero de Denominaciones\n" +
            "2. Actualizar precios\n" +
            "3. Sistema de Becas\n" +
            "4. Descuento por categoría en carrito de compras\n" +
            "5. Evaluar asistencia - establecer multa\n" +
            "6. Calcular impuestos ventas\n" +
            "7. Validar el nivel de seguridad en una contaseña\n" +
            "8. Calcular promedio restando máximo y mínimo\n" +
            "9. Calcular el salario basándonos en las horas trabajadas\n" +
            "10. Conversor de moneda con seguimiento de contador de ejecuciones\n" +
            "11. Calcular capacidad de aula distribuida por grupos\n" +
            "12. Analizar palabras prohibidas en un texto\n" +
            "13. Sensor de temperaturas con alerta\n" +
            "14. Evaluación de descuento a clientes por fidelidad en compras\n" +
            "15. Filtro de actividades por prioridad y días restantes\n" +
            "16. Liquidación de agua por rangos progresivos y subsidio por estrato\n" +
            "17. Monitoreo de transacciones sospechosas por desviación de promedio\n" +
            "18. Sistema de biblioteca para validación de multas y retrasos\n" +
            "19. Planificación de ruta de entrega basada en combustible\n" +
            "20. Generador de CSV para exportación de datos de usuarios\n" +
            "0. Salir\n" +
            "Seleccione una opción:"
        );

        if (opcion === null || opcion === '0') {
            continuar = false;
            alert("Saliendo del programa...");
            break;
        }

        switch (opcion) {
            case '1':
                const monto = prompt("Ingrese el monto a retirar (múltiplos de 10.000):");
                if (monto !== null) {
                    const resultado1 = calcularDenominacionesBilletes(Number(monto));
                    alert("Resultado:\n" + JSON.stringify(resultado1, null, 2));
                }
                break;

            case '2':
                let nombre = prompt("Ingrese el nombre del producto:", "Laptop");
                let stock = parseInt(prompt(`Ingrese el stock para ${nombre}:`, "3"));
                let precio = parseFloat(prompt(`Ingrese el precio para ${nombre}:`, "1000000"));

                const productosUsuario = [{ nombre, stock, precio }];
                const resultado2 = actualizarPreciosInventario(productosUsuario);

                alert(
                    `Resultado para ${nombre}:\n` +
                    `Precio Final (ajustado): ${resultado2[0].precio}`
                );
                console.table(resultado2);
                break;

            case '3':
                let p_promedio = parseFloat(prompt("Ingrese el promedio del estudiante (0.0 - 5.0):"));
                let p_edad = parseInt(prompt("Ingrese la edad del estudiante:"));
                let p_estrato = parseInt(prompt("Ingrese el estrato (1 - 6):"));

                const estudiante = { promedio: p_promedio, edad: p_edad, estrato: p_estrato };
                const esBeneficiario = evaluarBeca(estudiante);

                alert(
                    `--- RESULTADO DE BECA ---\n` +
                    `Estudiante: ${esBeneficiario ? "APROBADO" : "NO APROBADO"}\n\n` +
                    `Condiciones evaluadas:\n` +
                    `- Promedio: ${p_promedio}\n` +
                    `- Edad: ${p_edad}\n` +
                    `- Estrato: ${p_estrato}`
                );
                break;

            case '4':
                const listaProductos = carritoPrueba
                    .map(p => `- ${p.nombre} (${p.categoria}): $${p.precio}`)
                    .join('\n');

                const totalCompra = calcularTotalCarrito(carritoPrueba);
                const conteoElectronica = carritoPrueba.filter(p => p.categoria === 'Electronica').length;

                alert(
                    `--- PRODUCTOS EN EL CARRITO ---\n` +
                    `${listaProductos}\n\n` +
                    `--- RESUMEN ---\n` +
                    `Productos Electrónica: ${conteoElectronica}\n` +
                    `Descuento aplicado (15%): ${conteoElectronica > 3 ? "SÍ" : "NO"}\n\n` +
                    `TOTAL A PAGAR: $${totalCompra}`
                );

                console.table(carritoPrueba);
                break;

            case '5':
                const res1 = evaluarAsistencia(asistenciasPrueba1);
                const res2 = evaluarAsistencia(asistenciasPrueba2);

                alert(
                    `--- REPORTE DE ASISTENCIA ---\n\n` +
                    `Escenario 1 (Retardos leves):\n` +
                    `Registros: ${asistenciasPrueba1.join(' | ')}\n` +
                    `Resultado: ${res1}\n\n` +
                    `Escenario 2 (Retardos críticos):\n` +
                    `Registros: ${asistenciasPrueba2.join(' | ')}\n` +
                    `Resultado: ${res2}`
                );
                break;

            case '6':
                const totalImpuestos = calcularImpuestosVentas(ventasPrueba);

                alert(
                    `--- REPORTE DE IMPUESTOS ---\n\n` +
                    `Montos evaluados: ${ventasPrueba.join(' | ')}\n` +
                    `IVA aplicado (19%): Sí (a todas)\n` +
                    `Retención aplicada (4%): Solo a ventas > $500.000\n\n` +
                    `ACUMULADO TOTAL IMPUESTOS: $${totalImpuestos}`
                );
                break;

            case '7':
                const passUsuario = prompt("Ingrese una contraseña para validar (o deje vacío para usar pruebas):");

                if (passUsuario) {
                    const resultado = validarPassword(passUsuario);
                    alert(`La contraseña ingresada es: ${resultado}`);
                } else {
                    const res1 = validarPassword(passwordPruebaSegura);
                    const res2 = validarPassword(passwordPruebaInsegura);
                    alert(
                        `--- PRUEBA AUTOMÁTICA ---\n\n` +
                        `Password "${passwordPruebaSegura}": ${res1}\n` +
                        `Password "${passwordPruebaInsegura}": ${res2}`
                    );
                }
                break;

            case '8':
                const promedio = calcularEstadisticasPuntaje(puntajesPrueba);
                const max = Math.max(...puntajesPrueba);
                const min = Math.min(...puntajesPrueba);

                alert(
                    `--- ESTADÍSTICAS DE PUNTAJE ---\n\n` +
                    `Puntajes originales: ${puntajesPrueba.join(', ')}\n` +
                    `Valor más alto (excluido): ${max}\n` +
                    `Valor más bajo (excluido): ${min}\n\n` +
                    `PROMEDIO RESTANTE: ${promedio}`
                );
                break;

            case '9':
                const h = parseInt(prompt("Ingrese horas trabajadas:", datosNominaPrueba.horas));
                const v = parseFloat(prompt("Ingrese valor de la hora:", datosNominaPrueba.valorHora));

                if (!isNaN(h) && !isNaN(v)) {
                    const resultado = calcularNomina(h, v);
                    alert(
                        `--- DESGLOSE DE NÓMINA ---\n\n` +
                        `Horas Totales: ${h}\n` +
                        `Valor Hora Base: $${v}\n` +
                        `---------------------------\n` +
                        `Pago Horas Normales: $${resultado.normal}\n` +
                        `Pago Extras (50%): $${resultado.extra50}\n` +
                        `Pago Extras (100%): $${resultado.extra100}\n` +
                        `---------------------------\n` +
                        `TOTAL NETO: $${resultado.total}`
                    );
                }
                break;

            case '10':
                const montoConv = parseFloat(prompt("Monto a convertir:"));
                const origen = prompt("Moneda origen (USD, EUR, COP):").toUpperCase();
                const destino = prompt("Moneda destino (USD, EUR, COP):").toUpperCase();

                if (!isNaN(montoConv)) {
                    const resConv = convertirMoneda(montoConv, origen, destino);
                    alert(
                        `--- CONVERSOR DE DIVISAS ---\n` +
                        `${montoConv} ${origen} = ${resConv.valor} ${destino}\n` +
                        `---------------------------\n` +
                        `Consultas en esta sesión: ${resConv.totalConsultas}`
                    );
                }
                break;

            case '11':
                const cap = parseInt(prompt("Capacidad del aula:"));
                const gruposInput = prompt("Grupos (ej: 10,20,15):");

                if (!isNaN(cap) && gruposInput) {
                    const gruposArray = gruposInput.split(',').map(Number);
                    const resultado11 = calcularCapacidadAula(cap, gruposArray);

                    let mensaje = `--- REPORTE DE CAPACIDAD ---\n`;
                    resultado11.desglose.forEach(g => {
                        mensaje += `${g.grupo}: Entraron ${g.ingresaron}, Fuera ${g.fuera}\n`;
                    });

                    mensaje += `\n--- RESUMEN ---\n`;
                    mensaje += `Lograron entrar: ${resultado11.resumen.totalIngresaron}\n`;
                    mensaje += `Quedaron fuera: ${resultado11.resumen.totalFuera}\n`;
                    mensaje += `Espacio vacío: ${resultado11.resumen.espacioSobrante}`;

                    alert(mensaje);
                    console.table(resultado11.desglose);
                }
                break;

            case '12':
                const textoUsuario = prompt("Ingrese el texto a analizar:");
                const prohibidasInput = prompt("Ingrese las palabras prohibidas separadas por coma:");

                if (textoUsuario && prohibidasInput) {
                    const listaProhibidas = prohibidasInput.split(',').map(p => p.trim());
                    const resultado12 = analizarPalabrasProhibidas(textoUsuario, listaProhibidas);

                    let reporte = "--- RESULTADO DEL ANÁLISIS ---\n";
                    for (const palabra in resultado12) {
                        reporte += `- "${palabra}": ${resultado12[palabra]} veces\n`;
                    }

                    alert(reporte);
                    console.table(resultado12);
                }
                break;

            case '13':
                const tempsInput = prompt("Ingrese las temperaturas separadas por coma (ej: 30,36,37,38,32):");

                if (tempsInput) {
                    const listaTemps = tempsInput.split(',').map(Number);
                    const resultado13 = monitorearSensores(listaTemps);

                    alert(
                        `--- REPORTE DE SENSORES ---\n` +
                        `Lecturas: ${listaTemps.join('°C, ')}°C\n` +
                        `Resultado: ${resultado13}`
                    );
                }
                break;

            case '14':
                const resultados14 = evaluarLealtadClientes(clientesPrueba);

                let reporte14 = "--- REPORTE DE LEALTAD (ÚLTIMAS 5 COMPRAS) ---\n\n";
                resultados14.forEach(c => {
                    reporte14 += `${c.nombre}:\n`;
                    reporte14 += `- Promedio: $${c.promedio}\n`;
                    reporte14 += `- Antigüedad: ${c.antiguedadAnios} años\n`;
                    reporte14 += `- Estado: ${c.resultado}\n`;
                    reporte14 += `---------------------------\n`;
                });

                alert(reporte14);
                console.table(resultados14);
                break;


            case '15':
                const hoy = new Date();
                const urgentes = filtrarTareasUrgentes(tareasPrueba);

                let reporte15 = "--- DATOS DE PRUEBA CARGADOS ---\n";
                tareasPrueba.forEach((t, i) => {
                    reporte15 += `${i + 1}. ${t.descripcion} | ${t.prioridad} | Vence: ${t.fechaVencimiento}\n`;
                });

                reporte15 += "\n----------------------------------------\n";
                reporte15 += `FECHA ACTUAL: ${hoy.toLocaleDateString()}\n`;
                reporte15 += "----------------------------------------\n\n";

                reporte15 += "--- TAREAS URGENTES (Alta Prioridad & < 2 días) ---\n";

                if (urgentes.length > 0) {
                    urgentes.forEach(t => {
                        const fechaV = new Date(t.fechaVencimiento);
                        const diff = Math.ceil((fechaV - hoy) / (1000 * 60 * 60 * 24));

                        reporte15 += `[!] ${t.descripcion.toUpperCase()}\n`;
                        reporte15 += `    Plazo: ${diff === 0 ? "VENCE HOY" : diff + " día(s)"}\n`;
                        reporte15 += `---------------------------\n`;
                    });
                } else {
                    reporte15 += "No se encontraron tareas que cumplan los criterios.";
                }

                alert(reporte15);
                console.log("Datos Originales:", tareasPrueba);
                console.table(urgentes);
                break;

            case '16':
                const infoRangos =
                    "--- TARIFAS DE AGUA ---\n" +
                    "1. Primeros 15m³: $1.000 c/u\n" +
                    "2. De 16m³ a 30m³: $1.500 c/u\n" +
                    "3. Exceso (>30m³): $2.500 c/u\n" +
                    "* Estrato 1 recibe 20% de subsidio.\n";

                alert(infoRangos);

                const consumoUsuario = parseFloat(prompt("Ingrese los m³ consumidos:"));
                const estratoUsuario = parseInt(prompt("Ingrese su estrato (1-6):"));

                if (!isNaN(consumoUsuario) && !isNaN(estratoUsuario)) {
                    const totalPagar = liquidarServicioAgua(consumoUsuario, estratoUsuario);

                    alert(
                        `--- LIQUIDACIÓN FINAL ---\n` +
                        `Consumo: ${consumoUsuario} m³\n` +
                        `Estrato: ${estratoUsuario}\n` +
                        `Subsidio aplicado: ${estratoUsuario === 1 ? "SÍ (20%)" : "NO"}\n` +
                        `---------------------------\n` +
                        `TOTAL A PAGAR: $${totalPagar}`
                    );
                }
                break;

            case '17':
                const analisis = monitorearTransacciones(historialTransaccionesPrueba);

                let reporte17 = "--- MONITOREO DE TRANSACCIONES ---\n";
                reporte17 += "Criterio: Alerta si > 300% del promedio anterior\n\n";

                analisis.forEach(t => {
                    reporte17 += `T#${t.transaccion}: $${t.monto} | ${t.estado}`;
                    if (t.estado === "Sospechosa") {
                        reporte17 += ` [!] (Promedio: $${t.promedioPrevio})`;
                    }
                    reporte17 += "\n";
                });

                alert(reporte17);
                console.table(analisis);
                break;

            case '18':
                const testOpcion = prompt("Seleccione caso de prueba:\n1. Usuario con deuda leve (Aprobado)\n2. Usuario con deuda/retraso grave (Denegado)");

                const datosPrueba = (testOpcion === '1') ? usuarioAprobado : usuarioDenegado;
                const resultado18 = validarPrestamoBiblioteca(datosPrueba);

                let reporte18 = `--- SIMULACIÓN DE BIBLIOTECA (CASO ${testOpcion === '1' ? 'APROBADO' : 'DENEGADO'}) ---\n\n`;
                reporte18 += `ESTADO: ${resultado18.autorizado ? "AUTORIZADO" : "DENEGADO"}\n`;
                reporte18 += `Deuda Total: $${resultado18.resumen.multaAcumulada}\n`;
                reporte18 += `¿Tiene retraso > 10 días?: ${resultado18.resumen.retrasoGrave ? "SÍ" : "NO"}\n`;
                reporte18 += `---------------------------\n`;

                resultado18.detalles.forEach(d => {
                    reporte18 += `- ${d.libro}: ${d.estado} ($${d.multa})\n`;
                });

                alert(reporte18);
                console.table(resultado18.detalles);
                break;

            case '19':
                let listaParaProcesar = [];
                const modo = prompt("Seleccione modo:\n1. Usar datos de prueba\n2. Ingresar propia ruta");

                if (modo === '2') {
                    const cantidad = parseInt(prompt("¿Cuántos destinos desea ingresar?"));
                    for (let i = 0; i < cantidad; i++) {
                        const nombre = prompt(`Nombre del destino ${i + 1}:`);
                        const dist = parseFloat(prompt(`Distancia a ${nombre} (km):`));
                        if (nombre && !isNaN(dist)) listaParaProcesar.push({ destino: nombre, distancia: dist });
                    }
                } else {
                    listaParaProcesar = rutaPrueba;
                }

                if (listaParaProcesar.length > 0) {
                    const res19 = planificarRutaEficiente(listaParaProcesar);

                    let reporte19 = "--- RUTA MÁS EFICIENTE (Ordenada por cercanía) ---\n\n";
                    reporte19 += "LOGRADOS:\n";
                    res19.alcanzados.forEach(d => {
                        reporte19 += `- ${d.nombre} (${d.distancia}km) | Saldo: ${d.combustibleRestante}km\n`;
                    });

                    if (res19.noAlcanzados.length > 0) {
                        reporte19 += "\n INALCANZABLES:\n";
                        res19.noAlcanzados.forEach(d => reporte19 += `- ${d.nombre} (${d.distanciaRequerida}km)\n`);
                    }

                    reporte19 += `\nTotal destinos logrados: ${res19.resumen.cantidadAlcanzados}`;
                    alert(reporte19);
                }
                break;

            case '20':
                const agregar = confirm("--- GENERADOR DE CSV ---\n\n¿Desea registrar un nuevo usuario antes de exportar?");

                if (agregar) {
                    const id = listaUsuariosPrueba.length + 1;
                    const nombre = prompt("Nombre completo:");
                    const email = prompt("Correo electrónico:");
                    if (nombre && email) {
                        listaUsuariosPrueba.push({ id, nombre, email });
                        alert("Usuario agregado exitosamente.");
                    }
                }

                const descargar = confirm(`Actualmente hay ${listaUsuariosPrueba.length} usuarios. ¿Desea descargar el archivo CSV ahora?`);

                if (descargar) {
                    const textoGenerado = generarYDescargarCsv(listaUsuariosPrueba);
                    alert("¡Archivo 'usuarios_registrados.csv' generado!\n\nVista previa:\n" + textoGenerado);
                }
                break;

        }
    }
}
menuPrincipal();