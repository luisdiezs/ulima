
/* render form meetings days */
$(document).ready(function() {
    var form = $(".form-meetings-days");
    var form_block = $(".cont_inscrip");
    var thanks_block = $(".thanks");
    form.validate({
        ignore: ".ignore",
        rules: {
            nombres: {
                required: true,
            },
            apellidos: {
                required: true,
            },
            numdoc: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 8
            },
            telefono: {
                required: true,
                number: true,
                minlength: 7,
                maxlength: 9
            },
            grado: {
                required: true,
            },
            terminos: {
                required: true,
            },
        },
        messages: {
            nombres: "Este campo es requerido",
            apellidos: "Este campo es requerido",
            numdoc: {
                required: "Este campo es requerido",
                number: "Solo nÃºmeros",
                minlength: "MÃ­nimo 8 dÃ­gitos",
                maxlength: "MÃ¡ximo 8 dÃ­gitos"
            },
            telefono: {
                required: "Este campo es requerido",
                number: "Solo nÃºmeros",
                minlength: "MÃ­nimo 7 dÃ­gitos",
                maxlength: "MÃ¡ximo 9 dÃ­gitos"
            },
            grado: "Este campo es requerido",
            terminos: "Este campo es requerido"
        }

    });
    var deployform = function() {
        form_block.hide();
        thanks_block.show();
        setTimeout(function() {
            $(".cerrar").trigger("click");
            $(".modal_incrip").removeClass("modal_active");
        }, 5000);
        form[0].reset();
    };

    $(".btn-sender-meeting").click(function(event) {

        var t = $(this);
        if (form.valid()) {
            console.log("valid form meeting");
            var url = form.attr("data-service-submit");
            if (url != "" && url != null) {
                $.post(url, form.serialize(), function(response) {
                    console.log("sending ajax result: message");
                    deployform();
                });
            } else {
                console.log("by default:message");
                deployform();
            }


        } else {
            console.log("not valid form meeting");
        };
    });
    $(".cerrar").click(function() {
        form_block.show();
        thanks_block.hide();
    });

    var field_autocomplete = $('.colegios-list');
    var url_autocomplete = form.attr("data-service-autocomplete");
    console.log(url_autocomplete);


    var options = {
        url: url_autocomplete,
        getValue: "name",
        minLength: 0,
        list: {
            match: {
                enabled: true
            }
        },
        theme: "square"
    };

    field_autocomplete.easyAutocomplete(options);

    //RESTRICT FIELDS

    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            if (textbox) {
                textbox.addEventListener(event, function() {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                });
            }

        });
    }
    setInputFilter(document.querySelector('input[name="numdoc"]'), function(value) {
        return /^\d*$/.test(value);
    });
    setInputFilter(document.querySelector('input[name="telefono"]'), function(value) {
        return /^\d*$/.test(value);
    });
    console.log("dark");

    form.on('keyup blur change', function() {
        if (form.valid()) {
            console.log("fkg validÂ¡Â¡Â¡");
            $('.btn-sender-meeting').removeClass("btn-disabled");
        } else {
            console.log("fkg invalid!!!");
            $('.btn-sender-meeting').addClass("btn-disabled");
        }
    });

});
