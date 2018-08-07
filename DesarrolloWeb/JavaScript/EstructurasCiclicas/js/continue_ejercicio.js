var lista_nombres = ["Camilo","Eduardo","Natalia","Juan","Alberto","Milton","Guillermo","Mateo","Maria","Pedro"];

var resultado = "Las personas aceptadas a la conferencia son: \n";

for (var i = 0; i <10; i++) {
  if((i % 2)== 0){
    continue;
  }
  resultado = resultado + lista_nombres[i] + "\n";
};

alert(resultado);
