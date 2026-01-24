const readline = require("readline")

const { ejercicio1 } = require("./ejercicio1")
const { ejercicio2 } = require("./ejercicio2")
const { ejercicio3 } = require("./ejercicio3")
const { ejercicio4 } = require("./ejercicio4")
const { ejercicio5 } = require("./ejercicio5")
const { ejercicio6 } = require("./ejercicio6")
const { ejercicio7 } = require("./ejercicio7")
const { ejercicio8 } = require("./ejercicio8")
const { ejercicio9 } = require("./ejercicio9")
const { ejercicio10 } = require("./ejercicio10")
const { ejercicio11 } = require("./ejercicio11")
const { ejercicio12 } = require("./ejercicio12")
const { ejercicio13 } = require("./ejercicio13")
const { ejercicio14 } = require("./ejercicio14")
const { ejercicio15 } = require("./ejercicio15")
const { ejercicio16 } = require("./ejercicio16")
const { ejercicio17 } = require("./ejercicio17")
const { ejercicio18 } = require("./ejercicio18")
const { ejercicio19 } = require("./ejercicio19")
const { ejercicio20 } = require("./ejercicio20")

const ejercicios = [
  ejercicio1,
  ejercicio2,
  ejercicio3,
  ejercicio4,
  ejercicio5,
  ejercicio6,
  ejercicio7,
  ejercicio8,
  ejercicio9,
  ejercicio10,
  ejercicio11,
  ejercicio12,
  ejercicio13,
  ejercicio14,
  ejercicio15,
  ejercicio16,
  ejercicio17,
  ejercicio18,
  ejercicio19,
  ejercicio20
]

function crearInterfaz() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

function preguntar(rl, texto) {
  return new Promise((resolve) => rl.question(texto, resolve))
}

function mostrarMenu() {
  console.log("\n=== MENÚ PRINCIPAL ===")
  for (let i = 1; i <= 20; i++) {
    console.log(`${i}. Ejercicio ${i}`)
  }
  console.log("0. Salir")
}

async function ejecutarMenu() {
  const rl = crearInterfaz()

  while (true) {
    mostrarMenu()
    const opcionTexto = await preguntar(rl, "Selecciona una opción: ")
    const opcion = Number(opcionTexto)

    if (Number.isNaN(opcion)) {
      console.log("Opción inválida. Debes ingresar un número.")
      continue
    }

    if (opcion === 0) {
      console.log("Saliendo...")
      rl.close()
      return
    }

    if (opcion < 1 || opcion > 20) {
      console.log("Opción inválida. Elige un número entre 0 y 20.")
      continue
    }

    try {
      const resultado = ejercicios[opcion - 1]()
      if (resultado && typeof resultado.then === "function") {
        const resuelto = await resultado
        console.log("Resultado:", resuelto)
      } else {
        console.log("Resultado:", resultado)
      }
    } catch (error) {
      console.log("Error al ejecutar el ejercicio:", error.message)
    }
  }
}

ejecutarMenu()
