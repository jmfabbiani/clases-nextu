$(function(){

  $(".caja").draggable()

  $(".contenedor")
  .droppable({
    accept: ".izq",
    drop: function(evente, ui){
      $(this).addClass("ui-state-highlight")
      alert("Correcto!")
    }
  })
  .resizable({
    animate: true
  });

  $(".lista").sortable({
    placeholder:"nuevo"
  })




})
