
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
        let result = suma/vals.length; 
    return isNaN(result)? 0: result; // if NaN, return 0
    }
    /**
     *  Usa raizEnesima para calcular y regresar la media geométrica
     */
    this.mediaGeometrica = function(vals){
        let suma=0;
        vals.forEach(val => {
            suma += val;
        });
        let result =this.raizEnesima(suma, vals.length); 
        return isNaN(result)? 0 : result;// if NaN, return 0
    }
    /**
     * Calcula y regresa la raíz enésima = x^(1/n)
     */
    this.raizEnesima = function(x, n){
        return x**(1/n);
    }
    //Metodo no implementado
    this.mediaArmonica = function(){
         return new Error("Metodo no implementado");
    }
}

//Exportar clase
module.exports = Medias;




