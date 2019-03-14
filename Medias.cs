using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutomatizarPruebasUnitarias {
    //metodos c#
    class Medias {

        /**
         * Calcula y regresa la media artimética
         */
        public static double mediaAritmetica(params int[] vals) {
            double suma =0;
                foreach(int param in vals){
                    suma+=param;
                }
            return suma/vals.length();
        }

        /**
         * Calcula y regresa la raíz enésima = x^(1/n)
         */
        private static double raizEnesima(double x, int n) {
            return Math.Pow(x,(1/n));
         }

        /**
         *  Usa raizEnesima para calcular y regresar la media geométrica
         */
        public double mediaGeometrica(params int[] vals) { }

        /**
         * Este método no está implementado
         */
        public static double mediaArmonica(params int[] vals) { }
    }
}