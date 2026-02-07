import { ejercicio1 } from "./ejercicio1.js";
import { ejercicio2 } from "./ejercicio2.js";
import { ejercicio3 } from "./ejercicio3.js";
import { ejercicio4 } from "./ejercicio4.js";
import { ejercicio5 } from "./ejercicio5.js";
import { ejercicio6 } from "./ejercicio6.js";
import { ejercicio7 } from "./ejercicio7.js";
import { ejercicio8 } from "./ejercicio8.js";
import { ejercicio9 } from "./ejercicio9.js";
import { ejercicio10 } from "./ejercicio10.js";
import { ejercicio11 } from "./ejercicio11.js";
import { ejercicio12 } from "./ejercicio12.js";
import { ejercicio13 } from "./ejercicio13.js";
import { ejercicio14 } from "./ejercicio14.js";
import { ejercicio15 } from "./ejercicio15.js";
import { ejercicio16 } from "./ejercicio16.js";
import { ejercicio17 } from "./ejercicio17.js";
import { ejercicio18 } from "./ejercicio18.js";
import { ejercicio19 } from "./ejercicio19.js";
import { ejercicio20 } from "./ejercicio20.js";

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
  ejercicio20,
];

function construirMenu() {
  let texto = "MENU\n";
  for (let i = 0; i < ejercicios.length; i++) {
    texto += `${i + 1}. Ejercicio ${i + 1}\n`;
  }
  texto += "0. Salir";
  return texto;
}

function ejecutarMenu() {
  let opcion = "";

  while (opcion !== "0") {
    opcion = prompt(construirMenu());

    if (opcion === "0") {
      break;
    }

    let indice = Number(opcion) - 1;

    if (indice >= 0 && indice < ejercicios.length) {
      ejercicios[indice]();
    } else {
      alert("Opcion invalida");
    }
  }
}

ejecutarMenu();
