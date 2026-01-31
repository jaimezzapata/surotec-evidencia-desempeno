function estadisticasPuntaje(valores) {
  if (valores.length <= 2) {
    return 0
  }

  const maximo = Math.max(...valores)
  const minimo = Math.min(...valores)

  const restantes = valores.filter(
    valor => valor !== maximo && valor !== minimo
  )

  const suma = restantes.reduce((total, valor) => total + valor, 0)

  return suma / restantes.length
}

module.exports = estadisticasPuntaje
