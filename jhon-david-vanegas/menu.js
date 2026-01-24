
const readline = require('readline')

const ejercicio1 = require('./ejercicio1')
const ejercicio2 = require('./ejercicio2')
const sistemaBecas = require('./ejercicio3')
const carritoDescuentoCategoria = require('./ejercicio4')
const controlAsistencia = require('./ejercicio5')
const impuestosVentas = require('./ejercicio6')
const validadorContrasenas = require('./ejercicio7')
const estadisticasPuntaje = require('./ejercicio8')
const nominaRecargos = require('./ejercicio9')
const conversor = require('./ejercicio10')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function mostrarMenu() {
  console.log('Menu principal')
  for (let i = 1; i <= 20; i++) {
    console.log(`${i}. Ejercicio ${i}`)
  }
  console.log('0. Salir')
}

function ejecutarEjercicio(opcion) {
  switch (opcion) {
    case 1:
      rl.question('Ingrese el monto a retirar: ', valor => {
        const monto = Number(valor)
        console.log(ejercicio1(monto))
        iniciarMenu()
      })
      return
    case 2:
        const productos = [
        { nombre: 'Arroz', stock: 3, precio: 4000 },
        { nombre: 'Leche', stock: 10, precio: 3500 },
        { nombre: 'Huevos', stock: 25, precio: 10200 }
        ]

        console.log(ejercicio2(productos))
        iniciarMenu()
        return

    case 3:
        const estudiante = {
        promedio: 4.2,
        edad: 17,
        estrato: 1
        }

        console.log(sistemaBecas(estudiante))
        iniciarMenu()
        return
    
    case 4:
       const carrito = [
       { categoria: 'Electronica', precio: 1000 },
       { categoria: 'Electronica', precio: 2000 },
       { categoria: 'Electronica', precio: 1500 },
       { categoria: 'Electronica', precio: 500 },
       { categoria: 'Hogar', precio: 800 }
     ]

       console.log(carritoDescuentoCategoria(carrito))
       iniciarMenu()
       return

    case 5:
        const horas = ['08:17', '08:18', '08:18']
        console.log(controlAsistencia(horas))
        iniciarMenu()
     return

    case 6:
       const ventas = [300000, 600000, 1000000]
       console.log(impuestosVentas(ventas))
       iniciarMenu()
     return

     case 7:
         function pedirContrasena() {
         rl.question('Ingrese la contraseña: ', texto => {
         const resultado = validadorContrasenas(texto)
         console.log(resultado)

         if (resultado === 'Segura') {
          iniciarMenu()
         } else {
         pedirContrasena()
        }
       })
     }

     pedirContrasena()
     return

    case 8:
       const valores = [10, 20, 30, 40, 50]
       console.log(estadisticasPuntaje(valores))
       iniciarMenu()
    return

    case 9:
       const hours = 55
       const valorHora = 10000
       console.log(nominaRecargos(hours, valorHora))
       iniciarMenu()
       return

    case 10:
     rl.question('Monto: ', monto => {
      rl.question('Moneda origen (COP, USD, EUR): ', origen => {
       rl.question('Moneda destino (COP, USD, EUR): ', destino => {
         const resultado = conversor(
           Number(monto),
           origen.toUpperCase(),
           destino.toUpperCase()
         )

         console.log(resultado)
         iniciarMenu()
        })
     })
   })
   return



    default:
      console.log('Opcion invalida')
      iniciarMenu()
  }
}

function iniciarMenu() {
  mostrarMenu()
  rl.question('Selecciona una opción: ', opcion => {
    const opcionNumerica = Number(opcion)

    if (opcionNumerica === 0) {
      rl.close()
      return
    }

    ejecutarEjercicio(opcionNumerica)
  })
}

iniciarMenu()
