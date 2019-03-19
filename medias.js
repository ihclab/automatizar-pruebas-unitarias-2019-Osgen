
//VERSION JS
/**
* Calcula y regresa la media artimética
*/
//CLASE MEDIAS
function Medias(){

    this.mediaAritmetica = function(vals){
        let suma =0;
        vals.forEach(val => {
            suma+=val;
        });
    return suma/vals.length;
    }
    /**
     *  Usa raizEnesima para calcular y regresar la media geométrica
     */
    this.mediaGeometrica = function(vals){
        let suma=0;
        vals.forEach(val => {
            suma += val;
        });
        return this.raizEnesima(suma, vals.length);
    }
    /**
     * Calcula y regresa la raíz enésima = x^(1/n)
     */
    this.raizEnesima = function(x, n){
        return x**(1/n);
    }
    //Metodo no implementado
    this.mediaArmonica = function(){

    }
}

//Exportar clase
module.exports = Medias;




