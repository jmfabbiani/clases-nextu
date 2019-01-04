for (var i=1;i<=80;i++){
  fetch('https://pokeapi.co/api/v2/pokemon-form/' + i, {
    method: 'GET',
  }).then(function (data){
    return data.json()
  }).then(function (json){
    $('.pokemons').append('<li><img src="'+ json.sprites.front_default+'" ></img></li>')
  })
}
