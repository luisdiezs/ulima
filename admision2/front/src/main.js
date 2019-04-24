import UICountdown from '../lib/UICountdown'
/*import UICarousel from '../lib/UICarousel'*/
import UIAccordion from '../lib/UIAccordion'
import Validate from 'validate.js'
import { tns } from '../node_modules/tiny-slider/src/tiny-slider'
//import ExtraCrispy from '../lib/ExtraCrispy'

document.addEventListener("DOMContentLoaded", function(event) {

    var URL_FETCH_COUNTRY = '',
        URL_AUTOCOMPLETE = 'http://165.227.165.221/colegio'

    initAccordion()
    initCountdown()
    initCarousel()
    initValidateForm()

    var btnSearch = document.querySelectorAll('.btn_src'),
        btnCloseSearch = document.querySelector('.close_src'),
        btnOpenModal = document.querySelector('.btn_ir_modal span a'),
        btnCloseModal = document.querySelector('.cerrar a'),
        modalInscription = document.querySelector('.modal_incrip'),
        layerBackground = document.querySelector('.layer_dark'),
        selectConvenios = document.querySelector('#select_country_convenios'),
        btnsInfraestructuraMob = document.querySelectorAll('.carrusel_infra_m .list-items .item-note'),
        btnsInfraestructura = document.querySelectorAll('.campusdeportivos .area_ul1'),

        btnMobileMenu = document.querySelector('.hamb'),
        btnMobileMenuClose = document.querySelector('.close_src_menu'),
        menuNavMobile = document.querySelector('#menu-nav')

    var boxSearch = document.querySelector('.r_busqueda')
    btnSearch.forEach(function(btn) {
        btn.addEventListener('click', function(evt) {
            boxSearch.classList.toggle('boxSearchShow')
        })
    })

    if (boxSearch) {
        boxSearch.addEventListener('keypress', function(evt) {
            var key = evt.keyCode || evt.charCode || evt.which
            if (key == 27) boxSearch.classList.toggle('boxSearchShow')
            if (key == 13) {
                var btnInputSearch = boxSearch.querySelector('.srch_btn')
                var evento = new Event('click')
                btnInputSearch.dispatchEvent(evento)
            }
        })
    }

    if (btnOpenModal) {
        btnOpenModal.addEventListener('click', function(evt) {
            evt.preventDefault()
            if (evt.target.id == 'btn_insCharla') {
                var selects = document.querySelectorAll('.select-horario'),
                    someFill = false
                selects.forEach(function(item) {
                    if (item.value != '') someFill = true
                })
                var msg = document.querySelector('.message-error-carreras')
                if (someFill) {
                    modalInscription.classList.add('modal_active')
                    msg.textContent = ''
                } else {
                    var msg = document.querySelector('.message-error-carreras')
                    msg.textContent = 'Asegurese de seleccionar un horario.'
                }
            } else modalInscription.classList.add('modal_active')
        })
    }
    if (modalInscription) {
        btnCloseModal.addEventListener('click', closeModal)
        layerBackground.addEventListener('click', closeModal)
        var sec_slider = document.querySelectorAll('.cont_galery_pu')

        if (sec_slider) {
            sec_slider.forEach(function(sli) {
                var btnNextSli = sli.querySelector('.tns-controls button[data-controls="next"]'),
                    btnPrevSli = sli.querySelector('.tns-controls button[data-controls="prev"]'),
                    listDots = sli.querySelector('.custom-dots'),
                    onlyDots = listDots.querySelectorAll('li'),
                    totalDots = listDots.querySelectorAll('li').length,
                    widthItem = 0,
                    initPos = 0,
                    containerMask = listDots.parentNode

                btnNextSli.addEventListener('click', function() {
                    var widthDotSli = sli.querySelector('.custom-dots li').offsetWidth,
                        elem = sli.querySelector('.custom-dots li:not(.tns-nav-active)'),
                        positionInitContainer = containerMask.getBoundingClientRect().x,
                        positionEndContainer = positionInitContainer + containerMask.getBoundingClientRect().width,
                        moved = Moved(sli.querySelector('.custom-dots li.tns-nav-active'), positionInitContainer, positionEndContainer, 'R')

                    widthItem = widthDotSli + (parseInt(window.getComputedStyle(elem).marginLeft) * 2)
                    if (moved) {
                        var distMinDisplacement = getMinDistance(),
                            newPos = initPos - distMinDisplacement,
                            restWidthList = (widthItem * totalDots) - Math.abs(newPos)

                        if (restWidthList < containerMask.offsetWidth) newPos = initPos - restWidthList
                        if (restWidthList == 0) newPos = 0
                        translateX(newPos)
                    }
                    var videoIframe = modalInscription.querySelector('.video-iframe')
                    if (videoIframe) {
                        stopAllVideos()
                    }

                })

                btnPrevSli.addEventListener('click', function() {
                    var widthDotSli = sli.querySelector('.custom-dots li').offsetWidth,
                        elem = sli.querySelector('.custom-dots li:not(.tns-nav-active)'),
                        positionInitContainer = containerMask.getBoundingClientRect().x,
                        positionEndContainer = positionInitContainer + containerMask.getBoundingClientRect().width,
                        elemActive = sli.querySelector('.custom-dots li.tns-nav-active')

                    var nav = (elemActive.getAttribute('data-nav') - 1 == -1) ? sli.querySelector('.custom-dots li:last-child').getAttribute('data-nav') : elemActive.getAttribute('data-nav') - 1
                    var moved = Moved(sli.querySelector('.custom-dots li[data-nav="' + nav + '"]'), positionInitContainer, positionEndContainer, 'L')
                    widthItem = widthDotSli + (parseInt(window.getComputedStyle(elem).marginLeft) * 2)
                    if (moved) {
                        var distMinDisplacement = getMinDistance(),
                            newPos = initPos + distMinDisplacement

                        if (initPos <= 0 && Math.abs(initPos) < containerMask.offsetWidth) newPos = 0
                        if (initPos == 0) console.log('ir al final')
                        translateX(newPos)
                        initPos = newPos
                    } else if (initPos == 0 && elemActive.getAttribute('data-nav') == 0) {
                        var newPos = -(((widthItem * (totalDots - 1)) + (elemActive.offsetWidth * 1.3)) - containerMask.getBoundingClientRect().width)
                        translateX(newPos)
                        initPos = newPos
                    }

                    var videoIframe = modalInscription.querySelector('.video-iframe')
                    if (videoIframe) {
                        stopAllVideos()
                    }
                })


                onlyDots.forEach(function(item, index) {
                    item.addEventListener('click', function() {
                        console.log("miau!");
                        var videoIframe = modalInscription.querySelector('.video-iframe')
                        if (videoIframe) {
                            stopAllVideos()
                        }
                    })
                })


                function Moved(currentItem, initLimit, endLimit, dir) {
                    var posInitX = currentItem.getBoundingClientRect().x,
                        posEndX = posInitX + (currentItem.getBoundingClientRect().width + (parseInt(window.getComputedStyle(currentItem).marginLeft) * 2))
                    return ((dir == 'R' && posEndX > endLimit) || (dir == 'L' && posInitX < initLimit)) ? true : false
                }

                function getMinDistance() { return getElementVisibles() * widthItem; }

                function getElementVisibles() {
                    var widthContainer = containerMask.offsetWidth
                    var numElementsVisible = (widthItem > widthContainer) ? 1 : Math.floor(widthContainer / widthItem)
                    return numElementsVisible
                    j
                }

                function translateX(newPos) {
                    initPos = newPos
                    listDots.style.cssText = 'transform: translate3d(' + newPos + 'px, 0px, 0px)'
                    console.log("wuf!")
                }
            });
        }

        var videoPopup = document.querySelector('.video_donde .cont_video'),
            listVideos = document.querySelectorAll('.cont_donde .test_egre .list-items .item-note')
        if (videoPopup) {
            videoPopup.addEventListener('click', function(evt) {
                evt.preventDefault()
                modalInscription.classList.add('modal_active')
                console.log("beee!");
            })
        }
        if (listVideos.length > 0) {
            listVideos.forEach(function(item, index) {
                item.addEventListener('click', function(evt) {
                    var currentVideoAdm = modalInscription.querySelector('.custom-dots li[data-nav="' + index + '"]')
                    var event = document.createEvent('HTMLEvents')
                    event.initEvent('click', true, true)
                    currentVideoAdm.dispatchEvent(event)
                    modalInscription.classList.add('modal_active')
                    console.log("quack!");
                })
            })
        }

        var listVideosULima = document.querySelectorAll('.cont-video .area_ul1'),
            modalInsVideo = document.querySelector('.modal-video')
            /*if (videoPopupULima > 0) {
              videoPopupULima.forEach( item => {
                item.addEventListener('click', function (evt) {
                  evt.preventDefault()
                  modalInscription.classList.add('modal_active')
                })
              })
            }*/
        if (listVideosULima.length > 0) {
            modalInsVideo.querySelector('.cerrar a').addEventListener('click', closeModalVideo)
            modalInsVideo.querySelector('.layer_dark').addEventListener('click', closeModalVideo)

            function closeModalVideo(evt) {
                evt.preventDefault()
                modalInsVideo.classList.remove('modal_active')
                var videoIframe = modalInsVideo.querySelector('.video-iframe')
                if (videoIframe) {
                    stopAllVideos()
                }
            }

            listVideosULima.forEach(function(item, index) {
                item.addEventListener('click', function(evt) {
                    evt.preventDefault()
                    console.log("pug!")
                    var currentVideo = modalInsVideo.querySelector('.modal-video .custom-dots li[data-nav="' + index + '"]')
                    var event = document.createEvent('HTMLEvents')
                    event.initEvent('click', true, true)
                    currentVideo.dispatchEvent(event)
                    modalInsVideo.classList.add('modal_active')
                    var videoIframe = modalInscription.querySelector('.video-iframe')
                    if (videoIframe) {
                        stopAllVideos()
                    }
                })
            })
        }
    }
    if (selectConvenios) selectConvenios.addEventListener('change', getDataCountry)

    if (btnsInfraestructura && btnsInfraestructuraMob && window.location.pathname.indexOf('/infraestructura') != -1) {
        btnsInfraestructura.forEach(function(item) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                modalInscription.classList.add('modal_active')
            })
        })
        btnsInfraestructuraMob.forEach(function(item) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                modalInscription.classList.add('modal_active')
            })
        })

        var areasUl = document.querySelectorAll('#areas_ul .list-items .item-note')
        areasUl.forEach(function(area) {
            var optionsArea = area.querySelectorAll('figure ul li')
            optionsArea.forEach(function(option) {
                option.querySelector('a').addEventListener('click', function(evt) {
                    evt.preventDefault()
                    modalInscription.classList.add('modal_active')
                })
            })
        })

        var btnsImgInfra = document.querySelectorAll('.carousel-infra-pic .list-items .item-note')
        btnsImgInfra.forEach(function(btn, index) {
            btn.querySelector('figure a').addEventListener('click', function(evt) {
                evt.preventDefault()
                var modalImg = document.querySelector('.modal-img')
                modalImg.querySelector('.cerrar a').addEventListener('click', closeModalImg)
                modalImg.querySelector('.layer_dark').addEventListener('click', closeModalImg)

                function closeModalImg(evt) {
                    evt.preventDefault();
                    modalImg.classList.remove('modal_active');
                }

                var currentImg3 = modalImg.querySelector('.custom-dots li[data-nav="' + index + '"]')
                var event = document.createEvent('HTMLEvents')
                event.initEvent('click', true, true)
                currentImg3.dispatchEvent(event)

                modalImg.classList.add('modal_active')
            })
        })
    }
    if (btnMobileMenu) {
        btnMobileMenu.addEventListener('click', function() {
            menuNavMobile.classList.add('menu_on')
            document.body.style.overflowY = 'hidden'
            btnMobileMenu.style.display = 'none'
            btnMobileMenuClose.style.display = 'inline-block'
            document.querySelector('.src_movil').style.display = 'none'
        })
        btnMobileMenuClose.addEventListener('click', function(evt) {
            evt.preventDefault()
            menuNavMobile.classList.remove('menu_on')
            document.body.style.overflowY = 'auto'
            btnMobileMenu.style.display = 'inline-block'
            btnMobileMenuClose.style.display = 'none'
            document.querySelector('.src_movil').style.display = 'block'
        })
    }

    var sec_slider_dep = document.querySelector('.tallers_dep'),
        sec_slider_uli = document.querySelector('.tallers_ulima'),
        sec_slider_convenios = document.querySelector('.galeria-convenio')

    if (sec_slider_dep && sec_slider_uli) {
        var listItemsDep = sec_slider_dep.querySelectorAll('.carousel .list-items .item-note')

        listItemsDep.forEach(function(item, index) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                var modalImgDep = document.querySelector('.modal-img-taldep')
                modalImgDep.querySelector('.cerrar a').addEventListener('click', closeModalImgDep)
                modalImgDep.querySelector('.layer_dark').addEventListener('click', closeModalImgDep)

                function closeModalImgDep(evt) {
                    evt.preventDefault();
                    modalImgDep.classList.remove('modal_active');
                }

                var currentImgDep = modalImgDep.querySelector('.cont_galery_pu_modal .custom-dots li[data-nav="' + index + '"]')
                var event = document.createEvent('HTMLEvents')
                event.initEvent('click', true, true)
                currentImgDep.dispatchEvent(event)

                modalImgDep.classList.add('modal_active')
            })
        })

        var listItemsUli = sec_slider_uli.querySelectorAll('.carousel .list-items .item-note')

        listItemsUli.forEach(function(item, index) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                var modalImgArt = document.querySelector('.modal-img-talart')
                modalImgArt.querySelector('.cerrar a').addEventListener('click', closemodalImgArt)
                modalImgArt.querySelector('.layer_dark').addEventListener('click', closemodalImgArt)

                function closemodalImgArt(evt) {
                    evt.preventDefault();
                    modalImgArt.classList.remove('modal_active');
                }

                var currentVideoArt = modalImgArt.querySelector('.custom-dots li[data-nav="' + index + '"]')
                var event = document.createEvent('HTMLEvents')
                event.initEvent('click', true, true)
                currentVideoArt.dispatchEvent(event)

                modalImgArt.classList.add('modal_active')
            })
        })
    }

    if (sec_slider_convenios) {
        var listItemConv = sec_slider_convenios.querySelectorAll('.carousel .list-items .item-note')

        listItemConv.forEach(function(item, index) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                var modalImgConv = document.querySelector('.modal-img-conv')
                modalImgConv.querySelector('.cerrar a').addEventListener('click', closemodalImgConv)
                modalImgConv.querySelector('.layer_dark').addEventListener('click', closemodalImgConv)

                function closemodalImgConv(evt) {
                    evt.preventDefault();
                    modalImgConv.classList.remove('modal_active');
                }

                var currentVideoConv = modalImgConv.querySelector('.custom-dots li[data-nav="' + index + '"]')
                var event = document.createEvent('HTMLEvents')
                event.initEvent('click', true, true)
                currentVideoConv.dispatchEvent(event)

                modalImgConv.classList.add('modal_active')
            })
        })
    }

    var modal_steps = document.querySelector('#modal_steps')
        /*
        if (modal_steps != null) {
            var btnStep1OneCole = modal_steps.querySelector('#btn_one_cole'),
                btnStep1DiffCole = modal_steps.querySelector('#btn_diff_cole'),
                btnStep2Back = modal_steps.querySelector('#btn_step2_back'),
                btnStep2Register = modal_steps.querySelector('#btn_step2_register'),
                btnStep3Back = modal_steps.querySelector('#btn_step3_back'),
                inputTextAutoComplete = modal_steps.querySelectorAll('.autocompl'),
                btnStep3Register = modal_steps.querySelector('#btn_step3_register'),
                btnStep4Back = modal_steps.querySelector('#btn_step4_back'),
                btnStep4Siguiente = modal_steps.querySelector('#btn_step4_siguiente'),
                btnStep5Back = modal_steps.querySelector('#btn_step5_back'),
                btnPrintStep5 = modal_steps.querySelector('#btn_step5_print'),
                btnAdd = modal_steps.querySelector('.cont_creditos .num_credit .mas a'),
                btnLess = modal_steps.querySelector('.cont_creditos .num_credit .menos a'),
                countCredit = modal_steps.querySelector('.cont_creditos .num_credit .num'),
                flagOneCole, flagDiffCole = false
                var selects = modalSteps.querySelectorAll('.item_selecole select')
                // select.forEach(function (sel) {
                //   sel.addEventListener('change', function () {
                //     var ts = sel.parentNode.parentNode.querySelectorAll('.item_selecole').lenght
                //     if (ts == 1) {
                //       flagOneCole = true
                //       btnStep2Register.parentNode.classList.remove('back_cal')
                //       btnStep2Register.parentNode.classList.add('next_cal')
                //     } else {
                //       flagDiffCole = true
                //       btnStep3Register.parentNode.classList.remove('back_cal')
                //       btnStep3Register.parentNode.classList.add('next_cal')
                //     }
                //   })
                // })
            btnStep1OneCole.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(2)
            })
            btnStep1DiffCole.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(3)
            })
            btnStep2Back.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(1)
            })
            btnStep2Register.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(4)
                var count = parseInt(countCredit.textContent)
                calcDerecho(count)
            })
            btnStep3Back.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(1)
            })
            btnStep3Register.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(4)
                var count = parseInt(countCredit.textContent)
                calcDerecho(count)
            })
            btnStep4Back.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(3)
            })
            btnStep4Siguiente.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(5)
            })
            btnStep5Back.addEventListener('click', function(evt) {
                evt.preventDefault()
                goToStep(4)
            })
            btnPrintStep5.addEventListener('click', function(evt) {
                evt.preventDefault()
                closeModal(evt)
                goToStep(1)
            })
            if (btnAdd) {
                btnAdd.addEventListener('click', function(evt) {
                    evt.preventDefault()
                    var count = parseInt(countCredit.textContent)
                    count += 1
                    calcDerecho(count)
                    countCredit.textContent = count
                })
                btnLess.addEventListener('click', function(evt) {
                    evt.preventDefault()
                    var count = parseInt(countCredit.textContent)
                    count -= (count <= 0) ? 0 : 1
                    calcDerecho(count)
                    countCredit.textContent = count
                })
            }
            if (inputTextAutoComplete) {
                inputTextAutoComplete.forEach(function(input) {
                    input.addEventListener('keyup', function(evt) {
                        var keyCode = evt.keyCode || evt.charCode || evt.which
                        if (input.value.trim() != '' && !(keyCode > 8 && keyCode < 19)) getAutocomplete(input.value)
                    })
                })
            }
        }
        */
    function closest(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })

        var parent;

        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }

        return null;
    }
    if (modal_steps != null) {
        var NextStepSelector = '.next_cal a',
            NextStepLinks = document.querySelectorAll(NextStepSelector)

        NextStepLinks.forEach(function(item) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                console.log("click");
                var step_current = closest(this, ".paso1_inv");
                console.log(step_current);

                var nodes = Array.prototype.slice.call(document.getElementById('modal_steps').children);
                var liRef = step_current;
                var ind = nodes.indexOf(liRef)
                console.log("cur ind (next):" + ind);
                if (ind != 1) {
                    var step_next = document.querySelectorAll(".paso1_inv")[ind + 1];
                    step_current.style.display = "none";
                    step_next.style.display = "block";
                } else {
                    var step_next = document.querySelectorAll(".paso1_inv")[5];
                    step_current.style.display = "none";
                    step_next.style.display = "block";
                }
            })
        })

        var PrevStepSelector = '.back_cal a',
            PrevStepLinks = document.querySelectorAll(PrevStepSelector)

        PrevStepLinks.forEach(function(item) {
            item.addEventListener('click', function(evt) {
                evt.preventDefault()
                console.log("click");
                var step_current = closest(this, ".paso1_inv");
                console.log(step_current);

                var nodes = Array.prototype.slice.call(document.getElementById('modal_steps').children);
                var liRef = step_current;
                var ind = nodes.indexOf(liRef)
                console.log("cur ind (prev):" + ind);
                if (ind != 1 && ind != 2) {

                    var step_prev = document.querySelectorAll(".paso1_inv")[ind - 1];
                    if (!step_prev.classList.contains("subform_ready") && ind == 5) {
                        step_prev = document.querySelectorAll(".paso1_inv")[1];
                    }

                    step_current.style.display = "none";
                    step_prev.style.display = "block";

                } else {
                    var step_prev = document.querySelectorAll(".paso1_inv")[0];
                    step_current.style.display = "none";
                    step_prev.style.display = "block";
                }
            })
        })

        function comboReset(el) {
            var options = el.querySelectorAll('option');
            for (var i = 0, l = options.length; i < l; i++) {
                options[i].selected = options[i].defaultSelected;
            }
            el.classList.remove("valid");
        }

        function textfieldReset(el) {
            el.value = "";
            el.classList.remove("valid");
        }

        function subformReset(subform, subform_valid_class) {
            subform.classList.remove(subform_valid_class);
        }

        function resetAll() {
            var textfield_validate_selector = 'input[type="text"].tovalidate';
            var all_textfield_to_validate = document.querySelectorAll(textfield_validate_selector);
            if (all_textfield_to_validate.length) {
                all_textfield_to_validate.forEach(function(item) {
                    console.log(item);
                    textfieldReset(item);
                })
            }

            var combo_validate_selector = "select.tovalidate";
            var all_combo_to_validate = document.querySelectorAll(combo_validate_selector);
            if (all_combo_to_validate.length) {
                all_combo_to_validate.forEach(function(item) {
                    console.log(item);
                    comboReset(item);
                })
            }

            var subform_selector = ".paso1_inv";
            var all_subform = document.querySelectorAll(subform_selector);
            if (all_subform.length) {
                all_subform.forEach(function(item) {
                    console.log(item);
                    subformReset(item);
                })
            }
        }


        //STEP 1 : COMBO FREEDOM
        var comboCicle = '.item_m1 select',
            comboCicleElement = document.querySelector(comboCicle),
            schoolOptions = ".cont_tipocolegios",
            schoolOptionsElement = document.querySelector(schoolOptions),
            schoolOption = ".cont_cole";
        if (comboCicleElement) {
            comboCicleElement.addEventListener('change', function() {

                var index_ = this.selectedIndex;
                console.log(index_);
                if (index_ == 0) {
                    console.log("Please select a option");
                    schoolOptionsElement.classList.add("disabled");
                    var allSchoolOption = schoolOptionsElement.querySelectorAll(schoolOption);
                    allSchoolOption.forEach(function(item) {
                        console.log(item);
                        item.classList.remove("active");
                    })
                    resetAll();

                } else {

                    schoolOptionsElement.classList.remove("disabled");

                }
            })
        }

        var onecole = "#btn_one_cole",
            diffcole = "#btn_diff_cole",
            cicleStep = "#modal_step1",
            onecoleStep = "#modal_step2",
            diffcoleStep = "#modal_step3",
            cicleStepElement = document.querySelector(cicleStep),
            onecoleStepElement = document.querySelector(onecoleStep),
            diffcoleStepElement = document.querySelector(diffcoleStep),
            onecoleElement = document.querySelector(onecole),
            diffcoleElement = document.querySelector(diffcole),
            subform_valid_class = "subform_ready";
        if (onecoleElement) {
            onecoleElement.addEventListener('click', function(evt) {
                evt.preventDefault()
                console.log("click");
                cicleStepElement.style.display = "none";
                onecoleStepElement.style.display = "block";
                this.parentNode.classList.add("active");
                diffcoleElement.parentNode.classList.remove("active");
                resetAll();
            })
        }

        if (diffcoleElement) {
            diffcoleElement.addEventListener('click', function(evt) {
                evt.preventDefault()
                console.log("click");
                cicleStepElement.style.display = "none";
                diffcoleStepElement.style.display = "block";
                this.parentNode.classList.add("active");
                onecoleElement.parentNode.classList.remove("active");
                resetAll();
            })
        }




        function validatSubForm(subform, active_class) {
            var selector_valid = ".valid";
            var all_valid_elements = subform.querySelectorAll(selector_valid).length;
            var selector_to_validate = ".tovalidate";
            var all_to_validate_elements = subform.querySelectorAll(selector_to_validate).length;
            console.log(all_valid_elements);
            console.log(all_to_validate_elements);
            var boolean_B = (all_valid_elements == all_to_validate_elements);
            console.log(boolean_B);
            if (boolean_B) {
                subform.classList.add(active_class);
            } else {
                subform.classList.remove(active_class);
            }
            return boolean_B;
        }

        function comboValidate(el) {
            el.addEventListener('change', function() {
                var strUser = this.options[this.selectedIndex].value;
                var strUser1 = this.options[this.selectedIndex].text;
                var index_ = this.selectedIndex;
                console.log(this.options[this.selectedIndex]);
                console.log(this);
                var step_current = closest(this, ".paso1_inv");
                console.log("index_ :");
                console.log(index_);
                if (index_ == 0) {
                    console.log("Please select a option");
                    step_current.querySelector(NextStepSelector).classList.add("disabled");
                    this.classList.remove("valid");
                    step_current.querySelector(NextStepSelector).classList.add("disabled_button");
                } else {

                    this.classList.add("valid");

                }
                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation
                if (b_) {
                    step_current.querySelector(NextStepSelector).classList.remove("disabled_button");
                }

            })
        }

        function textfieldValidate(el) {
            el.addEventListener("change", function() {
                var step_current = closest(this, ".paso1_inv");
                console.log(this.value);
                if (this.value == null || this.value == "") {
                    this.classList.remove("valid");
                    step_current.querySelector(NextStepSelector).classList.add("disabled_button");
                } else {
                    this.classList.add("valid");
                }
                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation
                if (b_) {
                    step_current.querySelector(NextStepSelector).classList.remove("disabled_button");
                }
            })
            el.addEventListener("blur", function() {
                console.log("blur");
                var step_current = closest(this, ".paso1_inv");
                console.log(this.value);
                if (this.value == null || this.value == "") {
                    this.classList.remove("valid");
                    step_current.querySelector(NextStepSelector).classList.add("disabled_button");
                } else {
                    this.classList.add("valid");
                }
                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation
                if (b_) {
                    step_current.querySelector(NextStepSelector).classList.remove("disabled_button");
                }
            })
            el.addEventListener("focus", function() {
                console.log("focus");
                var step_current = closest(this, ".paso1_inv");
                console.log(this.value);
                if (this.value == null || this.value == "") {
                    this.classList.remove("valid");
                    step_current.querySelector(NextStepSelector).classList.add("disabled_button");
                } else {
                    this.classList.add("valid");
                }
                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation
                if (b_) {
                    step_current.querySelector(NextStepSelector).classList.remove("disabled_button");
                }
            })
            el.addEventListener("keyup", function() {
                console.log("keyup");
                var step_current = closest(this, ".paso1_inv");
                console.log(this.value);
                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation
                if (this.value.length > 1) {
                    if (this.value == null || this.value == "") {
                        this.classList.remove("valid");
                        step_current.querySelector(NextStepSelector).classList.add("disabled_button");
                    } else {
                        this.classList.add("valid");
                    }


                } else {
                    this.classList.remove("valid");
                    step_current.querySelector(NextStepSelector).classList.add("disabled_button");

                }
                if (b_) {
                    step_current.querySelector(NextStepSelector).classList.remove("disabled_button");
                }
            })
        }

        var combo_validate_selector = "select.tovalidate";
        var all_combo_to_validate = document.querySelectorAll(combo_validate_selector);
        if (all_combo_to_validate.length) {
            all_combo_to_validate.forEach(function(item) {
                console.log(item);
                comboValidate(item);
            })
        }


        var textfield_validate_selector = 'input[type="text"].tovalidate';
        var all_textfield_to_validate = document.querySelectorAll(textfield_validate_selector);
        if (all_textfield_to_validate.length) {
            all_textfield_to_validate.forEach(function(item) {
                console.log(item);
                textfieldValidate(item);
            })
        }

    }



    var secMaps = document.getElementById('sec_maps')

    if (secMaps) {
        secMaps.addEventListener('click', function(evt) {
            if (evt.target.id == 'sec_maps' || evt.target.className.indexOf('mod_contacto') != -1) {
                window.open('https://www.google.com/maps/place/Universidad+de+Lima/@-12.0847243,-76.9732035,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c7b2985b2f5d:0xc55a9050acb093fc!8m2!3d-12.0847243!4d-76.9710095', '_blank')
            }
        })
    }

    var videosEmbed = document.querySelectorAll('.video-iframe')
    if (videosEmbed) {
        videosEmbed.forEach(function(video) {
            video.setAttribute('src', video.getAttribute('src') + '?enablejsapi=1')
        })
    }

    function calcDerecho(credit_amount) {
        var credit_value = modal_steps.querySelector('#credit_value').getAttribute('data-credito'),
            calcAmount = modal_steps.querySelector('#calcAmount'),
            totalCicle = modal_steps.querySelector('#totalAmount'),
            derechoMatricula = modal_steps.querySelector('#derecho_matricula').getAttribute('data-matricula'),
            calc = 0

        calc = parseInt(credit_value) * credit_amount
        calcAmount.textContent = 'S/ ' + calc
        totalCicle.textContent = 'S/ ' + (calc + parseInt(derechoMatricula))
    }

    function stopAllVideos() {
        var allVideos = document.querySelectorAll('.video-iframe')
        allVideos.forEach(function(video) {
            video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
        })
    }

    function goToStep(step) {
        modal_steps.querySelector('#modal_step1').style.display = 'none'
        modal_steps.querySelector('#modal_step2').style.display = 'none'
        modal_steps.querySelector('#modal_step3').style.display = 'none'
        modal_steps.querySelector('#modal_step4').style.display = 'none'
        modal_steps.querySelector('#modal_step5').style.display = 'none'

        modal_steps.querySelector('#modal_step' + step).style.display = 'block'

        /*if (step == 2 || step == 3) {

        }*/
    }

    function initAccordion() {
        var selectorAccordions = '.ui-accordion',
            accordions = document.querySelectorAll(selectorAccordions)

        accordions.forEach(function(item) {
            new UIAccordion({
                el: item,
                viewOneAtTheTime: true,
                allCloser: false,
                withButtons: false
            })
        })
    }

    function initCountdown() {
        var selectorCountdown = '#clockdiv',
            countdown = document.querySelector(selectorCountdown)
        if (countdown) {
            new UICountdown({
                el: countdown,
                deadline: countdown.getAttribute('data-endtime')
            })
        }
    }

    function initCarousel() {
        var selectorSliders = '.carousel .list-items',
            sliders = document.querySelectorAll(selectorSliders)

        sliders.forEach(function(item) {
            var controlsCustom = item.parentNode.querySelector('.container-buttons-controls'),
                containerDotsCustom = item.parentNode.querySelector('.custom-dots'),
                slider = tns({
                    container: item,
                    slideBy: (item.hasAttribute('onlyone')) ? 1 : 'page',
                    speed: 300,
                    autoplay: item.hasAttribute('autoplay'),
                    autoplayButtonOutput: false,
                    autoplayTimeout: 4000,
                    controls: item.hasAttribute('with-buttons'),
                    loop: item.hasAttribute('infinite'),
                    mouseDrag: true,
                    nav: item.hasAttribute('with-dots'),
                    navPosition: (item.hasAttribute('dotstop')) ? 'top' : 'bottom',
                    navContainer: (containerDotsCustom) ? containerDotsCustom : false,
                    navAsThumbnails: (containerDotsCustom) ? true : false,
                    responsive: {
                        '320': {
                            items: item.hasAttribute('countitem-mob') ? item.getAttribute('countitem-mob') : 1
                        },
                        '1024': {
                            items: item.hasAttribute('countitem-desk') ? item.getAttribute('countitem-desk') : 1
                        }
                    }
                })
                /*if (controlsCustom) {
                  controlsCustom.querySelector('.right a').addEventListener('click', function (evt) {
                    evt.preventDefault()
                    slider.goTo('next')
                  })
                  controlsCustom.querySelector('.left a').addEventListener('click', function (evt) {
                    evt.preventDefault()
                    slider.goTo('prev')
                  })
                }*/
        })
    }

    function initValidateForm() {
        var selectorForm = '.form-validate',
            forms = document.querySelectorAll(selectorForm)

        forms.forEach(function(form) {
            var chkTerm = form.querySelector('input[name="terminos"]');
            if (chkTerm) {
                var submit = form.querySelector('input[type="submit"]');
                chkTerm.addEventListener('change', function() {
                    if (this.checked && isFill(form)) {
                        submit.classList.remove('btn-disabled')
                        submit.classList.add('input_btn')
                        submit.setAttribute('disabled');
                    } else {
                        submit.classList.add('btn-disabled')
                        submit.classList.remove('input_btn')
                        submit.removeAttribute('disabled')
                    }
                });
            }
            form.addEventListener('submit', validateForm)
        })
    }

    function isFill(form) {
        var fill = 1;
        form.querySelectorAll('.input_form').forEach(function(input) {
            fill *= (input.value) ? 1 : 0;
        })
        return (fill == 0) ? false : true;
    }

    function closeModal(evt) {
        evt.preventDefault()
        modalInscription.classList.remove('modal_active')
        var videoIframe = modalInscription.querySelector('.video-iframe')
        if (videoIframe) {
            stopAllVideos()
        }
    }

    function getAutocomplete(val) {
        var promiseAutoComplete = fetchData(URL_AUTOCOMPLETE + '?term=' + val.replace(' ', '+'), true)
        promiseAutoComplete.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(xhpromiseAutoCompleter.responseText)
            }
        }
    }

    function getDataCountry(evt) {
        /*var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhr.responseText)
          }
        }
        xhr.open("GET", URL_FETCH_COUNTRY, true)
        xhr.send();*/
        // var promiseCountry = fetchData(URL_FETCH_COUNTRY, false)
        modalInscription.classList.add('modal_active')
    }

    function fetchData(url, isWithAuth) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
            // if (isWithAuth) {
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa('ulima:ulima'))
            // }
        xhr.send()
        return xhr
    }

    function validateForm(evt) {
        var validators = {
                email: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    },
                    email: {
                        message: '^Correo electrónido inválido.'
                    }
                },
                carrera: {
                    presence: {
                        message: '^Seleccione una opcion para continuar.'
                    }
                },
                nombres: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    }
                },
                apellidos: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    }
                },
                numdoc: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    }
                },
                telefono: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    }
                },
                colegio: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    }
                },
                grado: {
                    presence: {
                        message: '^Asegurese de ingresar los datos solicitados.'
                    }
                },
                terminos: {
                    presence: {
                        message: '^Asegurese de aceptar los Términos y condiciones.'
                    }
                }
            },
            inputValidators = {}

        var values = Validate.collectFormValues(evt.target)
        for (var keyValue in values) {
            for (var keyValid in validators) {
                if (keyValue == keyValid) inputValidators[keyValid] = validators[keyValid]
            }
        }

        var errors = Validate(values, inputValidators)
        if (errors) evt.preventDefault()
        showErrors(evt.target, errors)
    }

    function showErrors(form, errors) {
        var fields = form.querySelectorAll("input[name]:not([type='submit']), select[name]")
        fields.forEach(function(input) {
            showErrorsForInput(input, errors)
        })
    }

    function showErrorsForInput(input, errors) {
        var formGroup = (input.getAttribute('name') == 'terminos') ? input.parentNode.parentNode : input.parentNode,
            messages = formGroup.querySelector('.message-error')

        resetFormGroup(formGroup)
        if (errors) {
            formGroup.classList.add('has-error')
            for (var key in errors) {
                if (key == input.name) {
                    addError(messages, errors[key])
                }
            }
        } else {
            formGroup.classList.add('has-success')
        }
    }

    function resetFormGroup(formGroup) {
        formGroup.classList.remove('has-error')
        formGroup.classList.remove('has-success')
        var errors = formGroup.querySelectorAll('.help-block.error')
        errors.forEach(function(el) {
            el.parentNode.removeChild(el)
        })
    }

    function addError(messages, error) {
        var block = document.createElement('p')
        block.classList.add('help-block')
        block.classList.add('error')
        block.innerHTML = error
        messages.appendChild(block)
    }

    function showSuccess() {
        alert('Success!')
    }



    function ExtraCrispy() {
        //LINKING COMBO 
        var attribute_option_A_linking_combo = "value";
        var attribute_option_B_linking_combo = "data-url";
        var selector_form_linking_combo = "#formSelectCarrera";
        var selector_sender_linking_combo = "input[type='submit']";
        var selector_option_linking_combo = ".same-as-selected";

        //SERVICES 
        var service_url_prefix = "http://165.227.165.221";
        var service_path_galleries = "/galeria";
        var service_path_suscriptions = "/api/suscribete";
        var service_path_agreements = "/convenio";
        var service_key_postfix = "?term=";



        //SENDING FORM REMOTE
        var selector_form_sending_suscription = "#form-suscribe";
        var selector_sender_sending_suscription = "#btn_suscripte";

        //LOADING COMBO REMOTE
        var selector_box_agreements = ".cont_buscador_mapa";
        var selector_item_combo_agreements = ".select-items > div";
        var selector_combo_agreements = "#select_country_convenios";
        var selector_option_combo_agreements = ".same-as-selected";
        var selector_modal_agreements = ".cont_buscador_mapa";
        var class_modal_active_agreements = "modal_active";




        var SendSelection = function(button) {

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
                            RedirectionLink(selected);
                        }

                    }
                }
            });
        }


        var RedirectionLink = function(element) {
            var link = element.getAttribute(attribute_option_A_linking_combo);
            window.location.href = link;
            console.log("linking");
        }

        var LinkingCombo = function() {
            console.log("linking combo");

            console.log(selector_form_linking_combo);
            var form = document.querySelector(selector_form_linking_combo);
            console.log(form);
            if (form) {
                var button = form.querySelector(selector_sender_linking_combo);
                if (button) {
                    console.log(button);
                    SendSelection(button);
                    console.log("reading");
                }

            }
        }

        var SerializeForm = function(element) {

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

        var RemoteService = function(url, method, value, callback) {



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


        var SendingSuscription = function() {

            console.log("sending remote form");

            console.log(selector_form_linking_combo);
            var form = document.querySelector(selector_form_sending_suscription);
            console.log(form);
            if (form) {

                var url = service_url_prefix + service_path_suscriptions;
                console.log(url);
                var button = form.querySelector(selector_sender_sending_suscription);
                if (button) {
                    console.log(button);
                    form.addEventListener("submit", function(e) {
                        e.preventDefault();
                        var data = SerializeForm(form);
                        console.log(data);
                        console.log("clicking remote");
                        RemoteService(url, 'POST', data, function() {
                            console.log("posting!");
                        });
                        console.log("reading remote");
                    });
                }

            }


        }

        var LoadingModalAgreements = function(data, type) {

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

        var LoadingComboAgreements = function() {

            console.log("sending remote form");

            console.log(selector_box_agreements);
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
                                var url = "tmp/" + value + ".json"; //service_url_prefix + service_path_agreements + service_key_postfix + value;
                            } else {
                                var url = service_url_prefix + service_path_agreements + service_key_postfix + value;
                            }
                            console.log(url);
                            console.log(combo);
                            console.log("loading remote item");
                            RemoteService(url, 'GET', null, function(data) {
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


        var LoadingModalGalleries = function() {


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
                            var url = "tmp/" + value + ".json"; //service_url_prefix +service_path_agreements + service_key_postfix + value;
                        } else {
                            var url = self.service_url_prefix + self.service_path_galleries + self.service_key_postfix + value;
                        }
                        RemoteService(url, 'GET', null, function(data) {
                            console.log(data);
                            LoadingModalDataGallery(data);

                        });
                    });

                }
            }

        }


        var LoadingModalDataGallery = function(response) {
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
            console.log("customized slider!");
        }

        var MeetingSchedule = function() {


            var meeting_selector = ".charlasxcarrera";

            var btn_form_selector = "#btn_insCharla";
            var btn_form_element = document.querySelector(btn_form_selector);
            var meeting_element = document.querySelector(meeting_selector);
            if (meeting_element) {
                console.log("form meetings schedule");
                var meeting_of_day_selector = ".itemdiacharla";
                var all_meeting_of_day_element = document.querySelectorAll(meeting_of_day_selector);
                console.log("all meeet days :" + all_meeting_of_day_element.length);
                if (all_meeting_of_day_element.length) {
                    all_meeting_of_day_element.forEach(function(item) {
                        //console.log(item);
                        item.setAttribute("data-state", 0);
                        item.setAttribute("data-duplicates", 0);
                        SpecialCombo(item);


                    })
                }
            }
            if (btn_form_element) {
                btn_form_element.classList.add("disabled_button");
            }

        }
        var SpecialCombo = function(element) {

            var combo_selector = ".custom-select";
            var combo_option_selector = ".select-items > div";
            var combo_option_selected_selector = ".same-as-selected"; //
            var day_selector = ".itemdiacharla"
            var combos = element.querySelectorAll(combo_selector);

            if (combos.length) {

                combos.forEach(function(combo) {
                    combo.setAttribute("data-state", 0);

                    var all_options = combo.querySelectorAll(combo_option_selector);
                    console.log(all_options.length);
                    if (all_options.length) {

                        all_options.forEach(function(item, i) {
                            //console.log(item);
                            item.setAttribute("data-index", i);
                            console.log(i);
                            item.addEventListener("click", function(e) {
                                e.preventDefault();
                                var this_combo = closest(this, combo_selector);
                                this_combo.classList.add("was-selected");
                                this_combo.setAttribute("data-state", 1);
                                this_combo.setAttribute("data-value", this.getAttribute("data-index"));

                                CountDuplicatesThisDay(element);
                                ValidateThisDay(element);
                                ValidateAllDays();
                            });
                        })
                    }

                })


            }

        };
        var CountDuplicatesThisDay = function(day) {
            var combo_selector = ".custom-select.was-selected";
            var combo_option_selector = ".select-items > div";
            var combo_option_selected_selector = ".same-as-selected"; //
            var day_selector = ".itemdiacharla"
            var combos = day.querySelectorAll(combo_selector);
            var tmpl_error = '<div class="message-error"><p class="help-block error">Debe seleccionar horarios diferentes</p></div>';
            var error_selector = ".message-error";
            var error_element = day.querySelector(error_selector);
            if (combos.length) {
                var results = [];
                for (var i = 0; i < combos.length - 1; i++) {
                    var current_value = combos[i + 1].getAttribute("data-value");
                    var next_value = combos[i].getAttribute("data-value");
                    if (current_value == next_value) {
                        results.push(combos[i]);
                    }
                }
                console.log(results);
                console.log(results.length);
                day.setAttribute("data-duplicates", results.length);
                var duplicates = day.getAttribute("data-duplicates");
                if (duplicates >= 1) {
                    if (!error_element) {
                        console.log("no existe elemento error");
                        day.insertAdjacentHTML('beforeend', tmpl_error);
                    }
                } else {
                    if (error_element) {
                        console.log("existe elemento error");
                        error_element.parentNode.removeChild(error_element);
                    }
                }
            }
        }

        var ValidateThisDay = function(day) {

            var combo_selector = ".custom-select";
            var combo_option_selector = ".select-items > div";
            var combo_option_selected_selector = ".same-as-selected"; //

            var combos = day.querySelectorAll(combo_selector);

            if (combos.length) {
                var counter = 0;

                var total = combos.length;
                combos.forEach(function(combo) {
                    var state = parseInt(combo.getAttribute("data-state"));
                    counter += state;
                })
                console.log(counter);
                console.log(total);
                if (counter >= 1) { //<-- at least one meetting  // if (counter == total) //--> all meetings of this day
                    console.log("valid");

                    day.setAttribute("data-state", 1);
                }
            }

        };
        var ValidateAllDays = function() {
            var meeting_of_day_selector = ".itemdiacharla";
            var all_meeting_of_day_element = document.querySelectorAll(meeting_of_day_selector);
            var btn_form_selector = "#btn_insCharla";
            var btn_form_element = document.querySelector(btn_form_selector);
            if (all_meeting_of_day_element.length) {
                var counter = 0;

                var total = all_meeting_of_day_element.length;
                all_meeting_of_day_element.forEach(function(item) {
                    //console.log(item);
                    var state = parseInt(item.getAttribute("data-state"));
                    counter += state;
                    console.log(counter);
                    console.log(total);
                    if (counter >= 1) { //<-- at least one day  // if (counter == total) //--> all days of this event
                        console.log("valid form");
                        if (btn_form_element) {
                            btn_form_element.classList.remove("disabled_button");
                        }
                    }
                })
            }
        };


        var Init = function() {
            //INITIALIZATION
            var _selector_form_linking_combo = "#formSelectCarrera";

            var _form_linking_combo = document.querySelector(_selector_form_linking_combo);

            if (_form_linking_combo) {
                LinkingCombo();
                SendingSuscription();
            }

            var _selector_combo_agreements = ".cont_buscador_mapa";
            var _combo_agreements = document.querySelector(_selector_combo_agreements);
            if (_combo_agreements) {
                LoadingComboAgreements();
            }


            var _selector_modal = ".modal-img-infra";
            var _modal = document.querySelector(_selector_modal);
            console.log("modal");
            console.log(_modal);
            if (_modal) {
                LoadingModalGalleries();
                console.log("yes!");
            }
            var _selector_schedule = ".charlasxcarrera";
            var _schedule = document.querySelector(_selector_schedule);
            if (_schedule) {
                MeetingSchedule();
            }
        }
        console.log("init");
        Init();
    }
















    ExtraCrispy();
})