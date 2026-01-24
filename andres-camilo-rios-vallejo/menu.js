
import { cajeroDenominaciones } from './ejercicio1.js' 

function ejecutarMenu() {

    let salir = false;
    while (!salir) {

    let menu = "Seleccione una opción:\n";
    menu += "1. Calcular denominaciones para retiro de dinero\n";
    menu += "0. Salir\n";

    const opcion = prompt(menu);

    if (opcion === null || opcion === '0') {
    salir = true;
    continue;
    }

    switch (opcion) {
        case '1':
    
        const monto = parseInt(prompt("ingreese el monto a retirar"))
        const calculo = cajeroDenominaciones(monto)
        alert("DEMONICAIONES\N"+JSON.stringify(calculo,null,2))
        break

        case '0':
        alert("Saliendo del menú.")
        break
        default:
        alert("Opción no válida. Por favor, intente de nuevo.")
        break
    }
    }
}

ejecutarMenu();
    