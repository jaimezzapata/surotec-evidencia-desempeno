export function calcularDescuentoLealtad(compras, antiguedad) {
    if (compras.length === 0) return "Sin datos de compras";

    const suma = compras.reduce((total, compra) => total + compra, 0);
    const promedio = suma / compras.length;

    if (promedio > 100000 && antiguedad > 2) {
        return "Descuento del 25% otorgado para su próxima compra";
    }

    return "No aplica para descuento por lealtad";
}