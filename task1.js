export function costCalculator(monto) {
    const tarifa = 3;
    const interes = monto * 0.01;

    return parseInt(monto) + tarifa + interes;
}
