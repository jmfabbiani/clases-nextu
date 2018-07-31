
document.getElementById('boton-receta1').addEventListener('click', function(){
  var ingredientes=["Claras de Huevo","Azucar Blanca","Leche Condensada","Gelatina sin sabor","Limones"];
  var unidadesClaraDeHuevo=5;
  var gramosAzucar=150;
  var gramosLecheCondensada=200;
  var sobresGelatina=1;
  var unidadesLimon=4;

  console.log("Preparación:");
  console.log("Adicionar las "+unidadesClaraDeHuevo+" "+ingredientes[0]+" en un Bol y bartir con los "+gramosAzucar+" gramos de "+ingredientes[1]+"");
  console.log("Luego debes adicionar los "+gramosLecheCondensada+" gramos de "+ingredientes[2]+" y batir bien");
  console.log("Adicionar zumo de "+unidadesLimon+" "+ingredientes[4]+" y "+sobresGelatina+" sobre de "+ingredientes[3]+" ");
  console.log("Depositar la mezcla en moldes individuales y refrigerar");

})

document.getElementById('boton-receta2').addEventListener('click', function(){
  var ingredientes=["Ginebra","Vermouth Seco","Aceituna"];
  var onzasGinebra=2.5;
  var onzasVermouth=0.5;
  var unidadesAceituna=1;

  console.log("Preparación:");
  console.log("Verter "+onzasGinebra+" onzas de "+ingredientes[0]+" en una coctelera");
  console.log("Añadir "+onzasVermouth+" onzas de "+ingredientes[1]+" ");
  console.log("Servir en un copa tipo Martini y añadir "+unidadesAceituna+" "+ingredientes[2]+" ");

})
