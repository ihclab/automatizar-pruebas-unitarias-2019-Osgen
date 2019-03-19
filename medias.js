
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
    suma=0;
    vals.forEach(val => {
        suma += val;
    });
    return raizEnesima(suma, vals.length);
}

/**
 * Este método no está implementado
 */
function mediaArmonica( vals) { 

}


//read file
let fs = require("fs");
fs.readFile("test/CasosPrueba.txt", function(err, buf) {
    //all commands in this line.
    let lines = buf.toString().split("\n");
    console.log(lines);
  });


//test
console.log(mediaAritmetica([2,2,5]));
console.log(raizEnesima(64,3));
console.log(mediaGeometrica([3,5,1]));

