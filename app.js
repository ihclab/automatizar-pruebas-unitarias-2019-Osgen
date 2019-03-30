
let Medias = require("./Medias");
let moment = require('moment');//npm install moment
let fs = require("fs");

//Get Medias class
let test = new Medias();

let resultados=`ID   Resultado Metodo           Detalles
==========================================================\n\n`;

//read file
fs.readFile("test/CasosPrueba.txt", function(err, buf) {
    //all commands in this line.
    let lines = buf.toString().split("\n");
    let id =0001;
    let exitos=0;
    let fallas=0;

    lines.forEach(line =>{
      let inicio = new Date().getTime();
      let arg = line.split(":");
      let funct = arg[1];
      let params = arg[2].split(" ").map(Number);
      let results = arg[3] = Number(arg[3]);//Convertion return NaN if was null in string, validated in class Medias

      let lineToWrite;
        try {
          let result = test[funct](params).toFixed(4);
          if(result==results){
            lineToWrite = `00${id} \t Exito \t ${funct} Calculado = ${result} T.E. ${(new Date().getTime()-inicio).toFixed(5)}`;
            console.log('\x1b[32m%s\x1b[0m', lineToWrite);
            exitos++;
          }else{
            lineToWrite = `00${id} \t Falla \t ${funct} Calculado = ${result} Esperado = ${results} T.E. ${(new Date().getTime()-inicio).toFixed(5)}`;
            console.log('\x1b[31m%s\x1b[0m', lineToWrite);
            fallas++;
          }
        } catch (e) {
          let error;
          if(funct=="mediaArmonica"){
            error ="Metodo no implementado";
          }else{
            error= "Metodo no encontrado";
          }
          lineToWrite = `00${id} \t \t \t${funct} ${error}`;
          console.log(lineToWrite);
        } 

        id++;
        resultados +=`${lineToWrite}\n`;

      });

      resultados +=`\n\n========= Fin de la prueba ==========\n\n
      Exitos = ${exitos} \t Fallas = ${fallas}`;
      console.error(resultados);

      let fecha = moment().add(10, 'days').calendar().split("/");
      let hora = moment().format('LT').split(":");
      console.log(hora);
      
      fs.writeFile(`test/${fecha[0]}-${fecha[1]}-${fecha[2]}-${hora[0]}-${hora[1]}.txt`, resultados, 'ascii', (err)=>{
        if(err){
          console.log(err);      
      }
    });
  });
  

  