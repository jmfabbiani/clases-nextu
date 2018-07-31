var a = 48;
var b = 60;

function obtenerFactoresPrimos(residuo) {
  var factores = [], i;
  for (i = 2; i <= residuo; i++) {
    while ((residuo % i) === 0) {
      factores.push(i);
      residuo/=i;
    }
  }
  return factores;
}

var factores_a=obtenerFactoresPrimos(a);
var factores_b=obtenerFactoresPrimos(b);

function obtenerComunes(a,b) {
  var resultado = [];
  while (a.length > 0 && b.length >0) {
    if   (a [0] < b[0]){
      a.shift();
    }else if (a[0] > b[0]) {
      b.shit();
    }else {
      resultado.push(a.shift());
      b.shift();
    }

  }
  return resultado;
}

var fCom=obtenerComunes(factores_a,factores_b);

var resultado=1;
for(i=0; i<fCom.length;i++){
  resultado=resultado*fCom[i];
}

console.log("El mcd("+a+","+b+")="+resultado);
