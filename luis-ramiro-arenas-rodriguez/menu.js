function menu() {
    let continuar = true;
    
    while (continuar) {
        const opc = prompt(
            "Ingrese el número del ejercicio que desea ejecutar:\n" +
            "1. Cajero de denominaciones\n" +
            "2. Inventario con precios dinámicos\n" +
            "3. Sistema de becas\n" +
            "4. Carrito con descuento por categoría\n" +
            "5. Control de asistencia y sanación\n" +
            "6. Impuestos de Ventas\n" +
            "7. Validador de Contraseñas\n" +
            "8. Estadísticas de Puntaje\n" +
            "9. Nómina con Recargos\n" +
            "10. Conversor con Registro\n" +
            "11. Capacidad de Aula\n" +
            "12. Análisis de Palabras prohibidas\n" +
            "13. Alerta de Sensores\n" +
            "14. Descuento por Lealtad\n" +
            "15. Filtro de Tareas urgentes\n" +
            "16. Liquidación de Servicios\n" +
            "17. Monitoreo de Transacciones\n" +
            "18. Restricción de Biblioteca\n" +
            "19. Plan de Ruta de entrega\n" +
            "20. Generador de CSV\n" +
            "21. Salir"
        )

        if (opc === "21" || opc === null) {
            continuar = false;
            alert("Haz salido del menú.");
        } else {
            ejecutarOpc(opc);
        }
    }
}

  function ejecutarOpc(opc) {
    switch (opc) {
        case "1":
            const inputMonto = prompt("Ingrese la cantidad a retirar en múltiplos de 10,000:");
            const monto = parseInt(inputMonto, 10);

            if (!isNaN(monto)) {
                const total = cajeroDenominaciones(monto);
                alert("Billetes entregados:\n" + JSON.stringify(total, null, 2));
            } else {
                alert("Ingrese un número valido.");
            }
            break;
        
            case "2":
                const productos = [
                    {nombre: "Azúcar", stock: 7, precio: 3000},
                    {nombre: "aceite", stock: 3, precio: 5000},
                    {nombre: "Arroz", stock: 25, precio: 4500},
                ]
                alert("Primer inventario: " + JSON.stringify(productos));
                alert(JSON.stringify(gestionPrecios(productos), null, 2));    
                break;

                case "3":
                    const estudiante = {
                        promedio: 5.0,
                        edad: 11,
                        estrato: 2
                    }
                    alert("Datos estudiante: " + JSON.stringify(estudiante));
                    alert("Beca otorgada: " + sistemaBecas(estudiante));
                    break;

                    case "4":



        }}

        menu();