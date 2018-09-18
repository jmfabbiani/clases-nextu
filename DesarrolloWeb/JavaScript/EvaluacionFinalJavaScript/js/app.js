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
    document.getElementById("0").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("1").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("2").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("3").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("4").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("5").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("6").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("7").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("8").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("9").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("mas").addEventListener("click",operador,false);
		document.getElementById("menos").addEventListener("click",operador,false);
		document.getElementById("por").addEventListener("click",operador,false);
		document.getElementById("dividido").addEventListener("click",operador,false);
		document.getElementById("raiz").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("sign").addEventListener("click",numeroNegativvo,false);
		document.getElementById("on").addEventListener("click",limpiarPantalla,false);
		document.getElementById("punto").addEventListener("click",mostrarEnPantalla,false);
		document.getElementById("igual").addEventListener("click",igual,false);
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

    var inicializar = function() {
			pantalla = document.getElementById("display");
			pantalla.innerHTML="0";
			asignarEventosBotones();

		};

		return {
			init: inicializar
		 };

	    //Animacion de los Botones
  	function reducirBoton(boton){
  		if(boton.target.alt=="mas"){
  			boton.target.style="padding-right:3px";
  		}else{
  		boton.target.style="padding:3px";
  		}
  	}

    function volverBoton(boton){
  		if(boton.target.alt=="mas"){
  			boton.target.style="padding-right:0px";
  		}else{
  		boton.target.style="padding:0px";
  		}
  	}

  	function mostrarEnPantalla(tecla){
  		var numero="";
  		switch(tecla.target.alt){
  		case 'mas':
  			break;
  		case 'menos':
  			break;
  		case 'por':
  			break;
  		case 'dividido':
  			break;
  		case "punto":
  			numero=".";
  			break;
  		case "igual":
  			break;
  		case "On":
  			break;
  		default:
  			numero = tecla.target.alt;
  		}
  		if(pantalla.innerHTML.length<8 || pantalla.innerHTML.length==null){
  				agregarNumeroYComa(numero);
  				iniciarNumeroEnPantalla=0;
  		}
  	}

    function operador(s){
  		repetirOperacion=0;
  		if(numeroOculto!=0){
  			igual();
  		}
  		switch(s.target.alt){
  			case "mas":
  				operacion="+";
  				break;
  			case "menos":
  				operacion="-";
  				break;
  			case "por":
  				operacion="*";
  				break;
  			case "dividido":
  				operacion="/";
  				break;
  		}
		numeroOculto=numeroPantalla;
		pantalla.innerHTML="";
		conComa=0;
		ultimoOperando=0;
    iniciarNumeroEnPantalla=1;
		}

  	function igual(s) {
    	if(s!=undefined) { repetirOperacion++; }
    		var resultado = 0;
          if (operacion=="no") {
                pantalla.innerHTML=numeroPantalla;
                }
    			else if(repetirOperacion>1){
      			switch(operacion){
      				case "+":
      					resultado = sumar(parseFloat(ultimoOperando),parseFloat(numeroPantalla));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				  break;
      				case "-":
      					resultado = restar(parseFloat(numeroPantalla),parseFloat(ultimoOperando));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				  break;
      				case "*":
      					resultado = multiplicar(parseFloat(ultimoOperando),parseFloat(numeroPantalla));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				  break;
      				case "/":
      					resultado = dividir(parseFloat(numeroPantalla),parseFloat(ultimoOperando));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				  break;
      			}
  			   pantalla.innerHTML=resultado;
           numeroPantalla=resultado;
           iniciarNumeroEnPantalla=1;
  			  }
          else {
      			ultimoOperando=numeroPantalla;
      			switch(operacion){
      				case "+":
      					resultado = sumar(parseFloat(numeroOculto),parseFloat(numeroPantalla));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				  break;
      				case "-":
      					resultado = restar(parseFloat(numeroOculto),parseFloat(numeroPantalla));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				  break;
      				case "*":
      					resultado = multiplicar(parseFloat(numeroOculto),parseFloat(numeroPantalla));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				break;
      				case "/":
      					resultado = dividir(parseFloat(numeroOculto),parseFloat(numeroPantalla));
      					resultado=""+resultado;
      					resultado=resultado.substr(0,8);
      				break;
      			}
  			numeroOculto = 0;
  				pantalla.innerHTML=resultado;
  				numeroPantalla=resultado;
  				iniciarNumeroEnPantalla=1;
              }
      }
  	function limpiarPantalla(){
  		pantalla.innerHTML="0";
           numeroPantalla="0";
           conComa=0;
           numeroOculto=0;
           operacion="no";
  		 repetirOperacion=0;
  	}
  	function numeroNegativo() {
  		if(pantalla.innerHTML.length>0){
  				numeroOriginal=Number(numeroPantalla);
  				numeroOriginal=-numeroOriginal;
  				numeroPantalla=String(numeroOriginal);
  				pantalla.innerHTML=numeroPantalla;
  		}
      }

  	function agregarNumeroYComa(numero){
  		if (numeroPantalla=="0" || iniciarNumeroEnPantalla==1  ) {
              pantalla.innerHTML=numero;
              numeroPantalla=numero;
              if (numero==".") {
                 pantalla.innerHTML="0.";
                 numeroPantalla=numero;
                 conComa=1;
                 }
             }
             else {
                 if (numero=="." && conComa==0) {
                     pantalla.innerHTML+=numero;
                     numeroPantalla+=numero;
                     conComa=1;
                 }
                 else if (numero=="." && conComa==1) {}
                 else {
                     pantalla.innerHTML+=numero;
                     numeroPantalla+=numero
                 }
              }
  	}

		function actualizarResultado(nuevoResultado){
			resultado = nuevoResultado;
			return resultado;
		}

			function dividir(num1,num2){
				var resultado = num1/num2;
				return actualizarResultado(resultado);
			}
			function multiplicar(num1,num2){
				var resultado = num1*num2;
				return actualizarResultado(resultado);
			}
			function restar(num1,num2){
				var resultado = num1-num2;
				return actualizarResultado(resultado);
			}
			function sumar(num1,num2){
				var resultado = num1+num2;
				return actualizarResultado(resultado);
			}


	})();

}
