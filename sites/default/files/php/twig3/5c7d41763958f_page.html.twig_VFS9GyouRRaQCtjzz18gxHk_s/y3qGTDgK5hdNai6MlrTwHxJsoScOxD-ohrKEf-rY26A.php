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
        $tags = array("if" => 19, "set" => 24, "for" => 161);
        $filters = array("clean_id" => 24, "without" => 27, "replace" => 59, "striptags" => 59);
        $functions = array("getArticlePortada" => 161, "validarUrl" => 192);

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
    <div class=\"cont_rbusqueda\">
      <div class=\"search_r\">
        <input class=\"srch_btn\" name=\"\" type=\"button\">
        <input type=\"text\" class=\"srch_input\" value=\"¿Qué estás buscando?\">
      </div>
    </div>
  </div>
  <div class=\"header\">
    <div class=\"cont_nav\">
      <div class=\"center-nav\">
        ";
        // line 19
        if ($this->getAttribute(($context["page"] ?? null), "header", array())) {
            // line 20
            echo "        <figure class=\"logo\">
          ";
            // line 21
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", array()), "html", null, true));
            echo "
        </figure>
        ";
        }
        // line 24
        echo "        ";
        $context["heading_id"] = ($this->getAttribute(($context["attributes"] ?? null), "id", array()) . \Drupal\Component\Utility\Html::getId("-menu"));
        // line 25
        echo "        <span class=\"hamb\"> <span></span> <span></span> <span></span> </span> <a href=\"#\" class=\"close_src_menu\">&#10005;</a>
        <nav id=\"menu-nav\" role=\"navigation\" aria-labelledby=\"";
        // line 26
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["heading_id"] ?? null), "html", null, true));
        echo "\"
          ";
        // line 27
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_without(($context["attributes"] ?? null), "role", "aria-labelledby"), "html", null, true));
        echo ">
          ";
        // line 28
        if ($this->getAttribute(($context["page"] ?? null), "main_navigation", array())) {
            // line 29
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "main_navigation", array()), "html", null, true));
            echo "
          ";
        }
        // line 31
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
        // line 42
        if (($context["is_front"] ?? null)) {
            // line 43
            echo "  ";
            // line 44
            echo "  ";
            if (($context["slideshow_display"] ?? null)) {
                // line 45
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
                // line 54
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide1_image"] ?? null), "html", null, true));
                echo "\" alt=\" \" style=\"width:100%;\">
              </picture>
            </figure>
            ";
                // line 57
                if ((($context["slide1_head"] ?? null) || ($context["slide1_desc"] ?? null))) {
                    // line 58
                    echo "            <div class=\"cont_msj_s\">
              <h2>";
                    // line 59
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_replace_filter(strip_tags(($context["slide1_head"] ?? null)), array("|" => "<br>")), "html", null, true));
                    echo "<span></span></h2>
              <h3>10 de marzo de 2019 </h3>
              <div class=\"btn_ir\"> <span> <a href=\"";
                    // line 61
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide1_url"] ?? null)), "html", null, true));
                    echo "\">INSCRÍBETE AQUÍ</a> </span> </div>
              ";
                    // line 62
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide1_desc"] ?? null), "html", null, true));
                    echo "
              ";
                    // line 65
                    echo "            </div>
            ";
                }
                // line 67
                echo "          </li>


          <li class=\"item-note item_slider sl2\">
            <figure>
              <picture>
                <source media=\"(max-width: 770px)\" srcset=\"/themes/ulima/assets/img/portada_movil/slide2.jpg\">
                <img src=\"";
                // line 74
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide2_image"] ?? null), "html", null, true));
                echo "\" alt=\" \" style=\"width:100%;\">
              </picture>
            </figure>
            ";
                // line 77
                if ((($context["slide2_head"] ?? null) || ($context["slide2_desc"] ?? null))) {
                    // line 78
                    echo "            ";
                    if (($context["slide2_head"] ?? null)) {
                        // line 79
                        echo "            ";
                        // line 80
                        echo "            ";
                    }
                    // line 81
                    echo "            <div class=\"cont_msj_s\">
              <h2>";
                    // line 82
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide2_head"] ?? null)), "html", null, true));
                    echo "<span></span></h2>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide2_desc"] ?? null), "html", null, true));
                    echo "
              <div class=\"btn_ir\"> <span> <a href=\"";
                    // line 83
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide2_url"] ?? null)), "html", null, true));
                    echo "\">INFÓRMATE AQUÍ</a> </span> </div>
            </div>
            ";
                }
                // line 86
                echo "          </li>
          <li class=\"item-note item_slider sl2 sl3\">
            <figure>
              <picture>
                <source media=\"(max-width: 770px)\" srcset=\"/themes/ulima/assets/img/portada_movil/slide3.jpg\">
                <img src=\"";
                // line 91
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide3_image"] ?? null), "html", null, true));
                echo "\" alt=\" \" style=\"width:100%;\">
              </picture>
            </figure>
            ";
                // line 94
                if ((($context["slide3_head"] ?? null) || ($context["slide3_desc"] ?? null))) {
                    // line 95
                    echo "            <div class=\"cont_msj_s\">
              <h2>";
                    // line 96
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide3_head"] ?? null)), "html", null, true));
                    echo "<span></span></h2>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["slide3_desc"] ?? null), "html", null, true));
                    echo "
              <div class=\"btn_ir\"> <span> <a href=\"";
                    // line 97
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, strip_tags(($context["slide3_url"] ?? null)), "html", null, true));
                    echo "\">MÁS INFORMACIÓN</a> </span> </div>
            </div>
            ";
                }
                // line 100
                echo "          </li>



        </ul><!-- /slides -->
      </div>
    </div>
  </div>
  ";
            }
            // line 109
            echo "  ";
        }
        // line 110
        echo "


  ";
        // line 136
        echo "
  ";
        // line 148
        echo "  ";
        if ($this->getAttribute(($context["page"] ?? null), "preface_first", array())) {
            // line 149
            echo "  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "preface_first", array()), "html", null, true));
            echo "
  ";
            // line 150
            if (($context["is_front"] ?? null)) {
                // line 151
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
                // line 161
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->env->getExtension('Drupal\contacto\TwigExtension')->getArticlePortada());
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 162
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
                // line 164
                echo "          </select>
        </div>
        <!--<div class=\"message-error\"><p class=\"help-block error\">Seleccione una opcion para continuar.</p></div>-->
        <input type=\"submit\" id=\"Ir a la carrera\" value=\"Ir a la carrera\">
      </form>
    </div>
  </div>
  ";
            }
            // line 172
            echo "  ";
        }
        // line 173
        echo "
  ";
        // line 174
        if ($this->getAttribute(($context["page"] ?? null), "content_top", array())) {
            // line 175
            echo "  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_top", array()), "html", null, true));
            echo "
  ";
        }
        // line 177
        echo "  ";
        if (($context["show_breadcrumbs"] ?? null)) {
            // line 178
            echo "  ";
            if (($context["breadcrumb"] ?? null)) {
                // line 179
                echo "  ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["breadcrumb"] ?? null), "html", null, true));
                echo "
  ";
            }
            // line 181
            echo "  ";
        }
        // line 182
        echo "  ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["messages"] ?? null), "html", null, true));
        echo "

  ";
        // line 184
        if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
            // line 185
            echo "  <div id=\"my-account\" id=\"my-account\">
    ";
            // line 186
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
            echo "
  </div>
  ";
        }
        // line 189
        echo "

  ";
        // line 191
        if ($this->getAttribute(($context["page"] ?? null), "content", array())) {
            // line 192
            echo "  ";
            if ($this->env->getExtension('Drupal\contacto\TwigExtension')->validarUrl()) {
                // line 193
                echo "  <div class=\"resultado_b\">
    <div class=\"cont_rbusqueda\">
      ";
                // line 195
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
    </div>
  </div>
  ";
            } else {
                // line 199
                echo "  ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
  ";
            }
            // line 201
            echo "  ";
        }
        // line 202
        echo "
  <div class=\"nfooter\">
    <div class=\"cont_footer\">
      <div class=\"footer1\">
        <figure> <a href=\"\"> <img src=\"/themes/ulima/assets/images/logoulima2.svg\"></a> </figure>
        ";
        // line 207
        if ($this->getAttribute(($context["page"] ?? null), "footer", array())) {
            // line 208
            echo "        ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer", array()), "html", null, true));
            echo "
        ";
        }
        // line 210
        echo "        ";
        if (((($this->getAttribute(($context["page"] ?? null), "footer_first", array()) || $this->getAttribute(($context["page"] ?? null), "footer_second", array())) || $this->getAttribute(($context["page"] ?? null), "footer_third", array())) || $this->getAttribute(($context["page"] ?? null), "footer_fourth", array()))) {
            // line 211
            echo "
        ";
            // line 212
            if ($this->getAttribute(($context["page"] ?? null), "footer_first", array())) {
                // line 213
                echo "        ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_first", array()), "html", null, true));
                echo "
        ";
            }
            // line 215
            echo "        ";
            // line 224
            echo "
        ";
        }
        // line 226
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
        // line 280
        if ($this->getAttribute(($context["page"] ?? null), "footer_fourth", array())) {
            // line 281
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_fourth", array()), "html", null, true));
            echo "
";
        }
        // line 283
        echo "
";
        // line 284
        if ($this->getAttribute(($context["page"] ?? null), "help", array())) {
            // line 285
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "help", array()), "html", null, true));
            echo "
";
        }
        // line 287
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

  document.addEventListener(\"click\", closeAllSelect);
</script>

<style>  .feed-icon { display: none;  }</style>";
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
        return array (  471 => 287,  466 => 285,  464 => 284,  461 => 283,  456 => 281,  454 => 280,  398 => 226,  394 => 224,  392 => 215,  386 => 213,  384 => 212,  381 => 211,  378 => 210,  372 => 208,  370 => 207,  363 => 202,  360 => 201,  354 => 199,  347 => 195,  343 => 193,  340 => 192,  338 => 191,  334 => 189,  328 => 186,  325 => 185,  323 => 184,  317 => 182,  314 => 181,  308 => 179,  305 => 178,  302 => 177,  296 => 175,  294 => 174,  291 => 173,  288 => 172,  278 => 164,  267 => 162,  263 => 161,  251 => 151,  249 => 150,  244 => 149,  241 => 148,  238 => 136,  233 => 110,  230 => 109,  219 => 100,  213 => 97,  207 => 96,  204 => 95,  202 => 94,  196 => 91,  189 => 86,  183 => 83,  177 => 82,  174 => 81,  171 => 80,  169 => 79,  166 => 78,  164 => 77,  158 => 74,  149 => 67,  145 => 65,  141 => 62,  137 => 61,  132 => 59,  129 => 58,  127 => 57,  121 => 54,  110 => 45,  107 => 44,  105 => 43,  103 => 42,  90 => 31,  84 => 29,  82 => 28,  78 => 27,  74 => 26,  71 => 25,  68 => 24,  62 => 21,  59 => 20,  57 => 19,  43 => 7,);
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
