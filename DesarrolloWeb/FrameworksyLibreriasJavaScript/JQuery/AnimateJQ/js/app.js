

$(function(){
  $("#balon").on("click", function(){
    $(this).animate(
      {
        top: "300px",
        width: "-=50"
      }, 1000, function() {
        $(this).animate(
          {
            top: "+=100px"
          },1000
        )
      });
  })
});
