var urlBase = 'https://ulima.com.pe/ws/'; // ejemplo: https://ulima.com.pe/ws/; esta es url base del laravel
var query = '';
var periodos = '';
var periodosCod = '';
var departamentos = '';
var provincias = '';
var distritos = '';
var colegios = '';

function listarPeriodos(){
$.each(periodos, function( index, value ) {
  var option = $('<option>');
  option.val(periodosCod[index]).text(value);
  $('#cicloscbo').append(option);
});
}
function listarDptos(selector){
$.each(departamentos, function( index, item ) {
  var option = $('<option>');
  if(item.dpto != ''){
	  option.val(item.codigoDpto).text(item.dpto);
	  //$('#dpto-solo').append(option);
	  selector.append(option);
  }
});
}
function listarDistritos(departamentoCombo,provinciaCombo,distritoCombo){
distritoCombo.empty();
var option = $('<option>');
option.val('').text('seleccione');
distritoCombo.append(option);
$.each(distritos, function( index, item ) {
  //console.log(item);
  if((departamentoCombo.val() == item.codigoDpto) && (provinciaCombo.val() == item.codigoProv) && item.distrito != ''){
		var option = $('<option>');
		option.val(item.codigoDist).text(item.distrito);
		distritoCombo.append(option);
  }
});
}
function listarProvincias(selectorDpto,selectorProv){
//$('#prov-solo').empty();
selectorProv.empty();
var option = $('<option>');
option.val('').text('seleccione');
//$('#prov-solo').append(option);
selectorProv.append(option);
$.each(provincias, function( index, item ) {
	//if(($('#dpto-solo').val() == item.codigoDpto) && item.provincia != ''){
	if((selectorDpto.val() == item.codigoDpto) && item.provincia != ''){
	//console.log(item);
	var option = $('<option>');
	option.val(item.codigoProv).text(item.provincia);
	//$('#prov-solo').append(option);
	selectorProv.append(option);
	}
});
}
function BuscarCategoriaColegio(id,elementoDOM){
var categoria = '';
$.each(colegios, function( index, value ) {
	if(id == value.id){
		elementoDOM.html(value.categoria);
	}
 
})	
}	
function listarColegios(selectorColegio,selectorDepartamento,selectorProv,selectorDistrito){


//$('#colegio-solo').empty();
selectorColegio.empty();

//var departamento = $('#dpto-solo').val();
var departamento = selectorDepartamento.val();

//var provincia = $('#prov-solo').val();
var provincia = selectorProv.val();

//var distrito = $('#distrito-solo').val();
var distrito = selectorDistrito.val();

//console.log('dpto:' + departamento,'prov:' + provincia,'distrito:' + distrito);
$.each(colegios, function( index, value ) {
	if(departamento != '0' && provincia != '0' && distrito != '0'){
		if(departamento == value.dpto && provincia == value.prov && distrito == value.dist){
			var option = $('<option>');
			option.val(value.id).text(value.name);
			selectorColegio.append(option);
		}
	}
	
	if(distrito == '0'){
		var option = $('<option>');
		option.val(value.id).text(value.name);
		selectorColegio.append(option);
	}

})
selectorColegio.select2();
/*$('#colegio-solo').selectize({
	valueField: 'id',
		labelField: 'name',
		searchField: 'name',
		options: [],
		create: false
});*/
}
function getInfoSimulador(){
$.ajax({
			url: urlBase + 'colegios',//url colegios
			type: 'GET',
			dataType: 'json',
			data: {
				name: query,
				id: 'colegios'
			},
			error: function() {
				console.log('error no data')
			},
			success: function(res) {
				console.log(res);
				periodos = res.periodos;
				periodosCod = res.periodosCod;
				departamentos = res.departamentos;
				provincias = res.provincias;
				distritos = res.distritos;
				colegios = res.colegios;
				//console.table(distritos);
				listarPeriodos();

				listarDptos($('#dpto-solo'));
				listarDptos($('#dpto-quinto'));
				listarDptos($('#dpto-cuarto'));
				listarDptos($('#dpto-tercero'));

				listarColegios($('#colegio-solo'),$('#dpto-solo'),$('#prov-solo'),$('#distrito-solo'));
				listarColegios($('#colegio-quinto'),$('#dpto-quinto'),$('#prov-quinto'),$('#distrito-quinto'));
				listarColegios($('#colegio-cuarto'),$('#dpto-cuarto'),$('#prov-cuarto'),$('#distrito-cuarto'));
				listarColegios($('#colegio-tercero'),$('#dpto-tercero'),$('#prov-tercero'),$('#distrito-tercero'));
			}
});

}
function getInfoPensiones(){
var numcreditos = parseInt($('#numcreditos').html());
var categoriaColegio = $("#mostrar-categoria-colegio").html();
var codigoCiclo = $("#cicloscbo").val();
	$.ajax({
		url: urlBase + 'pensiones',//url pension
		type: 'POST',
		dataType: 'json',
		data: {
			numcreditos: numcreditos,
			categoria: categoriaColegio,
			ciclo: codigoCiclo
		},
		error: function() {
			console.log('error no data pensiones')
		},
		success: function(res) {
			console.log(res);
			//var ingr_pension =  parseFloat(res['LVF_INGR_PENSION']);
			var numcreditos = parseInt($('#numcreditos').html());
			var derecho_ensenanza = res['derecho_ensenanza'];
			var valor_credito = derecho_ensenanza / numcreditos;
			$('#categoriaval').html(valor_credito.toFixed(2));
			$('.cuota-monto-uno').html(res['cuota_uno'].toFixed(2));
			$('.cuota-monto').html(res['cuota_otros'].toFixed(2));
			$('.fecha_vencimiento').html(res['fecha_vencimiento']);
			var calcularCuotaUno = parseFloat(res['cuota_uno']);
			var calcularOtrasCuotas = 4 * parseFloat(res['cuota_otros']);
			var totalCuotas = calcularCuotaUno + calcularOtrasCuotas;
			var calcularDerechoEnsenanza = derecho_ensenanza + res['derecho_matricula'];
			$('#calcAmount').html('S/' +derecho_ensenanza.toFixed(2));
			$('#totalAmount').html('S/' +calcularDerechoEnsenanza.toFixed(2));
			$('.matricula').html(res['derecho_matricula'].toFixed(2));
			$('.monto_total').html(totalCuotas.toFixed(2));
			
			
			//return false;
		}
});	
}



$(document).ready(function(){

getInfoSimulador();

$('#dpto-solo').on('change', function(){
	listarProvincias($('#dpto-solo'),$('#prov-solo'));
});
$('#dpto-quinto').on('change', function(){
	listarProvincias($('#dpto-quinto'),$('#prov-quinto'));
});
$('#dpto-cuarto').on('change', function(){
	listarProvincias($('#dpto-cuarto'),$('#prov-cuarto'));
});
$('#dpto-tercero').on('change', function(){
	listarProvincias($('#dpto-tercero'),$('#prov-tercero'));
});		


$('#prov-solo').on('change', function(){
	listarDistritos($('#dpto-solo'),$('#prov-solo'),$('#distrito-solo'));
});
$('#prov-quinto').on('change', function(){
	listarDistritos($('#dpto-quinto'),$('#prov-quinto'),$('#distrito-quinto'));
});
$('#prov-cuarto').on('change', function(){
	listarDistritos($('#dpto-cuarto'),$('#prov-cuarto'),$('#distrito-cuarto'));
});
$('#prov-tercero').on('change', function(){
	listarDistritos($('#dpto-tercero'),$('#prov-tercero'),$('#distrito-tercero'));
});	


$('#distrito-solo').on('change', function(){
	listarColegios($('#colegio-solo'),$('#dpto-solo'),$('#prov-solo'),$('#distrito-solo'));
});
$('#distrito-quinto').on('change', function(){
	listarColegios($('#colegio-quinto'),$('#dpto-quinto'),$('#prov-quinto'),$('#distrito-quinto'));
});
$('#distrito-cuarto').on('change', function(){
	listarColegios($('#colegio-cuarto'),$('#dpto-cuarto'),$('#prov-cuarto'),$('#distrito-cuarto'));
});
$('#distrito-tercero').on('change', function(){
	listarColegios($('#colegio-tercero'),$('#dpto-tercero'),$('#prov-tercero'),$('#distrito-tercero'));
});	

$('#btn_step2_register').on('click', function(){
	BuscarCategoriaColegio($('#colegio-solo').val(),$("#mostrar-categoria-colegio"));
	getInfoPensiones();
});

$('#btn_step3_register').on('click', function(){
	BuscarCategoriaColegio($('#colegio-quinto').val(),$("#mostrar-categoria-colegio"));
	getInfoPensiones();
});	

$( ".menos" ).click(function() {
	var subtotal = parseInt($("#matricula").text());
	var creditos = parseInt($(".num").text()) - 1;
	$(".num").text(creditos);
	getInfoPensiones();
	/*var categoriaval = parseInt($("#categoriaval").text());
	var total = creditos * categoriaval;
	$("#calcAmount").text( 'S/. ' + total + '.00');
	total = subtotal + total;
	$("#totalAmount").text( 'S/. ' + total + '.00');*/
});

$( ".mas" ).click(function() {
	var subtotal = parseInt($("#matricula").text());
	var creditos = parseInt($(".num").text()) + 1;
	$(".num").text(creditos);
	getInfoPensiones();
	/*var categoriaval = parseInt($("#categoriaval").text());
	var total = creditos * categoriaval;
	$("#calcAmount").text( 'S/. ' + total + '.00');
	total = subtotal + total;
	$("#totalAmount").text( 'S/. ' + total + '.00');*/
});

});