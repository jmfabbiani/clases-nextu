/* Documento JS */

/******************************

[Tabla de Contenido]

1. Inicio y Preparacion del Juego
2. Animacion del Titulo
3. Arreglo y Creacion de Filas y Columnas de Dulces
4. Generar Dulces Aleatorios
5. Llenar el Tablero
6. Validacion de Columnas para eliminar dulces
7. Validacion de Filas para eliminar dulces
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

4. Generar Dulces Aleatorios

*/
function genRandomCandy(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


/*

5. Llenar el Tablero

*/
function fillBoard() {
	var top = 6;
	var column = $('[class^="col-"]');

	column.each(function () {
		var candys = $(this).children().length;
		var agrega = top - candys;
		for (var i = 0; i < agrega; i++) {
			var candyType = genRandomCandy(1, 5);
			if (i === 0 && candys < 1) {
				$(this).append('<img src="image/' + candyType + '.png" class="element"></img>');
			} else {
				$(this).find('img:eq(0)').before('<img src="image/' + candyType + '.png" class="element"></img>');
			}
		}
	});
}

/*

6. Validacion de Columnas para eliminar dulces

*/
function columnValidacion() {
	for (var j = 0; j < 7; j++) {
		var counter = 0;
		var candyPosition = [];
		var extraCandyPosition = [];
		var candyColumn = candyColumns(j);
		var comparisonValue = candyColumn.eq(0);
		var empty = false;
		for (var i = 1; i < candyColumn.length; i++) {
			var srcComparison = comparisonValue.attr('src');
			var srcCandy = candyColumn.eq(i).attr('src');

			if (srcComparison != srcCandy) {
				if (candyPosition.length >= 3) {
					empty = true;
				} else {
					candyPosition = [];
				}
				counter = 0;
			} else {
				if (counter == 0) {
					if (!empty) {
						candyPosition.push(i - 1);
					} else {
						extraCandyPosition.push(i - 1);
					}
				}
				if (!empty) {
					candyPosition.push(i);
				} else {
					extraCandyPosition.push(i);
				}
				counter += 1;
			}
			comparisonValue = candyColumn.eq(i);
		}
		if (extraCandyPosition.length > 2) {
			candyPosition = $.merge(candyPosition, extraCandyPosition);
		}
		if (candyPosition.length <= 2) {
			candyPosition = [];
		}
		candyCount = candyPosition.length;
		if (candyCount >= 3) {
			deleteColumnCandy(candyPosition, candyColumn);
			setScore(candyCount);
		}
	}
}
function deleteColumnCandy(candyPosition, candyColumn) {
	for (var i = 0; i < candyPosition.length; i++) {
		candyColumn.eq(candyPosition[i]).addClass('delete');
	}
}

/*

7. Validacion de Filas para eliminar dulces

*/
function rowValidacion() {
	for (var j = 0; j < 6; j++) {
		var counter = 0;
		var candyPosition = [];
		var extraCandyPosition = [];
		var candyRow = candyRows(j);
		var comparisonValue = candyRow[0];
		var empty = false;
		for (var i = 1; i < candyRow.length; i++) {
			var srcComparison = comparisonValue.attr('src');
			var srcCandy = candyRow[i].attr('src');

			if (srcComparison != srcCandy) {
				if (candyPosition.length >= 3) {
					empty = true;
				} else {
					candyPosition = [];
				}
				counter = 0;
			} else {
				if (counter == 0) {
					if (!empty) {
						candyPosition.push(i - 1);
					} else {
						extraCandyPosition.push(i - 1);
					}
				}
				if (!empty) {
					candyPosition.push(i);
				} else {
					extraCandyPosition.push(i);
				}
				counter += 1;
			}
			comparisonValue = candyRow[i];
		}
		if (extraCandyPosition.length > 2) {
			candyPosition = $.merge(candyPosition, extraCandyPosition);
		}
		if (candyPosition.length <= 2) {
			candyPosition = [];
		}
		candyCount = candyPosition.length;
		if (candyCount >= 3) {
			deleteRowCandy(candyPosition, candyRow);
			setScore(candyCount);
		}
	}
}
function deleteRowCandy(candyPosition, candyRow) {
	for (var i = 0; i < candyPosition.length; i++) {
		candyRow[candyPosition[i]].addClass('delete');
	}
}


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
