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

function ejecutarMenu() {
  let opcion = "";

  while (opcion !== "0") {
    opcion = prompt(
      "MENU\n" +
        "1. Ejercicio 1\n" +
        "2. Ejercicio 2\n" +
        "3. Ejercicio 3\n" +
        "4. Ejercicio 4\n" +
        "5. Ejercicio 5\n" +
        "6. Ejercicio 6\n" +
        "7. Ejercicio 7\n" +
        "8. Ejercicio 8\n" +
        "9. Ejercicio 9\n" +
        "10. Ejercicio 10\n" +
        "11. Ejercicio 11\n" +
        "12. Ejercicio 12\n" +
        "13. Ejercicio 13\n" +
        "14. Ejercicio 14\n" +
        "15. Ejercicio 15\n" +
        "16. Ejercicio 16\n" +
        "17. Ejercicio 17\n" +
        "18. Ejercicio 18\n" +
        "19. Ejercicio 19\n" +
        "20. Ejercicio 20\n" +
        "0. Salir",
    );

    switch (opcion) {
      case "1":
        ejercicio1();
        break;
      case "2":
        ejercicio2();
        break;
      case "3":
        ejercicio3();
        break;
      case "4":
        ejercicio4();
        break;
      case "5":
        ejercicio5();
        break;
      case "6":
        ejercicio6();
        break;
      case "7":
        ejercicio7();
        break;
      case "8":
        ejercicio8();
        break;
      case "9":
        ejercicio9();
        break;
      case "10":
        ejercicio10();
        break;
      case "11":
        ejercicio11();
        break;
      case "12":
        ejercicio12();
        break;
      case "13":
        ejercicio13();
        break;
      case "14":
        ejercicio14();
        break;
      case "15":
        ejercicio15();
        break;
      case "16":
        ejercicio16();
        break;
      case "17":
        ejercicio17();
        break;
      case "18":
        ejercicio18();
        break;
      case "19":
        ejercicio19();
        break;
      case "20":
        ejercicio20();
        break;
      case "0":
        break;
      default:
        alert("Opcion invalida");
    }
  }
}

ejecutarMenu();
