function carritoDeDescuentoCategoria(productos){
    let total = 0;
    let electronicaCount = 0;

    for (let producto of productos) {
        if (producto.categoria ==="electronica"){
            electronicaCount++;
        }
    }
    for (let producto of productos) {
        let precioFinal = producto.precio;

        if (producto.categoria ==="Electronica" && electronicaCount > 3){
            precioFinal = producto.precio * 0.85;
    }
        return total;
}

}
module .exports = carritoDeDescuentoCategoria;
