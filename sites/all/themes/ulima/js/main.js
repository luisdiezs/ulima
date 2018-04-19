(function ($) {
/**
* @file
* Javascript, modifications of DOM.
*
* Manipulates links to include jquery load funciton
*/

Drupal.behaviors.ulima = {
  attach: function (context, settings) {
  // Capture barrio-modal class generated by Skinr.
  // This triggers block as modal.


  $( '<div class="block-content modal-body"></div>' ).insertAfter( ".modal-header" );
  $("#webform-client-form-15").appendTo(".block-content.modal-body");



          var selector = '.main-container  .carreras  li';

            $(selector).on('click', function(){
                  if (jQuery(this).hasClass('active')) {
                   $(this).removeClass('active');
                  }
                  else {
                   $(this).addClass('active');
                }
          
        });

    $('#btn-block-webform-client-block-15 button').on('click', function(){

       var tab_attribs = [];
       $('.carreras ul li.active').each(function () {
       tab_attribs.push( jQuery(this).attr("data-id") );
         });
     var stte = tab_attribs.join("|");

     $('#edit-submitted-charlas').val(stte);
   
});
    jQuery("input[name='field_tipo_value']:checked").parent().addClass("active"); 
    $('#edit-field-tipo-value-wrapper .form-item-field-tipo-value label').on('click', function(){
          
              $('#edit-field-tipo-value-wrapper .form-item-field-tipo-value label').removeClass('active');
                 
                   $(this).addClass('active');
                
      });

    //$('#edit-field-tipo-value-wrapper .form-item-field-tipo-value:nth-child(2) label').addClass('active');
    //$('#edit-field-tipo-value-particular').attr('checked', true);
    $("#edit-field-tipo-value-wrapper input:radio:checked").next('label').addClass("checked");
     $('.buscador-colegio input#edit-title').attr("placeholder", "Escribe el nombre de tu colegio");

    $('.buscador-colegio .view-content').addClass("c_ingresar");

// Load WOW.js on non-touch devices
var isPhoneDevice = "ontouchstart" in document.documentElement;
jQuery(document).ready(function() {
    if (isPhoneDevice) {
        //mobile
    } else {
        //desktop               
        // Initialize WOW.js
        wow = new WOW({
            offset: 50
        })
        wow.init();
    }
});



$('span.hamb').click(function (e) {
  $('body').toggleClass('secondary-active');
  $('.hamb').toggleClass('active');
  e.stopPropagation();
  e.preventDefault();
});




/* sticky */
$(document).ready(function() {sticker();});
$(document).scroll(function() {sticker();});

function sticker() {
var header =  jQuery('body');
var distancia_limit_1 = 100;
var distancia_limit_2 = 200;
var distancia_limit_3 = 600;
  
if (!jQuery('.ltie9').length) {
var distancia_scroll = jQuery(document).scrollTop();
} else {
var distancia_scroll = jQuery('html, body').scrollTop();
}
  
if ( distancia_scroll > distancia_limit_1 ) {
header.addClass('sticker-1');
} else {
header.removeClass('sticker-1'); 
}
if ( distancia_scroll > distancia_limit_2 ) {
header.addClass('sticker-2');
} else {
header.removeClass('sticker-2'); 
}
if ( distancia_scroll > distancia_limit_3 ) {
header.addClass('sticker-3');
} else {
header.removeClass('sticker-3'); 
}
};


    
  }

}

}(jQuery));




