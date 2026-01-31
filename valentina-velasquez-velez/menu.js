const readline = require('readline')

const ejercicio1 = require('./ejercicio1')
const ejercicio2 = require('./ejercicio2')
const ejercicio3 = require('./ejercicio3')
const ejercicio4 = require('./ejercicio4')
const ejercicio5 = require('./ejercicio5')
const ejercicio6 = require('./ejercicio6')
const ejercicio7 = require('./ejercicio7')
const ejercicio8 = require('./ejercicio8')
const ejercicio9 = require('./ejercicio9')
const ejercicio10 = require('./ejercicio10')
const ejercicio11 = require('./ejercicio11')
const ejercicio12 = require('./ejercicio12')
const ejercicio13 = require('./ejercicio13')
const ejercicio14 = require('./ejercicio14')
const ejercicio15 = require('./ejercicio15')
const ejercicio16 = require('./ejercicio16')
const ejercicio17 = require('./ejercicio17')
const ejercicio18 = require('./ejercicio18')
const ejercicio19 = require('./ejercicio19')
const ejercicio20 = require('./ejercicio20')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function mostrarMenu() {
  console.log('\n--- MENU PRINCIPAL ---')
  console.log('1. Verificar Contraseña')
  console.log('2. Actualizar Precios')
  console.log('3. Sistema de Becas')
  console.log('4. Carrito con Descuento')
  console.log('5. Control de Asistencia')
  console.log('6. Impuestos')
  console.log('7. Salario Neto')
  console.log('8. Estadísticas Puntaje')
  console.log('9. Nómina con Recargos')
  console.log('10. Conversor Moneda')
  console.log('11. Capacidad Aula')
  console.log('12. Palabras Prohibidas')
  console.log('13. Alerta Sensores')
  console.log('14. Descuento Lealtad')
  console.log('15. Filtro Tareas Urgentes')
  console.log('16. Liquidación Servicios')
  console.log('17. Monitoreo Transacciones')
  console.log('18. Restricción Biblioteca')
  console.log('19. Ruta de Entrega')
  console.log('20. Generador CSV')
  console.log('0. Salir')

  rl.question('\nSeleccione una opción: ', (opcion) => {
    if (opcion === '0') {
      rl.close()
    } else {
      ejecutarOpcion(opcion)
      mostrarMenu()
    }
  })
}

function ejecutarOpcion(opcion) {
  console.log(`\n[Resultado Ejercicio ${opcion}]:`)
  
  switch (opcion) {
    case '1':
      console.log(ejercicio1('PasswordSeguro123'))
      break
    case '2':
      console.log(ejercicio2([{ nombre: 'P1', stock: 4, precio: 100 }, { nombre: 'P2', stock: 25, precio: 200 }]))
      break
    case '3':
      console.log(ejercicio3({ promedio: 4.6, edad: 19, estrato: 2 }))
      break
    case '4':
      console.log(ejercicio4([{ categoria: 'Electronica', precio: 100 }, { categoria: 'Electronica', precio: 100 }, { categoria: 'Electronica', precio: 100 }, { categoria: 'Electronica', precio: 100 }]))
      break
    case '5':
      console.log(ejercicio5(['08:00', '08:05', '08:30', '08:01']))
      break
    case '6':
      console.log(ejercicio6(100000))
      break
    case '7':
      console.log(ejercicio7(2500000))
      break
    case '8':
      console.log(ejercicio8([10, 50, 80, 20, 90]))
      break
    case '9':
      console.log(ejercicio9(55, 5000))
      break
    case '10':
      console.log(ejercicio10(100, 'USD', 'COP'))
      break
    case '11':
      console.log(ejercicio11([20, 30, 40, 10], 60))
      break
    case '12':
      console.log(ejercicio12('Hola mundo malo y cruel', ['malo', 'cruel']))
      break
    case '13':
      console.log(ejercicio13([30, 36, 36, 37, 34]))
      break
    case '14':
      console.log(ejercicio14([150000, 200000, 100000], 3))
      break
    case '15':
      console.log(ejercicio15([{ descripcion: 'Tarea A', prioridad: 'alta', dias: 1 }, { descripcion: 'Tarea B', prioridad: 'baja', dias: 5 }]))
      break
    case '16':
      console.log(ejercicio16(35, 1))
      break
    case '17':
      console.log(ejercicio17([{ id: 1, monto: 100 }, { id: 2, monto: 5000 }, { id: 3, monto: 100 }]))
      break
    case '18':
      console.log(ejercicio18([{ multa: 5000, fechaDevolucion: '2023-01-01' }, { multa: 0, fechaDevolucion: new Date().toISOString() }]))
      break
    case '19':
      console.log(ejercicio19([{ nombre: 'A', distancia: 50 }, { nombre: 'B', distancia: 100 }, { nombre: 'C', distancia: 60 }]))
      break
    case '20':
      console.log(ejercicio20([{ id: 1, nombre: 'Juan', email: 'juan@test.com' }, { id: 2, nombre: 'Ana', email: 'ana@test.com' }]))
      break
    default:
      console.log('Opción no válida')
  }
}

mostrarMenu()