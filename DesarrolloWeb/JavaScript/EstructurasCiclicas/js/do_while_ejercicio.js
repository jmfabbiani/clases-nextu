var lista_nombres = ["Camilo","Eduadro","Natalia","Juan","Alberto","Milton","Guillermo","Mateo","Maria","Pedro"];

var i = 5;

var resultado = "";

do{
  resultado = resultado + lista_nombres[i] + "\n";
  i = i+1;
}while (i<10);

alert(resultado);
