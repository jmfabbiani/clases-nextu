//Funciones Anonimas

setInterval(function(){console.log("mensaje repetitivo");},2000);
setTimeout(function(){console.log("Mensaje luego de una espera");},2000);

function Personalizada(numero1, numero2, funcion2) {
  var resultado = numero1 + numero2;
  funcion2(resultado);
}

Personalizada(4,8,function(resultado){alert(resultado);});
