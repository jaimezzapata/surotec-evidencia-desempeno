function calcularTotalConDescuento(productos) {
    
    let total = 0;
    let cantidadElectronica = 0;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].categoria === "Electronica") {
            cantidadElectronica++;
        }
    }

    for (let i = 0; i < productos.length; i++) {
        let precio = productos[i].precio;

        if (
            productos[i].categoria === "Electronica" &&
            cantidadElectronica > 3
        ) {
            precio = precio * 0.85;
        }

        total = total + precio;
    }

    return total;
}
