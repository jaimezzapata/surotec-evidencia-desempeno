import { cajeroAuto } from "./ejercicio1.js";

function ejecutarMenu() {
  let salir = false;

  while (!salir) {
    let menuPrincipal = "--- SELECCIONE UN EJERCICIO ---\n";
    menuPrincipal += "1. Cajero de Denominaciones\n";
    menuPrincipal += "2. Ejercicio 2\n";
    menuPrincipal += "3. Ejercicio 3\n";
    menuPrincipal += "4. Ejercicio 4\n";
    menuPrincipal += "5. Ejercicio 5\n";
    menuPrincipal += "6. Ejercicio 6\n";
    menuPrincipal += "7. Ejercicio 7\n";
    menuPrincipal += "8. Ejercicio 8\n";
    menuPrincipal += "9. Ejercicio 9\n";
    menuPrincipal += "10. Ejercicio 10\n";
    menuPrincipal += "11. Ejercicio 11\n";
    menuPrincipal += "12. Ejercicio 12\n";
    menuPrincipal += "13. Ejercicio 13\n";
    menuPrincipal += "14. Ejercicio 14\n";
    menuPrincipal += "15. Ejercicio 15\n";
    menuPrincipal += "16. Ejercicio 16\n";
    menuPrincipal += "17. Ejercicio 17\n";
    menuPrincipal += "18. Ejercicio 18\n";
    menuPrincipal += "19. Ejercicio 19\n";
    menuPrincipal += "20. Ejercicio 20\n";
    menuPrincipal += "0. Salir";

    const opcion = prompt(menuPrincipal);

    if (opcion === null || opcion === "0") {
      salir = true;
      continue;
    }

    switch (opcion) {
      case "1":
        const monto = parseInt(prompt("Ingrese el monto a retirar:"));
        const resultado1 = cajeroAuto(monto);
        alert("Resultado:\n" + JSON.stringify(resultado1, null, 2));
        break;
      case "2":
        alert("Ejercicio 2 no implementado");
        break;
      default:
        alert("Opción no válida");
        break;
    }
  }
}

ejecutarMenu();