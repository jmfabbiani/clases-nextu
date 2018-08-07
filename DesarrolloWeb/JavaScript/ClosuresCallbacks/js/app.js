/*
function inicializa(){
  var prop = 42
  function mostrarProp(){
    alert(prop)
  }
  mostrarProp()
}
inicializa()
*/
/*
var calculadora = (function(num1,num2)){
  var resultado = 0

  function actualizarResultado(nuevoResultado){
    resultado = nuevoResultado
  }

  return {
    sumar: function(){
      var resultado = num1 + num2
      actualizarResultado(resultado)
    },
    restar: function(){
      var resultado = num1 - num2
      actualizarResultado(resultado)
    },
    multiplicar: function(){
      var resultado = num1 * num2
      actualizarResultado(resultado)
    },
    dividar: function(){
      var resultado = num1 / num2
      actualizarResultado(resultado)
    },
    resultado: function() {

    }
  }
}
*/

function aviso(mensaje){
  alert(mensaje)
}

function OperacionLarga(param1,param2, aviso){
  aviso("Termino de realizar las operaciones")
}
