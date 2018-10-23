$(function(){
  //Funcion que cambia el fondo cuando se hace scroll
  $(window).scroll(function(){
    if ($(document).scrollTop()>=200) {
      $(".fondo").css("background-image","url('img/background2.jpg')");
    }else{
      $(".fondo").css("background-image","url('img/background.jpg')");
    }
  });

  //Funcion que cambia al color del cuadro dependiendo de la seleccion
  $("#color-favorito").change(function(event){
    var seleccionado = $("#color-favorito option:selected").text();
    if (seleccionado=="Azul") {
      $(".cuadrado-color").css("background","#4786F5");
    }
    if (seleccionado=="Verde") {
      $(".cuadrado-color").css("background","#47F547");
    }
    if (seleccionado=="Amarillo") {
      $(".cuadrado-color").css("background","#E9F547");
    }
    if (seleccionado=="Rojo") {
      $(".cuadrado-color").css("background","#F54747");
    }
    if (seleccionado=="Morado") {
      $(".cuadrado-color").css("background","#BB47F5");
    }
    if (seleccionado=="Café") {
      $(".cuadrado-color").css("background","#A97E35");
    }
  });

})
