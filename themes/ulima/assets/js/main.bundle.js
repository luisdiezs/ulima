/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBody;
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(5);


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = 'hidden';
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].appendChild(body);
  }

  return docOverflow;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = resetFakeBody;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docElement_js__ = __webpack_require__(5);


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    __WEBPACK_IMPORTED_MODULE_0__docElement_js__["a" /* docElement */].offsetHeight;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return raf; });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a"]; });


var hasClass = __WEBPACK_IMPORTED_MODULE_0__classListSupport_js__["a" /* classListSupport */] ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isNodeList;
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_UICountdown__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_UIAccordion__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_js_simple_validations_dist_js_simple_validations__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_js_simple_validations_dist_js_simple_validations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_js_simple_validations_dist_js_simple_validations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_tiny_slider_src_tiny_slider__ = __webpack_require__(12);

/*import UICarousel from '../lib/UICarousel'*/

//import Validate from 'validate.js'


//import ExtraCrispy from '../lib/ExtraCrispy'

document.addEventListener("DOMContentLoaded", function(event) {

    var URL_FETCH_COUNTRY = '',
        URL_AUTOCOMPLETE = 'http://165.227.165.221/colegio'

    initAccordion()
    initCountdown()
    initCarousel()
    initValidateForm() //
    meetingsForm()
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
                if (btnNextSli) {
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
                }

                if (btnNextSli) {
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
                }

                if (onlyDots.length) {
                    onlyDots.forEach(function(item, index) {
                        item.addEventListener('click', function() {
                            console.log("miau!");
                            var videoIframe = modalInscription.querySelector('.video-iframe')
                            if (videoIframe) {
                                stopAllVideos()
                            }
                        })
                    })
                }



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
                    if (currentVideoAdm) {
                        currentVideoAdm.dispatchEvent(event); //fix
                    }
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
                if (modalImgConv) {
                    modalImgConv.querySelector('.cerrar a').addEventListener('click', closemodalImgConv)
                    modalImgConv.querySelector('.layer_dark').addEventListener('click', closemodalImgConv)
                } else {
                    console.log("modal .modal-img-conv no existe");
                }


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
            new __WEBPACK_IMPORTED_MODULE_1__lib_UIAccordion__["a" /* default */]({
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
            new __WEBPACK_IMPORTED_MODULE_0__lib_UICountdown__["a" /* default */]({
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
                slider = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_tiny_slider_src_tiny_slider__["a" /* tns */])({
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
        console.log("total forms: " + forms.length);
        if (forms.length) {
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

    }

    function meetingsForm() {
        console.log("auto validate!!");
        /*var form = document.querySelector('.form-vanillajs-validate');
        console.log("form meetting");
        var v = new Validator(form, {
            rules: {
                email: {
                    required: true
                },
                carrera: {
                    required: true
                },
                nombres: {
                    required: true
                },
                apellidos: {
                    required: true
                },
                numdoc: {
                    required: true
                },
                telefono: {
                    required: true
                },
                colegio: {
                    required: false
                },
                grado: {
                    required: true
                },
                terminos: {
                    required: true
                }
            },
            messages: {
                email: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                carrera: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                nombres: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                apellidos: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                numdoc: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                telefono: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                colegio: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                grado: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                },
                terminos: {
                    required: '*Asegurese de ingresar los datos solicitados.'
                }
            }
        });*/
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
        if (block) {
            block.classList.add('help-block')
            block.classList.add('error')
            block.innerHTML = error
            if (messages) {
                messages.appendChild(block)
            }

        }

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
                var form = document.querySelector(selector_form_linking_combo);
                console.log(form);
                if (form) {
                    var selected = form.querySelector(selector_option_linking_combo);


                    console.log(selected);
                    if (selected) {
                        var url = selected.getAttribute(attribute_option_A_linking_combo);
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
                            if (value != null) {


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
                                        LoadingModalAgreements(data, "modal");
                                    } else {
                                        LoadingModalAgreements(data, "content");
                                    }

                                });
                                console.log("reading remote 2");
                            }
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
                var src_img = "/themes/ulima/assets/img/png/cerrar.png";
                if (document.querySelector("body").classList.contains("test")) {
                    src_img = "img/png/cerrar.png"; //source image
                }

                var tmpl = '<div class="layer_dark"></div><div><div class="cont_galery_pu carousel"><div class="gale_pu list-items" with-dots with-buttons countitem-mob="1" countitem-desk="1" infinite="1"></div><div class="custom-dots-container"><ul class="custom-dots"></ul></div></div><span class="cerrar"><a href=""><img src="' + src_img + '" /></a></span></div>';
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
                        if (value != null) {
                            if (document.querySelector("body").classList.contains("test")) {
                                var url = "tmp/" + value + ".json"; //service_url_prefix +service_path_agreements + service_key_postfix + value;
                            } else {
                                var url = service_url_prefix + service_path_galleries + service_key_postfix + value;
                            }
                            if (url) {
                                RemoteService(url, 'GET', null, function(data) {
                                    console.log(data);
                                    LoadingModalDataGallery(data);
                                    console.log("remote data term");
                                });
                            }

                        }
                    });

                }
            }

        }


        var LoadingModalDataGallery = function(response) {
            var modal = document.querySelector(".modal-img-infra");

            var listing1 = modal.querySelector(".gale_pu.list-items");
            var listing2 = modal.querySelector(".custom-dots");
            if (listing1 && listing2) {
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

                    slider = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_tiny_slider_src_tiny_slider__["a" /* tns */])({
                        container: listing1,
                        slideBy: (listing1.hasAttribute('onlyone')) ? 1 : 'page',
                        speed: 300,
                        autoplay: listing1.hasAttribute('autoplay'),
                        autoplayButtonOutput: false,
                        autoplayTimeout: 4000,
                        controls: listing1.hasAttribute('with-buttons') || false,
                        loop: listing1.hasAttribute('infinite') || false,
                        mouseDrag: true,
                        nav: listing1.hasAttribute('with-dots') || false,
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
            } else {
                console.log("slider has no enough elements: .gale_pu.list-items or  .custom-dots");
            }

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
                        item.setAttribute("data-selected-this-day", 0);
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
                    //console.log(all_options.length);
                    if (all_options.length) {

                        all_options.forEach(function(item, i) {
                            //console.log(item);
                            item.setAttribute("data-index", i);
                            //console.log(i);
                            item.addEventListener("click", function(e) {
                                e.preventDefault();
                                var this_combo = closest(this, combo_selector);
                                var value_real_el = this_combo.querySelector(".same-as-selected"); //this_combo.querySelector(".same-as-selected");
                                var value_real = value_real_el.getAttribute("value");
                                console.log(value_real); //
                                if (value_real) {
                                    value_real = value_real.toString();
                                    console.log(value_real);
                                    value_real = value_real.split("-");
                                    value_real = value_real[value_real.length - 1];

                                    this_combo.setAttribute("data-value", value_real);
                                }
                                this_combo.classList.add("was-selected");
                                this_combo.setAttribute("data-state", 1);


                                CountDuplicatesThisDay(element);
                                CountSelectedCombo(element);
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
            var selected_selector = ".was-selected";
            var error_element = day.querySelector(error_selector);

            if (combos.length) {
                var results = [];
                for (var i = 0; i < combos.length; i++) {
                    var current_value = combos[i].getAttribute("data-value");
                    if (current_value != "Horario") {
                        for (var j = 0; j < combos.length; j++) {
                            if (i != j) {
                                var next_value = combos[j].getAttribute("data-value");

                                if (current_value == next_value) {
                                    results.push(combos[j]);
                                }


                            }

                        }


                    } else {
                        combos[i].classList.remove("was-selected");
                        combos[i].setAttribute("data-state", 0);

                    }

                }
                // var allselected = 0;

                //day.querySelector(selected_selector).length;

                //day.setAttribute("selected", allselected);

                console.log(results);
                console.log("results:");
                console.log(results.length);
                day.setAttribute("data-duplicates", results.length / 2);
                var duplicates = parseInt(day.getAttribute("data-duplicates"));
                var btn_form_selector = "#btn_insCharla";
                var btn_form_element = document.querySelector(btn_form_selector);
                if (duplicates >= 1) {
                    if (!error_element) {
                        console.log("no existe elemento error");
                        day.insertAdjacentHTML('beforeend', tmpl_error);

                        if (btn_form_element) {
                            btn_form_element.classList.add("disabled_button");
                        }
                    }
                } else {
                    if (error_element) {
                        console.log("existe elemento error");
                        error_element.parentNode.removeChild(error_element);
                        if (btn_form_element) {
                            btn_form_element.classList.remove("disabled_button");
                        }
                    }
                }
            }
        };
        var CountSelectedCombo = function(day) {
            var combo_selector = ".custom-select.was-selected";
            var combo_option_selector = ".select-items > div";
            var combo_option_selected_selector = ".same-as-selected"; //
            var day_selector = ".itemdiacharla"
            var combos = day.querySelectorAll(combo_selector);
            var tmpl_error = '<div class="message-error"><p class="help-block error">Debe seleccionar horarios diferentes</p></div>';
            var error_selector = ".message-error";
            var selected_selector = ".was-selected";
            var error_element = day.querySelector(error_selector);

            if (combos.length) {

                console.log("selected this day: " + combos.length);
                day.setAttribute("data-selected-this-day", combos.length);
            } else {
                console.log("selected this day: " + 0);
                day.setAttribute("data-selected-this-day", 0);
            }

        }
        var ValidateThisDay = function(day) {

            var combo_selector = ".custom-select";
            var combo_option_selector = ".select-items > div";
            var combo_option_selected_selector = ".same-as-selected"; //
            var btn_form_selector = "#btn_insCharla";
            var btn_form_element = document.querySelector(btn_form_selector);
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
                if (counter >= 1) { //<-- at least one day  // if (counter == total) //--> all days of this event //
                    console.log("valid form");
                    if (btn_form_element) {
                        btn_form_element.classList.remove("disabled_button");
                    }
                }
            }

        };
        var ValidateAllDays = function() {
            var group_form_selector = ".charlasxcarrera";
            var meeting_of_day_selector = ".itemdiacharla";
            var all_meeting_of_day_element = document.querySelectorAll(meeting_of_day_selector);
            var btn_form_selector = "#btn_insCharla";
            var btn_form_element = document.querySelector(btn_form_selector);
            if (all_meeting_of_day_element.length) {
                var counter = 0;
                var selected = 0;

                var total = all_meeting_of_day_element.length;
                all_meeting_of_day_element.forEach(function(item) {
                    //console.log(item);
                    var duplicates = parseInt(item.getAttribute("data-duplicates"));
                    counter += duplicates;

                    var selectedthisday = parseInt(item.getAttribute("data-selected-this-day"));
                    selected += selectedthisday;
                })
                console.log(counter);
                console.log(total);

                if (counter == 0) { //<-- at least one day  // if (counter == total) //--> all days of this event
                    console.log("valid form");
                    if (btn_form_element) {
                        btn_form_element.classList.remove("disabled_button");
                    }
                } else {
                    if (btn_form_element) {
                        btn_form_element.classList.add("disabled_button");
                    }
                }

                if (selected == 0) {
                    console.log("you dont select any combo!");
                    if (btn_form_element) {
                        btn_form_element.classList.add("disabled_button");

                    }
                }
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




    function SendingDataScheduleForm(e, form, state) {
        var returnVal = {
            message: "customSubmitHandler callback fired",
            args: arguments
        }
        console.log("customSubmitHandler", returnVal);
        return returnVal;
    };


    function getJSON(url, qs_params) {
        function buildQueryString(params) {
            return Object.entries(params).map(d => `${d[0]}=${d[1]}`).join('&');
        }

        return new Promise((resolve, reject) => {
            const qs = qs_params ? '?' + buildQueryString(qs_params) : '';
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `${url}${qs}`);

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 400) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    resolve(xhr.responseText);
                }
            };
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        });
    }


    function AutoCompleteField() {

        var colegios = [
            { label: 'Bellavista', value: 'UK' },
            { label: 'Benito Muslini', value: 'UK' },
            { label: 'Buenos Aires', value: 'UK' },
            { label: 'Ricardo Palma', value: 'UK' },
            { label: 'Richard Clayderman', value: 'UK' },
            { label: 'Rafael Nadal', value: 'UK' },
            { label: 'Maristas', value: 'US' },
            { label: 'Maria Reich', value: 'US' },
            { label: 'Sagrado Corazon de Jesus', value: 'UK' },
            { label: 'Sagrada Familia', value: 'UK' },
            { label: 'San Vicente de Paul', value: 'US' }
        ];
        var form = document.querySelector(".form-autocomplete");
        if (form) {


            console.log(form)
            if (typeof autocomplete == 'function') {
                var field_autocomplete = document.querySelector("#colegios-list");
                if (field_autocomplete) {
                    console.log(field_autocomplete)
                };
                console.log("function")
            }

            //});

            autocomplete({
                input: field_autocomplete,
                fetch: function(text, update) {
                    text = text.toLowerCase();

                    var suggestions = colegios.filter(n => n.label.toLowerCase().startsWith(text))
                    update(suggestions);
                },
                onSelect: function(item) {
                    console.log(item.value);
                    console.log(item.label);
                    field_autocomplete.value = item.label;

                }
            });
        }
    }





    ExtraCrispy();
    //AutoCompleteField();
})

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function UICountdown(options) {
    this.context = options.el;
    this.endTime = +this.dateFromTimestamp(options.deadline);
    this.timeRemainingel = '';
    this.countdown();
}

UICountdown.prototype.countdown = function () {
    var self = this;
    function getTimeRemaining() {
        var t = self.endTime - new Date();
        self.timeRemaining = {
            total: t,
            days: Math.floor(t / (1000 * 60 * 60 * 24)),
            hours: Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((t / 1000 / 60) % 60),
            seconds: Math.floor((t / 1000) % 60)
        }
    }

    function updateClock() {
        getTimeRemaining();

        self.context.querySelector('.days').innerHTML = (`0${self.timeRemaining.days}`).slice(-2);
        self.context.querySelector('.hours').innerHTML = (`0${self.timeRemaining.hours}`).slice(-2);
        self.context.querySelector('.minutes').innerHTML = (`0${self.timeRemaining.minutes}`).slice(-2);
        if (self.context.querySelector('.seconds')) self.context.querySelector('.seconds').innerHTML = (`0${self.timeRemaining.seconds}`).slice(-2);

        if (self.timeRemaining.total <= 0) {
            clearInterval(timeinterval);
            self.context.querySelector('.days').innerHTML = '00';
            self.context.querySelector('.hours').innerHTML = '00';
            self.context.querySelector('.minutes').innerHTML = '00';
            if (self.context.querySelector('.seconds')) self.context.querySelector('.seconds').innerHTML = '00';
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

UICountdown.prototype.dateFromTimestamp = function (formatDate) {
    var t = formatDate.split(/[- :]/);
    return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
}

/* harmony default export */ __webpack_exports__["a"] = (UICountdown);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function UIAccordion (context) {
    this.context = context.el;
    this.viewOneAtTheTime = (context.viewOneAtTheTime) ? context.viewOneAtTheTime : false;
    this.allCloser = (context.allCloser) ? context.allCloser : false;
    this.withButtons = (context.withButtons) ? context.withButtons : false;
    this.listItems = this.context.querySelectorAll('.ui-accordion-item')
    this.init();
    this.bindEvents();
}
UIAccordion.prototype.init = function () {
    var self = this;
    this.listItems.forEach( function (item, index) {
        if (self.withButtons) {
            var tagBtn = document.createElement('span');
            tagBtn.innerHTML = '&#8735;';
            item.querySelector('.ui-accordion-head').appendChild(tagBtn);
        }
        if (self.allCloser) item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');
        else {
            if (index != 0) item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');
            else {
                item.querySelector('.ui-accordion-head span').classList.add('active-acc')
            }
        }
    });
}
UIAccordion.prototype.bindEvents = function() {
    var self = this;
    this.listItems.forEach( function(item) {
        var itemHead = item.querySelector('.ui-accordion-head')
        itemHead.addEventListener('click', self.toogleItem.bind(self));
    });
}
UIAccordion.prototype.toogleItem = function(evt) {
    evt.preventDefault();
    var content = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-content') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-content');

    if (Array.from(content.classList).indexOf('ui-accordion-item-collapse') == -1) {
        content.classList.add('ui-accordion-item-collapse');
        content.classList.remove('ui-accordion-active')
        var h = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-head span') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-head span')
        h.classList.remove('active-acc');
    } else {
        if (this.viewOneAtTheTime) {
            var self = this;
            this.listItems.forEach( function (item) {
                item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');
                item.querySelector('.ui-accordion-content').classList.remove('ui-accordion-active');
                item.querySelector('.ui-accordion-head span').classList.remove('active-acc')
            });
        }
        content.classList.remove('ui-accordion-item-collapse');
        content.classList.add('ui-accordion-active')
        var h = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-head span') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-head span')
        h.classList.add('active-acc')
    }
}

/* harmony default export */ __webpack_exports__["a"] = (UIAccordion);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

!function(n){var a={};function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={disableValidations:!1,formValidateAttr:"data-jsv-form",formIsValid:"data-jsv-form-isvalid",disableIcons:"data-jsv-disable-icons",formValidCallback:"data-jsv-form-valid-callback",formInvalidCallback:"data-jsv-form-invalid-callback",disableInvalid:"data-jsv-disable-invalid",fieldValidators:"data-jsv-validators",fieldIsValid:"data-jsv-field-isvalid",prevVal:"data-jsv-field-prev-val",lenMin:"data-jsv-min",lenMax:"data-jsv-max",lenExact:"data-jsv-exact",minThresh:"data-jsv-min-selected",fieldCompare:"data-jsv-compare",fieldPattern:"data-jsv-pattern",ajaxEndpoint:"data-jsv-ajax-endpoint",ajaxKey:"data-jsv-ajax-key",ajaxValue:"data-jsv-ajax-value",ajaxProcessing:"data-jsv-ajax-processing",fieldContains:"data-jsv-contains",expireDate:"data-jsv-expiredate",dependentFields:"data-jsv-dependents",fieldDebounce:"data-jsv-debounce",invErrPrefix:"data-jsv-field-error-",fieldInvalidCallback:"data-jsv-field-invalid-callback-",fieldValidCallback:"data-jsv-field-valid-callback-",valTarget:"data-jsv-validation-target",invMessage:"data-jsv-message-target",disableIcon:"data-jsv-disable-icon",fieldValid:"form-field-valid",validIcon:"form-field-valid-focusout",fieldInvalid:"form-field-invalid",invIcon:"form-field-invalid-focusout",fieldContainer:{className:"validate-input",addClasses:[]},formError:{className:"validate-form-error-message",addClasses:["well","validate-form-hidden-message"]},formSuccess:{className:"validate-form-success-message",addClasses:["well","validate-form-hidden-message"]},fieldError:{className:"validate-field-error-message",addClasses:[]},baseId:"data-jsv-base-id",messageHidden:"validate-form-hidden-message",buttonSuccess:"success-button",buttonTooltip:"data-jsv-form-tooltip",buttonOriginalText:"data-original-text",formIncompleteText:"data-jsv-form-incomplete-tooltip",formInvalidMessage:"data-jsv-form-invalid-message",safeStringInput:!0,safeEndpoints:!1,ajaxTimeout:8e3,debounceDefault:300,useCss:!0,useTooltip:!0,isValidColor:"#13bd3a",isInvalidColor:"#ff0000",isValidIcon:"\\2713",isInvalidIcon:"\\2716",fieldErrorFont:"normal 12px Helvetica, Arial, sans-serif",formShowMessages:!0,formSubmitHandler:"data-jsv-submit-handler",formIncompleteMessage:"Please complete all required fields"}},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};n(1),e.default=function(){this.uniqueArray=function(t){return Array.isArray(t)&&t.length&&(t=t.filter(function(t,e,n){return n.indexOf(t)===e})),t},this.cleanArray=function(t){if(Array.isArray(t)&&t.length){for(var e=0;e<t.length;e++)t[e]=t[e]?t[e].trim():"";t=t.filter(function(t){return/\S/.test(t)}),t=this.uniqueArray(t)}return t}.bind(this),this.splitString=function(t){return this.cleanArray(t.split(","))}.bind(this),this.digitWord=function(e){try{var t=e&&!isNaN(e)?e:parseInt(e);t=t.toString();var n={0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine"};return t in n?n[t]:e}catch(t){return e}},this.createValidationElement=function(t,e,n){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"div",r=null;try{t.querySelector("."+e.className)||((r=document.createElement(a)).classList.add(e.className),e.addClasses&&Array.isArray(e.addClasses)&&e.addClasses.forEach(function(t){r.classList.add(t)}),n&&r.setAttribute("id",n))}catch(t){}return r},this.safeString=function(t){if(!t)return null;try{var e={"<":"lt",">":"gt",'"':"quot","'":"apos","&":"amp","\r":"#10","\n":"#13"};return t.toString().replace(/[<>"'\r\n&]/g,function(t){return"&"+e[t]+";"})}catch(t){return null}},this.safeStringInput=function(t){return t&&o.default.safeStringInput?this.safeString(t):t},this.isElement=function(t){return t instanceof Element},this.disableElement=function(t,e){var n=e||!1;try{return!(!t||!this.isElement(t)||("FORM"===t.tagName?n?t.setAttribute("disabled",n):t.removeAttribute("disabled"):t.disabled=n,0))}catch(t){return!1}},this.disableForm=function(t,e){if(!this.getAttr(t,o.default.disableInvalid))return!1;var n=e||!1;try{var a=null,r=t.getElementsByTagName("button");if(r&&r.length&&(a=r[0],this.disableElement(a,n),n&&o.default.useTooltip&&o.default.buttonTooltip)){var i=this.getAttr(t,o.default.formIncompleteText)||o.default.formIncompleteMessage;a.setAttribute(o.default.buttonTooltip,i)}return!0}catch(t){return!1}}.bind(this),this.getAttr=function(t,e){var n=null;if(!t||!e||!this.isElement(t))return null;try{var a=t.getAttribute(e)||null;a&&(n=this.safeString(a.trim()),n=("string"!=typeof(n="string"==typeof(n=isNaN(n)?n:parseInt(n))&&"true"===n.toLowerCase()||n)||"false"!==n.toLowerCase())&&n)}catch(t){}return n},this.getValue=function(t){try{var e=[],n=[];switch(t.type){case"text":case"textarea":case"password":case"hidden":case"color":case"date":case"datetime":case"datetime-local":case"email":case"file":case"image":case"month":case"number":case"range":case"search":case"tel":case"time":case"url":case"week":return this.safeStringInput(t.value);case"select-multiple":for(var a=0;a<t.options.length;a++)t.options[a].selected&&(e[e.length]=this.safeStringInput(t.options[a].value)||"");return e;case"select-one":return-1==t.selectedIndex?"":this.safeStringInput(t.options[t.selectedIndex].value)||"";case"button":case"reset":case"submit":return"";case"radio":case"checkbox":return t.checked?this.safeStringInput(t.value):"";default:if("radio"===t[0].type){for(var r=0;r<t.length;r++)if(t[r].checked)return this.safeStringInput(t[r].value);return""}if("checkbox"!=t[0].type)return this.safeStringInput(t.value);for(var i=0;i<t.length;i++)t[i].checked&&(n[e.length]=this.safeStringInput(t[i].value));return n}}catch(t){}return""},this.showMsg=function(t,e,n){if(!(t&&e&&n&&o.default.formShowMessages))return!1;try{var a=t.querySelector("."+e);return!(!a||!this.isElement(a)||(a.innerHTML=n,a.classList.remove(o.default.messageHidden),0))}catch(t){return!1}},this.hideFormMessage=function(t,e){if(!t||!e)return!1;try{var n=t.querySelector("."+e);return!!n&&(n.innerHTML="",n.classList.add(o.default.messageHidden),!0)}catch(t){return!1}},this.debounce=function(n,a,r){var i=void 0;return function(){var t=this,e=arguments;clearTimeout(i),i=setTimeout(function(){i=null,r||n.apply(t,e)},a),r&&!i&&n.apply(t,e)}},this.capitalize=function(t){return t?t.charAt(0).toUpperCase()+t.substring(1):null},this.nameToString=function(t){return t?t.match(/[A-Za-z][a-z]*/g).map(this.capitalize).join(" "):null}.bind(this),this.alphaNum=function(t){return t?t.replace(/[^a-z0-9 \-]/gi,""):null},this.createId=function(){return Math.random().toString(36).substr(2,8)}}},function(t,f,c){"use strict";c.r(f),function(e){var t=c(5),n=setTimeout;function a(){}function i(t){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function r(n,a){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var t=1===n._state?a.onFulfilled:a.onRejected;if(null!==t){var e;try{e=t(n._value)}catch(t){return void l(a.promise,t)}o(a.promise,e)}else(1===n._state?o:l)(a.promise,n._value)})):n._deferreds.push(a)}function o(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void d((a=n,r=t,function(){a.apply(r,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var a,r}function l(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)r(t,t._deferreds[e]);t._deferreds=null}function s(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t(function(t){n||(n=!0,o(e,t))},function(t){n||(n=!0,l(e,t))})}catch(t){if(n)return;n=!0,l(e,t)}}i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(a);return r(this,new s(t,e,n)),n},i.prototype.finally=t.a,i.all=function(e){return new i(function(a,r){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var i=Array.prototype.slice.call(e);if(0===i.length)return a([]);var o=i.length;function l(e,t){try{if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void n.call(t,function(t){l(e,t)},r)}i[e]=t,0==--o&&a(i)}catch(t){r(t)}}for(var t=0;t<i.length;t++)l(t,i[t])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(n){return new i(function(t,e){e(n)})},i.race=function(r){return new i(function(t,e){for(var n=0,a=r.length;n<a;n++)r[n].then(t,e)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){n(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console},f.default=i}.call(this,c(8).setImmediate)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.a=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}},function(t,e,n){"use strict";var a,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=s(n(2)),o=s(n(7)),g=s(n(13));n(1);var l,b=s(n(0)),u=s(n(14));function s(t){return t&&t.__esModule?t:{default:t}}l={SimpleValidations:function(){var p=new i.default;if(window.validateOptions=window.validateOptions||{},"cfg"in window.validateOptions&&"object"===r(window.validateOptions.cfg))for(var t in window.validateOptions.cfg)b.default[t]=window.validateOptions.cfg[t];if("undefined"!==b.default.disableValidations&&b.default.disableValidations)return!1;if(b.default.useCss)try{var e=document.createElement("style");e.innerHTML=u.default,document.head.appendChild(e)}catch(t){}document.querySelectorAll("["+b.default.formValidateAttr+"]").forEach(function(v){var m=b.default.debounceDefault,t=p.createValidationElement(v,b.default.formError);t&&v.insertBefore(t,v.firstChild);var e=p.createValidationElement(v,b.default.formSuccess);e&&v.appendChild(e),p.disableForm(v,!0);var h=new o.default(v);v.querySelectorAll("["+b.default.fieldValidators+"]").forEach(function(e){var t=p.getAttr(e,b.default.baseId);if(t||(t=p.createId(),e.setAttribute(b.default.baseId,t)),"radio"!==e.type&&"checkbox"!==e.type){try{var n=p.getAttr(e,b.default.valTarget);if(!(n?v.querySelector("#"+n):null)){var a="w-"+t,r=p.createValidationElement(e.parentNode,b.default.fieldContainer,a);e.parentNode.appendChild(r),r.appendChild(e),e.setAttribute(b.default.valTarget,a)}}catch(t){}try{var i=p.getAttr(e,b.default.invMessage);if(!(i?v.querySelector("#"+i):null)){var o="e-"+t,l=p.createValidationElement(e.parentNode,b.default.fieldError,o);e.parentNode.parentNode.insertBefore(l,e.parentNode.nextElementSibling),e.setAttribute(b.default.invMessage,o)}}catch(t){}}try{var u=p.getValue(e);u&&/\S/.test(u)&&h.validate({type:"focusout",target:{name:e.name}})}catch(t){}var s=p.getAttr(e,b.default.fieldDebounce),d=s&&!isNaN(s)?s:b.default.debounceDefault;m<d&&(m=d);var f=(0,g.default)(h.validate,d),c=function(t){null!==e.offsetParent&&f(t,v).then(function(){}).catch(function(){})};e.addEventListener("input",c,!1),e.addEventListener("change",c,!1),e.addEventListener("focusout",c,!1)}),v.addEventListener("submit",function(n){n.preventDefault(),setTimeout(function(){h.validate(n,v).then(function(){var t=b.default.formSubmitHandler?p.getAttr(v,b.default.formSubmitHandler):null,e=t&&t in window&&"function"==typeof window[t]?window[t]:null;e?e(n,v,"valid"):v.submit()}).catch(function(){var t=p.getAttr(v,b.default.formInvalidMessage)||"Please correct the errors below";p.showMsg(v,b.default.formError.className,t)})},m+100)})})}},"undefined"!=typeof window?window.SimpleValidations=l.SimpleValidations:void 0===(a=function(){return l.SimpleValidations}.call(e,n,e,l))||(l.exports=a),"undefined"!=typeof window&&"SimpleValidations"in window&&document.addEventListener("DOMContentLoaded",function(){return window.SimpleValidations()})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=r(n(3));n(1);var u=r(n(11)),d=r(n(0)),a=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var s=new a.default,o=this;this.form=t,this.getButton=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form;try{return t.getElementsByTagName("button")[0]}catch(t){}},this.hasValid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form;try{return s.getAttr(t,d.default.formIsValid)}catch(t){}},this.getFields=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,e=[];try{e=t.querySelectorAll("["+d.default.fieldValidators+"]")}catch(t){}return e},this.getValidationFields=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,u={validate:[],reset:[]};return o.getFields(t).forEach(function(t){try{var e=!1,n=!1,a=s.getAttr(t,d.default.fieldValidators),r=a&&-1!==a.toLowerCase().indexOf("require"),i="radio"===t.type||"checkbox"===t.type,o=s.getValue(t),l=t.getAttribute(d.default.prevVal);o?e=!l||s.safeString(o)!==l||i:r?e=!0:n=!0,e&&u.validate.push(t),n&&u.reset.push(t)}catch(t){}}),u},this.getIncompleteMessage=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,e=s.getAttr(t,d.default.formIncompleteText);return e||d.default.formIncompleteMessage},this.checkValid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,e=o.getFields(t),n=0;return e.forEach(function(t){t.getAttribute(d.default.fieldIsValid)&&n++}),n>=e.length},this.validate=function(r){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.form;try{return new l.default(function(t,e){var n=o.getValidationFields(i)||[],a=[new l.default.resolve];n.validate.forEach(function(t){var e=new u.default(t,i,r);a.push(e.validate(t))}),n.reset.forEach(function(t){var e=new u.default(t,i,r);a.push(e.reset(t))}),new l.default.all(a).then(function(){}).catch(function(){}).finally(function(){o.checkValid(i)?t(o.valid(r,i)):e(o.invalid(r,i))})})}catch(r){}},this.valid=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.form;try{var n=o.getButton(e);o.hasValid(e)||e.setAttribute(d.default.formIsValid,"true"),s.disableForm(e,!1),d.default.useTooltip&&d.default.buttonTooltip&&n.getAttribute(d.default.buttonTooltip)&&n.removeAttribute(d.default.buttonTooltip),s.hideFormMessage(e,d.default.formError.className);var a=s.getAttr(e,d.default.formValidCallback);if("submit"!==t.type&&a&&a in window&&"function"==typeof window[a])try{s.debounce(window[a],d.default.debounceDefault)(t,e,"valid")}catch(t){}}catch(t){}return!0},this.invalid=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.form;try{var n=o.getButton(e);o.hasValid(e)&&e.removeAttribute(d.default.formIsValid),s.disableForm(e,!0),n&&d.default.useTooltip&&d.default.buttonTooltip&&n.setAttribute(d.default.buttonTooltip,o.getIncompleteMessage(e)),n&&d.default.buttonSuccess&&n.classList.contains(d.default.buttonSuccess)&&n.classList.remove(d.default.buttonSuccess),n&&d.default.buttonOriginalText&&n.getAttribute(d.default.buttonOriginalText)&&(n.innerText=s.getAttr(n,d.default.buttonOriginalText),n.removeAttribute(d.default.buttonOriginalText)),s.hideFormMessage(e,d.default.formError.className),s.hideFormMessage(e,d.default.formSuccess.className);var a=s.getAttr(e,d.default.formInvalidCallback);if("submit"===t.type&&a&&a in window&&"function"==typeof window[a])try{s.debounce(window[a],d.default.debounceDefault)(t,e,"invalid")}catch(t){}}catch(t){}return!1}}},function(t,r,i){(function(t){var e=void 0!==t&&t||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function a(t,e){this._id=t,this._clearFn=e}r.setTimeout=function(){return new a(n.call(setTimeout,e,arguments),clearTimeout)},r.setInterval=function(){return new a(n.call(setInterval,e,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(t){t&&t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(e,this._id)},r.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},r.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},r._unrefActive=r.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i(9),r.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,r.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,i(4))},function(t,e,n){(function(t,m){!function(n,a){"use strict";if(!n.setImmediate){var r,i,e,o,t,l=1,u={},s=!1,d=n.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(n);f=f&&f.setTimeout?f:n,r="[object process]"==={}.toString.call(n.process)?function(t){m.nextTick(function(){v(t)})}:function(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}}()?(o="setImmediate$"+Math.random()+"$",t=function(t){t.source===n&&"string"==typeof t.data&&0===t.data.indexOf(o)&&v(+t.data.slice(o.length))},n.addEventListener?n.addEventListener("message",t,!1):n.attachEvent("onmessage",t),function(t){n.postMessage(o+t,"*")}):n.MessageChannel?((e=new MessageChannel).port1.onmessage=function(t){v(t.data)},function(t){e.port2.postMessage(t)}):d&&"onreadystatechange"in d.createElement("script")?(i=d.documentElement,function(t){var e=d.createElement("script");e.onreadystatechange=function(){v(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):function(t){setTimeout(v,0,t)},f.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var a={callback:t,args:e};return u[l]=a,r(l),l++},f.clearImmediate=c}function c(t){delete u[t]}function v(t){if(s)setTimeout(v,0,t);else{var e=u[t];if(e){s=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(a,n)}}(e)}finally{c(t),s=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(4),n(10))},function(t,e){var n,a,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(t){a=o}}();var u,s=[],d=!1,f=-1;function c(){d&&u&&(d=!1,u.length?s=u.concat(s):f=-1,s.length&&v())}function v(){if(!d){var t=l(c);d=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,d=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||d||l(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=o(n(3));n(1);var v=o(n(0)),r=o(n(12)),i=o(n(2));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e,s){var d=new i.default,f=this;if(this.field=t,this.form=e,this.event=s,this.eventType=this.event&&"type"in this.event?this.event.type:null,this.validators=new r.default(this),"customValidators"in window.validateOptions&&"object"===a(window.validateOptions.customValidators))for(var n in window.validateOptions.customValidators)this.validators[n]=window.validateOptions.customValidators[n];this.checkValid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;return d.getAttr(t,v.default.fieldIsValid)},this.getPreviousVal=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field).getAttribute(v.default.prevVal)},this.checkIfCurrent=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field).getAttribute("name");return!t||t!==f.event.target.name&&"submit"!==f.eventType?null:t},this.checkElig=function(t){var e=!1;try{t&&t in f.validators&&"events"in f.validators[t]&&Array.isArray(f.validators[t].events)&&(0===f.validators[t].events.length||-1!==f.validators[t].events.indexOf(f.eventType))&&(e=!0)}catch(t){}return e},this.getValidations=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=[],n=d.getAttr(t,v.default.fieldValidators);if(n){var a=d.splitString(n);if(a&&a.length)for(var r=0;r<a.length;r++)f.checkElig(a[r])&&e.push(a[r])}return e},this.getContainer=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=arguments[1],n=e?d.getAttr(t,e):null;return n?f.form.querySelector("#"+n):null},this.getCustomErrors=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,a={};return f.getValidations(n).forEach(function(t){var e=d.getAttr(n,v.default.invErrPrefix+t);e&&(a[t]=e)}),a},this.getLabel=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=null;try{var n=t.parentNode.previousElementSibling;e=n&&"label"===n.tagName.toLowerCase()?d.alphaNum(n.innerText):d.nameToString(t.getAttribute("name"))}catch(t){}return e},this.getCallbacks=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,r={valid:{},invalid:{}};return f.getValidations(a).forEach(function(t){var e=d.getAttr(a,v.default.fieldValidCallback+t);e&&(r.valid[t]=e);var n=d.getAttr(a,v.default.fieldInvalidCallback+t);n&&(r.invalid[t]=n)}),r},this.setFieldsValid=function(t,e){try{return Array.isArray(t)&&t.length&&t.forEach(function(t){f.field.getAttribute("name")!==t.getAttribute("name")&&f.valid(t,e)}),!0}catch(t){return!1}},this.setFieldsInvalid=function(t,e){try{return Array.isArray(t)&&t.length&&t.forEach(function(t){f.field.getAttribute("name")!==t.getAttribute("name")&&f.invalid(t,e,null,!0)}),!0}catch(t){return!1}},this.forceEvent=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;return setTimeout(function(){try{var t=new Event("change");e.dispatchEvent(t)}catch(t){}},100),!0},this.validate=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;try{var l=f.getValidations(o),u=d.getValue(o);return new c.default(function(t,e){f.checkIfCurrent(o)&&u&&o.setAttribute(v.default.prevVal,d.safeString(u)),l&&l.length||t();var n,a,r,i=null;(n=l,a=o,r=u,n.reduce(function(t,e){return t.then(function(){return i=e,f.validators[e].validator(a,r,e)})},new c.default.resolve)).then(function(){t(f.valid(o,i))}).catch(function(t){e(f.invalid(o,i,t))})})}catch(t){}},this.reset=function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;return new c.default(function(t,e){try{r.setAttribute(v.default.fieldIsValid,"true"),r.removeAttribute(v.default.prevVal);var n=f.getContainer(r,v.default.valTarget);n&&[v.default.fieldValid,v.default.validIcon,v.default.fieldInvalid,v.default.invIcon].forEach(function(t){n.classList.remove(t)});var a=f.getContainer(r,v.default.invMessage);a&&(a.innerText=""),t()}catch(t){e()}})},this.valid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=arguments[1];try{var n=t.getAttribute("name");f.form.querySelectorAll('[name="'+n+'"]').forEach(function(t){t.setAttribute(v.default.fieldIsValid,"true")});var a=f.getContainer(t,v.default.valTarget);a&&(a.classList.remove(v.default.fieldInvalid),a.classList.remove(v.default.invIcon),a.classList.add(v.default.fieldValid),d.getAttr(f.form,v.default.disableIcons)||d.getAttr(t,v.default.disableIcon)||a.classList.add(v.default.validIcon));var r=f.getContainer(t,v.default.invMessage);r&&(r.innerText="");var i=f.getCallbacks(t);if(f.checkIfCurrent(t)&&e&&e in i.valid&&i.valid[e]in window&&"function"==typeof window[i.valid[e]])try{d.debounce(window[i.valid[e]],v.default.debounceDefault)(s,f.form,n,e,"invalid")}catch(t){}}catch(t){}return!0},this.invalid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=arguments[1],n=arguments[2],a=arguments[3];f.checkIfCurrent();try{var r=t.getAttribute("name"),i=n;if(Array.isArray(n)&&(i=d.cleanArray(n).join(". ")+"."),f.form.querySelectorAll('[name="'+r+'"]').forEach(function(t){t.removeAttribute(v.default.fieldIsValid)}),f.checkIfCurrent(t)||a){var o=f.getContainer(t,v.default.valTarget);o&&(o.classList.remove(v.default.fieldValid),o.classList.remove(v.default.validIcon),o.classList.add(v.default.fieldInvalid),d.getAttr(f.form,v.default.disableIcons)||d.getAttr(t,v.default.disableIcon)||o.classList.add(v.default.invIcon));var l=f.getContainer(t,v.default.invMessage);i&&l&&(l.innerText=i);var u=f.getCallbacks(t);if(e&&e in u.invalid&&u.invalid[e]in window&&"function"==typeof window[u.invalid[e]])try{d.debounce(window[u.invalid[e]],v.default.debounceDefault)(s,f.form,r,e,"invalid",i)}catch(t){}}}catch(t){}return!1}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var h=r(n(3));n(1);var p=r(n(0)),a=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(v){var m=new a.default;return{require:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\S/.test(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:"This field can't be empty")}})}},email:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\S/.test(r)&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase()))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:"Please enter a valid e-mail address")}})}},length:{events:[],validator:function(i,o,l){return new h.default(function(t,e){var n=m.getAttr(i,p.default.lenMin)||1,a=m.getAttr(i,p.default.lenMax)||1;if(void 0!==o&&/\S/.test(o)&&o.length>=n&&o.length<=a)t();else{var r=v.getCustomErrors(i);e(l&&l in r?r[l]:"Should be between "+n+" and "+a+" characters")}})}},exact:{events:[],validator:function(r,i,o){return new h.default(function(t,e){var n=m.getAttr(r,p.default.lenExact)||1;if(void 0!==i&&/\S/.test(i)&&i.length===n)t();else{var a=v.getCustomErrors(r);e(o&&o in a?a[o]:"Should be "+n+" characters")}})}},compare:{events:[],validator:function(s,d,f){return new h.default(function(t,e){var n,a,r=m.getAttr(s,p.default.fieldCompare),i=r?v.form.querySelector('[name="'+r+'"]'):null,o=i?m.getValue(i):null,l=(n="Does not match",(a=v.getLabel(i))&&(n+=" "+a),n);if(void 0!==d&&/\S/.test(d)&&d===o)t();else{var u=v.getCustomErrors(s);e(f&&f in u?u[f]:l)}})}},number:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\S/.test(r)&&!isNaN(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:"Should be a number")}})}},numberexact:{events:[],validator:function(r,i,o){return new h.default(function(t,e){var n=m.getAttr(r,p.default.lenExact)||1;if(void 0!==i&&/\S/.test(i)&&!isNaN(i)&&i.length===n)t();else{var a=v.getCustomErrors(r);e(o&&o in a?a[o]:"Should be a "+n+" character number")}})}},numberrange:{events:[],validator:function(i,o,l){return new h.default(function(t,e){var n=m.getAttr(i,p.default.lenMin)||1,a=m.getAttr(i,p.default.lenMax)||1;if(void 0!==o&&/\S/.test(o)&&o.length>=n&&o.length<=a)t();else{var r=v.getCustomErrors(i);e(l&&l in r?r[l]:"Should be a number between "+n+" and "+a+" characters")}})}},zipcode:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\S/.test(r)&&/^\d{5}(?:[-\s]\d{4})?$/.test(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:"Please check your Zip/Postal Code")}})}},creditcard:{events:[],validator:function(r,o,l){return new h.default(function(t,e){var i,n=(i=[0,2,4,6,8,1,3,5,7,9],function(t){for(var e=(t=t.toString()).length,n=1,a=0,r=void 0;e;)r=parseInt(t.charAt(--e),10),a+=(n^=1)?i[r]:r;return a&&a%10==0});if(void 0!==o&&/\S/.test(o)&&/^\d{13,}$/.test(o)&&n(o))t();else{var a=v.getCustomErrors(r);e(l&&l in a?a[l]:"Please enter a valid credit card number (no spaces)")}})}},phone:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\S/.test(r)&&/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/.test(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:"Please enter a valid phone number")}})}},pattern:{events:[],validator:function(i,o,l){return new h.default(function(t,e){var n=i.getAttribute(p.default.fieldPattern);if(void 0!==n&&n&&n.length){var a=new RegExp(n,"g");if(void 0!==o&&/\S/.test(o)&&a.test(o))t();else{var r=v.getCustomErrors(i);e(l&&l in r?r[l]:"Incorrect format")}}else t("Problem reading pattern")})}},contains:{events:[],validator:function(r,i,o){return new h.default(function(t,e){var n=m.getAttr(r,p.default.fieldContains);if(n=n&&n.length?n.toLowerCase():null,void 0!==i&&/\S/.test(i)&&-1!==i.toLowerCase().indexOf(n))t();else{var a=v.getCustomErrors(r);e(o&&o in a?a[o]:'Should contain "'+n+'"')}})}},url:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\S/.test(r)&&/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(String(r).toLowerCase()))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:'Please enter a valid URL (starts with "http" or "https")')}})}},requiremin:{events:[],validator:function(l,t,u){return new h.default(function(t,e){var n=l.getAttribute("name"),a=m.getAttr(l,p.default.minThresh)||1,r=v.form.querySelectorAll('[name="'+n+'"]'),i=0;if(r&&r[0]&&r.forEach(function(t){m.getValue(t)&&i++}),a<=i)t();else{var o=v.getCustomErrors(l);e(u&&u in o?o[u]:"Please select "+m.digitWord(a))}})}},dependent:{events:[],validator:function(f,t,c){try{return new h.default(function(t,e){var n=m.getAttr(f,p.default.dependentFields),a=n?m.splitString(n):[],r=a.length?a.map(function(t){return'[name="'+t+'"]'}):[],i=r.length?v.form.querySelectorAll(r.join(",")):[],o=0,l=[];if(i.forEach(function(t){v.checkValid(t)?o++:l.push(t)}),o>=i.length)t();else{var u=null,s=v.getCustomErrors(f);if(c&&c in s)u=s[c];else{var d=l.length?l.map(function(t){return v.getLabel(t)}):[];u=d.length?"Please complete "+d.join(", "):null,l.length&&v.checkIfCurrent(f)&&v.setFieldsInvalid(l,c)}e(u)}})}catch(t){}}},expireddate:{events:[],validator:function(o,t,l){return new h.default(function(t,e){var a={},r=[];if(["year","month","day"].forEach(function(t){var e=v.form.querySelector("["+p.default.expireDate+'="'+t+'"]'),n=e?m.getValue(e):null;e&&n&&r.push(e),"year"===t&&(a[t]=n&&!isNaN(n)&&2===n.length?"20"+n.toString():n),"month"!==t&&"day"!==t||(a[t]=n&&!isNaN(n)&&1===n.length?"0"+n.toString():n)}),!a.year||!a.month)return t(),!0;var n=(new Date).toISOString().slice(0,10).replace(/-/g,"");if((n=a.day?parseInt(n):parseInt(n.substring(0,6)))<=parseInt(a.year+a.month+a.day))t(v.setFieldsValid(r,l));else{var i=v.getCustomErrors(o);e(l&&l in i?i[l]:"Appears to be expired - please check date")}})}},ajax:{events:[],validator:function(f,t,c){return new h.default(function(r,i){try{if(v.checkIfCurrent(f)){var t=v.getContainer(f,p.default.invMessage);if(t){var e=m.getAttr(f,p.default.ajaxProcessing);t.innerText=e||"Checking..."}var n=f.getAttribute("name"),a=m.getAttr(f,p.default.ajaxEndpoint),o=m.getAttr(f,p.default.ajaxKey),l=!0;if(a&&p.default.safeEndpoints&&/^http/.test(a.toLowerCase())&&(l=!1),l&&a&&o){var u=m.getValue(f),s=a+"?"+n+"="+u,d=new XMLHttpRequest;d.open("GET",s),d.timeout=p.default.ajaxTimeout,d.setRequestHeader("Content-Type","application/json"),d.onload=function(){if(200===d.status){var t=JSON.parse(d.responseText),e=f.getAttribute(p.default.ajaxValue)||u;if(t&&t[o].toString()===e)r(v.forceEvent(f));else{var n=v.getCustomErrors(f),a=c&&c in n?n[c]:"Does not validate";i(a)}}else r(v.forceEvent(f))},d.onerror=function(t){r(v.forceEvent(f))},d.ontimeout=function(t){r(v.forceEvent(f))},d.send()}else r(v.forceEvent(f))}else r(v.forceEvent(f))}catch(t){r()}})}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n(3),p=(a=r)&&a.__esModule?a:{default:a};e.default=function(s){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,f=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},c=void 0,v=void 0,m=void 0,h=[];return function(){var t,n,e="function"==typeof(t=d)?t():t,a=(new Date).getTime(),r=!c||e<a-c;c=a;for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];if(r&&f.leading)return f.accumulate?new p.default.resolve(s.call(this,[o])).then(function(t){return t[0]}):new p.default.resolve(s.call.apply(s,[this].concat(o)));if(v?clearTimeout(m):((n={}).promise=new p.default(function(t,e){n.resolve=t,n.reject=e}),v=n),h.push(o),m=setTimeout(function(){var t=v;clearTimeout(m),new p.default.resolve(f.accumulate?s.call(this,h):s.apply(this,h[h.length-1])).then(t.resolve,t.reject),h=[],v=null}.bind(this),e),f.accumulate){var u=h.length-1;return v.promise.then(function(t){return t[u]})}return v.promise}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{default:a};var o=' \t[data-jsv-form-tooltip] { \t  position: relative; \t  cursor: pointer; \t  outline: none!important; \t} \t[data-jsv-form-tooltip]:before, \t[data-jsv-form-tooltip] { \t  position: relative; \t  cursor: pointer; \t} \t[data-jsv-form-tooltip]:before, \t[data-jsv-form-tooltip]:after { \t  position: absolute; \t  visibility: hidden; \t  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"; \t  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0); \t  opacity: 0; \t  -webkit-transition: \t\t  opacity 0.2s ease-in-out, \t\t\tvisibility 0.2s ease-in-out, \t\t\t-webkit-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24); \t\t-moz-transition: \t\t\topacity 0.2s ease-in-out, \t\t\tvisibility 0.2s ease-in-out, \t\t\t-moz-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24); \t\ttransition: \t\t\topacity 0.2s ease-in-out, \t\t\tvisibility 0.2s ease-in-out, \t\t\ttransform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24); \t  -webkit-transform: translate3d(0, 0, 0); \t  -moz-transform:    translate3d(0, 0, 0); \t  transform:         translate3d(0, 0, 0); \t  pointer-events: none; \t} \t[data-jsv-form-tooltip]:hover:before, \t[data-jsv-form-tooltip]:hover:after { \t  visibility: visible; \t  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"; \t  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100); \t  opacity: 1; \t} \t[data-jsv-form-tooltip]:before { \t  border: 6px solid transparent; \t  background: transparent; \t  content: ""; \t} \t[data-jsv-form-tooltip]:after { \t  padding: 8px; \t  min-width: 120px; \t  white-space: nowrap; \t  background-color: #000; \t  background-color: hsla(0, 0%, 20%, 0.9); \t  color: #fff; \t  content: attr(data-jsv-form-tooltip); \t  font-size: 12px; \t  line-height: 1.2; \t} \t[data-jsv-form-tooltip]:before, \t[data-jsv-form-tooltip]:after { \t  bottom: 100%; \t  left: 50%; \t} \t[data-jsv-form-tooltip]:before { \t  margin-left: -6px; \t  margin-bottom: -12px; \t  border-top-color: #000; \t  border-top-color: hsla(0, 0%, 20%, 0.9); \t} \t[data-jsv-form-tooltip]:after { \t  margin-left: -60px; \t  z-index: 1; \t} \t[data-jsv-form-tooltip]:hover:before, \t[data-jsv-form-tooltip]:hover:after { \t  -webkit-transform: translateY(-12px); \t  -moz-transform:    translateY(-12px); \t  transform:         translateY(-12px); \t} \t.validate-form-error-message { \t\tcolor: '+i.default.isInvalidColor+"; \t} \t.validate-form-error-message.well { \t\tborder-color: "+i.default.isInvalidColor+"; \t} \t.validate-form-success-message { \t\tcolor: "+i.default.isValidColor+"; \t} \t.validate-form-success-message.well { \t\tborder-color: "+i.default.isValidColor+"; \t} \t.validate-field-error-message { \t\twidth: 100%; \t\tdisplay: block; \t\tcolor: "+i.default.isInvalidColor+"; \t\tfont: "+i.default.fieldErrorFont+";\t \t} \t.validate-form-hidden-message { \t\tdisplay: none; \t} \t.button-success, .button-success:hover { \t\tbackground-color: "+i.default.isValidColor+"; \t} \t.validate-input { \t\tposition: relative; \t} \t.validate-input.form-field-invalid input, \t.validate-input.form-field-invalid textarea, \t.validate-input.form-field-invalid select { \t\tborder: 1px solid "+i.default.isInvalidColor+"; \t} \t.validate-input.form-field-valid input, \t.validate-input.form-field-valid textarea, \t.validate-input.form-field-valid select { \t\tborder: 1px solid "+i.default.isValidColor+'; \t} \t.validate-input.form-field-valid-focusout::after { \t\tcontent: "'+i.default.isValidIcon+'"; \t\tcolor: '+i.default.isValidColor+';\t \t\tright:20px; \t\ttop:9px; \t\tposition:absolute;     \t} \t.validate-input.form-field-invalid-focusout::after { \t\tcontent: "'+i.default.isInvalidIcon+'"; \t\tcolor: '+i.default.isInvalidColor+";\t \t\tright:20px; \t\ttop:8px; \t\tposition:absolute; \t} ";e.default=o}]);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tns; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_calc_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_percentageLayout_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_removeCSSRule_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_toDegree_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_getTouchDirection_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__helpers_arrayFromNodeList_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__helpers_isVisible_js__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__helpers_has3DTransforms_js__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__helpers_getEndProperty_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__helpers_events_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__helpers_jsTransform_js__ = __webpack_require__(45);
// helper functions
if (!Object.keys) {
  Object.keys = function (object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}



































var tns = function(options) {
  options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  
  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tC']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tC', Object(__WEBPACK_IMPORTED_MODULE_6__helpers_calc_js__["a" /* calc */])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tPL']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tPL', Object(__WEBPACK_IMPORTED_MODULE_7__helpers_percentageLayout_js__["a" /* percentageLayout */])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tMQ']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tMQ', Object(__WEBPACK_IMPORTED_MODULE_8__helpers_mediaquerySupport_js__["a" /* mediaquerySupport */])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTf']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTf', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['t3D']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 't3D', Object(__WEBPACK_IMPORTED_MODULE_28__helpers_has3DTransforms_js__["a" /* has3DTransforms */])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTDu']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTDu', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTDe']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTDe', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tADu']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tADu', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tADe']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tADe', Object(__WEBPACK_IMPORTED_MODULE_27__helpers_whichProperty_js__["a" /* whichProperty */])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tTE']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tTE', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_getEndProperty_js__["a" /* getEndProperty */])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(__WEBPACK_IMPORTED_MODULE_3__helpers_checkStorageValue_js__["a" /* checkStorageValue */])(tnsStorage['tAE']) : Object(__WEBPACK_IMPORTED_MODULE_4__helpers_setLocalStorage_js__["a" /* setLocalStorage */])(tnsStorage, 'tAE', Object(__WEBPACK_IMPORTED_MODULE_29__helpers_getEndProperty_js__["a" /* getEndProperty */])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], 
      optionsElements = {};
      
  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(__WEBPACK_IMPORTED_MODULE_9__helpers_createStyleSheet_js__["a" /* createStyleSheet */])(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = slideCountNew, result = i - 1; i--;) {
              if (slidePositions[i] > - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new __WEBPACK_IMPORTED_MODULE_32__helpers_events_js__["a" /* Events */](),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(__WEBPACK_IMPORTED_MODULE_5__helpers_getSlideId_js__["a" /* getSlideId */])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? 
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }
  
  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex : 
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : 
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    // if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? 
        CALC + '(100% / ' + dividend + ')' : 
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes 
    // before clone slides
    Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal); }
      Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(), 
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add complete class if all images are loaded/failed
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(imgs, function(img) {
        var src = img.src;
        
        if (src.indexOf('data:image') < 0) {
          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);
          img.src = '';
          img.src = src;
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loading');

          // check image cache
          if (img.complete) { img.naturalWidth !== 0 ? imgLoaded(img) : imgFailed(img); }
        } else if (!lazyload) {
          imgLoaded(img);
        }
      });

      // All imgs are completed
      Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(Object(__WEBPACK_IMPORTED_MODULE_23__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), function() { imgsComplete = true; }); });

      // Check imgs in window only for auto height
      if (!autoWidth && horizontal) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(Object(__WEBPACK_IMPORTED_MODULE_23__helpers_arrayFromNodeList_js__["a" /* arrayFromNodeList */])(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;
      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?
        initSliderTransformCore() :
        setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) { 
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, 'font-size:0;', Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      } else if (carousel) {
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-mw', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + '-iw', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId, str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, visibilityEvent); }
      }
    }
 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(navItems, function(item, i) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
      }

      Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(navItems[navCurrentIndex], 'tabindex');
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(navItems[navCurrentIndex], navActiveClass);

      // add events
      Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }
      
      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(prevButton, {'data-controls' : 'prev'});
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(controlsContainer, controlsEvents);
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(prevButton, controlsEvents);
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, eve);
    }

    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents); }
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent); }
    if (controlsContainer) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(controlsContainer, controlsEvents); }
    if (navContainer) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(navContainer, navEvents); }

    // autoplay
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, visibilityEvent);
    if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, eve);
    }
    if (touch) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents); }
    if (mouseDrag) { Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }
    
    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(doc, docmentKeydownEvent) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(controlsContainer);
        } else {
          if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(prevButton); }
          if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(nextButton); }
        }
      } else {
        if (controlsContainer) {
          Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
        } else {
          if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(prevButton); }
          if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      nav ?
        Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(navContainer) :
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(navContainer);
    }
    if (touch !== touchTem) {
      touch ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, touchEvents, options.preventScrollOnTouch) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, dragEvents) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(container, hoverEvents) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(doc, visibilityEvent) :
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) { 
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad(); 
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged || !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        }

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          Object(__WEBPACK_IMPORTED_MODULE_11__helpers_removeCSSRule_js__["a" /* removeCSSRule */])(sheet, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet) - 1);
          Object(__WEBPACK_IMPORTED_MODULE_10__helpers_addCSSRule_js__["a" /* addCSSRule */])(sheet, '#' + slideId + ' > .tns-item', str, Object(__WEBPACK_IMPORTED_MODULE_12__helpers_getCssRulesLength_js__["a" /* getCssRulesLength */])(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(autoplayButton); }
    if (!nav && navContainer) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(controlsContainer);
      } else {
        if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(prevButton); }
        if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(autoplayButton); }
    if (nav && navContainer) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(navContainer); }
    if (controls) {
      if (controlsContainer) {
        Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(controlsContainer);
      } else {
        if (prevButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(prevButton); }
        if (nextButton) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(slideItems[i], str); }
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slideItems[i], str); }
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(slideItems[j]); }
        Object(__WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */])(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(innerWrapper, ['style']); }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['style']);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(slideItems[j]); }
        Object(__WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */])(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end; 
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(img, eve);

          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(img, imgEvents);

          // update src
          img.src = Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-src');

          // update srcset
          var srcset = Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    console.log(img, img.src);
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(img, 'tns-complete');
    Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(img, 'loading');
    Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(img, imgEvents);
  }

  function getImageArray (start, end) {
    var imgs = [];
    while (start <= end) {
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems[start].querySelectorAll('img'), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check selected image classes otherwise
    imgs.forEach(function (img, index) {
      if (Object(__WEBPACK_IMPORTED_MODULE_16__helpers_hasClass_js__["b" /* hasClass */])(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ imgsLoadedCheck(imgs, cb); });
  } 

  function additionalUpdates () {
    doLazyLoad(); 
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'aria-hidden')) {
          Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(item, ['aria-hidden', 'tabindex']);
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(item, 'aria-hidden')) {
          Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateIn);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateIn);
      }

      // remove outlet animation
      Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      Object(__WEBPACK_IMPORTED_MODULE_15__helpers_forEach_js__["a" /* forEach */])(slideItems, function(el) {
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(navPrev, navActiveClass);
        
        Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        Object(__WEBPACK_IMPORTED_MODULE_22__helpers_removeAttrs_js__["a" /* removeAttrs */])(navCurrent, 'tabindex');
        Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, classOut);
      Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!speed || !Object(__WEBPACK_IMPORTED_MODULE_26__helpers_isVisible_js__["a" /* isVisible */])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(__WEBPACK_IMPORTED_MODULE_33__helpers_jsTransform_js__["a" /* jsTransform */])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(slideItems[indexCached], eve);
        Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(__WEBPACK_IMPORTED_MODULE_26__helpers_isVisible_js__["a" /* isVisible */])(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) { 
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          Object(__WEBPACK_IMPORTED_MODULE_18__helpers_removeClass_js__["a" /* removeClass */])(item, animateOut);
          Object(__WEBPACK_IMPORTED_MODULE_17__helpers_addClass_js__["a" /* addClass */])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        } 

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(), 
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    
    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) { target = target.parentNode; }
    if (Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(__WEBPACK_IMPORTED_MODULE_21__helpers_setAttrs_js__["a" /* setAttrs */])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) { 
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!Object(__WEBPACK_IMPORTED_MODULE_19__helpers_hasAttr_js__["a" /* hasAttr */])(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(__WEBPACK_IMPORTED_MODULE_20__helpers_getAttr_js__["a" /* getAttr */])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return Object(__WEBPACK_IMPORTED_MODULE_14__helpers_getTouchDirection_js__["a" /* getTouchDirection */])(Object(__WEBPACK_IMPORTED_MODULE_13__helpers_toDegree_js__["a" /* toDegree */])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }
    
    panStart = true;
    if (rafIndex) {
      Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if (preventScroll) { e.preventDefault(); }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
    if (panStart) { rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        Object(__WEBPACK_IMPORTED_MODULE_1__helpers_caf_js__["a" /* caf */])(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(__WEBPACK_IMPORTED_MODULE_30__helpers_addEvents_js__["a" /* addEvents */])(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            Object(__WEBPACK_IMPORTED_MODULE_31__helpers_removeEvents_js__["a" /* removeEvents */])(target, {'click': preventClick});
          }}); 
        }

        if (carousel) {
          rafIndex = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_raf_js__["a" /* raf */])(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; } 
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = __WEBPACK_IMPORTED_MODULE_25__helpers_showElement_js__["a" /* showElement */];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = __WEBPACK_IMPORTED_MODULE_24__helpers_hideElement_js__["a" /* hideElement */];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.0',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(Object(__WEBPACK_IMPORTED_MODULE_2__helpers_extend_js__["a" /* extend */])(options, optionsElements));
    }
  };
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return caf; });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = extend;
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = checkStorageValue;
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setLocalStorage;
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSlideId;
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = percentageLayout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mediaquerySupport;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);




function mediaquerySupport () {
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : div.remove();

  return position === "absolute";
}

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createStyleSheet;
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addCSSRule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(3);
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeCSSRule;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__raf_js__ = __webpack_require__(3);
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCssRulesLength;
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDegree;
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTouchDirection;
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = forEach;
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(4);

var addClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ?
    function (el, str) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removeClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass_js__ = __webpack_require__(4);

var removeClass = __WEBPACK_IMPORTED_MODULE_0__hasClass_js__["a" /* classListSupport */] ?
    function (el, str) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (Object(__WEBPACK_IMPORTED_MODULE_0__hasClass_js__["b" /* hasClass */])(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasAttr;
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAttr;
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(6);


function setAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeAttrs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeList_js__ = __webpack_require__(6);


function removeAttrs(els, attrs) {
  els = (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeList_js__["a" /* isNodeList */])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = arrayFromNodeList;
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hideElement;
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showElement;
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isVisible;
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = whichProperty;
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = has3DTransforms;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBody_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__ = __webpack_require__(2);




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = Object(__WEBPACK_IMPORTED_MODULE_0__getBody_js__["a" /* getBody */])(),
      docOverflow = Object(__WEBPACK_IMPORTED_MODULE_1__setFakeBody_js__["a" /* setFakeBody */])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? Object(__WEBPACK_IMPORTED_MODULE_2__resetFakeBody_js__["a" /* resetFakeBody */])(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEndProperty;
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(7);


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeEvents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__ = __webpack_require__(7);


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? __WEBPACK_IMPORTED_MODULE_0__passiveOption_js__["a" /* passiveOption */] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Events;
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = jsTransform;
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ })
/******/ ]);