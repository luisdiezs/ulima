import { tns } from '../node_modules/tiny-slider/src/tiny-slider'


function ExtraCrispy() {
    //LINKING COMBO 
    this.attribute_option_A_linking_combo = "value";
    this.attribute_option_B_linking_combo = "data-url";
    this.selector_form_linking_combo = "#formSelectCarrera";
    this.selector_sender_linking_combo = "input[type='submit']";
    this.selector_option_linking_combo = ".same-as-selected";

    //SERVICES 
    this.service_url_prefix = "http://165.227.165.221";
    this.service_path_galleries = "/galeria";
    this.service_path_suscriptions = "/api/suscribete";
    this.service_path_agreements = "/convenio";
    this.service_key_postfix = "?term=";



    //SENDING FORM REMOTE
    this.selector_form_sending_suscription = "#form-suscribe";
    this.selector_sender_sending_suscription = "#btn_suscripte";

    //LOADING COMBO REMOTE
    this.selector_box_agreements = ".cont_buscador_mapa";
    this.selector_item_combo_agreements = ".select-items > div";
    this.selector_combo_agreements = "#select_country_convenios";
    this.selector_option_combo_agreements = ".same-as-selected";
    this.selector_modal_agreements = ".cont_buscador_mapa";
    this.class_modal_active_agreements = "modal_active";

    //INITIALIZATION
    this.init();
}


ExtraCrispy.prototype.redirectionLink = function(element) {
    var self = this;
    var link = element.getAttribute(self.attribute_option_A_linking_combo);
    window.location.href = link;
    console.log("linking");
}

ExtraCrispy.prototype.sendSelection = function(button) {
    var self = this;
    button.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("clicking");
        var form = document.querySelector(self.selector_form_linking_combo);
        console.log(form);
        if (form) {
            var selected = form.querySelector(self.selector_option_linking_combo);


            console.log(selected);
            if (selected) {
                var url = selected.getAttribute(self.attribute_option_A_linking_combo);
                console.log(url)
                if (url) {
                    self.redirectionLink(selected);
                }

            }
        }
    });
}

ExtraCrispy.prototype.redirectionLink = function(element) {
    var self = this;
    var link = element.getAttribute(self.attribute_option_A_linking_combo);
    window.location.href = link;
    console.log("linking");
}

ExtraCrispy.prototype.LinkingCombo = function() {
    console.log("linking combo");
    var self = this;
    console.log(self.selector_form_linking_combo);
    var form = document.querySelector(self.selector_form_linking_combo);
    console.log(form);
    if (form) {
        var button = form.querySelector(self.selector_sender_linking_combo);
        if (button) {
            console.log(button);
            self.sendSelection(button);
            console.log("reading");
        }

    }
}

ExtraCrispy.prototype.serializeForm = function(element) {

    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < element.elements.length; i++) {

        var field = element.elements[i];

        // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
        if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

        // If a multi-select, get all selections
        if (field.type === 'select-multiple') {
            for (var n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
            }
        }

        // Convert field data to a query string
        else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
            console.log(field);
            console.log("value=" + encodeURIComponent(field.value));
            serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
        }
    }

    return serialized.join('&');

};
ExtraCrispy.prototype.RemoteService = function(url, method, value, callback) {



    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
            try {
                var data = JSON.parse(xhr.responseText);
            } catch (err) {
                console.log(err.message + " in " + xhr.responseText);
                return;
            }
            callback(data);
        }
    };

    xhr.open(method, url, true);
    if (method == 'POST') {
        xhr.send(value);
    } else if (method == 'GET') {
        xhr.send();
    }

}


ExtraCrispy.prototype.SendingSuscription = function() {

    console.log("sending remote form");
    var self = this;
    console.log(self.selector_form_linking_combo);
    var form = document.querySelector(self.selector_form_sending_suscription);
    console.log(form);
    if (form) {

        var url = self.service_url_prefix + self.service_path_suscriptions;
        console.log(url);
        var button = form.querySelector(self.selector_sender_sending_suscription);
        if (button) {
            console.log(button);
            form.addEventListener("submit", function(e) {
                e.preventDefault();
                var data = self.serializeForm(form);
                console.log(data);
                console.log("clicking remote");
                self.RemoteService(url, 'POST', data, function() {
                    console.log("posting!");
                });
                console.log("reading remote");
            });
        }

    }


}

ExtraCrispy.prototype.LoadingModalAgreements = function(data, type) {

        var self = this;

        var fill_listing = function(title, listing, data) {

            if (data) {
                if (title) {
                    title.innerHTML = data.titulo;
                }

                if (listing) {
                    listing.innerHTML = "";
                    var list = data.data;
                    for (var i = 0; i < list.length; i++) {
                        var item = '<li><a href="' + list[i].name + '">' + list[i].name + '</a></li>';
                        listing.insertAdjacentHTML('beforeend', item);
                    }
                }
            }


        };

        console.log("data loaded");
        console.log(data);
        console.log(data.titulo);
        console.log("type: " + type);
        if (type == "modal") {
            var modal = document.querySelector(".modal_incrip.msn_convenio");
            var title = modal.querySelector("h2");
            var listing = modal.querySelector("ul");
            var button = modal.querySelector(".cerrar");

            console.log(modal);
            console.log(title);
            console.log(listing);

            fill_listing(title, listing, data);



            modal.classList.add("animated");
            console.log("animated");
            modal.setAttribute("style", "display:flex");


            modal.classList.remove("fadeIn");
            modal.classList.add("fadeIn");

            button.addEventListener("click", function(e) {
                e.preventDefault();

                modal.classList.add("fadeOut");


                modal.classList.remove("fadeIn");
                modal.classList.remove("fadeOut");
                modal.setAttribute("style", "display:none");




            });

        } else if (type == "content") {
            var content = document.querySelector(".lit_paises");
            var title = content.querySelector("h3");
            var listing = content.querySelector("ul");

            console.log(content);
            console.log(title);
            console.log(listing);
            fill_listing(title, listing, data);
        }

    }
    //

ExtraCrispy.prototype.LoadingComboAgreements = function() {
    /*
    this.selector_box_agreements = ".cont_buscador_mapa";
    this.selector_item_combo_agreements = ".select-items > div";
    this.selector_combo_agreements = "#select_country_convenios";
    this.selector_option_combo_agreements = ".same-as-selected";
    this.selector_modal_agreements = ".cont_buscador_mapa";
    this.class_modal_active_agreements = "modal_active";
    */
    console.log("sending remote form");
    var self = this;
    console.log(self.selector_box_agreements);
    var box_combo = document.querySelector(".cont_buscador_mapa .custom-select");
    console.log(box_combo);
    if (box_combo) {

        var combo = box_combo.querySelector(".select-items");
        console.log(combo);
        if (combo) {
            var items = combo.getElementsByTagName("div");
            console.log(items.length);
            for (var i = 0; i < items.length; i++) {
                const element = items[i];
                element.addEventListener("click", function(e) {
                    e.preventDefault();
                    var value = (this.getAttribute("value")).toString().toLowerCase();

                    if (document.querySelector("body").classList.contains("test")) {
                        var url = "tmp/" + value + ".json"; //self.service_url_prefix + self.service_path_agreements + self.service_key_postfix + value;
                    } else {
                        var url = self.service_url_prefix + self.service_path_agreements + self.service_key_postfix + value;
                    }
                    console.log(url);
                    console.log(combo);
                    console.log("loading remote item");
                    self.RemoteService(url, 'GET', null, function(data) {
                        console.log(data);

                        var dom = (document.compatMode === "CSS1Compat") ? document.documentElement : document.body;
                        var width = dom.clientWidth;
                        if (width > 650) {
                            self.LoadingModalAgreements(data, "modal");
                        } else {
                            self.LoadingModalAgreements(data, "content");
                        }

                    });
                    console.log("reading remote 2");
                });
            }


        }

    }
}


ExtraCrispy.prototype.LoadingModalGalleries = function() {

    var self = this;
    var selector_modal = ".modal-img-infra";
    var modal = document.querySelector(selector_modal);
    if (modal) {
        modal.innerHTML = "";
        var tmpl = '<div class="layer_dark"></div><div><div class="cont_galery_pu carousel"><div class="gale_pu list-items" with-dots with-buttons countitem-mob="1" countitem-desk="1" infinite="1"></div><div class="custom-dots-container"><ul class="custom-dots"></ul></div></div><span class="cerrar"><a href=""><img src="img/png/cerrar.png" /></a></span></div>';
        modal.innerHTML = tmpl;


        var gallery_list = ".gale_pu.list-items";
        var gallery_thumbs = ".custom-dots";

        var selector_button_open = ".remote-gallery-modal";
        var selector_button_close = ".cerrar";

        var button_close = modal.querySelector(selector_button_close);

        if (!button_close.classList.contains("rendered")) {
            button_close.classList.add("rendered");
            button_close.addEventListener("click", function(e) {
                e.preventDefault();
                modal.classList.remove("modal_active");
            });
        }


        var all_buttons_open = document.querySelectorAll(selector_button_open);
        for (var k = 0; k < all_buttons_open.length; k++) {
            var button_open = all_buttons_open[k];
            button_open.addEventListener("click", function(e) {
                e.preventDefault();
                modal.classList.add("modal_active");
                var value = this.getAttribute("data-term");
                console.log(value);
                if (document.querySelector("body").classList.contains("test")) {
                    var url = "tmp/" + value + ".json"; //self.service_url_prefix + self.service_path_agreements + self.service_key_postfix + value;
                } else {
                    var url = self.service_url_prefix + self.service_path_galleries + self.service_key_postfix + value;
                }
                self.RemoteService(url, 'GET', null, function(data) {
                    console.log(data);
                    self.LoadingModalDataGallery(data);

                });
            });

        }
    }

}


ExtraCrispy.prototype.LoadingModalDataGallery = function(response) {
    var modal = document.querySelector(".modal-img-infra");

    var listing1 = modal.querySelector(".gale_pu.list-items");
    var listing2 = modal.querySelector(".custom-dots");

    console.log(modal);

    console.log(listing1);
    console.log(listing2);
    console.log("data loaded 2");
    console.log(response);



    listing1.innerHTML = "";
    listing2.innerHTML = "";
    var list = response.data;
    console.log(list);
    var list0 = response.data[0].image;
    for (var i = 0; i < list.length; i++) {
        var item = '<div class="item-note"><img src="' + list[i].image + '" style="width: 100%" /></div>';
        listing1.insertAdjacentHTML('beforeend', item);
        var thumb = '<li><img src="' + list[i].image + '"/><li>';
        listing2.insertAdjacentHTML('beforeend', thumb);
    }

    var controlsCustom = listing1,
        containerDotsCustom = listing2,

        slider = tns({
            container: listing1,
            slideBy: (listing1.hasAttribute('onlyone')) ? 1 : 'page',
            speed: 300,
            autoplay: listing1.hasAttribute('autoplay'),
            autoplayButtonOutput: false,
            autoplayTimeout: 4000,
            controls: listing1.hasAttribute('with-buttons'),
            loop: listing1.hasAttribute('infinite'),
            mouseDrag: true,
            nav: listing1.hasAttribute('with-dots'),
            navPosition: (listing1.hasAttribute('dotstop')) ? 'top' : 'bottom',
            navContainer: (containerDotsCustom) ? containerDotsCustom : false,
            navAsThumbnails: (containerDotsCustom) ? true : false,
            responsive: {
                '320': {
                    items: listing1.hasAttribute('countitem-mob') ? listing1.getAttribute('countitem-mob') : 1
                },
                '1024': {
                    items: listing1.hasAttribute('countitem-desk') ? listing1.getAttribute('countitem-desk') : 1
                }
            }
        })
}

ExtraCrispy.prototype.MeetingSchedule = function() {
    var self = this;
    var tmpl_error = '<div class="message-error"><p class="help-block error"></p></div>';
    var meeting_selector = ".charlasxcarrera";
    var meeting_element = document.querySelector(meeting_selector);
    if (meeting_element) {
        console.log("form meetings schedule");
        var meeting_of_day_selector = ".itemdiacharla";
        var all_meeting_of_day_element = document.querySelectorAll(meeting_of_day_selector);
        console.log("all meeet days :" + all_meeting_of_day_element.length);
        if (all_meeting_of_day_element.length) {
            all_meeting_of_day_element.forEach(function(item) {
                //console.log(item);
                self.SpecialCombo(item);
                //self.ValidateThisDay(item);

            })
        }
    }
}
ExtraCrispy.prototype.SpecialCombo = function(element) {
    var self = this;
    var combo_selector = ".custom-select";
    var combo_option_selector = ".select-items > div";
    var combo_option_selected_selector = ".same-as-selected"; //

    var combos = element.querySelectorAll(combo_selector);
    if (combos.length) {

        combos.forEach(function(combo) {
            var all_options = combo.querySelectorAll(combo_option_selector);
            console.log(all_options.length);
            if (all_options.length) {

                all_options.forEach(function(item, i) {
                    //console.log(item);
                    item.setAttribute("data-index", i);
                    console.log(i);

                })
            }

        })


    }

};
ExtraCrispy.prototype.ValidateThisDay = function(element) {
    var self = this;
    var combo_selector = ".select-items";
    var combo_option_selector = ".select-items div";
    var combo_option_selected_selector = ".same-as-selected";
    self.ValidateAllDays();
};
ExtraCrispy.prototype.ValidateAllDays = function() {

};


ExtraCrispy.prototype.init = function() {
    var selector_form_linking_combo = "#formSelectCarrera";

    var form_linking_combo = document.querySelector(selector_form_linking_combo);

    if (form_linking_combo) {
        this.LinkingCombo();
        this.SendingSuscription();
    }

    var selector_combo_agreements = ".cont_buscador_mapa";
    var combo_agreements = document.querySelector(selector_combo_agreements);
    if (combo_agreements) {
        this.LoadingComboAgreements();
    }


    var selector_modal = ".modal-img-infra";
    var modal = document.querySelector(selector_modal);
    console.log("modal");
    console.log(modal);
    if (modal) {
        this.LoadingModalGalleries();
        console.log("")
    }
    var selector_schedule = ".charlasxcarrera";
    var schedule = document.querySelector(selector_schedule);
    if (schedule) {
        this.MeetingSchedule();
    }

    console.log("init")
}



export default ExtraCrispy;