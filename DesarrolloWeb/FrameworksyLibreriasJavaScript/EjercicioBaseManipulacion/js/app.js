$( document ).ready(function() {

  //Evento para el botón mas (+)
  $("#mas").click(function(){

  });

  //Evento para el botón menos (-)
  $("#menos").click(function(){

  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){

  });

  //Evento de hover
  $(document).on({
    //Función al mouse estar sobre la carta
    mouseenter: function(){

    },

    //Función al mouse dejar la carta
    mouseleave: function(){

    }
  }, "img.carta");


});
