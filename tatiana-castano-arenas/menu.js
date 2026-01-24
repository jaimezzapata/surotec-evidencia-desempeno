function mostrarMenu() {
    let opcion = "";
    while (opcion !== "0") {
        opcion = prompt(
            "Seleccione un ejercicio (1-20) o 0 para salir:\n" +
            "1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n" +
            "4. Ejercicio 4\n5. Ejercicio 5\n6. Ejercicio 6\n" +
            "7. Ejercicio 7\n8. Ejercicio 8\n9. Ejercicio 9\n" +
            "10. Ejercicio 10\n11. Ejercicio 11\n12. Ejercicio 12\n" +
            "13. Ejercicio 13\n14. Ejercicio 14\n15. Ejercicio 15\n" +
            "16. Ejercicio 16\n17. Ejercicio 17\n18. Ejercicio 18\n" +
            "19. Ejercicio 19\n20. Ejercicio 20\n0. Salir"
        );

        if (opcion === "0") {
            alert("Saliendo del programa...");
            break;
        }

        ejecutarOpcion(opcion);
    }
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            alert("Resultado: " + ejercicio1());
            break;
        case "2":
            alert("Resultado: " + ejercicio2());
            break;
        default:
            alert("Opción no válida. Intente de nuevo.");
            break;
    }
}

mostrarMenu();