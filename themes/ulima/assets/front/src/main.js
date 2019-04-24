import UICountdown from '../lib/UICountdown'
// import UICarousel from '../lib/UICarousel'
import UIAccordion from '../lib/UIAccordion'
import Validate from 'validate.js'
import { tns } from '../node_modules/tiny-slider/src/tiny-slider'

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
btnSearch.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    boxSearch.classList.toggle('boxSearchShow')
  })
})

if (boxSearch) {
  boxSearch.addEventListener('keypress', function (evt) {
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
  btnOpenModal.addEventListener('click', function (evt) {
    evt.preventDefault()
    if (evt.target.id == 'btn_insCharla') {
      var selects = document.querySelectorAll('.select-horario'),
        someFill = false
      selects.forEach(function (item) {
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
    sec_slider.forEach(function (sli) {
      var btnNextSli = sli.querySelector('.tns-controls button[data-controls="next"]'),
        btnPrevSli = sli.querySelector('.tns-controls button[data-controls="prev"]')
  
      var listDots = sli.querySelector('.custom-dots'),
        totalDots = listDots.querySelectorAll('li').length,
        widthItem = 0,
        initPos = 0,
        containerMask = listDots.parentNode
  
      btnNextSli.addEventListener('click', function () {
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
      })
  
      btnPrevSli.addEventListener('click', function () {
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
      })
  
      function Moved (currentItem, initLimit, endLimit, dir) {
        var posInitX = currentItem.getBoundingClientRect().x,
          posEndX = posInitX + (currentItem.getBoundingClientRect().width + (parseInt(window.getComputedStyle(currentItem).marginLeft) * 2))
        return ((dir == 'R' && posEndX > endLimit) || (dir == 'L' && posInitX < initLimit)) ? true : false
      }
  
      function getMinDistance () { return getElementVisibles() * widthItem; }
  
      function getElementVisibles () {
        var widthContainer = containerMask.offsetWidth
        var numElementsVisible = (widthItem > widthContainer) ? 1 : Math.floor(widthContainer / widthItem)
        return numElementsVisible
        j
      }
  
      function translateX (newPos) {
        initPos = newPos
        listDots.style.cssText = 'transform: translate3d(' + newPos + 'px, 0px, 0px)'
      }
    });
  }

  var videoPopup = document.querySelector('.video_donde .cont_video'),
    listVideos = document.querySelectorAll('.cont_donde .test_egre .list-items .item-note')
  if (videoPopup) {
    videoPopup.addEventListener('click', function (evt) {
      evt.preventDefault()
      modalInscription.classList.add('modal_active')
    })
  }
  if (listVideos.length > 0) {
    listVideos.forEach(function (item, index) {
      item.addEventListener('click', function (evt) {
        var currentVideoAdm = modalInscription.querySelector('.custom-dots li[data-nav="' + index + '"]')
        var event = document.createEvent('HTMLEvents')
        event.initEvent('click', true, true)
        currentVideoAdm.dispatchEvent(event)
        modalInscription.classList.add('modal_active')
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

    function closeModalVideo (evt) {
      evt.preventDefault()
      modalInsVideo.classList.remove('modal_active')
      var videoIframe = modalInsVideo.querySelector('.video-iframe')
      if (videoIframe) {
        stopAllVideos()
      }
    }

    listVideosULima.forEach(function (item, index) {
      item.addEventListener('click', function (evt) {
        evt.preventDefault()
        var currentVideo = modalInsVideo.querySelector('.modal-video .custom-dots li[data-nav="' + index + '"]')
        var event = document.createEvent('HTMLEvents')
        event.initEvent('click', true, true)
        currentVideo.dispatchEvent(event)
        modalInsVideo.classList.add('modal_active')
      })
    })
  }
}
if (selectConvenios) selectConvenios.addEventListener('change', getDataCountry)

if (btnsInfraestructura && btnsInfraestructuraMob && window.location.pathname.indexOf('/infraestructura') != -1) {
  btnsInfraestructura.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault()
      modalInscription.classList.add('modal_active')
    })
  })
  btnsInfraestructuraMob.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault()
      modalInscription.classList.add('modal_active')
    })
  })

  var areasUl = document.querySelectorAll('#areas_ul .list-items .item-note')
  areasUl.forEach(function (area) {
    var optionsArea = area.querySelectorAll('figure ul li')
    optionsArea.forEach(function (option) {
      option.querySelector('a').addEventListener('click', function (evt) {
        evt.preventDefault()
        modalInscription.classList.add('modal_active')
      })
    })
  })

  var btnsImgInfra = document.querySelectorAll('.carousel-infra-pic .list-items .item-note')
  btnsImgInfra.forEach(function (btn, index) {
    btn.querySelector('figure a').addEventListener('click', function (evt) {
      evt.preventDefault()
      var modalImg = document.querySelector('.modal-img')
      modalImg.querySelector('.cerrar a').addEventListener('click', closeModalImg)
      modalImg.querySelector('.layer_dark').addEventListener('click', closeModalImg)
      function closeModalImg (evt) { evt.preventDefault(); modalImg.classList.remove('modal_active'); }

      var currentImg3 = modalImg.querySelector('.custom-dots li[data-nav="' + index + '"]')
      var event = document.createEvent('HTMLEvents')
      event.initEvent('click', true, true)
      currentImg3.dispatchEvent(event)

      modalImg.classList.add('modal_active')
    })
  })
}
if (btnMobileMenu) {
  btnMobileMenu.addEventListener('click', function () {
    menuNavMobile.classList.add('menu_on')
    document.body.style.overflowY = 'hidden'
    btnMobileMenu.style.display = 'none'
    btnMobileMenuClose.style.display = 'inline-block'
    document.querySelector('.src_movil').style.display = 'none'
  })
  btnMobileMenuClose.addEventListener('click', function (evt) {
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

  listItemsDep.forEach(function (item, index) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault()
      var modalImgDep = document.querySelector('.modal-img-taldep')
      modalImgDep.querySelector('.cerrar a').addEventListener('click', closeModalImgDep)
      modalImgDep.querySelector('.layer_dark').addEventListener('click', closeModalImgDep)
      function closeModalImgDep (evt) { evt.preventDefault(); modalImgDep.classList.remove('modal_active'); }

      var currentImgDep = modalImgDep.querySelector('.cont_galery_pu_modal .custom-dots li[data-nav="' + index + '"]')
      var event = document.createEvent('HTMLEvents')
      event.initEvent('click', true, true)
      currentImgDep.dispatchEvent(event)

      modalImgDep.classList.add('modal_active')
    })
  })

  var listItemsUli = sec_slider_uli.querySelectorAll('.carousel .list-items .item-note')

  listItemsUli.forEach(function (item, index) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault()
      var modalImgArt = document.querySelector('.modal-img-talart')
      modalImgArt.querySelector('.cerrar a').addEventListener('click', closemodalImgArt)
      modalImgArt.querySelector('.layer_dark').addEventListener('click', closemodalImgArt)
      function closemodalImgArt (evt) { evt.preventDefault(); modalImgArt.classList.remove('modal_active'); }

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

  listItemConv.forEach(function (item, index) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault()
      var modalImgConv = document.querySelector('.modal-img-conv')
      modalImgConv.querySelector('.cerrar a').addEventListener('click', closemodalImgConv)
      modalImgConv.querySelector('.layer_dark').addEventListener('click', closemodalImgConv)
      function closemodalImgConv (evt) { evt.preventDefault(); modalImgConv.classList.remove('modal_active'); }

      var currentVideoConv = modalImgConv.querySelector('.custom-dots li[data-nav="' + index + '"]')
      var event = document.createEvent('HTMLEvents')
      event.initEvent('click', true, true)
      currentVideoConv.dispatchEvent(event)

      modalImgConv.classList.add('modal_active')
    })
  })
}

var modal_steps = document.querySelector('#modal_steps')

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
  /*var selects = modalSteps.querySelectorAll('.item_selecole select')
  select.forEach(function (sel) {
    sel.addEventListener('change', function () {
      var ts = sel.parentNode.parentNode.querySelectorAll('.item_selecole').lenght
      if (ts == 1) {
        flagOneCole = true
        btnStep2Register.parentNode.classList.remove('back_cal')
        btnStep2Register.parentNode.classList.add('next_cal')
      } else {
        flagDiffCole = true
        btnStep3Register.parentNode.classList.remove('back_cal')
        btnStep3Register.parentNode.classList.add('next_cal')
      }
    })
  })*/
  btnStep1OneCole.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(2)
  })
  btnStep1DiffCole.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(3)
  })
  btnStep2Back.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(1)
  })
  btnStep2Register.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(4)
    var count = parseInt(countCredit.textContent)
    calcDerecho(count)
  })
  btnStep3Back.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(1)
  })
  btnStep3Register.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(4)
    var count = parseInt(countCredit.textContent)
    calcDerecho(count)
  })
  btnStep4Back.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(3)
  })
  btnStep4Siguiente.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(5)
  })
  btnStep5Back.addEventListener('click', function (evt) {
    evt.preventDefault()
    goToStep(4)
  })
  btnPrintStep5.addEventListener('click', function (evt) {
    evt.preventDefault()
    closeModal(evt)
    goToStep(1)
  })
  if (btnAdd) {
    btnAdd.addEventListener('click', function (evt) {
      evt.preventDefault()
      var count = parseInt(countCredit.textContent)
      count += 1
      calcDerecho(count)
      countCredit.textContent = count
    })
    btnLess.addEventListener('click', function (evt) {
      evt.preventDefault()
      var count = parseInt(countCredit.textContent)
      count -= (count <= 0) ? 0 : 1
      calcDerecho(count)
      countCredit.textContent = count
    })
  }
  if (inputTextAutoComplete) {
    inputTextAutoComplete.forEach(function (input) {
      input.addEventListener('keyup', function (evt) {
        var keyCode = evt.keyCode || evt.charCode || evt.which
        if (input.value.trim() != '' && !(keyCode > 8 && keyCode < 19)) getAutocomplete(input.value)
      })
    })
  }
}

var secMaps = document.getElementById('sec_maps')

if (secMaps) {
  secMaps.addEventListener('click', function (evt) {
    if (evt.target.id == 'sec_maps' || evt.target.className.indexOf('mod_contacto') != -1) {
      window.open('https://www.google.com/maps/place/Universidad+de+Lima/@-12.0847243,-76.9732035,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c7b2985b2f5d:0xc55a9050acb093fc!8m2!3d-12.0847243!4d-76.9710095', '_blank')
    }
  })
}

var videosEmbed = document.querySelectorAll('.video-iframe')
if (videosEmbed) {
  videosEmbed.forEach(function (video) {
    video.setAttribute('src', video.getAttribute('src') + '?enablejsapi=1')
  })
}

function calcDerecho (credit_amount) {
  var credit_value = modal_steps.querySelector('#credit_value').getAttribute('data-credito'),
    calcAmount = modal_steps.querySelector('#calcAmount'),
    totalCicle = modal_steps.querySelector('#totalAmount'),
    derechoMatricula = modal_steps.querySelector('#derecho_matricula').getAttribute('data-matricula'),
    calc = 0

  calc = parseInt(credit_value) * credit_amount
  calcAmount.textContent = 'S/ ' + calc
  totalCicle.textContent = 'S/ ' + (calc + parseInt(derechoMatricula))
}

function stopAllVideos () {
  var allVideos = document.querySelectorAll('.video-iframe')
  allVideos.forEach(function (video) {
    video.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
  })
}

function goToStep (step) {
  modal_steps.querySelector('#modal_step1').style.display = 'none'
  modal_steps.querySelector('#modal_step2').style.display = 'none'
  modal_steps.querySelector('#modal_step3').style.display = 'none'
  modal_steps.querySelector('#modal_step4').style.display = 'none'
  modal_steps.querySelector('#modal_step5').style.display = 'none'

  modal_steps.querySelector('#modal_step' + step).style.display = 'block'

/*if (step == 2 || step == 3) {

}*/
}

function initAccordion () {
  var selectorAccordions = '.ui-accordion',
    accordions = document.querySelectorAll(selectorAccordions)

  accordions.forEach(function (item) {
    new UIAccordion({
      el: item,
      viewOneAtTheTime: true,
      allCloser: false,
      withButtons: false
    })
  })
}

function initCountdown () {
  var selectorCountdown = '#clockdiv',
    countdown = document.querySelector(selectorCountdown)
  if (countdown) {
    new UICountdown({
      el: countdown,
      deadline: countdown.getAttribute('data-endtime')
    })
  }
}

function initCarousel () {
  var selectorSliders = '.carousel .list-items',
    sliders = document.querySelectorAll(selectorSliders)

  sliders.forEach(function (item) {
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

function initValidateForm () {
  var selectorForm = '.form-validate',
    forms = document.querySelectorAll(selectorForm)

  forms.forEach(function (form) {
    var chkTerm = form.querySelector('input[name="terminos"]');
    if (chkTerm) {
      var submit = form.querySelector('input[type="submit"]');
      chkTerm.addEventListener('change', function () {
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
  form.querySelectorAll('.input_form').forEach(function (input) {
    fill *= (input.value) ? 1 : 0;
  })
  return (fill == 0) ? false : true;
} 

function closeModal (evt) {
  evt.preventDefault()
  modalInscription.classList.remove('modal_active')
  var videoIframe = modalInscription.querySelector('.video-iframe')
  if (videoIframe) {
    stopAllVideos()
  }
}
function getAutocomplete (val) {
  var promiseAutoComplete = fetchData(URL_AUTOCOMPLETE + '?term=' + val.replace(' ', '+'), true)
  promiseAutoComplete.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(xhpromiseAutoCompleter.responseText)
    }
  }
}

function getDataCountry (evt) {
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

function fetchData (url, isWithAuth) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  // if (isWithAuth) {
  xhr.setRequestHeader('Authorization', 'Basic ' + btoa('ulima:ulima'))
  // }
  xhr.send()
  return xhr
}

function validateForm (evt) {
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

function showErrors (form, errors) {
  var fields = form.querySelectorAll("input[name]:not([type='submit']), select[name]")
  fields.forEach(function (input) {
    showErrorsForInput(input, errors)
  })
}

function showErrorsForInput (input, errors) {
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

function resetFormGroup (formGroup) {
  formGroup.classList.remove('has-error')
  formGroup.classList.remove('has-success')
  var errors = formGroup.querySelectorAll('.help-block.error')
  errors.forEach(function (el) {
    el.parentNode.removeChild(el)
  })
}

function addError (messages, error) {
  var block = document.createElement('p')
  block.classList.add('help-block')
  block.classList.add('error')
  block.innerHTML = error
  messages.appendChild(block)
}

function showSuccess () {
  alert('Success!')
}
