

$(function(){
  $("body").dblclick(function(){
    $(".oculto").fadeIn(4000,function(){
      console.log("Animación Terminada")
    });
  });

  $(document).keypress(function(event){
    if (event.which == 111){
      $(".oculto").fadeToggle('slow','linear');
    }
    if (event.which == 112){
      $(".panel-estadisticas").slideToggle(500);
    }
  });

})
