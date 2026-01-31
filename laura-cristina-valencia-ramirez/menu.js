import { cajeroAutomatico } from './ejercicio1.js';
import { inventarioConPreciosDinamicos } from './ejercicio2.js';
import { sistemaDeBecas } from './ejercicio3.js';
import { carritoConDescuento } from './ejercicio4.js';
import { controlAsistencia } from './ejercicio5.js';
import { calculadoraImpuestos } from './ejercicio6.js';
import { validarContrasena } from './ejercicio7.js';
import { estadisticasPuntaje } from './ejercicio8.js';
import { calcularNomina } from './ejercicio9.js';
import { convertirDivisas } from './ejercicio10.js';
import { gestionarAula } from './ejercicio11.js';
import { verificarPalabrasProhibidas } from './ejercicio12.js';
import { monitorizarTemperatura } from './ejercicio13.js';
import { calcularDescuentoLealtad } from './ejercicio14.js';
import { filtrarTareasUrgentes } from './ejercicio15.js';
import { calcularServicioAgua } from './ejercicio16.js';
import { detectarFraude } from './ejercicio17.js';
import { verificarEstadoUsuario } from './ejercicio18.js';
import { planificarRuta } from './ejercicio19.js';
import { generarReporteCSV } from './ejercicio20.js';

function iniciarMenu() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(`
--- MENÚ FINAL JAVASCRIPT ---
1. Ejercicio 1: Cajero
2. Ejercicio 2: Inventario 
3. Ejercicio 3: Becas
4. Ejercicio 4: Carrito 
5. Ejercicio 5: Asistencia
6. Ejercicio 6: Impuestos
7. Ejercicio 7: Contraseña
8. Ejercicio 8: Estadísticas
9. Ejercicio 9: Nómina 
10. Ejercicio 10: Divisas
11. Ejercicio 11: Aula
12. Ejercicio 12: Palabras Prohibidas
13. Ejercicio 13: Sensores
14. Ejercicio 14: Lealtad
15. Ejercicio 15: Tareas Urgentes
16. Ejercicio 16: Factura Agua
17. Ejercicio 17: Fraude
18. Ejercicio 18: Biblioteca 
19. Ejercicio 19: Ruta
20. Ejercicio 20: CSV
0. Salir

Elige una opción:`);

        if (opcion === '0' || opcion === null) {
            continuar = false;
            break;
        }

        if (opcion === '1') {
            let m = parseInt(prompt("Monto a retirar (múltiplo de 10.000):"));
            if (!isNaN(m)) alert(JSON.stringify(cajeroAutomatico(m), null, 2));
            else alert("Monto inválido");

        } else if (opcion === '2') {
            let productos = [
                { nombre: "Arroz", stock: 10, precio: 1000 },
                { nombre: "Papa", stock: 20, precio: 1000 }, 
                { nombre: "Carne", stock: 6, precio: 5000 }
            ];

            let comprando = true;
            while (comprando) {
                let lista = productos.map((p, i) => `${i + 1}. ${p.nombre} (Stock: ${p.stock} | Precio Original: $${p.precio})`).join("\n");
                let seleccion = prompt(`--- TIENDA ---\n${lista}\n\nEscriba el número del producto a comprar (esto afectará el stock y el precio futuro):`);
                
                if (seleccion === null || seleccion.trim() === "") {
                    comprando = false;
                } else {
                    let idx = parseInt(seleccion) - 1;
                    if (productos[idx]) {
                        let cantidad = parseInt(prompt(`¿Cuántas unidades de ${productos[idx].nombre} compra?`));
                        if (!isNaN(cantidad) && cantidad > 0 && cantidad <= productos[idx].stock) {
                            productos[idx].stock -= cantidad;
                            alert(`Compra exitosa. Nuevo stock de ${productos[idx].nombre}: ${productos[idx].stock}`);
                        } else {
                            alert("Stock insuficiente.");
                        }
                    } else {
                        alert("Producto inválido.");
                    }
                }
            }
            
            let actualizados = inventarioConPreciosDinamicos(productos);
            
            let reporte = actualizados.map(p => {
                let estado = "Precio mantenido";
                if(p.precio > 1000 && p.nombre === "Arroz") estado = "¡SUBIÓ! (Stock bajo)"; 
                if(p.stock > 20) estado = "¡BAJÓ! (Exceso stock)";
                return `Producto: ${p.nombre}\nStock Final: ${p.stock}\nPrecio Final: $${p.precio}`;
            }).join("\n----------------\n");
            
            alert(`--- ACTUALIZACIÓN AUTOMÁTICA DE PRECIOS ---\nBasado en las reglas de negocio (Escasez sube precio, Abundancia baja precio):\n\n${reporte}`);

        } else if (opcion === '3') {
            let p = parseFloat(prompt("Promedio:"));
            let e = parseInt(prompt("Edad:"));
            let es = parseInt(prompt("Estrato:"));
            if(!isNaN(p) && !isNaN(e) && !isNaN(es)) {
                let beca = sistemaDeBecas({promedio:p, edad:e, estrato:es});
                alert(beca ? "APROBADO" : "RECHAZADO");
            } else alert("Datos inválidos");

        } else if (opcion === '4') {
            const catalogo = [
                { nombre: "TV", precio: 2000000, categoria: "Electronica" },
                { nombre: "Celular", precio: 800000, categoria: "Electronica" },
                { nombre: "Audífonos", precio: 50000, categoria: "Electronica" },
                { nombre: "Mouse", precio: 20000, categoria: "Electronica" },
                { nombre: "Camisa", precio: 80000, categoria: "Ropa" }
            ];
            
            let carrito = [];
            let comprando = true;

            while (comprando) {
                let menu = catalogo.map((p, i) => `${i + 1}. ${p.nombre} ($${p.precio}) - ${p.categoria}`).join("\n");
                let sel = prompt(`CATÁLOGO:\n${menu}\n\nNúmero de producto (o cancelar para pagar):`);

                if (sel === null) comprando = false;
                else {
                    let idx = parseInt(sel) - 1;
                    if (catalogo[idx]) {
                        let cant = parseInt(prompt(`Cantidad de ${catalogo[idx].nombre}:`));
                        if (!isNaN(cant) && cant > 0) {
                            for(let k=0; k<cant; k++) carrito.push(catalogo[idx]);
                            alert("Agregado.");
                        }
                    }
                }
            }

            if (carrito.length > 0) {
                let totalConDesc = carritoConDescuento(carrito);
                let totalSinDesc = carrito.reduce((acc, p) => acc + p.precio, 0);
                let diff = totalSinDesc - totalConDesc;
                let numElec = carrito.filter(p => p.categoria === 'Electronica').length;

                let explicacion = "";
                if (diff > 0) {
                    explicacion = `¡DESCUENTO APLICADO DE $${diff}!\nMOTIVO: Llevaste ${numElec} productos de Electrónica (Mínimo requerido: >3).`;
                } else {
                    explicacion = `NO SE APLICÓ DESCUENTO.\nMOTIVO: Llevaste ${numElec} productos de Electrónica (Necesitas más de 3 para el descuento).`;
                }

                alert(`--- FACTURA ---\nTotal Normal: $${totalSinDesc}\nTotal a Pagar: $${totalConDesc}\n\n${explicacion}`);
            }

        } else if (opcion === '5') {
            let llegadas = [];
            let reg = true;
            while(reg) {
                let h = prompt("Hora llegada (HH:MM) o cancelar:");
                if(h && h.includes(':')) llegadas.push(h);
                else reg = false;
            }
            if(llegadas.length > 0) {
                let res = controlAsistencia(llegadas);
                let multas = 0;
                let detalle = llegadas.map(h => {
                    let [hh,mm] = h.split(':').map(Number);
                    let min = hh*60+mm;
                    let tarde = min - 480; 
                    if(tarde > 0) { multas += tarde*2; return `${h} (${tarde} min tarde)`; }
                    return `${h} (OK)`;
                }).join(", ");
                alert(`--- ASISTENCIA ---\nRegistros: ${detalle}\nMulta Total: $${multas}\nEstado: ${res}`);
            }

        } else if (opcion === '6') {
            let ventas = [];
            let ing = true;
            while(ing) {
                let v = prompt("Valor venta (o cancelar):");
                if(v) ventas.push(parseFloat(v));
                else ing = false;
            }
            if(ventas.length > 0) {
                let totalImp = calculadoraImpuestos(ventas);
                let desglose = ventas.map(v => {
                    let txt = `$${v} -> IVA: $${v*0.19}`;
                    if(v > 500000) txt += " + RETENCIÓN 4%";
                    return txt;
                }).join("\n");
                alert(`--- IMPUESTOS ---\n${desglose}\n\nTOTAL A PAGAR A LA DIAN: $${totalImp}`);
            }

        } else if (opcion === '7') {
            let valida = false;
            while(!valida) {
                let p = prompt("Ingrese contraseña (mín 8 chars, 1 num, 1 especial):");
                if(p === null) break;
                if(validarContrasena(p) === "Segura") {
                    alert("¡Contraseña Segura! Guardada.");
                    valida = true;
                } else {
                    alert("Insegura. Intente de nuevo.");
                }
            }

        } else if (opcion === '8') {
            let nums = [];
            let p = true;
            while(p){
                let v = prompt(`Números: ${nums}\nIngresar otro (o vacio):`);
                if(v) nums.push(parseFloat(v));
                else p = false;
            }
            if(nums.length >= 3) {
                let max = Math.max(...nums);
                let min = Math.min(...nums);
                let prom = estadisticasPuntaje(nums);
                alert(`Mayor: ${max}\nMenor: ${min}\nPromedio del resto: ${prom}`);
            } else alert("Mínimo 3 datos.");

        } else if (opcion === '9') {
            let calc = true;
            while(calc) {
                let hInput = prompt("Horas trabajadas (o cancelar para salir):");
                if(hInput === null) {
                    calc = false;
                } else {
                    let h = parseInt(hInput);
                    let v = parseFloat(prompt("Valor hora normal:"));
                    if(!isNaN(h) && !isNaN(v)) {
                        let total = calcularNomina(h, v);
                        let mensaje = `Total a Pagar: $${total}\n\nDETALLE:\n`;
                        
                        if (h > 50) {
                            mensaje += "- Se pagaron las primeras 40h normales.\n- Se pagaron 10h con recargo del 50%.\n- Se pagaron " + (h - 50) + "h con recargo del 100% (Doble).";
                        } else if (h > 40) {
                            mensaje += "- Se pagaron las primeras 40h normales.\n- Se pagaron " + (h - 40) + "h con recargo del 50%.";
                        } else {
                            mensaje += "- Todas las horas se pagaron a valor normal.";
                        }
                        alert(mensaje);
                    }
                }
            }

        } else if (opcion === '10') {
            let m = parseFloat(prompt("Monto:"));
            let o = prompt("Origen (COP/USD/EUR):");
            let d = prompt("Destino (COP/USD/EUR):");
            if(m && o && d) {
                let r = convertirDivisas(m, o.toUpperCase(), d.toUpperCase());
                alert(`Resultado: ${r.valor}\nLlevas ${r.totalConversiones} consultas.`);
            }

        } else if (opcion === '11') {
            let cap = parseInt(prompt("Capacidad Aula:"));
            let g = [];
            let add = true;
            while(add) {
                let n = prompt("Grupo (personas) o vacio:");
                if(n) g.push(parseInt(n));
                else add = false;
            }
            if(g.length>0) alert("Quedaron fuera: " + gestionarAula(g, cap));

        } else if (opcion === '12') {
            let t = prompt("Texto:");
            let p = prompt("Prohibidas (separadas por coma):");
            if(t && p) alert(JSON.stringify(verificarPalabrasProhibidas(t, p.split(",")), null, 2));

        } else if (opcion === '13') {
            let temps = [];
            let m = true;
            while(m) {
                let v = prompt("Temp (o vacio):");
                if(v) temps.push(parseFloat(v));
                else m = false;
            }
            if(temps.length>0) alert(monitorizarTemperatura(temps));

        } else if (opcion === '14') {
            let a = parseInt(prompt("Antigüedad:"));
            let c = [];
            for(let i=0;i<5;i++) c.push(parseFloat(prompt(`Compra ${i+1}:`))||0);
            let d = calcularDescuentoLealtad(c, a);
            alert(d>0 ? "¡Descuento 25% Aprobado!" : "No aprobado.");

        } else if (opcion === '15') {
            let list = [];
            let add = true;
            while(add){
                let d = prompt("Tarea:");
                if(!d) add = false;
                else {
                    let p = prompt("Prioridad:");
                    let di = parseInt(prompt("Días:"));
                    list.push({descripcion:d, prioridad:p, dias:di});
                }
            }
            let res = filtrarTareasUrgentes(list);
            alert("Urgentes:\n" + res.map(r=>r.descripcion).join("\n"));

        } else if (opcion === '16') {
            let c = parseFloat(prompt("Consumo m³:"));
            let e = parseInt(prompt("Estrato:"));
            if(!isNaN(c) && !isNaN(e)) {
                let total = calcularServicioAgua(c, e);
                let msg = (e === 1) ? "¡Se aplicó subsidio del 20% por ser Estrato 1!" : "No aplica subsidio.";
                alert(`Total a Pagar: $${total}\n${msg}`);
            }

        } else if (opcion === '17') {
            let tr = [];
            let add = true;
            while(add){
                let v = prompt("Transacción (o vacio):");
                if(v) tr.push(parseFloat(v));
                else add = false;
            }
            let res = detectingFraude(tr);
            if(res.length>0) alert("FRAUDE:\n" + JSON.stringify(res));
            else alert("Sin fraude.");

        } else if (opcion === '18') {
            const casos = [
                { nombre: "Caso 1: Juan (Cumplido)", prestamos: [{ fechaDevolucion: "2030-01-01", multa: 0 }] },
                { nombre: "Caso 2: Ana (Multa Alta)", prestamos: [{ fechaDevolucion: "2030-01-01", multa: 20000 }] },
                { nombre: "Caso 3: Pedro (Retraso)", prestamos: [{ fechaDevolucion: "2000-01-01", multa: 0 }] }
            ];

            let menuCasos = casos.map((c, i) => `${i + 1}. ${c.nombre}`).join("\n");
            let seleccion = prompt(`SELECCIONE UN USUARIO PARA VALIDAR:\n${menuCasos}`);
            
            if (seleccion) {
                let idx = parseInt(seleccion) - 1;
                if (casos[idx]) {
                    let resultado = verificarEstadoUsuario(casos[idx].prestamos);
                    alert(`Usuario: ${casos[idx].nombre}\nDatos: ${JSON.stringify(casos[idx].prestamos)}\n\nRESULTADO: ${resultado}`);
                } else {
                    alert("Caso inválido.");
                }
            }

        } else if (opcion === '19') {
            let destinos = [];
            let add = true;
            while(add){
                let n = prompt("Destino (o cancelar):");
                if(!n) add = false;
                else {
                    let d = parseFloat(prompt("Km:"));
                    if(!isNaN(d)) destinos.push({nombre:n, distancia:d});
                }
            }
            if(destinos.length > 0) {
                let ruta = planificarRuta(destinos);
                let resumenKm = destinos.map(d => `${d.nombre}: ${d.distancia} km`).join("\n");
                alert(`--- DETALLE DE KILOMETRAJE ---\n${resumenKm}\n\nRUTA VIABLE (Max 200km):\n${ruta.join(" -> ")}`);
            }

        } else if (opcion === '20') {
            let u = [];
            let add = true;
            while(add){
                let i = prompt("ID:");
                if(!i) add=false;
                else {
                    let n = prompt("Nombre:");
                    let e = prompt("Email:");
                    if(n&&e&&e.includes('@')) u.push({id:i,nombre:n,email:e});
                }
            }
            if(u.length>0) alert(generarReporteCSV(u));
        }
    }
}

function detectingFraude(t) { return detectarFraude(t); }

iniciarMenu();