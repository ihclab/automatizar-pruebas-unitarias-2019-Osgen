console.time('Tiempo de ejecucion');
let Medias = require("./Medias");

let test = new Medias();
// console.log(test.mediaAritmetica([2,2,5]));
// console.log(test.raizEnesima(64,3));
//console.log(test.mediaGeometrica([2,4,8]));
//console.log(test.mediaArmonica());


//read file
let fs = require("fs");
fs.readFile("test/CasosPrueba.txt", function(err, buf) {
    //all commands in this line.
    let lines = buf.toString().split("\n");
    //console.log(lines);

    lines.forEach(line =>{
      let arg = line.split(":");
      let funct = arg[1];
      let params = arg[2].split(" ").map(Number);
      let results = arg[3] = Number(arg[3]);//Convertion return NaN if was null in string, validated in class Medias
      //console.log(results);

        try {
          //console.log(test[funct](params).toFixed(4));
          //console.log(results);
          if(test[funct](params).toFixed(4)==results){
            console.log('\x1b[32m%s\x1b[0m', "Correct");
          }else{
            console.log('\x1b[31m%s\x1b[0m', "Incorrect");
          }
        } catch (error) {
          console.log("Metodo no implementado");
        }
    });
  });
  console.timeEnd('Tiempo de ejecucion');