function menu() {
    let continuar = true

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
            "21. Salir"
        )

        if (opcion === "21" || opcion === null) {
            continuar = false
            alert("Programa finalizado.")
        } else {
            ejecutarOpcion(opcion)
        }
    }
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            const inputMonto = prompt("Ingrese el monto a retirar (Ej: 50000):")
            const monto = parseInt(inputMonto)
            
            if (!isNaN(monto)) {
                const resultado = cajero(monto)
                alert("Desglose de billetes:\n" + JSON.stringify(resultado, null, 2))
            } else {
                alert("Por favor ingrese un número válido.")
            }
            break

        case "2":
            const productosInv = [
                { nombre: "Azucar", stock: 8, precio: 2200 },
                { nombre: "Papa", stock: 25, precio: 4000 },
                { nombre: "Pollo", stock: 10, precio: 25000 }
            ]
            alert("Datos de prueba: " + JSON.stringify(productosInv))
            alert(JSON.stringify(inventario(productosInv), null, 2))
            break

        case "3":
            const estudiante = {
                promedio: parseFloat(prompt("Ingrese promedio:")),
                edad: parseInt(prompt("Ingrese edad:")),
                estrato: parseInt(prompt("Ingrese estrato:"))
            }
            alert("Beca dada a: " + evaluar(estudiante))
            break

        case "4":
            const carrito = [
                { categoria: "Electronica", precio: 10000 },
                { categoria: "Electronica", precio: 200000 },
                { categoria: "Ropa", precio: 590000 },
                { categoria: "Electronica", precio: 1250000 },
                { categoria: "Electronica", precio: 300000 }
            ]
            alert("Carrito prueba: " + JSON.stringify(carrito))
            alert("Total a pagar: " + carrito(carrito))
            break

        case "5":
            const asistencias = ["07:48", "08:11", "08:18", "07:59", "08:20"]
            alert("Asistencias: " + asistencias.join(", "))
            alert("Estado: " + controlDeAsistencia(asistencias))
            break

        case "6":
            const ventas = [2348000, 6210000, 1220350, 550000]
            alert("Ventas brutas: " + ventas.join(", "))
            alert("Total Impuestos: " + calculaDeImpuesto(ventas))
            break

        case "7":
            const pass = prompt("Ingrese contraseña a validar:")
            alert("Resultado: " + validadorDeContrasenas(pass))
            break

        case "8":
            const puntajes = [41, 16, 78, 26, 47, 83]
            alert("Puntajes: " + puntajes.join(", "))
            alert("Promedio ajustado: " + estadisticasDePuntaje(puntajes))
            break

        case "9":
            const horas = parseInt(prompt("Horas trabajadas:"))
            const valorHora = parseInt(prompt("Valor por hora:"))
            alert("Salario Neto: " + nominaConRecargos(horas, valorHora))
            break

        case "10":
            const montoConv = parseFloat(prompt("Monto:"))
            const origen = prompt("Moneda origen (COP, USD, EUR):")
            const destino = prompt("Moneda destino (COP, USD, EUR):")
            alert("Resultado: " + convertirMoneda(montoConv, origen, destino))
            break

        case "11":
            const capacidad = 20
            const grupos = [15, 8, 4, 13]
            alert(`Capacidad: ${capacidad}. Grupos: ${grupos.join(", ")}`)
            alert("Quedaron fuera: " + capacidadDeAula(capacidad, grupos))
            break

        case "12":
            const texto = prompt("Ingrese texto a analizar:")
            const prohibidas = ["Pendejo", "Breve", "sizas"]
            alert("Palabras prohibidas buscadas: " + prohibidas.join(", "))
            alert(JSON.stringify(analisisDePalabrasProhibidas(texto, prohibidas), null, 2))
            break

        case "13":
            const temperaturas = [30, 32, 36, 37, 38, 34]
            alert("Lecturas: " + temperaturas.join(", "))
            alert("Estado: " + alertaDeSensores(temperaturas))
            break

        case "14":
            const compras = [120000, 90000, 150000, 80000, 200000]
            const antiguedad = parseInt(prompt("Años de antigüedad:"))
            alert("Compras recientes: " + compras.join(", "))
            alert("Tiene descuento: " + descuentoPorLealtad(compras, antiguedad))
            break

        case "15":
            const tareas = [
                { descripcion: "Reporte", prioridad: "alta", dias: 1 },
                { descripcion: "Correo", prioridad: "baja", dias: 1 },
                { descripcion: "Reunión", prioridad: "alta", dias: 3 },
                { descripcion: "Factura", prioridad: "alta", dias: 0 }
            ]
            alert("Tareas filtradas: " + JSON.stringify(filtroTareasUrgentes(tareas), null, 2))
            break

        case "16":
            const m3 = parseInt(prompt("Metros cúbicos consumidos:"))
            const estratoServ = parseInt(prompt("Estrato:"))
            alert("Total a pagar: " + liquidacionServicios(m3, estratoServ))
            break

        case "17":
            const transacciones = [100, 120, 110, 130, 5000]
            alert("Historial: " + transacciones.join(", "))
            alert("Alertas: " + JSON.stringify(monitoreoDeTransacciones(transacciones)))
            break

        case "18":
            const prestamos = [
                { diasRetraso: 2, multa: 1000 },
                { diasRetraso: 12, multa: 5000 },
                { diasRetraso: 0, multa: 0 }
            ]
            alert("Estado usuario: " + prestamos.length + " libros.")
            alert("¿Puede prestar?: " +restriccionEnBiblioteca(prestamos))
            break

        case "19":
            const ruta = [
                { destino: "Punto A", distancia: 50 },
                { destino: "Punto B", distancia: 80 },
                { destino: "Punto C", distancia: 60 },
                { destino: "Punto D", distancia: 40 }
            ]
            alert("Plan de ruta viable: " + JSON.stringify(planDeRuta(ruta), null, 2))
            break

        case "20":
            const usuariosCSV = [
                { id: 1, nombre: "Juan", email: "juan@test.com" },
                { id: 2, nombre: "Ana", email: "ana@test.com" }
            ]
            alert(generacionCSV(usuariosCSV))
            break

        default:
            alert("Opción no válida.")
            break
    }
}

menu()