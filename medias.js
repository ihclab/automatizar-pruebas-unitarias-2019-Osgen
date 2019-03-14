
//VERSION JS
/**
* Calcula y regresa la media artimética
*/
function mediaAritmetica(vals) {
    let suma =0;
        vals.forEach(val => {
            suma+=val;
        });
    return suma/vals.length;
}

/**
 * Calcula y regresa la raíz enésima = x^(1/n)
 */
function raizEnesima(x, n) {
    return x**(1/n);
}

/**
 *  Usa raizEnesima para calcular y regresar la media geométrica
 */
function mediaGeometrica(vals) {

}

/**
 * Este método no está implementado
 */
function mediaArmonica( vals) { 

}

//test
console.log(mediaAritmetica([2,2,5]));
console.log(raizEnesima(64,3));
