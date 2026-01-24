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

function iniciarMenu() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(`
--- MENÚ FINAL ---
1. Cajero
2. Tienda
3. Becas
4. Carrito
5. Asistencia
6. Impuestos
7. Contraseñas
8. Estadísticas
9. Nómina
10. Divisas
11. Capacidad Aula
0. Salir

Elige una opción:`);

        if (opcion === '0' || opcion === null) {
            continuar = false;
            break;
        }

        if (opcion === '1') {
            let m = parseInt(prompt("Monto a retirar:"));
            if (!isNaN(m)) alert(JSON.stringify(cajeroAutomatico(m), null, 2));

        } else if (opcion === '2') {
            let estanteria = [{nombre:"Arroz",stock:10,precio:1000},{nombre:"Papa",stock:25,precio:1000},{nombre:"Carne",stock:6,precio:5000}];
            let comprando=true;
            while(comprando){
                estanteria=inventarioConPreciosDinamicos(estanteria);
                let txt=estanteria.map((p,i)=>`${i}. ${p.nombre} | Stock:${p.stock} | $${p.precio}`).join("\n");
                let sel=prompt(`TIENDA:\n${txt}\n"x" para salir`);
                if(sel==='x'||sel===null) comprando=false;
                else{
                    let idx=parseInt(sel);
                    if(estanteria[idx]){
                        let c=parseInt(prompt(`Cant de ${estanteria[idx].nombre}:`));
                        if(c>0&&c<=estanteria[idx].stock){estanteria[idx].stock-=c;alert("Ok");} else alert("Stock insuficiente");
                    }
                }
            }

        } else if (opcion === '3') {
            let p=parseFloat(prompt("Promedio:")), e=parseInt(prompt("Edad:")), es=parseInt(prompt("Estrato:"));
            if(!isNaN(p)) alert(sistemaDeBecas({promedio:p,edad:e,estrato:es})?"¡BECADO!":"NO BECADO");

        } else if (opcion === '4') {
            let carrito=[]; let add=true;
            while(add){
                let cat=prompt("Categoría (Electronica/Ropa):"); if(cat===null) break;
                let pr=parseFloat(prompt("Precio:")); let cant=parseInt(prompt("Cantidad:"));
                if(!isNaN(pr)&&!isNaN(cant)) { carrito.push({categoria:cat, precio:pr, cantidad:cant}); if(prompt("¿Otro? (s/n)")!=='s') add=false; }
            }
            if(carrito.length>0) alert("Total: $"+carritoConDescuento(carrito));

        } else if (opcion === '5') {
            let asis=[]; let reg=true;
            while(reg){
                let h=prompt("Hora llegada (HH:MM):");
                if(h && h.includes(':')) { asis.push(h); if(prompt("¿Otro? (s/n)")!=='s') reg=false; } else reg=false;
            }
            if(asis.length>0) alert("Sanción: "+controlAsistencia(asis));

        } else if (opcion === '6') {
            let vtas=[]; let ing=true;
            while(ing){
                let v=parseFloat(prompt("Venta:"));
                if(!isNaN(v)) { vtas.push(v); if(prompt("¿Otro? (s/n)")!=='s') ing=false; } else ing=false;
            }
            if(vtas.length>0) alert("Impuestos: $"+calculadoraImpuestos(vtas));

        } else if (opcion === '7') {
            let probando = true;
            while(probando) {
                let pass = prompt("Contraseña (o cancelar para salir):");
                if(pass === null) probando = false;
                else alert("Resultado: " + validarContrasena(pass));
            }

        } else if (opcion === '8') {
            let puntajes=[]; let ing=true;
            while(ing){
                let v=prompt("Puntaje (o dejar vacío para calcular):");
                if(v===null||v.trim()===""||v.toLowerCase()==="salir") ing=false;
                else {
                    let val=parseFloat(v);
                    if(!isNaN(val)) puntajes.push(val);
                    else if(confirm("Inválido. ¿Salir?")) ing=false;
                }
            }
            if(puntajes.length>=3) {
                let res = estadisticasPuntaje(puntajes);
                alert(`Puntajes: ${puntajes.join(", ")}\nPromedio Ajustado: ${res}`);
            }
            else if(puntajes.length>0) alert("Mínimo 3 puntajes.");

        } else if (opcion === '9') {
            let h = parseInt(prompt("Horas:")); let v = parseFloat(prompt("Valor Hora:"));
            if(!isNaN(h)&&!isNaN(v)) alert("Salario Neto: $"+calcularNomina(h,v));

        } else if (opcion === '10') {
            let convirtiendo = true;
            while (convirtiendo) {
                let input = prompt("Monto a convertir (o cancele para salir):");
                if (input === null || input.trim() === "") {
                    convirtiendo = false;
                } else {
                    let monto = parseFloat(input);
                    let origen = prompt("Origen (COP/USD/EUR):");
                    let destino = prompt("Destino (COP/USD/EUR):");
                    if (!isNaN(monto) && origen && destino) {
                        let or = origen.toUpperCase(); let dest = destino.toUpperCase();
                        if (["COP", "USD", "EUR"].includes(or) && ["COP", "USD", "EUR"].includes(dest)) {
                            let res = convertirDivisas(monto, or, dest);
                            alert(`Resultado: ${res.valor} ${dest}\nTotal conversiones: ${res.totalConversiones}`);
                        } else alert("Monedas inválidas.");
                    } else if (origen !== null && destino !== null) alert("Datos inválidos.");
                    else convirtiendo = false;
                }
            }

        } else if (opcion === '11') {
            // --- LÓGICA EJERCICIO 11 ---
            let capacidad = parseInt(prompt("Ingrese la capacidad MÁXIMA del aula:"));
            
            if (!isNaN(capacidad) && capacidad > 0) {
                let grupos = [];
                let agregando = true;

                while (agregando) {
                    let input = prompt(`Capacidad: ${capacidad}\nGrupos en fila: ${grupos.join(", ")}\n\nIngrese tamaño del siguiente grupo (o deje vacío para procesar):`);
                    
                    if (input === null || input.trim() === "") {
                        agregando = false;
                    } else {
                        let cantidad = parseInt(input);
                        if (!isNaN(cantidad) && cantidad > 0) {
                            grupos.push(cantidad);
                        } else {
                            alert("Cantidad inválida.");
                        }
                    }
                }

                if (grupos.length > 0) {
                    let quedadosFuera = gestionarAula(grupos, capacidad);
                    alert(`--- RESULTADO ---\n\nGrupos: ${grupos.join(", ")}\nCapacidad: ${capacidad}\n\nPersonas que se quedaron fuera: ${quedadosFuera}`);
                }
            } else {
                alert("Capacidad inválida.");
            }
        }
    }
}

iniciarMenu();