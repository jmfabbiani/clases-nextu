for (var i=1;i<=80;i++){
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon-form/' + i,
    type: 'GET',
    success: function (data){
      $('.pokemons').append('<li><img src="'+ data.sprites.front_default+'" ></img></li>')
    }
  })
}
