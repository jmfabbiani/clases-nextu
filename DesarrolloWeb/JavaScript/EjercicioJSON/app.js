var Estructura = {
  "Personas": [
    {
      "Nombre":"Mateo",
      "Edad":24,
      "Direccion":"Calle 108 # 66",
      "Telefono":"(057)444-44-44",
      "Estudios": [
        {
          "Primaria Escolar":{
            "Lugar": "Universidad de las Americas",
            "Fecha": "2006-2011"
          }
        },
          {
          "Secundaria Escolar":{
            "Lugar":"Universida San Paolo",
            "Fecha":"2011-2014"
          }
        }
      ]
    },
    {
      "Nombre":"Luis",
      "Edad":26,
      "Direccion":"Calle 108 # 1",
      "Telefono":"(057)333-33-33",
      "Estudios": [
        {
        "Primaria Escolar":{
          "Lugar": "Colegio Loyola",
          "Fecha": "2006-2011"
          }
        },
        {
        "Secundaria Escolar":{
          "Lugar":"Fe y Alegria",
          "Fecha":"2011-2014"
        }
       }
      ]
    }
  ]

}

var persona1= Estructura.Personas[0];
var persona2= Estructura.Personas[1];


var Telefono1 = persona1.Telefono;
var Telefono2 = persona2.Telefono;

var estudiosPersona1 = persona1.Estudios[1];
var estudiosPersona2 = persona2.Estudios[1];
