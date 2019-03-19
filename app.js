let Medias = require("./Medias");

let test = new Medias();
console.log(test.mediaAritmetica([2,2,5]));
console.log(test.raizEnesima(64,3));
console.log(test.mediaGeometrica([3,5,1]));

//read file
let fs = require("fs");
fs.readFile("test/CasosPrueba.txt", function(err, buf) {
    //all commands in this line.
    let lines = buf.toString().split("\n");
    console.log(lines);
  });