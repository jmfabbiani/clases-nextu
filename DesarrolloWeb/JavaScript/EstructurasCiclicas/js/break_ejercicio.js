var lista_nombres = ["Camilo","Eduadro","Natalia","Juan","Alberto","Milton","Guillermo","Mateo","Maria","Pedro"];

var i = 5;

var resultado = "Las personas aceptadas a la conferencia son: \n";

for (var i = 0; i <10; i++) {
  if(i == 6){
    break;
  }
  resultado = resultado + lista_nombres[i] + "\n";
};

alert(resultado);
