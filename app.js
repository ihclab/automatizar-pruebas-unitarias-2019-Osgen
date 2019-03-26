let Medias = require("./Medias");

let test = new Medias();
// console.log(test.mediaAritmetica([2,2,5]));
// console.log(test.raizEnesima(64,3));
//console.log(test.mediaGeometrica([2,4,8]));


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
      let results = arg[3] = Number(arg[3]);
      //console.log(results);
      if(funct=="mediaArmonica"){
        console.log("No implementado");
        
      }else{

        try {
          //console.log(test[funct](params).toFixed(4));
          //console.log(results);
          if(test[funct](params).toFixed(4)==results){
          console.log("Correct");
          }else{
            console.log("Incorrect");
          }
        } catch (error) {
          console.log("Función inexistente");
        }
      }
    });
  });