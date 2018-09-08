var libros_biblioteca = {
  "libros": [
    {
      "codigo": "0825BL",
      "titulo": "Ecosistemas Hibridos",
      "editorial": "Biosfera",
      "fecha_publicacion": "18/04/1991",
      "edicion": "2da Edición",
      "estado": "inactivo",
      "numero_paginas": 200,
      "numero_copias" : 3,
      "autores": [
        {
          "nombre": "Serafin Masparrote",
          "fecha_nacimiento": "18/06/1941",
          "nacionalidad": "Venezolano"
        },
        {
          "nombre": "Carlos Cohimbra",
          "fecha_nacimiento": "24/01/1951",
          "nacionalidad": "Uruguaya"
        }
      ]
    },
    {
      "codigo": "0315EC",
      "titulo": "Economia Temporal",
      "editorial": "FamiLibros",
      "fecha_publicacion": "10/08/2019",
      "edicion": "1era Edición",
      "estado": "activo",
      "numero_paginas": 325,
      "numero_copias" : 5,
      "autores": [
        {
          "nombre": "Jose Fabbiani",
          "fecha_nacimiento": "18/02/1977",
          "nacionalidad": "Venezolano"
        },
        {
          "nombre": "Jose Guerra",
          "fecha_nacimiento": "28/05/1953",
          "nacionalidad": "Venezolano"
        }
      ]
    },
    {
      "codigo": "0453PC",
      "titulo": "PSICOANALISIS DEL POBRE",
      "editorial": "Libros Marcados",
      "fecha_publicacion": "14/01/2019",
      "edicion": "1era Edición",
      "estado": "activo",
      "numero_paginas": 420,
      "numero_copias" : 5,
      "autores": [
        {
          "nombre": "Jim Hackman",
          "fecha_nacimiento": "01/12/1965",
          "nacionalidad": "Escoces"
        },
        {
          "nombre": "Jack Sparrow",
          "fecha_nacimiento": "24/01/1958",
          "nacionalidad": "Ingles"
        }
      ]
    }
   ]
 };

alert("El Libro " + libros_biblioteca.libros[0].titulo + " tiene el código " + libros_biblioteca.libros[0].codigo + " y fue publicado " + libros_biblioteca.libros[0].fecha_publicacion);
