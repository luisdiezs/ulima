var urlBase = 'https://ws.master-7rqtwti-qtmozhdrerxcm.us-2.platformsh.site/'; // ejemplo: https://ulima.com.pe/ws/; esta es url base del laravel
var query = '';
var periodos = [];
var periodosCod = [];
var departamentos = '';
var provincias = [];
var distritos = [];
var colegios = [];
var categoriaColegioWS = null;

listarPeriodos();

document.getElementById("dpto-solo").addEventListener("change", function() {
    listarProvincias(document.getElementById("dpto-solo"), document.getElementById("prov-solo"));
});


function sortSelect(selElem, textoSeleccione) {
    var tmpAry = [];
    tmpAry[0] = [];
    tmpAry[0][0] = '';
    tmpAry[0][1] = '';
    for (var i = 1; i < selElem.options.length; i++) {
        tmpAry[i] = [];
        tmpAry[i][0] = selElem.options[i].text;
        tmpAry[i][1] = selElem.options[i].value;
    }
    tmpAry.sort();
    while (selElem.options.length > 0) {
        selElem.options[0] = null;
    }
    tmpAry[0] = [];
    tmpAry[0][0] = textoSeleccione;
    tmpAry[0][1] = '';
    for (var q = 0; q < tmpAry.length; q++) {
        var op = new Option(tmpAry[q][0], tmpAry[q][1]);
        selElem.options[q] = op;
    }
    return;
}

function listarColegios(selectorColegio, selectorDepartamento, selectorProv, selectorDistrito) {
    selectorColegio.options.length = 0;
    var departamento = selectorDepartamento.value;
    var provincia = selectorProv.value;
    var distrito = selectorDistrito.value;
    colegios.forEach(function(value, index) {
        var option;
        if (departamento != '0' && provincia != '0' && distrito != '0') {
            if (departamento == value.dpto && provincia == value.prov && distrito == value.dist) {
                option = document.createElement("option");
                option.text = value.name;
                option.value = value.id;
                selectorColegio.add(option);

            }
        }

        if (distrito == '0') {


            option = document.createElement("option");
            option.text = value.name;
            option.value = value.id;
            selectorColegio.add(option);

        }

    });
    sortSelect(selectorColegio, 'Seleccione');
    //selectorColegio.select2();
}

function BuscarCategoriaColegio(id, elementoDOM) {
    var categoria = '';
    id = parseInt(id);
    colegios.forEach(function(element, index) {
        if (id == element.id) {
            /* se agrego esta linea */
            categoriaColegioWS = element.categoriaPS;
            /* se agrego esta linea */
            elementoDOM.innerHTML = element.categoria;
        }
    });

}


function listarPeriodos() {

    var cicloscbo = document.getElementById("cicloscbo");
    periodos.forEach(function(element, index) {
        var option = document.createElement("option");
        option.text = element;
        option.value = periodosCod[index];
        cicloscbo.add(option);
    });
    sortSelect(cicloscbo, 'Elegir Ciclo');


}

function listarDptos(selector) {

    departamentos.forEach(function(element, index) {
        //var selector = document.getElementById("selector");
        var option = document.createElement("option");
        if (element.dpto != '') {
            option.text = element.dpto;
            option.value = element.codigoDpto;
            selector.add(option);
        }
    });
    sortSelect(selector, 'Seleccione');

}

function listarDistritos(departamentoCombo, provinciaCombo, distritoCombo) {


    distritoCombo.options.length = 0;
    var option = document.createElement("option");
    option.text = 'seleccione';
    option.value = '';
    distritoCombo.append(option);

    distritos.forEach(function(item, index) {
        var option = document.createElement("option");
        if ((departamentoCombo.value == item.codigoDpto) && (provinciaCombo.value == item.codigoProv) && item.distrito != '') {
            option.text = item.distrito;
            option.value = item.codigoDist;
            distritoCombo.add(option);
        }
    });
    sortSelect(distritoCombo, 'Seleccione');
}

function listarProvincias(selectorDpto, selectorProv) {

    selectorProv.options.length = 0;

    var option = document.createElement("option");
    option.text = 'seleccione';
    option.value = '';
    selectorProv.append(option);


    provincias.forEach(function(item, index) {
        var option = document.createElement("option");
        if ((selectorDpto.value == item.codigoDpto) && item.provincia != '') {
            option.text = item.provincia;
            option.value = item.codigoProv;
            selectorProv.add(option);
        }
    });
    sortSelect(selectorProv, 'Seleccione');

}

document.getElementById("dpto-solo").addEventListener("change", function() {
    listarProvincias(document.getElementById('dpto-solo'), document.getElementById('prov-solo'));
});

document.getElementById("dpto-quinto").addEventListener("change", function() {
    listarProvincias(document.getElementById('dpto-quinto'), document.getElementById('prov-quinto'));
});

document.getElementById("dpto-cuarto").addEventListener("change", function() {
    listarProvincias(document.getElementById('dpto-cuarto'), document.getElementById('prov-cuarto'));
});

document.getElementById("dpto-tercero").addEventListener("change", function() {
    listarProvincias(document.getElementById('dpto-tercero'), document.getElementById('prov-tercero'));
});

document.getElementById("prov-solo").addEventListener("change", function() {
    listarDistritos(document.getElementById('dpto-solo'), document.getElementById('prov-solo'), document.getElementById('distrito-solo'));

});

document.getElementById("prov-quinto").addEventListener("change", function() {
    listarDistritos(document.getElementById('dpto-quinto'), document.getElementById('prov-quinto'), document.getElementById('distrito-quinto'));
});

document.getElementById("prov-cuarto").addEventListener("change", function() {
    listarDistritos(document.getElementById('dpto-cuarto'), document.getElementById('prov-cuarto'), document.getElementById('distrito-cuarto'));
});

document.getElementById("prov-tercero").addEventListener("change", function() {
    listarDistritos(document.getElementById('dpto-tercero'), document.getElementById('prov-tercero'), document.getElementById('distrito-tercero'));
});

document.getElementById("distrito-solo").addEventListener("change", function() {
    listarColegios(document.getElementById('colegio-solo'), document.getElementById('dpto-solo'), document.getElementById('prov-solo'), document.getElementById('distrito-solo'));
});

document.getElementById("distrito-quinto").addEventListener("change", function() {
    listarColegios(document.getElementById('colegio-quinto'), document.getElementById('dpto-quinto'), document.getElementById('prov-quinto'), document.getElementById('distrito-quinto'));
});

document.getElementById("distrito-cuarto").addEventListener("change", function() {
    listarColegios(document.getElementById('colegio-cuarto'), document.getElementById('dpto-cuarto'), document.getElementById('prov-cuarto'), document.getElementById('distrito-cuarto'));
});

document.getElementById("distrito-tercero").addEventListener("change", function() {
    listarColegios(document.getElementById('colegio-tercero'), document.getElementById('dpto-tercero'), document.getElementById('prov-tercero'), document.getElementById('distrito-tercero'));
});

document.getElementById("btn_step2_register").addEventListener("change", function() {
    BuscarCategoriaColegio(document.getElementById('colegio-solo').value, document.getElementById("mostrar-categoria-colegio"));
    getInfoPensiones();
});

document.getElementById("btn_step2_register").addEventListener("click", function() {
    BuscarCategoriaColegio(document.getElementById('colegio-solo').value, document.getElementById("mostrar-categoria-colegio"));
    getInfoPensiones();
});

document.getElementById("btn_step3_register").addEventListener("click", function() {
    BuscarCategoriaColegio(document.getElementById('colegio-quinto').value, document.getElementById("mostrar-categoria-colegio"));
    getInfoPensiones();
});

document.getElementById("menos").addEventListener("click", function() {
    var subtotal = parseInt(document.getElementById("matricula").innerHTML);
    var creditos = parseInt(document.getElementById("numcreditos").innerHTML) - 1;
    if (creditos >= 0) { //minino de creditos
        document.getElementById("numcreditos").innerHTML = creditos;
    }

    getInfoPensiones();
});

document.getElementById("mas").addEventListener("click", function() {
    var creditos = parseInt(document.getElementById("numcreditos").innerHTML) + 1;
    if (creditos >= 0) { //maximo de creditos
        document.getElementById("numcreditos").innerHTML = creditos;
    }
    getInfoPensiones();
});


var getInfoPensiones = function() {
    var JSONURL = urlBase + 'pensiones';
    var numcreditos = parseInt(document.getElementById('numcreditos').innerHTML);
    //var categoriaColegio = document.getElementById("mostrar-categoria-colegio").innerHTML;
    var categoriaColegio = categoriaColegioWS;
    var codigoCiclo = document.getElementById("cicloscbo").value;

    var data = new FormData();
    data.append('numcreditos', numcreditos);
    data.append('categoria', categoriaColegio);
    data.append('ciclo', codigoCiclo);

    var envioz = 'numcreditos:' + numcreditos + ' categoria:' + categoriaColegio + ' ciclo:' + codigoCiclo;
    console.log("Envio de " + envioz);

    var sss = new XMLHttpRequest();
    sss.open('POST', JSONURL, true);
    sss.onload = function() {
        // do something to response
        console.log(this.responseText);
        if (sss.status != 200) { // analyze HTTP status of the response
            console.log('error no data');
        } else { // show the result
            return setdatosPensiones(sss.response);
        }
    };
    sss.send(data);
};

var setdatosPensiones = function(res) {
    console.log("Respuesta" + res);
    res = JSON.parse(res);


    var numcreditos = parseInt(document.getElementById('numcreditos').innerHTML);
    var derecho_ensenanza = parseInt(res.derecho_ensenanza);
    var valor_credito = derecho_ensenanza / numcreditos;
    document.getElementById('categoriaval').innerHTML = valor_credito.toFixed(2);
    console.log(res);
    console.log(res.cuota_uno);
    console.log(res.cuota_uno);
    //  document.getElementById('cuota-monto-uno').innerHTML = res['cuota_uno'];
    //   $('.cuota-monto').html(res['cuota_otros'].toFixed(2));
    //   $('.fecha_vencimiento').html(res['fecha_vencimiento']);
    var calcularCuotaUno = parseFloat(res.cuota_uno);
    var calcularOtrasCuotas = 4 * parseFloat(res.cuota_otros);
    var totalCuotas = calcularCuotaUno + calcularOtrasCuotas;
    var calcularDerechoEnsenanza = derecho_ensenanza + parseFloat(res.derecho_matricula);
    document.getElementById('calcAmount').innerHTML = 'S/' + derecho_ensenanza.toFixed(2);
    document.getElementById('totalAmount').innerHTML = 'S/' + calcularDerechoEnsenanza.toFixed(2);
    document.getElementById('matricula').innerHTML = 'S/' + parseFloat(res.derecho_matricula).toFixed(2);
    // document.getElementById('monto_total').innerHTML = totalCuotas.toFixed(2);
    periodos = res.periodos;
    periodosCod = res.periodosCod;
    departamentos = res.departamentos;
    /*  provincias = res.provincias;
      distritos = res.distritos;
      colegios = res.colegios;
      */
    //console.table(distritos);
    // listarPeriodos();

    listarDptos(document.getElementById('dpto-solo'));
    listarDptos(document.getElementById('dpto-quinto'));
    listarDptos(document.getElementById('dpto-cuarto'));
    listarDptos(document.getElementById('dpto-tercero'));

    listarColegios(document.getElementById('colegio-solo'), document.getElementById('dpto-solo'), document.getElementById('prov-solo'), document.getElementById('distrito-solo'));
    listarColegios(document.getElementById('colegio-quinto'), document.getElementById('dpto-quinto'), document.getElementById('prov-quinto'), document.getElementById('distrito-quinto'));
    listarColegios(document.getElementById('colegio-cuarto'), document.getElementById('dpto-cuarto'), document.getElementById('prov-cuarto'), document.getElementById('distrito-cuarto'));
    listarColegios(document.getElementById('colegio-tercero'), document.getElementById('dpto-tercero'), document.getElementById('prov-tercero'), document.getElementById('distrito-tercero'));
};




var getInfoSimulador = function() {
    var JSONURL = urlBase + 'colegios';


    var xhr = new XMLHttpRequest();
    xhr.open('GET', JSONURL);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            console.log('error no data');
        } else { // show the result
            return setdatosSimulacion(xhr.response);
        }
        console.log(xhr);
    };

};

var setdatosSimulacion = function(res) {
    res = JSON.parse(res);

    periodos = res.periodos;
    periodosCod = res.periodosCod;
    departamentos = res.departamentos;
    provincias = res.provincias;
    distritos = res.distritos;
    colegios = res.colegios;
    //console.table(distritos);
    listarPeriodos();

    listarDptos(document.getElementById('dpto-solo'));
    listarDptos(document.getElementById('dpto-quinto'));
    listarDptos(document.getElementById('dpto-cuarto'));
    listarDptos(document.getElementById('dpto-tercero'));

    listarColegios(document.getElementById('colegio-solo'), document.getElementById('dpto-solo'), document.getElementById('prov-solo'), document.getElementById('distrito-solo'));
    listarColegios(document.getElementById('colegio-quinto'), document.getElementById('dpto-quinto'), document.getElementById('prov-quinto'), document.getElementById('distrito-quinto'));
    listarColegios(document.getElementById('colegio-cuarto'), document.getElementById('dpto-cuarto'), document.getElementById('prov-cuarto'), document.getElementById('distrito-cuarto'));
    listarColegios(document.getElementById('colegio-tercero'), document.getElementById('dpto-tercero'), document.getElementById('prov-tercero'), document.getElementById('distrito-tercero'));
};
getInfoSimulador();