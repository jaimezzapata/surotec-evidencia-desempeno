import { calcularDenominacionesBilletes } from './ejercicio1.js';
import { actualizarPreciosInventario } from './ejercicio2.js';
import { evaluarBeca } from './ejercicio3.js';
import { calcularTotalCarrito, carritoPrueba } from './ejercicio4.js';
import { evaluarAsistencia, asistenciasPrueba1, asistenciasPrueba2 } from './ejercicio5.js';

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
        }
    }
}
menuPrincipal();