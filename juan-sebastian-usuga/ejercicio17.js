export function ejercicio17() {
  let transacciones = [10000, 12000, 11000, 50000, 13000];

  let resultado = monitorearTransacciones(transacciones);

  console.log(resultado);
}

function monitorearTransacciones(transacciones) {
  let resultado = [];
  let suma = 0;

  for (let i = 0; i < transacciones.length; i++) {
    let estado = "Normal";

    if (i > 0) {
      let promedio = suma / i;

      if (transacciones[i] > promedio * 3) {
        estado = "Sospechosa";
      }
    }

    suma += transacciones[i];

    resultado.push({
      monto: transacciones[i],
      estado: estado
    });
  }

  return resultado;
}
