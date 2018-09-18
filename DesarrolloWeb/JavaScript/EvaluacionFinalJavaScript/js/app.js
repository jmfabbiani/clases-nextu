var Calculadora = {

  var numeroPantalla="0";
  var	iniciarNumeroEnPantalla=1;
  var	conComa=0;
  var	numeroOculto=0;
  var	operacion="no";
  var	pantalla=null;
  var repetirOperacion=0;
  var ultimoOperando="";
  var resultado = 0;

  var asignarEventosBotones = function(){
		//Eventos de Funciones en teclas
		document.getElementById("0").addEventListener("click",//,false);
		document.getElementById("1").addEventListener("click",//,false);
		document.getElementById("2").addEventListener("click",//,false);
		document.getElementById("3").addEventListener("click",//,false);
		document.getElementById("4").addEventListener("click",//,false);
		document.getElementById("5").addEventListener("click",//,false);
		document.getElementById("6").addEventListener("click",//,false);
		document.getElementById("7").addEventListener("click",//,false);
		document.getElementById("8").addEventListener("click",//,false);
		document.getElementById("9").addEventListener("click",//,false);
		document.getElementById("mas").addEventListener("click",//,false);
		document.getElementById("menos").addEventListener("click",//,false);
		document.getElementById("por").addEventListener("click",//,false);
		document.getElementById("dividido").addEventListener("click",//,false);
		document.getElementById("raiz").addEventListener("click",//,false);
		document.getElementById("sign").addEventListener("click",//,false);
		document.getElementById("on").addEventListener("click",//,false);
		document.getElementById("punto").addEventListener("click",//,false);
		document.getElementById("igual").addEventListener("click",//,false);
		//Eventos paro Reducir tamaño
		document.getElementById("0").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("1").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("2").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("3").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("4").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("5").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("6").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("7").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("8").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("9").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("mas").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("menos").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("por").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("dividido").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("raiz").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("sign").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("on").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("punto").addEventListener("mousedown",reducirBoton,false);
		document.getElementById("igual").addEventListener("mousedown",reducirBoton,false);
		//Eventos paro Devolver tamaño
		document.getElementById("0").addEventListener("mouseup",volverBoton,false);
		document.getElementById("1").addEventListener("mouseup",volverBoton,false);
		document.getElementById("2").addEventListener("mouseup",volverBoton,false);
		document.getElementById("3").addEventListener("mouseup",volverBoton,false);
		document.getElementById("4").addEventListener("mouseup",volverBoton,false);
		document.getElementById("5").addEventListener("mouseup",volverBoton,false);
		document.getElementById("6").addEventListener("mouseup",volverBoton,false);
		document.getElementById("7").addEventListener("mouseup",volverBoton,false);
		document.getElementById("8").addEventListener("mouseup",volverBoton,false);
		document.getElementById("9").addEventListener("mouseup",volverBoton,false);
		document.getElementById("mas").addEventListener("mouseup",volverBoton,false);
		document.getElementById("menos").addEventListener("mouseup",volverBoton,false);
		document.getElementById("por").addEventListener("mouseup",volverBoton,false);
		document.getElementById("dividido").addEventListener("mouseup",volverBoton,false);
		document.getElementById("raiz").addEventListener("mouseup",volverBoton,false);
		document.getElementById("sign").addEventListener("mouseup",volverBoton,false);
		document.getElementById("on").addEventListener("mouseup",volverBoton,false);
		document.getElementById("punto").addEventListener("mouseup",volverBoton,false);
		document.getElementById("igual").addEventListener("mouseup",volverBoton,false);
		};


}
