//Funciones Anonimas
/*
setInterval(function(){console.log("mensaje repetitivo");},2000);
setTimeout(function(){console.log("Mensaje luego de una espera");},2000);

function Personalizada(numero1, numero2, funcion2) {
  var resultado = numero1 + numero2;
  funcion2(resultado);
}

Personalizada(4,8,function(resultado){alert(resultado);});
*/
//Funciones autoejecutables

/*
(function() {
  console.log(this);//Aqui el comando this es igual que window
})();

(function() {
  this.variable1 = "Hola Mundo"
})();

console.log(window.variable1);
*/

/*
(function (nombre, apellido) {
  console.log(nombre + " " + apellido);
})("Andres","Monsalve");
*/

var myObject = {
  property: "Hola Mundo",
  func: function(){
    return this.property;
  }
};

console.log(myObject.func());

var myObject2 = {
  property: "Hola Mundo",
};

function retornarPropiedad(){
  alert(this.property);
}

myObject2.f = retornarPropiedad;
myObject2.f();
