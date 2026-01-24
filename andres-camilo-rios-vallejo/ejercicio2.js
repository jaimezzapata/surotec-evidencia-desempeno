function ajusteDePrecios (productos){

   return productos.map((producto) => {
    let nuevoPrecio = producto.precio;

    if (producto.stock < 5) {
      nuevoPrecio = producto.precio * 1.15; 
    } else if (producto.stock > 20) {
      nuevoPrecio = producto.precio * 0.90; 
    }

    return {
        ...producto,precio: Number(nuevoPrecio.toFixed(2))
    }
   })

}
export {ajusteDePrecios}


