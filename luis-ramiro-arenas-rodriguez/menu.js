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
        "21. Salir",
    );

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
      const inputMonto = prompt(
        "Ingrese la cantidad a retirar en múltiplos de 10,000:",
      );
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
        { nombre: "Azúcar", stock: 7, precio: 3000 },
        { nombre: "aceite", stock: 3, precio: 5000 },
        { nombre: "Arroz", stock: 25, precio: 4500 },
      ];
      alert("Primer inventario: " + JSON.stringify(productos));
      alert(JSON.stringify(gestionPrecios(productos), null, 2));
      break;

    case "3":
      const estudiante = {
        promedio: 5.0,
        edad: 11,
        estrato: 2,
      };
      alert("Datos estudiante: " + JSON.stringify(estudiante));
      alert("Beca otorgada: " + sistemaBecas(estudiante));
      break;

    case "4":
      const bienes = [
        { nombre: "Televisor", categoria: "Electrónica", precio: 1500000 },
        { nombre: "Celular", categoria: "Electrónica", precio: 800000 },
        { nombre: "Audífonos", categoria: "Electrónica", precio: 200000 },
        { nombre: "Laptop", categoria: "Electrónica", precio: 2500000 },
        { nombre: "Libro", categoria: "Literatura", precio: 60000 },
      ];

      alert("Productos en el carrito: " + JSON.stringify(bienes));
      alert("Total a pagar con descuento: " + carritoDescuento(bienes));
      break;

    case "5":
      const horasLlegada = ["08:10", "08:20", "08:05", "08:30", "08:16"];

      alert("Horas de llegada: " + JSON.stringify(horasLlegada));
      alert(
        "Resultado control de asistencia: " + controlAsistencia(horasLlegada),
      );
      break;

    case "6":
      const ventas = [300000, 600000, 1500, 450000];

      alert("Ventas registradas: " + JSON.stringify(ventas));
      alert("Total impuestos de ventas: " + impuestosVentas(ventas));
      break;

    case "7":
      const contrasena = prompt("Ingrese la contraseña a validar:");
      const resultado = validarContrasena(contrasena);
      alert("La contraseña es: " + resultado);
      break;

    case "8":
      const puntajes = [85, 90, 78, 92, 88, 76, 95];

      alert("Puntajes registrados: " + JSON.stringify(puntajes));
      alert("Promedio sin máximo ni mínimo: " + estadisticasPuntaje(puntajes));
      break;

    case "9":
      const horasTrabajadas = prompt("Ingrese el número de horas trabajadas:");
      const valorHora = 10000;

      alert("Horas trabajadas: " + horasTrabajadas);
      alert("Valor por hora: " + valorHora);
      alert(
        "Salario total con recargos: " +
          nominaRecargos(horasTrabajadas, valorHora),
      );
      break;

    case "10":
      let valor = parseFloat(prompt("Ingrese el monto a convertir: "));
      let origen = prompt(
        "Ingrese la moneda de origen (COP, USD, EUR): ",
      ).toUpperCase();
      let destino = prompt(
        "Ingrese la moneda de destino (COP, USD, EUR): ",
      ).toUpperCase();
      let resultadoConversion = conversorRegistro(valor, origen, destino);
      alert(resultadoConversion);
      break;

    case "11":
      const limiteAula = parseInt(prompt("Ingrese la capacidad del aula:"));
      const grupos = prompt(
        "Ingrese la cantidad de estudiantes en cada grupo, separados por comas (ejemplo: 10,15,20):",
      );
      const gruposArray = grupos.split(",").map((num) => parseInt(num));
      const estudiantesFuera = capacidadAula(limiteAula, gruposArray);
      alert(
        "Número de estudiantes que no pudieron entrar al aula: " +
          estudiantesFuera,
      );
      break;

    case "12":
      const textoAnalizar =
        "Este texto contiene palabras prohibidas como spam y fraude. El spam es molesto.";
      const palabrasProhibidasArray = ["spam", "fraude", "phishing"];
      const resultadoBusqueda = busquedaPalabrasProhibidas(
        textoAnalizar,
        palabrasProhibidasArray,
      );
      let mensajeResultado = "Palabras prohibidas encontradas:\n";
      for (let palabra in resultadoBusqueda) {
        mensajeResultado += palabra + ": " + resultadoBusqueda[palabra] + "\n";
      }
      alert(mensajeResultado);
      break;

    case "13":
      const temperaturas = [25, 27, 18, 14, 26, 29, 40, 41, 33];
      const estadoSensor = alertaSensores(temperaturas);
      alert("Estado del sensor: " + estadoSensor);
      break;

    case "14":
      const compras = [120000, 95000, 130000, 110000];
      const anios = 3;
      const descuento = descuentoLealtad(compras, anios);
      alert("Resultado del descuento por lealtad: " + descuento);
      break;

    case "15":
      const tareas = [
        { descripcion: "Entregar informe", prioridad: "alta", dias: 1 },
        { descripcion: "Revisar correos", prioridad: "media", dias: 3 },
        { descripcion: "Llamar cliente", prioridad: "alta", dias: 1 },
        { descripcion: "Reunión equipo", prioridad: "baja", dias: 5 },
        { descripcion: "Actualizar sistema", prioridad: "alta", dias: 2 },
      ];

      const tareasUrgentes = filtroTareas(tareas);
      let mensajeTareas = "Tareas urgentes:\n";

      for (let i = 0; i < tareasUrgentes.length; i++) {
        mensajeTareas +=
          "- " +
          tareasUrgentes[i].descripcion +
          " vence en " +
          tareasUrgentes[i].dias +
          " días\n";
      }
      alert(mensajeTareas);
      break;

    case "16":
      const metrosCubicos = 40;
      const estrato = 1;
      const valorLiquidacion = liquidacionServicios(metrosCubicos, estrato);
      alert("El valor a pagar es: $" + valorLiquidacion.toFixed(2));
      break;

    case "17":
      const transacciones = [5000, 20000, 15000, 80000, 300000, 10000, 250000];
      const sospechosas = monitoreoTransacciones(transacciones);
      let mensajeTransacciones = "Transacciones sospechosas:\n";
      for (let i = 0; i < sospechosas.length; i++) {
        mensajeTransacciones +=
          "Monto: $" +
          sospechosas[i].monto +
          " - Estado: " +
          sospechosas[i].estado +
          "\n";
      }
      alert(mensajeTransacciones);
      break;

    case "18":
      const prestamos = [
        { fechaDevolucion: 5, multa: 3000 },
        { fechaDevolucion: 10, multa: 5000 },
        { fechaDevolucion: 2, multa: 100000 },
      ];
      const fechaActual = 7;
      const estadoPrestamo = restriccionBiblioteca(prestamos, fechaActual);
      alert("Estado del préstamo: " + estadoPrestamo);
      break;

    case "19":
      const destinos = [
        { nombre: "Tienda A", distancia: 50 },
        { nombre: "Tienda B", distancia: 80 },
        { nombre: "Tienda C", distancia: 60 },
        { nombre: "Tienda D", distancia: 40 },
        { nombre: "Tienda E", distancia: 30 },
      ];
      const destinosPosibles = rutaEntrega(destinos);
      let mensajeRuta = "Destinos posibles en esta ruta: \n";
      for (let i = 0; i < destinosPosibles.length; i++) {
        mensajeRuta += "- " + destinosPosibles[i].nombre + " ("  + destinosPosibles[i].distancia + " km)\n";
      }
      alert(mensajeRuta);
      break;

    case "20":
      const usuarios = [
        { id: 1, nombre: "Juan Perez", email: "juan@email.com" },
        { id: 2, nombre: "María García", email: "maria@email.com" },
        { id: 3, nombre: "Carlos Lopez", email: "carlos@email.com" },
        { id: 4, nombre: "Ana Martínez", email: "ana@email.com" }
      ];
      const archivoCSV = generadorCSV(usuarios);
      alert("Archivo CSV generado:\n" + archivoCSV);
      break;

    default:
      alert("Opción no válida. Por favor, ingrese un número del 1 al 21.");
      break;
  }
}

menu();
