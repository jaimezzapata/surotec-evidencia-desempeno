
const readline = require('readline')

const ejercicio1 = require('./ejercicio1')
const ejercicio2 = require('./ejercicio2')


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
        case 2:
            const productos = [
            { nombre: 'Arroz', stock: 3, precio: 4000 },
            { nombre: 'Leche', stock: 10, precio: 3500 },
            { nombre: 'Huevos', stock: 25, precio: 10200 }
           ]

            console.log(ejercicio2(productos))
            iniciarMenu()
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
