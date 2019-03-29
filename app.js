
let Medias = require("./Medias");

let test = new Medias();

//read file
let fs = require("fs");
fs.readFile("test/CasosPrueba.txt", function(err, buf) {
    //all commands in this line.
    let lines = buf.toString().split("\n");
    let id =0001;

    lines.forEach(line =>{
      let inicio = new Date().getTime();
      let arg = line.split(":");
      let funct = arg[1];
      let params = arg[2].split(" ").map(Number);
      let results = arg[3] = Number(arg[3]);//Convertion return NaN if was null in string, validated in class Medias

        try {
          let result = test[funct](params).toFixed(4);
          if(result==results){
            console.log('\x1b[32m%s\x1b[0m', `00${id} Exito ${funct} Calculado = ${result} T.E. ${(new Date().getTime()-inicio).toFixed(5)}`);
          }else{
            console.log('\x1b[31m%s\x1b[0m', `00${id} Falla ${funct} Calculado = ${result} Esperado = ${results} T.E. ${(new Date().getTime()-inicio).toFixed(5)}`);
          }
        } catch (e) {
          let error;
          if(funct=="mediaArmonica"){
            error ="Metodo no implementado";
          }else{
            error= "Metodo no encontrado";
          }
          console.log(`00${id} ${funct} ${error}`);
        }  
        id++;
    });
  });
  