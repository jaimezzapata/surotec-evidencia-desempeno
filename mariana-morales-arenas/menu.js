const prompt = require("prompt-sync")();

const ejercicio1 = require("./ejercicio1");
const ejercicio2 = require("./ejercicio2");
const ejercicio3 = require("./ejercicio3");
const ejercicio4 = require("./ejercicio4");
const ejercicio5 = require("./ejercicio5");
const ejercicio6 = require("./ejercicio6");
const ejercicio7 = require("./ejercicio7");
const ejercicio8 = require("./ejercicio8");
const ejercicio9 = require("./ejercicio9");
const ejercicio10 = require("./ejercicio10");
const ejercicio11 = require("./ejercicio11");
const ejercicio12 = require("./ejercicio12");
const ejercicio13 = require("./ejercicio13");
const ejercicio14 = require("./ejercicio14");
const ejercicio15 = require("./ejercicio15");
const ejercicio16 = require("./ejercicio16");
const ejercicio17 = require("./ejercicio17");
const ejercicio18 = require("./ejercicio18");
const ejercicio19 = require("./ejercicio19");
const ejercicio20 = require("./ejercicio20");

function mostrarMenu() {
  console.log("MENÚ DE EJERCICIOS");
  for (let i = 1; i <= 20; i++) {
    console.log(`${i}. Ejercicio ${i}`);
  }
  console.log("0. Salir");
}

function ejecutarEjercicio(opcion) {
  if (opcion === 1) console.log(ejercicio1(100000));
  else if (opcion === 2) console.log(ejercicio2([{ nombre: "Mouse", stock: 3, precio: 20000 }]));
  else if (opcion === 3) console.log(ejercicio3({ promedio: 4.6, edad: 20, estrato: 2 }));
  else if (opcion === 4) console.log(ejercicio4([{ categoria: "Electronica", precio: 100000 }, { categoria: "Electronica", precio: 100000 }, { categoria: "Electronica", precio: 100000 }, { categoria: "Electronica", precio: 100000 }]));
  else if (opcion === 5) console.log(ejercicio5(["08:10", "08:05", "08:20"]));
  else if (opcion === 6) console.log(ejercicio6([200000, 600000]));
  else if (opcion === 7) console.log(ejercicio7("Clave@123"));
  else if (opcion === 8) console.log(ejercicio8([1, 2, 3, 4, 5]));
  else if (opcion === 9) console.log(ejercicio9(55, 10000));
  else if (opcion === 10) console.log(ejercicio10(100000, "COP", "USD"));
  else if (opcion === 11) console.log(ejercicio11(30, [10, 5, 8, 20]));
  else if (opcion === 12) console.log(ejercicio12("hola mundo malo malo", ["malo"]));
  else if (opcion === 13) console.log(ejercicio13([30, 36, 38, 20]));
  else if (opcion === 14) console.log(ejercicio14([120000, 130000, 110000, 140000, 150000], 3));
  else if (opcion === 15) console.log(ejercicio15([{ descripcion: "Entrega", prioridad: "alta", diasParaVencimiento: 1 }]));
  else if (opcion === 16) console.log(ejercicio16(35, 1));
  else if (opcion === 17) console.log(ejercicio17([100000, 110000, 600000]));
  else if (opcion === 18) console.log(ejercicio18([{ diasRetraso: 12, multa: 2000 }]));
  else if (opcion === 19) console.log(ejercicio19([50, 60, 70, 40]));
  else if (opcion === 20) console.log(ejercicio20([{ id: 1, nombre: "Ana", email: "ana@mail.com" }]));
}

function iniciarMenu() {
  let opcion;

  do {
    mostrarMenu();
    opcion = Number(prompt("Seleccione una opción: "));

    if (opcion === 0) {
      console.log("Programa finalizado");
    } else if (opcion >= 1 && opcion <= 20) {
      ejecutarEjercicio(opcion);
    } else {
      console.log("Opción inválida");
    }
  } while (opcion !== 0);
}

iniciarMenu();
