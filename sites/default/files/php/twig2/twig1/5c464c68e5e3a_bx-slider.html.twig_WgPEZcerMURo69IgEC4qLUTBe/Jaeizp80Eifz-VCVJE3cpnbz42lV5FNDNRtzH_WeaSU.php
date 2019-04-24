<?php

/* modules/bxslider_block/templates/bx-slider.html.twig */
class __TwigTemplate_8784dca468128a61d271da2fcaddb8ce4b54fb2d706e4908554da0a25ec295c3 extends Twig_Template
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
        $tags = array("if" => 2, "for" => 21);
        $filters = array("length" => 7, "raw" => 79);
        $functions = array("getSidebarClass" => 86, "getClassVideoLista" => 115);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array('length', 'raw'),
                array('getSidebarClass', 'getClassVideoLista')
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

        // line 1
        echo "
";
        // line 2
        if ((($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "video") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") != "galeria_lista"))) {
            // line 3
            echo "<!--dondetrabajar-->
<div class=\"dondetrabajar\">
    <div class=\"cont_donde\">

        ";
            // line 7
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 8
                echo "

            <div class=\"video_donde\">
                <h2>";
                // line 11
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array"), "html", null, true));
                echo " </h2>
                <div class=\"cont_video\">
                    <iframe class=\"\" width=\"685\" height=\"385\" src=\"";
                // line 13
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                </div>
            </div>

            <div class=\"test_egre\">
                <h2> ";
                // line 18
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array"), "html", null, true));
                echo "</h2>
                <div class=\"carousel\">
                    <ul class=\"list-items\" infinite with-buttons countitem-mob=\"1\" countitem-desk=\"3\">
                        ";
                // line 21
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
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
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 22
                    echo "                            ";
                    if (($this->getAttribute($context["loop"], "index", array()) == 1)) {
                        // line 23
                        echo "                        ";
                    } else {
                        // line 24
                        echo "                            <li class=\"item-note\">
                                <figure class=\"vyt\">
                                    <iframe width=\"310\" height=\"174\" src=\"";
                        // line 26
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                        echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                                </figure>
                            </li>
                            ";
                    }
                    // line 30
                    echo "                        ";
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
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 31
                echo "                    </ul>
                </div>
            </div>



        ";
            }
            // line 38
            echo "
    </div>
</div>

";
        }
        // line 43
        echo "
";
        // line 44
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "imagen_texto")) {
            // line 45
            echo "<!--mod_egrenotable-->
<div class=\"mod_egrenotable carousel\">
    <div class=\"list-items\" infinite with-buttons countitem-mob=\"1\" countitem-desk=\"1\">
    ";
            // line 48
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 49
                echo "        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 50
                    echo "        <div class=\"cont_notable item-note\">
            <figure> <img src=\"";
                    // line 51
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/> </figure>
            <div class=\"txt_notable\">
                <h2>";
                    // line 53
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh2", array(), "array"), "html", null, true));
                    echo "</h2>
                <div class=\"perfil_egresado\">
                    <div class=\"datos_egre\">
                        <h3>";
                    // line 56
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh3", array(), "array"), "html", null, true));
                    echo "</h3>
                        <h4>";
                    // line 57
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh4", array(), "array"), "html", null, true));
                    echo "</h4>
                        <span></span> </div>
                    <p>";
                    // line 59
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "titulop", array(), "array"), "html", null, true));
                    echo "</p>
                    <div class=\"conocemas\">
                        <h4>";
                    // line 61
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh5", array(), "array"), "html", null, true));
                    echo "</h4>
                        <h4> <a href=\"";
                    // line 62
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "link", array(), "array"), "html", null, true));
                    echo "\">";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "link", array(), "array"), "html", null, true));
                    echo "</a></h4>
                    </div>
                </div>
            </div>
        </div>
        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 68
                echo "        ";
            }
            // line 69
            echo "    </div>
</div>
";
        }
        // line 72
        echo "

";
        // line 74
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "texto")) {
            // line 75
            echo "    <!--somosulima-->
    <div class=\"somosulima\">
        <div class=\"cont_slima\">
            <div class=\"slima1\">
                <h2>";
            // line 79
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
                <h3>";
            // line 80
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
            echo "</h3>
            </div>
            <div class=\"carousel\">
                <div class=\"slima2 list-items\" infinite with-dots countitem-mob=\"1\" countitem-desk=\"3\">
                    ";
            // line 84
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 85
                echo "                        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
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
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 86
                    echo "                        <div class=\"item-note valoresulima ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getSidebarClass(($context["items"] ?? null), $this->getAttribute($context["loop"], "index0", array()))));
                    echo "\">
                            <h2>";
                    // line 87
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                            <h4>";
                    // line 88
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h4>
                        </div>

                        ";
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
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 92
                echo "                    ";
            }
            // line 93
            echo "
                </div>
            </div>
            <h4 class=\"m_encuesta\">*Antes de cumplir un año de egreso. Fuente: Encuesta de satisfacción de Egresados 2018 (Oficina de Planificación y Acreditación de la Universidad de Lima)</h4>
        </div>
    </div>


";
        }
        // line 102
        echo "



";
        // line 106
        if (($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_lista")) {
            // line 107
            echo " <!--section7-->
 <div class=\"areas_ul comunidad_ul\">
    <div class=\"cont_areas_ul\">
       <div class=\"cont_sedes\">
          <h2>";
            // line 111
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
       </div>
        ";
            // line 113
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 114
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
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
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 115
                    echo "                ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) == "vl3")) {
                        // line 116
                        echo "                   <div class=\"campusdeportivos\">
                ";
                    }
                    // line 118
                    echo "                  <div class=\"area_ul1 ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        echo " fr";
                    }
                    echo "\">
                     <figure class=\"vyt\">
                        <iframe   src=\"";
                    // line 120
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                      </figure>
                      <h2>";
                    // line 122
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                      <h3>";
                    // line 123
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h3>
                  </div>
                ";
                    // line 125
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        // line 126
                        echo "                </div>
                ";
                    }
                    // line 128
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
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 129
                echo "        ";
            }
            // line 130
            echo "    </div>
</div>
";
        } else {
            // line 133
            if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "video_imagen")) {
                // line 134
                echo "    <!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria-convenio ";
                // line 136
                if (($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_color")) {
                    echo " tallers_ulima ";
                } else {
                    echo "galeria_ul ";
                }
                echo "\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 138
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 139
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 141
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galeria de fotos</h3>
                    <ul class=\"list-items\" with-buttons infinite onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 147
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 148
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 149
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 151
                    echo "                    ";
                }
                // line 152
                echo "                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class=\"modal_incrip modal-img\">
        <div class=\"layer_dark\"></div>
        <div>
            <figure>
                <img id=\"img-box\" src=\"\" alt=\"\" style=\"width:100%\">
            </figure>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\"/> </a></span>
        </div>
    </div>
";
            }
        }
        // line 168
        echo "


";
        // line 171
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "horarios")) {
            // line 172
            echo "    <!--section7-->
    <div class=\"charlasxcarrera\">

        <div class=\"titu_charla\">

            <h2>Inscríbete en Charlas x Carrera</h2>

            <p>Ven con tu familia y amigos y resuelve todas tus dudas sobre la carrera que quieres seguir.

                Selecciona la(s) carrera(s) de tu interés. (Vacantes limitadas).

            </p>

        </div>
   ";
            // line 186
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
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
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 187
                echo "    <div class=\"itemdiacharla\">
       ";
                // line 188
                if (($this->getAttribute($context["loop"], "index0", array()) == "1")) {
                    // line 189
                    echo "        <h4>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                    echo "</h4>
       ";
                }
                // line 191
                echo "        <h2>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "fecha", array(), "array"), "html", null, true));
                echo "</h2>
        <div class=\"cont_itemcharla\">
            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                <tr class=\"headcha\">
                    <td class=\"cha1\">CHARLAS X CARRERA</td>
                    <td class=\"cha2\">HORARIOS</td>
                </tr>
                ";
                // line 198
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["item"], "carreras", array(), "array"));
                foreach ($context['_seq'] as $context["_key"] => $context["itemc"]) {
                    // line 199
                    echo "                <tr>
                    <td class=\"cha3\"> ";
                    // line 200
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["itemc"], "nombre", array(), "array"), "html", null, true));
                    echo " </td>
                    <td class=\"cha4\">
                        <div class=\"custom-select \" >
                            <select class=\"select-horario\" name=\"\">
                                <option value=\"Horario\">Horario</option>
                                ";
                    // line 205
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["itemc"], "horarios", array(), "array"));
                    foreach ($context['_seq'] as $context["_key"] => $context["itemt"]) {
                        // line 206
                        echo "                                <option value=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["itemt"], "html", null, true));
                        echo "\"> ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["itemt"], "html", null, true));
                        echo "</option>
                                ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['itemt'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 208
                    echo "                            </select>
                        </div>
                    </td>
                </tr>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['itemc'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 213
                echo "            </table>
        </div>
    </div>
   ";
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
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 217
            echo "        <div class=\"message-error-carreras\"></div>

        <div class=\"btn_ir btn_ir_modal\"> <span> <a id=\"btn_insCharla\" href=\"\">Inscríbete</a> </span> </div>

    </div>
";
        }
        // line 223
        echo "

";
        // line 225
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "texto_3_imagen")) {
            // line 226
            echo "    <!--  seccion 7-->
    <div class=\"alumnos_pro\">
        <div class=\"cont_alum_pro\">
            <h2>";
            // line 229
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
            <div class=\"carousel\">
                <div class=\"list-items\" with-buttons infinite countitem-mob=\"1\" countitem-desk=\"3\">
                    ";
            // line 232
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 233
                echo "                    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 234
                    echo "                        <div class=\"item-note item_slide_ap\">
                            <figure>
                                <img src=\"";
                    // line 236
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/>
                            </figure>
                            <h2>";
                    // line 238
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                            <h3>";
                    // line 239
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h3>
                            <p> ";
                    // line 240
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh4", array(), "array")));
                    echo " </p>
                        </div>
                        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 243
                echo "                    ";
            }
            // line 244
            echo "                </div>
            </div>
        </div>
    </div>


";
        }
    }

    public function getTemplateName()
    {
        return "modules/bxslider_block/templates/bx-slider.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  645 => 244,  642 => 243,  633 => 240,  629 => 239,  625 => 238,  620 => 236,  616 => 234,  611 => 233,  609 => 232,  603 => 229,  598 => 226,  596 => 225,  592 => 223,  584 => 217,  567 => 213,  557 => 208,  546 => 206,  542 => 205,  534 => 200,  531 => 199,  527 => 198,  516 => 191,  510 => 189,  508 => 188,  505 => 187,  488 => 186,  472 => 172,  470 => 171,  465 => 168,  447 => 152,  444 => 151,  435 => 149,  430 => 148,  428 => 147,  419 => 141,  414 => 139,  410 => 138,  401 => 136,  397 => 134,  395 => 133,  390 => 130,  387 => 129,  373 => 128,  369 => 126,  367 => 125,  362 => 123,  358 => 122,  353 => 120,  345 => 118,  341 => 116,  338 => 115,  320 => 114,  318 => 113,  313 => 111,  307 => 107,  305 => 106,  299 => 102,  288 => 93,  285 => 92,  267 => 88,  263 => 87,  258 => 86,  240 => 85,  238 => 84,  231 => 80,  227 => 79,  221 => 75,  219 => 74,  215 => 72,  210 => 69,  207 => 68,  193 => 62,  189 => 61,  184 => 59,  179 => 57,  175 => 56,  169 => 53,  164 => 51,  161 => 50,  156 => 49,  154 => 48,  149 => 45,  147 => 44,  144 => 43,  137 => 38,  128 => 31,  114 => 30,  107 => 26,  103 => 24,  100 => 23,  97 => 22,  80 => 21,  74 => 18,  66 => 13,  61 => 11,  56 => 8,  54 => 7,  48 => 3,  46 => 2,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/bxslider_block/templates/bx-slider.html.twig", "/var/www/ulima/modules/bxslider_block/templates/bx-slider.html.twig");
    }
}
