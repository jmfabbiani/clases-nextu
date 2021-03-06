/* Documento JS */

/******************************

[Tabla de Contenido]

1. Inicio y Preparacion del Juego
2. Animacion del Titulo
3. Generar Caramelos Aleatorios
4. Creacion y Arreglos de Filas y Columnas de Caramelos
5. Validacion de Columnas para eliminar dulces
6. Validacion de Filas para eliminar dulces
7. Llenar el Tablero y Verificar si hay caramelos que eliminar
8. Efecto de movimiento entre los Caramelos "Drag and Drop"
9. Intercambio de Caramelos en el "Drag and Drop"
10. Eliminacion y Colocacion automatica de los Caramelos
11. Contador de Puntaje
12. Contador de Movimientos de Caramelos
13. Finalizacion del Juego

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
		fillBoard();
		$(this).text('Reiniciar');
		$("#timer").timer({
    countdown: true,
    duration: '2m',
    callback: gameOver
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

3. Generar Caramelso Aleatorios

*/
function genRandomCandy(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

/*

4. Creacion y Arreglos de Filas y Columnas de Caramelos

*/
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

/* Arreglo de Columnas de Dulces */
function candyColumns(index) {
	var candyColumn = giveCandyArrays('columns');
	return candyColumn[index];
}

/* Arreglo de Filas de Dulces */
function candyRows(index) {
	var candyRow = giveCandyArrays('rows', index);
	return candyRow;
}

/*

5. Validacion de Columnas para eliminar dulces

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

6. Validacion de Filas para eliminar Caramelos

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

7. Llenar el Tablero y Verificar si hay caramelos que eliminar

*/
/* Llenar el Tablero*/
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
	addCandyEvents();
	setValidaciones();
}

/* Verificar y Eliminar Caramelos*/
function setValidaciones() {
	columnValidacion();
	rowValidacion();
	/* Eliminar caramelos */
	if ($('img.delete').length !== 0) {
		deletesCandyAnimation();
	}
}


/*

8. Efecto de movimiento entre los caramelos "Drag and Drop"

*/
function addCandyEvents() {
	$('img').draggable({
		containment: '.panel-tablero',
		droppable: 'img',
		revert: true,
		revertDuration: 500,
		grid: [100, 100],
		zIndex: 10
	});
	$('img').droppable({
		drop: switchCandy
	});
	enableCandyEvents();
}

function disableCandyEvents() {
	$('img').draggable('disable');
	$('img').droppable('disable');
}

function enableCandyEvents() {
	$('img').draggable('enable');
	$('img').droppable('enable');
}

/*

9. Intercambio de Caramelos en el "Drag and Drop"

*/
function switchCandy(event, candyDrag) {
	var candyDrag = $(candyDrag.draggable);
	var dragSrc = candyDrag.attr('src');
	var candyDrop = $(this);
	var dropSrc = candyDrop.attr('src');
	candyDrag.attr('src', dropSrc);
	candyDrop.attr('src', dragSrc);

	setTimeout(function () {
		fillBoard();
		if ($('img.delete').length === 0) {
			candyDrag.attr('src', dragSrc);
			candyDrop.attr('src', dropSrc);
		} else {
			sumMoves();
		}
	}, 500);

}

function checkBoardPromise(result) {
	if (result) {
		fillBoard();
	}
}

/*

10. Eliminacion y Colocacion automatica de los Caramelos

*/
function deletesCandyAnimation() {
	disableCandyEvents();
	$('img.delete').effect('pulsate', 400);
	$('img.delete').animate({
			opacity: '0'
		}, {
			duration: 300
		})
		.animate({
			opacity: '0'
		}, {
			duration: 400,
			complete: function () {
				deletesCandy()
					.then(checkBoardPromise)
					.catch(showPromiseError);
			},
			queue: true
		});
}

function showPromiseError(error) {
	console.log(error);
}

/* Colocacion automatica de Caramelos */
function deletesCandy() {
	return new Promise(function (resolve, reject) {
		if ($('img.delete').remove()) {
			resolve(true);
		} else {
			reject('No se pudo eliminar Candy...');
		}
	})
}


/*

11. Contador de Puntaje

*/
function setScore(candyCount) {
	var score = Number($('#score-text').text());
	switch (candyCount) {
		case 3:
			score += 25;
			break;
		case 4:
			score += 50;
			break;
		case 5:
			score += 100;
			break;
		case 6:
			score += 200;
			break;
		case 7:
			score += 400;
	}
	$('#score-text').text(score);
}

/*

12. Contador de Movimientos de Caramelos

*/
function sumMoves() {
	var actualValue = Number($('#movimientos-text').text());
	var result = actualValue += 1;
	$('#movimientos-text').text(result);
}


/*

13. Finalizacion del Juego

*/
function gameOver() {
	$(".panel-score").animate({ width: "100%" }, 1000);
  	$(".panel-tablero, .time").animate(
	    { height: 0, width: 0, opacity: 0 },
	    1000,
	    function () { $(this).hide() });
	$('h1.main-titulo').addClass('title-over')
		.text('GAME OVER!');
}
