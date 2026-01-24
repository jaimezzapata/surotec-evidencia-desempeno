function ejercicio1(monto) {
  if (monto % 10000 !== 0) {
    return "Error: El monto debe ser múltiplo de 10.000";
  }

  const denominaciones = [
    { valor: 50000, nombre: "billetes de $50.000", cantidad: 0 },
    { valor: 20000, nombre: "billetes de $20.000", cantidad: 0 },
    { valor: 10000, nombre: "billetes de $10.000", cantidad: 0 }
  ];

  let montoRestante = monto;

  for (let i = 0; i < denominaciones.length; i++) {
    const denom = denominaciones[i];
    denom.cantidad = Math.floor(montoRestante / denom.valor);
    montoRestante = montoRestante % denom.valor;
  }

  const resultado = {};
  
  denominaciones.forEach(denom => {
    if (denom.cantidad > 0) {
      resultado[`billetes_${denom.valor}`] = denom.cantidad;
    }
  });

  if (Object.keys(resultado).length === 0) {
    return {
      "billetes_50000": 0,
      "billetes_20000": 0,
      "billetes_10000": 0
    };
  }

  return resultado;
}

module.exports = { ejercicio1 };
