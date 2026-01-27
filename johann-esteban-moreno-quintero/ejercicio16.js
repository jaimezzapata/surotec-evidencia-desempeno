export function liquidarServicioAgua(consumo, estrato) {
    const RANGO_1_LIMITE = 15;
    const RANGO_2_LIMITE = 30;
    const PRECIO_RANGO_1 = 1000;
    const PRECIO_RANGO_2 = 1500;
    const PRECIO_RANGO_EXCESO = 2500;

    let totalBruto = 0;

    if (consumo <= RANGO_1_LIMITE) {
        totalBruto = consumo * PRECIO_RANGO_1;
    } else if (consumo <= RANGO_2_LIMITE) {
        totalBruto = (RANGO_1_LIMITE * PRECIO_RANGO_1) + 
                     ((consumo - RANGO_1_LIMITE) * PRECIO_RANGO_2);
    } else {
        totalBruto = (RANGO_1_LIMITE * PRECIO_RANGO_1) + 
                     ((RANGO_2_LIMITE - RANGO_1_LIMITE) * PRECIO_RANGO_2) + 
                     ((consumo - RANGO_2_LIMITE) * PRECIO_RANGO_EXCESO);
    }

    if (estrato === 1) {
        totalBruto = totalBruto * 0.80;
    }

    return Number(totalBruto.toFixed(2));
}