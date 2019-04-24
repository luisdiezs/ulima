<?php

/* themes/ulima/templates/node.html.twig */
class __TwigTemplate_35b8139296a979d9e01e08d1a802ac2311b85ae3f8b63829f8f450f78e67ee6f extends Twig_Template
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
        $tags = array("set" => 67, "if" => 85, "for" => 256);
        $filters = array("clean_class" => 69, "length" => 255);
        $functions = array("getbloques" => 90, "getImageAlt" => 107, "getInfraestructura" => 113, "getClassVideoLista" => 257);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if', 'for'),
                array('clean_class', 'length'),
                array('getbloques', 'getImageAlt', 'getInfraestructura', 'getClassVideoLista')
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

        // line 67
        $context["classes"] = array(0 => "node", 1 => ("node--type-" . \Drupal\Component\Utility\Html::getClass($this->getAttribute(        // line 69
($context["node"] ?? null), "bundle", array()))), 2 => (($this->getAttribute(        // line 70
($context["node"] ?? null), "isPromoted", array(), "method")) ? ("node--promoted") : ("")), 3 => (($this->getAttribute(        // line 71
($context["node"] ?? null), "isSticky", array(), "method")) ? ("node--sticky") : ("")), 4 => (( !$this->getAttribute(        // line 72
($context["node"] ?? null), "isPublished", array(), "method")) ? ("node--unpublished") : ("")), 5 => ((        // line 73
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass(($context["view_mode"] ?? null)))) : ("")), 6 => "clearfix");
        // line 77
        echo "<article ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["attributes"] ?? null), "addClass", array(0 => ($context["classes"] ?? null)), "method"), "html", null, true));
        echo ">
  ";
        // line 79
        echo "  ";
        // line 84
        echo "  ";
        // line 85
        echo "  ";
        if (($this->getAttribute(($context["node"] ?? null), "bundle", array()) == "carreras")) {
            // line 86
            echo "    ";
            if ($this->getAttribute($this->getAttribute(($context["content"] ?? null), "body", array()), 0, array(), "array")) {
                // line 87
                echo "      <div class=\"cont_carrera_tipo\">
        <div class=\"ncarreras\">
          <div class=\"cont_carreras\">
          ";
                // line 90
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getbloques($this->getAttribute($this->getAttribute(($context["content"] ?? null), "body", array()), 0, array(), "array"))));
                echo "
          </div>
        </div>
      </div>
    ";
            }
            // line 95
            echo "    ";
            if ($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_bloque_2", array()), 0, array(), "array")) {
                // line 96
                echo "      <div class=\"somosulima xq_lima\">
        <div class=\"cont_slima xqul\">
          ";
                // line 98
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getbloques($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_bloque_2", array()), 0, array(), "array"))));
                echo "
        </div>
      </div>
    ";
            }
            // line 102
            echo "    ";
            if ($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_bloque_3", array()), 0, array(), "array")) {
                // line 103
                echo "      <div class=\"ncarreras diplomas_e\">
        <div class=\"cont_carreras\">
          <h2>";
                // line 105
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getbloques($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_titulo_bloque_2", array()), 0, array(), "array"))));
                echo "</h2>
          <div class=\"cont_diplomas carousel\">
              ";
                // line 107
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getImageAlt($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_bloque_3", array()), 0, array(), "array"))));
                echo "
          </div>
        </div>
      </div>
    ";
            }
            // line 112
            echo "    ";
        } elseif ((($this->getAttribute(($context["node"] ?? null), "bundle", array()) == "infraestructura") && ($this->getAttribute(($context["classes"] ?? null), 5, array(), "array") == "node--view-mode-full"))) {
            // line 113
            echo "    ";
            $context["items"] = $this->env->getExtension('Drupal\contacto\TwigExtension')->getInfraestructura();
            // line 114
            echo "  <div";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content_attributes"] ?? null), "html", null, true));
            echo ">
        ";
            // line 115
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
            echo "
  </div>



      <!--section4-->
      <div id=\"areas_ul\" class=\"areas_ul carousel\">
        <div class=\"cont_areas_ul list-items\" with-dots countitem-mob=\"1\" countitem-desk=\"3\">
          <div class=\"item-note\">
            <h2>Áreas Comunes</h2>
            <figure>
              <img src=\"/themes/ulima/assets/img/infra/local1.jpg\"/>
              <ul>
                <li><a href=\"\">Auditorios</a></li>
                <li><a href=\"\">Aulas Magnas</a></li>
                <li><a href=\"\">Sala Ventana Indiscreta</a></li>
                <li><a href=\"\">Campus</a></li>
                <li><a href=\"\">Cafeterías</a></li>
                <li><a href=\"\">Estacionamiento</a></li>
              </ul>
            </figure>
          </div>
          <div class=\"item-note fr\">
            <h2>Espacios Académicos</h2>
            <figure>
              <img src=\"/themes/ulima/assets/img/infra/local2.jpg\"/>
              <ul>
                <li><a href=\"\">Laboratorios</a></li>
                <li><a href=\"\">Biblioteca</a></li>
                <li><a href=\"\">Aulas de Cómputo</a></li>
                <li><a href=\"\">Salas de Estudio</a></li>
              </ul>
            </figure>
          </div>
        </div>
      </div>
      <!--section5-->
      <div class=\"ningreso prelima_c local_infra\">
        <div class=\"cont_ingreso\">
          <h2>Torres cincuentenario</h2>
          <h4>Líder en diseño y energía ambiental</h4>
          <div class=\"cont_tingreso options-desk\">
            <div class=\"t_ingreso t1\">
              <figure> </figure>
              <h4>Parqueo de bicicletas</h4>
              <p>105 estacionamientos. </p>
            </div>
            <div class=\"t_ingreso t2\">
              <figure> </figure>
              <h4>Parqueo para vehículos eficientes y de bajas emisiones de CO2</h4>
              <p>21 estacionamientos.</p>
            </div>
            <div class=\"t_ingreso t3\">
              <figure> </figure>
              <h4>Protección y restauración del hábitat </h4>
              <p>Amplias áreas de vegetación con especies variadas que promueven la restauración de la flora y fauna en el terreno. </p>
            </div>
            <div class=\"t_ingreso t4\">
              <figure> </figure>
              <h4>Eficiencia y ahorro </h4>
              <p>Nuestro sistema de iluminación y climatización ahorra 38.9% de energía con respecto a un edificio educativo convencional.</p>
            </div>
            <div class=\"t_ingreso t5\">
              <figure> </figure>
              <h4>Apoyo a la energía renovable </h4>
              <p>Hemos comprado Certificados de Energía Renovable (RECs) por un monto equivalente al 35% del consumo anual </p>
            </div>
            <div class=\"t_ingreso t6\">
              <figure> </figure>
              <h4>Reciclaje y reutilización </h4>
              <p>Más del 75% de los residuos de la construcción fueron reciclados o reutilizados.</p>
            </div>
          </div>
          <div class=\"carousel carousel-opt options-mob\">
            <div class=\"cont_tingreso list-items\" with-dots dotstop countitem-mob=\"1\">
              <div class=\"item-note t_ingreso t1\">
                <figure> </figure>
                <h4>Parqueo de bicicletas</h4>
                <p>105 estacionamientos. </p>
              </div>
              <div class=\"item-note t_ingreso t2\">
                <figure> </figure>
                <h4>Parqueo para vehículos eficientes y de bajas emisiones </h4>
                <p>21 estacionamientos.</p>
              </div>
              <div class=\"item-note t_ingreso t3\">
                <figure> </figure>
                <h4>Protección y restauración del hábitat </h4>
                <p>Amplias áreas de vegetación con especies variadas que promueven la restauración de la flora y fauna en el terreno. </p>
              </div>
              <div class=\"item-note t_ingreso t4\">
                <figure> </figure>
                <h4>Eficiencia y ahorro </h4>
                <p>Nuestro sistema de iluminación y climatización ahorra 38.9% de energía con respecto a un edificio educativo convencional.</p>
              </div>
              <div class=\"item-note t_ingreso t5\">
                <figure> </figure>
                <h4>Apoyo a la energía renovable </h4>
                <p>Hemos comprado Certificados de Energía Renovable (RECs) por un monto equivalente al 35% del consumo anual </p>
              </div>
              <div class=\"item-note t_ingreso t6\">
                <figure> </figure>
                <h4>Reciclaje y reutilización </h4>
                <p>Más del 75% de los residuos de la construcción fueron reciclados o reutilizados.</p>
              </div>
            </div>
          </div>
          <div class=\"carousel carousel-infra-pic\">
            <ul class=\"locales_ul list-items\" with-buttons with-dots dotstop countitem-mob=\"1\" countitem-desk=\"3\">
              <li class=\"item-note\">
                <figure><a href=\"\"><img src=\"/themes/ulima/assets/img/infra/local3_m.jpg\"/></a>  </figure>
              </li>
              <li class=\"item-note\">
                <figure><a href=\"\"><img src=\"/themes/ulima/assets/img/infra/local4_m.jpg\"/></a>  </figure>
              </li>
              <li class=\"item-note\">
                <figure> <a href=\"\"><img src=\"/themes/ulima/assets/img/infra/local5_m.jpg\"/></a> </figure>
              </li>
            </ul>
            <!--<div class=\"container-buttons-controls\">
               <div class=\"left\">
                  <a href=\"#\">&#8735;</a>
               </div>
               <div class=\"right\">
                  <a href=\"#\">&#8735;</a>
               </div>
            </div>-->
          </div>
        </div>
      </div>



      <!--section6 ============ -->
      <div class=\"areas_ul\">
        <div class=\"cont_areas_ul\">
          <div class=\"cont_sedes\">
            <h2>Sede deportiva</h2>
            <p>Ubicada en la urbanización Mayorazgo en el distrito de Ate, al final de la Av. Los Constructores.</p>
          </div>
          ";
            // line 255
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 256
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["items"] ?? null), "items", array()));
                $context['loop'] = array(
                  'parent' => $context['_parent'],
                  'index0' => 0,
                  'index'  => 1,
                  'first'  => true,
                );
                if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof Countable)) {
                    $length = count($context['_seq']);
                    $context['loop']['revindex0'] = $length - 1;
                    $context['loop']['revindex'] = $length;
                    $context['loop']['length'] = $length;
                    $context['loop']['last'] = 1 === $length;
                }
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 257
                    echo "              ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) == "vl3")) {
                        // line 258
                        echo "              <div class=\"campusdeportivos options-desk\">
                ";
                    }
                    // line 260
                    echo "                <div class=\"area_ul1 ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        echo " fr";
                    }
                    echo "\">
                  <figure>
                    <img width=\"458\" height=\"460\" src=\"";
                    // line 262
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], $context["key"], array(), "array"), "url", array(), "array"), "html", null, true));
                    echo "\"/>
                    <ul>
                      <li>";
                    // line 264
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), "settings", array()), $context["key"], array(), "array"), "titulo1", array()), "html", null, true));
                    echo "</li>
                      ";
                    // line 265
                    if ($this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), "settings", array()), $context["key"], array(), "array"), "titulo2", array())) {
                        // line 266
                        echo "                      <li>";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), "settings", array()), $context["key"], array(), "array"), "titulo2", array()), "html", null, true));
                        echo "</li>
                      ";
                    }
                    // line 268
                    echo "                    </ul>
                  </figure>
                </div>

                ";
                    // line 272
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        // line 273
                        echo "                  </div>
                ";
                    }
                    // line 275
                    echo "            ";
                    ++$context['loop']['index0'];
                    ++$context['loop']['index'];
                    $context['loop']['first'] = false;
                    if (isset($context['loop']['length'])) {
                        --$context['loop']['revindex0'];
                        --$context['loop']['revindex'];
                        $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                    }
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 276
                echo "          ";
            }
            // line 277
            echo "

          <!--section6 fin ============ -->


          <div class=\"carousel carrusel_infra_m\">
            <div class=\"list-items\" with-buttons countitem-mob=\"1\">
              ";
            // line 284
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 285
                echo "                ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["items"] ?? null), "items", array()));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 286
                    echo "                   <div class=\"item-note\">
                    <figure>
                      <img width=\"458\" height=\"460\"  src=\"";
                    // line 288
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($context["item"], $context["key"], array(), "array"), "url", array(), "array"), "html", null, true));
                    echo "\"/>
                      <ul>
                        <li>";
                    // line 290
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), "settings", array()), $context["key"], array(), "array"), "titulo1", array()), "html", null, true));
                    echo "</li>
                        ";
                    // line 291
                    if ($this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), "settings", array()), $context["key"], array(), "array"), "titulo2", array())) {
                        // line 292
                        echo "                        <li>";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute($this->getAttribute(($context["items"] ?? null), "settings", array()), $context["key"], array(), "array"), "titulo2", array()), "html", null, true));
                        echo "</li>
                        ";
                    }
                    // line 294
                    echo "                      </ul>
                    </figure>
                  </div>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 298
                echo "              ";
            }
            // line 299
            echo "            </div>
          </div>
        </div>
      </div>




      <div class=\"modal_incrip msn_galery \">
        <div class=\"layer_dark\"></div>
        <div>
          <div class=\"cont_galery_pu carousel\">
            <div class=\"gale_pu list-items\" infinite with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\">
              ";
            // line 312
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 313
                echo "                ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["items"] ?? null), "items", array()), 0, array(), "array"));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 314
                    echo "                  <div class=\"item-note\">
                    <img src=\"";
                    // line 315
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\" style=\"width: 100%\"/>
                  </div>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 318
                echo "              ";
            }
            // line 319
            echo "            </div>
            <div class=\"custom-dots-container\">
              <ul class=\"custom-dots\">
                ";
            // line 322
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 323
                echo "                  ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($this->getAttribute(($context["items"] ?? null), "items", array()), 0, array(), "array"));
                foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                    // line 324
                    echo "                    <li>
                      <img src=\"";
                    // line 325
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/>
                    </li>
                  ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 328
                echo "                ";
            }
            // line 329
            echo "
              </ul>
            </div>
          </div>
          <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\"/></a></span>
        </div>
      </div>
      <div class=\"modal_incrip modal-img\">
        <div class=\"layer_dark\"></div>
        <div>
          <figure>
            <img id=\"img-box\" src=\"\" alt=\"\" style=\"width:100%\">
          </figure>
          <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\"/></a></span>
        </div>
      </div>




    ";
        } else {
            // line 350
            echo "  <div";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content_attributes"] ?? null), "html", null, true));
            echo ">
    ";
            // line 351
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
            echo "
  </div>
  ";
        }
        // line 354
        echo "</article>
";
    }

    public function getTemplateName()
    {
        return "themes/ulima/templates/node.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  494 => 354,  488 => 351,  483 => 350,  460 => 329,  457 => 328,  448 => 325,  445 => 324,  440 => 323,  438 => 322,  433 => 319,  430 => 318,  421 => 315,  418 => 314,  413 => 313,  411 => 312,  396 => 299,  393 => 298,  384 => 294,  378 => 292,  376 => 291,  372 => 290,  367 => 288,  363 => 286,  358 => 285,  356 => 284,  347 => 277,  344 => 276,  330 => 275,  326 => 273,  324 => 272,  318 => 268,  312 => 266,  310 => 265,  306 => 264,  301 => 262,  293 => 260,  289 => 258,  286 => 257,  268 => 256,  266 => 255,  123 => 115,  118 => 114,  115 => 113,  112 => 112,  104 => 107,  99 => 105,  95 => 103,  92 => 102,  85 => 98,  81 => 96,  78 => 95,  70 => 90,  65 => 87,  62 => 86,  59 => 85,  57 => 84,  55 => 79,  50 => 77,  48 => 73,  47 => 72,  46 => 71,  45 => 70,  44 => 69,  43 => 67,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/ulima/templates/node.html.twig", "/var/www/ulima/themes/ulima/templates/node.html.twig");
    }
}
