/* Documento JS */

/******************************

[Tabla de Contenido]

1. Inicio y Preparacion del Juego
2. Animacion del Titulo
3. Arreglo y Creacion de Filas y Columnas de Dulces
4.
5.
6.
7.


******************************/

/*

1. Inicio, Reinicio y Preparacion del Juego
*/

function initGame() {

	animTitle();

  /* Evento de Iniciar y Reiniciar Juego en Boton */
	$('.btn-reinicio').click(function () {
		if ($(this).text() === 'Reiniciar') {
			location.reload(true);
		}
		checkBoard();
		$(this).text('Reiniciar');
		$('#timer').startTimer({
			onComplete: gameOver
		})
	});
}
/* Preparacion del Juego */
$(function() {
	initGame();
});

/*

2. Animacion del Titulo

*/

function animTitle() {
	var interval = null;
  	var matchtitle = $(".main-titulo");
  	function toggleTitle(color){
    	matchtitle.css("color",color)
    	color = (color === "#DCFF0E") ? "#DDD" :"#DCFF0E";
    	interval=setInterval(function(){clearInterval(interval);toggleTitle(color);}, 500);
  	}
  	toggleTitle('#DDD')
}

/*

3. Arreglo y Creacion de Filas y Columnas de Dulces

*/

/* Arreglo de Colunmnas de Dulces */
function candyColumns(index) {
	var candyColumn = giveCandyArrays('columns');
	return candyColumn[index];
}

/* Arreglo de Filas de Dulces */
function candyRows(index) {
	var candyRow = giveCandyArrays('rows', index);
	return candyRow;
}

/* Creacion de Filas y Columnas de Dulces */
function giveCandyArrays(arrayType, index) {

	var candyCol1 = $('.col-1').children();
	var candyCol2 = $('.col-2').children();
	var candyCol3 = $('.col-3').children();
	var candyCol4 = $('.col-4').children();
	var candyCol5 = $('.col-5').children();
	var candyCol6 = $('.col-6').children();
	var candyCol7 = $('.col-7').children();

	var candyColumns = $([candyCol1, candyCol2, candyCol3, candyCol4,
		candyCol5, candyCol6, candyCol7
	]);

	if (typeof index === 'number') {
		var candyRow = $([candyCol1.eq(index), candyCol2.eq(index), candyCol3.eq(index),
			candyCol4.eq(index), candyCol5.eq(index), candyCol6.eq(index),
			candyCol7.eq(index)
		]);
	} else {
		index = '';
	}

	if (arrayType === 'columns') {
		return candyColumns;
	} else if (arrayType === 'rows' && index !== '') {
		return candyRow;
	}
}

/*

4. Validacion de Columnas

*/
/*
5. Animacion del Titulo
*/
/*
6. Animacion del Titulo
*/
/*
7. Animacion del Titulo
*/
/*
8. Animacion del Titulo
*/
/*
9. Animacion del Titulo
*/
