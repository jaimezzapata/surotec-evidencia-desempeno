function liquidacionServicios(metrosCubicos, estrato) {
  let total = 0;

  if (metrosCubicos <= 15) {
    total = metrosCubicos * 1000;
  } else if (metrosCubicos <= 30) {
    total = 15 * 1000 + (metrosCubicos - 15) * 1500;
  } else {
    total = 15 * 1000 + 15 * 1500 + (metrosCubicos - 30) * 2500;
  }

  if (estrato === 1) {
    total = total * 0.8;
  }

  return total;
}
