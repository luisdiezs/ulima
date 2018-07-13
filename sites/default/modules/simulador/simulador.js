(function ($) {

Drupal.behaviors.simulador = {
  attach: function (context, settings) {

$(document).ready(function() {


    $('.modal').on('shown.bs.modal',function() {
        $('.modal,.modal-backdrop').addClass('toPrint');
        $('body').addClass('non-print');
    });
    // Remove classes
    $('.modal').on('hidden.bs.modal',function() {
        $('.modal,.modal-backdrop').removeClass('toPrint');
        $('body').removeClass('non-print');

        $('#search-box').val("");
    });


 
 

	/*simulador autocompeltado*/

 
   var  derechomatricula ;
   var  categoria ;
   var  valorcredito ;
   
    var primeracuota;
    var otrascuotas;
    var datatable ;


   
   $('.cerrar').on('click', function(){ 
$('#reportesimu').html("");
$('#reportesimu-1').html("");
});
   
   $('.scroller').on('click', function(){ 


$('#myModal').addClass("modalscroll");
$('#myModal2').addClass("modalscroll");
});
   
    $('.nonscroller').on('click', function(){ 


$('#myModal').removeClass("modalscroll");
$('#myModal2').removeClass("modalscroll");
});
   

   $("#search-box").autocomplete({
      source: "colegios_autocomplete",
      minLength: 2,
      select: function (event, ui) {
      //console.log(ui.item.key);
      //console.log(ui.item.value);
      $("#search-box").val(ui.item.value); // display the selected text
      $("#selectID").html(ui.item.key); // save selected id to hidden input
    }
    });



    $("#search-box-1").autocomplete({
      source: "colegios_autocomplete",
      minLength: 2,
      select: function (event, ui) {
      //console.log(ui.item.key);
      //console.log(ui.item.value);
      $("#search-box-1").val(ui.item.value); // display the selected text
      $("#selectID-1").html(ui.item.key); // save selected id to hidden input
    }
    });

        $("#search-box-2").autocomplete({
      source: "colegios_autocomplete",
      minLength: 2,
      select: function (event, ui) {
      //console.log(ui.item.key);
      //console.log(ui.item.value);
      $("#search-box-2").val(ui.item.value); // display the selected text
      $("#selectID-2").html(ui.item.key); // save selected id to hidden input
    }
    });

        $("#search-box-3").autocomplete({ 
      source: "colegios_autocomplete",
      minLength: 2,
      select: function (event, ui) {
      //console.log(ui.item.key);
      //console.log(ui.item.value);
      $("#search-box-3").val(ui.item.value); // display the selected text
      $("#selectID-3").html(ui.item.key); // save selected id to hidden input
    }
    });




       $("#search-box").focusout(function(){
        //console.log($("#selectID").text());
      $.ajax({
           url:'info_colegio',
          type:'POST',
          dataType:'json',
          data:{ nid :$("#selectID").text()}
      }).done(function(respuesta){
       
       // console.log(JSON.stringify(respuesta));
        categoria = respuesta.categoria;
        valorcredito = respuesta.valorcredito;
        derechomatricula = respuesta.derechomatricula;
        $("#categoria").text(categoria);
        $("#valorcredito").html(valorcredito);
        $('.num2').html("20");
       $('#derechoense').html(20 * valorcredito);
        //console.log(respuesta);
        
        $("#derechomatricula").html(respuesta.derechomatricula); 
        var derechoense = Number($('#derechoense').text());
        $("#totalciclo").html(Number(respuesta.derechomatricula) + derechoense); 
         console.log(JSON.stringify(respuesta.periodos));
         var  output ='<table width="320" border="0"><tbody><tr><td>Cuota</td><td>F. Emis.</td><td>F. Venc.</td><td class="fright">Total Emisión</td></tr>' ;
        jQuery.each(respuesta.periodos, function( i, val ) {

          if(i == 0) { 
        output  += '<tr><td>'+ (i +1) + '</td><td>'+ val['inicio'] + '</td><td>'+ val['final']+'</td><td id="cuota1"></td></tr>';
          } else {

           output  += '<tr><td>'+ (i +1) + '</td><td>'+ val['inicio'] + '</td><td>'+ val['final']+'</td><td class="cuotasdetalle"></td></tr>'; 
          }
 

            });
        primeracuota = (4*valorcredito) + Number(derechomatricula);
        otrascuotas = (20-4) * (valorcredito/4);  //toFixed(2)

        $("#reportesimu").html(output);
        $("#cuota1").html(primeracuota.toFixed(2));
        $(".cuotasdetalle").html(otrascuotas.toFixed(2));
            output ='';
      });
    });
            




      $(".getdata").on('click', function(){ 
        //console.log($("#selectID").text());
      $.ajax({
           url:'info_colegios',
          type:'POST',
          dataType:'json',
          data:{ nid1 :$("#selectID-1").text(),nid2 :$("#selectID-2").text(),nid3 :$("#selectID-3").text()}
      }).done(function(respuesta){
       
        console.log(JSON.stringify(respuesta));
         console.log(respuesta);

        categoria = respuesta.categoria;
        valorcredito = respuesta.valorcredito;
        derechomatricula = respuesta.derechomatricula;
        $("#categoria-1").text(categoria);
        $("#valorcredito-1").html(valorcredito);
        $('.num2-1').html("20");
       $('#derechoense-1').html(20 * valorcredito);
        //console.log(respuesta);
        
        $("#derechomatricula-1").html(respuesta.derechomatricula); 
        var derechoense = Number($('#derechoense-1').text());
        $("#totalciclo-1").html(Number(respuesta.derechomatricula) + derechoense); 
        
         var  output ='<table width="320" border="0"><tbody><tr><td>Cuota</td><td>F. Emis.</td><td>F. Venc.</td><td class="fright">Total Emisión</td></tr>' ;
        jQuery.each(respuesta.periodos, function( i, val ) {

          if(i == 0) { 
        output  += '<tr><td>'+ (i +1) + '</td><td>'+ val['inicio'] + '</td><td>'+ val['final']+'</td><td id="cuota1-1"></td></tr>';
          } else {

           output  += '<tr><td>'+ (i +1) + '</td><td>'+ val['inicio'] + '</td><td>'+ val['final']+'</td><td class="cuotasdetalle-1"></td></tr>'; 
          }
 

            });
        primeracuota = (4*valorcredito) + Number(derechomatricula);
        otrascuotas = (20-4) * (valorcredito/4);  //toFixed(2)

        $("#reportesimu-1").html(output);
        $("#cuota1-1").html(primeracuota.toFixed(2));
        $(".cuotasdetalle-1").html(otrascuotas.toFixed(2));
            output ='';
      });
    });
     
    

   


   $('.menos').on('click', function(){ 
    var numerio = Number($('.num').text());
    
    if(numerio>0){ 
     
   $('.num').html(numerio  - 1);
   $('.num2').html($('.num').text());
    var newnumerio = Number($('.num').text());
    var credito = Number($('#valorcredito').text());

   $('#derechoense').html(newnumerio * credito);
  var derechoense = Number($('#derechoense').text());
  var derechomatri = Number($('#derechomatricula').text());

         primeracuota = (4*credito) + Number(derechomatri);
         otrascuotas = (newnumerio -4) * (credito/4);  //toFixed(2)
        $("#cuota1").html(primeracuota.toFixed(2));
        $(".cuotasdetalle").html(otrascuotas.toFixed(2));

 $("#totalciclo").html(derechomatri + derechoense);

     }
     });

    $('.mas').on('click', function(){ 
   var numerio = Number($('.num').text());
     
   $('.num').html(numerio + 1);
   $('.num2').html($('.num').text());

    var newnumerio = Number($('.num').text());
    var credito = Number($('#valorcredito').text());

   $('#derechoense').html(newnumerio * credito);
    var derechoense = Number($('#derechoense').text());
     var derechomatri = Number($('#derechomatricula').text());

         primeracuota = (4*credito) + Number(derechomatri);
         otrascuotas = (newnumerio -4) * (credito/4);  //toFixed(2)
        $("#cuota1").html(primeracuota.toFixed(2));
        $(".cuotasdetalle").html(otrascuotas.toFixed(2));

     $("#totalciclo").html(derechomatri + derechoense);

     });



                   $('.menos-1').on('click', function(){ 
    var numerio = Number($('.num-1').text());
    
    if(numerio>0){ 
     
   $('.num-1').html(numerio  - 1);
   $('.num2-1').html($('.num-1').text());
    var newnumerio = Number($('.num-1').text());
    var credito = Number($('#valorcredito-1').text());

   $('#derechoense-1').html(newnumerio * credito);
  var derechoense = Number($('#derechoense-1').text());
  var derechomatri = Number($('#derechomatricula-1').text());

         primeracuota = (4*credito) + Number(derechomatri);
         otrascuotas = (newnumerio -4) * (credito/4);  //toFixed(2)
        $("#cuota1-1").html(primeracuota.toFixed(2));
        $(".cuotasdetalle-1").html(otrascuotas.toFixed(2));

 $("#totalciclo-1").html(derechomatri + derechoense);

     }
     });

    $('.mas-1').on('click', function(){ 
   var numerio = Number($('.num-1').text());
     
   $('.num-1').html(numerio + 1);
   $('.num2-1').html($('.num-1').text());

    var newnumerio = Number($('.num-1').text());
    var credito = Number($('#valorcredito-1').text());

   $('#derechoense-1').html(newnumerio * credito);
    var derechoense = Number($('#derechoense-1').text());
     var derechomatri = Number($('#derechomatricula-1').text());

         primeracuota = (4*credito) + Number(derechomatri);
         otrascuotas = (newnumerio -4) * (credito/4);  //toFixed(2)
        $("#cuota1-1").html(primeracuota.toFixed(2));
        $(".cuotasdetalle-1").html(otrascuotas.toFixed(2));

     $("#totalciclo-1").html(derechomatri + derechoense);

     });


/*simulador */

})


    
  }

};

}(jQuery));
