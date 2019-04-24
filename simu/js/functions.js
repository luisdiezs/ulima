
$(document).ready(function(){

	$( ".menos" ).click(function() {
		var subtotal = parseInt($("#matricula").text());
		var creditos = parseInt($(".num").text()) - 1;
		$(".num").text(creditos);
		var categoriaval = parseInt($("#categoriaval").text());
		var total = creditos * categoriaval;
		$("#calcAmount").text( 'S/. ' + total + '.00');
		total = subtotal + total;
		$("#totalAmount").text( 'S/. ' + total + '.00');
	});

	$( ".mas" ).click(function() {
		var subtotal = parseInt($("#matricula").text());
		var creditos = parseInt($(".num").text()) + 1;
		$(".num").text(creditos);
		var categoriaval = parseInt($("#categoriaval").text());
		var total = creditos * categoriaval;
		$("#calcAmount").text( 'S/. ' + total + '.00');
		total = subtotal + total;
		$("#totalAmount").text( 'S/. ' + total + '.00');
	});

});


function ajaxColegios() {
	$.ajax ({
		method: "POST",
	    url: '../simu/ajax.php',
	    data: {id : 'colegios' },
	    dataType: "json"
	}).done(function(data) {
		for (var i = 0; i < data.length; i++) {
			//alert('ID: ' + data[i].id + ' Nombre: ' + data[i].name);
		}
	});

};