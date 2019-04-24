<?php

/* themes/ulima/templates/layout/page.html.twig */
class __TwigTemplate_0a392a78e5900516a3fa06f0723ab0ceef8882332adebc68943eb2c6415fec70 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 20, "set" => 25, "for" => 164);
        $filters = array("clean_id" => 25, "without" => 30, "replace" => 62, "striptags" => 62);
        $functions = array("getArticlePortada" => 164, "validarUrl" => 195);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set', 'for'),
                array('clean_id', 'without', 'replace', 'striptags'),
                array('getArticlePortada', 'validarUrl')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 7
        echo "<div id=\"wrapper\" class=\"wrapper r_search\">
  <div class=\"r_busqueda\" style=\"display:none;\">
<form class=\"cont_rbusqueda\" action=\"/search/node\">
  
      <div class=\"search_r\">
        <input class=\"srch_btn\" name=\"\" type=\"button\">|
        <input type=\"text\" name=\"keys\" class=\"srch_input\" value=\"¿Qué estás buscando?\">
      </div>
    </form>
  </div>
  <div class=\"header\">
    <div class=\"cont_nav\">
      <div class=\"center-nav\">
        ";
        // line 20
        if ($this->getAttribute(($context["page"] ?? null), "header", array())) {
            // line 21
            echo "        <figure class=\"logo\">
          ";
            // line 22
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", array()), "html", null, true));
            echo "
        </figure>
        ";
        }
        // line 25
        echo "        ";
        $context["heading_id"] = ($this->getAttribute(($context["attributes"] ?? null), "id", array()) . \Drupal\Component\Utility\Html::getId("-menu"));
        // line 26
        echo "        <span class=\"hamb\"> <span></span> <span></span> <span></span> </span> 
<input class=\"btn_src src_movil\" name=\"\" type=\"button\">
<a href=\"#\" class=\"close_src_menu\">&#10005;</a>
        <nav id=\"menu-nav\" role=\"navigation\" aria-labelledby=\"";
        // line 29
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["heading_id"] ?? null), "html", null, true));
        echo "\"
          ";
        // line 30
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without(($context["attributes"] ?? null), "role", "aria-labelledby"), "html", null, true));
        echo ">
          ";
        // line 31
        if ($this->getAttribute(($context["page"] ?? null), "main_navigation", array())) {
            // line 32
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "main_navigation", array()), "html", null, true));
            echo "
          ";
        }
        // line 34
        echo "          <div class=\"cont_buscar \">
            <!--agregar clase \"expan\" para expandir-->
            <input class=\"camp_buscar\" name=\"\" type=\"text\" placeholder=\"¿Qué estás buscando?\">
            <input class=\"btn_src\" name=\"\" type=\"button\">
            <a href=\"#\" class=\"close_src\">&#10005;</a>
          </div>
        </nav>
      </div>
    </div>
  </div>

  ";
        // line 45
        if (($context["is_front"] ?? null)) {
            // line 46
            echo "  ";
            // line 47
            echo "  ";
            if (($context["slideshow_display"] ?? null)) {
                // line 48
                echo "  <!--section1-->
  <div class=\"main-slider carousel\">
    <div class=\"content container-list\">
      <div>
        <ul class=\"list-items\" autoplay infinite with-dots countitem-mob=\"1\" countitem-desk=\"1\">
          <li class=\"item-note item_slider sl1\">
            <figure>
              <picture>
                <source media=\"(max-width: 770px)\" srcset=\"/themes/ulima/assets/img/portada_movil/slide1.jpg\">
                <img src=\"";
                // line 57
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide1_image"] ?? null), "html", null, true));
                echo "\" alt=\" \" style=\"width:100%;\">
              </picture>
            </figure>
            ";
                // line 60
                if ((($context["slide1_head"] ?? null) || ($context["slide1_desc"] ?? null))) {
                    // line 61
                    echo "            <div class=\"cont_msj_s\">
              <h2>";
                    // line 62
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_replace_filter(strip_tags(($context["slide1_head"] ?? null)), array("|" => "<br>")), "html", null, true));
                    echo "<span></span></h2>
              <h3>10 de marzo de 2019 </h3>
              <div class=\"btn_ir\"> <span> <a href=\"";
                    // line 64
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide1_url"] ?? null)), "html", null, true));
                    echo "\">INSCRÍBETE AQUÍ</a> </span> </div>
              ";
                    // line 65
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide1_desc"] ?? null), "html", null, true));
                    echo "
              ";
                    // line 68
                    echo "            </div>
            ";
                }
                // line 70
                echo "          </li>


          <li class=\"item-note item_slider sl2\">
            <figure>
              <picture>
                <source media=\"(max-width: 770px)\" srcset=\"/themes/ulima/assets/img/portada_movil/slide2.jpg\">
                <img src=\"";
                // line 77
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide2_image"] ?? null), "html", null, true));
                echo "\" alt=\" \" style=\"width:100%;\">
              </picture>
            </figure>
            ";
                // line 80
                if ((($context["slide2_head"] ?? null) || ($context["slide2_desc"] ?? null))) {
                    // line 81
                    echo "            ";
                    if (($context["slide2_head"] ?? null)) {
                        // line 82
                        echo "            ";
                        // line 83
                        echo "            ";
                    }
                    // line 84
                    echo "            <div class=\"cont_msj_s\">
              <h2>";
                    // line 85
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide2_head"] ?? null)), "html", null, true));
                    echo "<span></span></h2>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide2_desc"] ?? null), "html", null, true));
                    echo "
              <div class=\"btn_ir\"> <span> <a href=\"";
                    // line 86
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide2_url"] ?? null)), "html", null, true));
                    echo "\">INFÓRMATE AQUÍ</a> </span> </div>
            </div>
            ";
                }
                // line 89
                echo "          </li>
          <li class=\"item-note item_slider sl2 sl3\">
            <figure>
              <picture>
                <source media=\"(max-width: 770px)\" srcset=\"/themes/ulima/assets/img/portada_movil/slide3.jpg\">
                <img src=\"";
                // line 94
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide3_image"] ?? null), "html", null, true));
                echo "\" alt=\" \" style=\"width:100%;\">
              </picture>
            </figure>
            ";
                // line 97
                if ((($context["slide3_head"] ?? null) || ($context["slide3_desc"] ?? null))) {
                    // line 98
                    echo "            <div class=\"cont_msj_s\">
              <h2>";
                    // line 99
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide3_head"] ?? null)), "html", null, true));
                    echo "<span></span></h2>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide3_desc"] ?? null), "html", null, true));
                    echo "
              <div class=\"btn_ir\"> <span> <a href=\"";
                    // line 100
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide3_url"] ?? null)), "html", null, true));
                    echo "\">MÁS INFORMACIÓN</a> </span> </div>
            </div>
            ";
                }
                // line 103
                echo "          </li>



        </ul><!-- /slides -->
      </div>
    </div>
  </div>
  ";
            }
            // line 112
            echo "  ";
        }
        // line 113
        echo "


  ";
        // line 139
        echo "
  ";
        // line 151
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "preface_first", array())) {
            // line 152
            echo "  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "preface_first", array()), "html", null, true));
            echo "
  ";
            // line 153
            if (($context["is_front"] ?? null)) {
                // line 154
                echo "  <!--section3-->
  <div class=\"ncarreras\">
    <div class=\"cont_carreras\">
      <h2>Nuestras Carreras</h2>
      <p>Aquí conocerás nuestras carreras para que puedas desempeñarte como profesional.</p>
      <form action=\"#\" id=\"formSelectCarrera\" class=\"form-validate\" method=\"post\" novalidate>

        <div class=\"custom-select \">
          <select>
            <option value=\"\">¿En qué carrera estás interesado?</option>
            ";
                // line 164
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->env->getExtension('Drupal\contacto\TwigExtension')->getArticlePortada());
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 165
                    echo "            <option value=\"/carreras/";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["key"], "html", null, true));
                    echo "\">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["item"], "html", null, true));
                    echo "</option>
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 167
                echo "          </select>
        </div>
        <!--<div class=\"message-error\"><p class=\"help-block error\">Seleccione una opcion para continuar.</p></div>-->
        <input type=\"submit\" id=\"Ir a la carrera\" value=\"Ir a la carrera\">
      </form>
    </div>
  </div>
  ";
            }
            // line 175
            echo "  ";
        }
        // line 176
        echo "
  ";
        // line 177
        if ($this->getAttribute(($context["page"] ?? null), "content_top", array())) {
            // line 178
            echo "  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_top", array()), "html", null, true));
            echo "
  ";
        }
        // line 180
        echo "  ";
        if (($context["show_breadcrumbs"] ?? null)) {
            // line 181
            echo "  ";
            if (($context["breadcrumb"] ?? null)) {
                // line 182
                echo "  ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["breadcrumb"] ?? null), "html", null, true));
                echo "
  ";
            }
            // line 184
            echo "  ";
        }
        // line 185
        echo "  ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["messages"] ?? null), "html", null, true));
        echo "

  ";
        // line 187
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 188
            echo "  <div id=\"my-account\" id=\"my-account\">
    ";
            // line 189
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
  </div>
  ";
        }
        // line 192
        echo "

  ";
        // line 194
        if ($this->getAttribute(($context["page"] ?? null), "content", array())) {
            // line 195
            echo "  ";
            if ($this->env->getExtension('Drupal\contacto\TwigExtension')->validarUrl()) {
                // line 196
                echo "  <div class=\"resultado_b\">
    <div class=\"cont_rbusqueda\">
      ";
                // line 198
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
    </div>
  </div>
  ";
            } else {
                // line 202
                echo "  ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
  ";
            }
            // line 204
            echo "  ";
        }
        // line 205
        echo "
  <div class=\"nfooter\">
    <div class=\"cont_footer\">
      <div class=\"footer1\">
        <figure> <a href=\"\"> <img src=\"/themes/ulima/assets/images/logoulima2.svg\"></a> </figure>
        ";
        // line 210
        if ($this->getAttribute(($context["page"] ?? null), "footer", array())) {
            // line 211
            echo "        ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer", array()), "html", null, true));
            echo "
        ";
        }
        // line 213
        echo "        ";
        if (((($this->getAttribute(($context["page"] ?? null), "footer_first", array()) || $this->getAttribute(($context["page"] ?? null), "footer_second", array())) || $this->getAttribute(($context["page"] ?? null), "footer_third", array())) || $this->getAttribute(($context["page"] ?? null), "footer_fourth", array()))) {
            // line 214
            echo "
        ";
            // line 215
            if ($this->getAttribute(($context["page"] ?? null), "footer_first", array())) {
                // line 216
                echo "        ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_first", array()), "html", null, true));
                echo "
        ";
            }
            // line 218
            echo "        ";
            // line 227
            echo "
        ";
        }
        // line 229
        echo "

      </div>
      <div class=\"footer2\">
        <div class=\"datos_ul\">
          <div class=\"dul d1\">
            <span> </span>
            <h4>Av. Javier Prado Este N.° 4600
              Urb. Fundo Monterrico Chico
              Santiago de Surco - Lima
            </h4>
          </div>
          <div class=\"dul d2\">
            <span> </span>
            <h4>+511 4376767</h4>
          </div>
          <div class=\"dul d3\">
            <span> </span>
            <h4><a href=\"mailto:admision@ulima.edu.pe\">admision@ulima.edu.pe</a></h4>
          </div>
        </div>
        <div class=\"suscrib_ul\">
          <h3>Suscríbete a #SomosUlima</h3>
          <p> Infórmate de nuestras últimas actividades y comunicaciones</p>
          <div class=\"contsuscri\">
            <form id=\"form-suscribe\" action=\"#\" class=\"form-validate\" method=\"post\" novalidate=\"\" _lpchecked=\"1\">
              <div class=\"form-group\">
                <input id=\"email_suscriptor_footer\" class=\"t_input form-control\" name=\"email\" type=\"email\" placeholder=\"Correo electrónico\">
                <div class=\"message-error\"></div>
              </div>
              <input id=\"btn_suscripte\" class=\"t_btn\" type=\"submit\" value=\"SUSCRÍBETE\">
            </form>
          </div>
        </div>
      </div>
      <div class=\"footer3\">
        <div class=\"enlaces_ulima\"> Enlaces de interés: <span> <a href=\"http://www.ulima.edu.pe/\"> ulima.edu.pe </a></span>
          <span> <a href=\"http://egresadosnotables.ulima.edu.pe\"> egresadosnotables.ulima.edu.pe </a></span> <span> <a
              href=\"http://laboral.ulima.edu.pe\"> laboral.ulima.edu.pe </a></span></div>
        <div class=\"contsocial\">
          <ul>
            <li><a href=\"\"> </a></li>
            <li class=\"s2\"><a href=\"\"> </a></li>
            <li class=\"s3\"><a href=\"\"> </a></li>
            <li class=\"s4\"><a href=\"\"> </a></li>
            <li class=\"s5\"><a href=\"\"> </a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


</div>
";
        // line 283
        if ($this->getAttribute(($context["page"] ?? null), "footer_fourth", array())) {
            // line 284
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_fourth", array()), "html", null, true));
            echo "
";
        }
        // line 286
        echo "
";
        // line 287
        if ($this->getAttribute(($context["page"] ?? null), "help", array())) {
            // line 288
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
            echo "
";
        }
        // line 290
        echo "<script>
  var x, i, j, selElmnt, a, b, c;

  x = document.getElementsByClassName(\"custom-select\");
  for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName(\"select\")[0];

      a = document.createElement(\"DIV\");
      a.setAttribute(\"class\", \"select-selected\");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);

      b = document.createElement(\"DIV\");
      b.setAttribute(\"class\", \"select-items select-hide\");
      for (j = 1; j < selElmnt.length; j++) {

          c = document.createElement(\"DIV\");
          var dataurl = selElmnt[j].getAttribute(\"value\"); //añadir
          c.setAttribute(\"value\", dataurl); //añadir
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener(\"click\", function(e) {

              var y, i, k, s, h;
              s = this.parentNode.parentNode.getElementsByTagName(\"select\")[0];
              h = this.parentNode.previousSibling;
              for (i = 0; i < s.length; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                      s.selectedIndex = i;
                      h.innerHTML = this.innerHTML;
                      y = this.parentNode.getElementsByClassName(\"same-as-selected\");
                      for (k = 0; k < y.length; k++) {
                          y[k].removeAttribute(\"class\");
                      }
                      this.setAttribute(\"class\", \"same-as-selected\");
                      break;
                  }
              }
              h.click();
          });
          b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener(\"click\", function(e) {

          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle(\"select-hide\");
          this.classList.toggle(\"select-arrow-active\");
      });
  }

  function closeAllSelect(elmnt) {

      var x, y, i, arrNo = [];
      x = document.getElementsByClassName(\"select-items\");
      y = document.getElementsByClassName(\"select-selected\");
      for (i = 0; i < y.length; i++) {
          if (elmnt == y[i]) {
              arrNo.push(i)
          } else {
              y[i].classList.remove(\"select-arrow-active\");
          }
      }
      for (i = 0; i < x.length; i++) {
          if (arrNo.indexOf(i)) {
              x[i].classList.add(\"select-hide\");
          }
      }
  }

if( document.getElementsByClassName('toolbar')[0]){
  document.getElementsByClassName('toolbar')[0].parentElement.classList.add(\"toolbar-oriented\");
}

  document.addEventListener(\"click\", closeAllSelect);
if(document.getElementsByClassName('is-active')[0]){
  document.getElementsByClassName('is-active')[0].parentElement.classList.add(\"active\");
}
if(document.getElementsByClassName('is-active')[1]){
  document.getElementsByClassName('is-active')[1].parentElement.classList.add(\"active\");
}

</script>

<style>  .feed-icon { display: none;  } .mod_egrenotable { z-index: 9; }
.item_rbusqueda h2 {
    display: block !important;
}
.cont_rbusqueda .search-form, .cont_rbusqueda #block-ulima-content h2 {
    display: none;
}
</style>
";
    }

    public function getTemplateName()
    {
        return "themes/ulima/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  474 => 290,  469 => 288,  467 => 287,  464 => 286,  459 => 284,  457 => 283,  401 => 229,  397 => 227,  395 => 218,  389 => 216,  387 => 215,  384 => 214,  381 => 213,  375 => 211,  373 => 210,  366 => 205,  363 => 204,  357 => 202,  350 => 198,  346 => 196,  343 => 195,  341 => 194,  337 => 192,  331 => 189,  328 => 188,  326 => 187,  320 => 185,  317 => 184,  311 => 182,  308 => 181,  305 => 180,  299 => 178,  297 => 177,  294 => 176,  291 => 175,  281 => 167,  270 => 165,  266 => 164,  254 => 154,  252 => 153,  247 => 152,  244 => 151,  241 => 139,  236 => 113,  233 => 112,  222 => 103,  216 => 100,  210 => 99,  207 => 98,  205 => 97,  199 => 94,  192 => 89,  186 => 86,  180 => 85,  177 => 84,  174 => 83,  172 => 82,  169 => 81,  167 => 80,  161 => 77,  152 => 70,  148 => 68,  144 => 65,  140 => 64,  135 => 62,  132 => 61,  130 => 60,  124 => 57,  113 => 48,  110 => 47,  108 => 46,  106 => 45,  93 => 34,  87 => 32,  85 => 31,  81 => 30,  77 => 29,  72 => 26,  69 => 25,  63 => 22,  60 => 21,  58 => 20,  43 => 7,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/ulima/templates/layout/page.html.twig", "/var/www/ulima/themes/ulima/templates/layout/page.html.twig");
    }
}
