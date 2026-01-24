import { ejercicio1 } from "./ejercicio1.js"
import { ejercicio2 } from "./ejercicio2.js"
import { ejercicio3 } from "./ejercicio3.js"
import { ejercicio4 } from "./ejercicio4.js"
import { ejercicio5 } from "./ejercicio5.js"
import { ejercicio6 } from "./ejercicio6.js"
import { ejercicio7 } from "./ejercicio7.js"
import { ejercicio8 } from "./ejercicio8.js"
import { ejercicio9 } from "./ejercicio9.js"
import { ejercicio10 } from "./ejercicio10.js"

function mostrarMenu() {
    return prompt(
        "MENÚ PRINCIPAL EVALUACION DE DESEMPEÑO\n" +
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
        "0. Salir"
    )
}

function ejecutarMenu() {
    let opcion = ""

    while (opcion !== "0") {
        opcion = mostrarMenu()

        switch (opcion) {
            case "1":
                alert(JSON.stringify(ejercicio1(), null, 2))
                break

                break
            case "2":
                alert(JSON.stringify(ejercicio2(), null, 2))
                break
            case "3": {
                let resultado = ejercicio3()
                if (resultado) {
                    alert("El estudiante es beneficiario de la beca")
                } else {
                    alert("El estudiante no cumple los requisitos para la beca")
                }
                break
            }
            case "4":
                let resultado = ejercicio4()
                alert(
                    JSON.stringify(resultado, null, 2)
                )
                break

            case "5":
                alert(
                    JSON.stringify(ejercicio5(), null, 2)
                )
                break
            case "6":
                case "6":
                alert("Total de impuestos: $" + ejercicio6())
                break
            case "7":
                alert("La contraseña es: " + ejercicio7())
                break
            case "8":
                  alert("Promedio (sin máximo ni mínimo): " + ejercicio8())
                break
            case "9":
                alert("Salario total: $" + ejercicio9())
                break
            case "10":
                alert("Valor convertido: " + ejercicio10())
                break
            case "11":
                (ejercicio11())
                break
            case "12":
                (ejercicio12())
                break
            case "13":
                (ejercicio13())
                break
            case "14":
                (ejercicio14())
                break
            case "15":
                (ejercicio15())
                break
            case "16":
                (ejercicio16())
                break
            case "17":
                (ejercicio17())
                break
            case "18":
                (ejercicio18())
                break
            case "19":
                (ejercicio19())
                break
            case "20":
                (ejercicio20())
                break
            case "0":
                alert("Programa finalizado")
                break
            default:
                alert("Opción inválida")
        }
    }
}

ejecutarMenu()
