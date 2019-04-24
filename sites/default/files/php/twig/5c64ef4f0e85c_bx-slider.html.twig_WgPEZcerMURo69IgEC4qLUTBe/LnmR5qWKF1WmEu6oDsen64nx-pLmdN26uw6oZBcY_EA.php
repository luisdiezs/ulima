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
        $filters = array("length" => 7, "raw" => 115);
        $functions = array("getSidebarClass" => 122, "getClassVideoLista" => 151);

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




<div class=\"modal_incrip msn_galery \">
    <div class=\"layer_dark\"></div>
    <div>
        <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
            <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
                ";
            // line 50
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 51
                echo "                    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 52
                    echo "                        <li class=\"item-note\">
                            <figure class=\"vyt\">
                                <iframe class=\"video-iframe\" width=\"310\" height=\"174\" src=\"";
                    // line 54
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><strong></strong>
                            </figure>
                        </li>
                    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 58
                echo "                ";
            }
            // line 59
            echo "            </div>
            <div class=\"custom-dots-container\">
                <ul class=\"custom-dots\">
                    ";
            // line 62
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 63
                echo "                        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 64
                    echo "                            <li>
                                <figure class=\"vyt\">
                                    <iframe class=\"video-iframe\" width=\"310\" height=\"174\" src=\"";
                    // line 66
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><strong></strong>
                                </figure>
                            </li>
                        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 70
                echo "                    ";
            }
            // line 71
            echo "                </ul>
            </div>
        </div>
        <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
    </div>
</div>

";
        }
        // line 79
        echo "
";
        // line 80
        if ((($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "imagen_texto") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == ""))) {
            // line 81
            echo "<!--mod_egrenotable-->
<div class=\"mod_egrenotable carousel\">
    <div class=\"list-items\" infinite with-buttons countitem-mob=\"1\" countitem-desk=\"1\">
    ";
            // line 84
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 85
                echo "        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 86
                    echo "        <div class=\"cont_notable item-note\">
            <figure> <img src=\"";
                    // line 87
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/> </figure>
            <div class=\"txt_notable\">
                <h2>";
                    // line 89
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh2", array(), "array"), "html", null, true));
                    echo "</h2>
                <div class=\"perfil_egresado\">
                    <div class=\"datos_egre\">
                        <h3>";
                    // line 92
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh3", array(), "array"), "html", null, true));
                    echo "</h3>
                        <h4>";
                    // line 93
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh4", array(), "array"), "html", null, true));
                    echo "</h4>
                        <span></span> </div>
                    <p>";
                    // line 95
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "titulop", array(), "array"), "html", null, true));
                    echo "</p>
                    <div class=\"conocemas\">
                        <h4>";
                    // line 97
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh5", array(), "array"), "html", null, true));
                    echo "</h4>
                        <h4> <a href=\"";
                    // line 98
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
                // line 104
                echo "        ";
            }
            // line 105
            echo "    </div>
</div>
";
        }
        // line 108
        echo "

";
        // line 110
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "texto")) {
            // line 111
            echo "    <!--somosulima-->
    <div class=\"somosulima\">
        <div class=\"cont_slima\">
            <div class=\"slima1\">
                <h2>";
            // line 115
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
                <h3>";
            // line 116
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
            echo "</h3>
            </div>
            <div class=\"carousel\">
                <div class=\"slima2 list-items\" infinite with-dots countitem-mob=\"1\" countitem-desk=\"3\">
                    ";
            // line 120
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 121
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
                    // line 122
                    echo "                        <div class=\"item-note valoresulima ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getSidebarClass(($context["items"] ?? null), $this->getAttribute($context["loop"], "index0", array()))));
                    echo "\">
                            <h2>";
                    // line 123
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                            <h4>";
                    // line 124
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
                // line 128
                echo "                    ";
            }
            // line 129
            echo "
                </div>
            </div>
            <h4 class=\"m_encuesta\">*Antes de cumplir un año de egreso. Fuente: Encuesta de satisfacción de Egresados 2018 (Oficina de Planificación y Acreditación de la Universidad de Lima)</h4>
        </div>
    </div>


";
        }
        // line 138
        echo "



";
        // line 142
        if (($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_lista")) {
            // line 143
            echo " <!--section7-->
 <div class=\"areas_ul comunidad_ul\">
    <div class=\"cont_areas_ul\">
       <div class=\"cont_sedes\">
          <h2>";
            // line 147
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
       </div>
        ";
            // line 149
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 150
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
                    // line 151
                    echo "                ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) == "vl3")) {
                        // line 152
                        echo "                   <div class=\"campusdeportivos cont-video\">
                ";
                    }
                    // line 154
                    echo "                  <div class=\"area_ul1 ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        echo " fr";
                    }
                    echo "\">
                     <figure class=\"vyt\">
                    <iframe class=\"video-iframe\" src=\"";
                    // line 156
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>

                      </figure>
                      <h2>";
                    // line 159
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                      <h3>";
                    // line 160
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h3>
                  </div>
                ";
                    // line 162
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        // line 163
                        echo "                </div>
                ";
                    }
                    // line 165
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
                // line 166
                echo "        ";
            }
            // line 167
            echo "    </div>
</div>


<div class=\"modal_incrip msn_galery modal-video modal-video-ulima\">
    <div class=\"layer_dark\"></div>
    <div>
        <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
            <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
           ";
            // line 176
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 177
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 178
                    echo "                <li class=\"item-note\">
                    <figure class=\"vyt\">
                        <iframe class=\"video-iframe\" src=\"";
                    // line 180
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                    </figure>
                </li>
          
                 ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 185
                echo "        ";
            }
            // line 186
            echo "
            </div>
            <div class=\"custom-dots-container\">
                <ul class=\"custom-dots dots100\">
            ";
            // line 190
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 191
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 192
                    echo "
                    <li>
                        <figure class=\"vyt\">
                            <iframe class=\"video-iframe\" src=\"";
                    // line 195
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                        </figure>
                    </li>
                                   ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 199
                echo "        ";
            }
            // line 200
            echo "
                </ul>
            </div>
        </div>
        <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
    </div>
</div>










";
        } else {
            // line 218
            if ((($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "video_imagen") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_ta"))) {
                // line 219
                echo "<!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria_ul tallers_ulima\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 223
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 224
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 226
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galeria de fotos</h3>
                    <ul class=\"list-items\" with-buttons onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 232
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 233
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
                        // line 234
                        echo "                         ";
                        if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                            // line 235
                            echo "                          ";
                        } else {
                            // line 236
                            echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                            echo "\"/></a></li>
                             ";
                        }
                        // line 238
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
                    // line 239
                    echo "                    ";
                }
                // line 240
                echo "                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div class=\"modal_incrip msn_galery modal-img modal-img-talart\">
        <div class=\"layer_dark\"></div>
        <div>
            <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
                <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
                    ";
                // line 251
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 252
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 253
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 255
                    echo "                    ";
                }
                // line 256
                echo "
                </div>
                <div class=\"custom-dots-container\">
                    <ul class=\"custom-dots\">
                        ";
                // line 260
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 261
                    echo "                            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 262
                        echo "                                <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 264
                    echo "                        ";
                }
                // line 265
                echo "                    </ul>
                </div>
            </div>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
        </div>
    </div>

";
            } elseif ((($this->getAttribute(            // line 272
($context["settings"] ?? null), "mode", array(), "array") == "video_imagen") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_td"))) {
                // line 273
                echo "<!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria_ul tallers_dep\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 277
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 278
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 280
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galeria de fotos</h3>
                    <ul class=\"list-items\" with-buttons onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 286
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 287
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
                        // line 288
                        echo "                         ";
                        if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                            // line 289
                            echo "                          ";
                        } else {
                            // line 290
                            echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                            echo "\"/></a></li>
                             ";
                        }
                        // line 292
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
                    // line 293
                    echo "                    ";
                }
                // line 294
                echo "                    </ul>
                </div>
            </div>
        </div>
    </div>



    <div class=\"modal_incrip msn_galery modal-img modal-img-taldep\">
        <div class=\"layer_dark\"></div>
        <div>
            <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
                <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
                    ";
                // line 307
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 308
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 309
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 311
                    echo "                    ";
                }
                // line 312
                echo "
                </div>
                <div class=\"custom-dots-container\">
                    <ul class=\"custom-dots\">
                        ";
                // line 316
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 317
                    echo "                            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 318
                        echo "                                <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 320
                    echo "                        ";
                }
                // line 321
                echo "                    </ul>
                </div>
            </div>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
        </div>
    </div>


";
            } elseif (($this->getAttribute(            // line 329
($context["settings"] ?? null), "mode", array(), "array") == "video_imagen")) {
                // line 330
                echo "    <!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria-convenio ";
                // line 332
                if (($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_color")) {
                    echo " tallers_ulima ";
                } else {
                    echo "galeria_ul ";
                }
                echo "\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 334
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 335
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 337
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galeria de fotos</h3>
                    <ul class=\"list-items\" with-buttons onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 343
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 344
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
                        // line 345
                        echo "                         ";
                        if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                            // line 346
                            echo "                          ";
                        } else {
                            // line 347
                            echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                            echo "\"/></a></li>
                             ";
                        }
                        // line 349
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
                    // line 350
                    echo "                    ";
                }
                // line 351
                echo "                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class=\"modal_incrip msn_convenio \">
        <div class=\"layer_dark\"></div>
        <div>
            <div class=\"cont_inscrip  \">
                <h2>Alemania</h2>
                <ul>
                    <li><a href=\"\">Hochschule Bremen - University of Applied Sciences  </a></li>
                    <li><a href=\"\">Universidad de Alemania </a></li>
                    <li><a href=\"\">Universidad de Alemania </a></li>
                    <li><a href=\"\">Universidad de Alemania </a></li>
                    <li><a href=\"\">Universidad de Alemania </a></li>
                    <li><a href=\"\">Universidad de Alemania </a></li>
                </ul>
            </div>
            <span class=\"cerrar\"><a href=\"#\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\"/> </a></span>
        </div>
    </div>
    <div class=\"modal_incrip msn_galery modal-img modal-img-conv\">
        <div class=\"layer_dark\"></div>
        <div>
            <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
                <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
                    ";
                // line 380
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 381
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 382
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 384
                    echo "                    ";
                }
                // line 385
                echo "
                </div>
                <div class=\"custom-dots-container\">
                    <ul class=\"custom-dots\">
                        ";
                // line 389
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 390
                    echo "                            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 391
                        echo "                                <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 393
                    echo "                        ";
                }
                // line 394
                echo "                    </ul>
                </div>
            </div>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
        </div>
    </div>

";
            }
        }
        // line 403
        echo "


";
        // line 406
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "horarios")) {
            // line 407
            echo "    <!--section7-->
    <div class=\"charlasxcarrera\">

        <div class=\"titu_charla\">

            <h2>Inscríbete en Charlas x Carrera</h2>

            <p>Ven con tu familia y amigos y resuelve todas tus dudas sobre la carrera que quieres seguir.

                Selecciona la(s) carrera(s) de tu interés. (Vacantes limitadas).

            </p>

        </div>
   ";
            // line 421
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
                // line 422
                echo "    <div class=\"itemdiacharla\">
       ";
                // line 423
                if (($this->getAttribute($context["loop"], "index0", array()) == "1")) {
                    // line 424
                    echo "        <h4>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                    echo "</h4>
       ";
                }
                // line 426
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
                // line 433
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["item"], "carreras", array(), "array"));
                foreach ($context['_seq'] as $context["_key"] => $context["itemc"]) {
                    // line 434
                    echo "                <tr>
                    <td class=\"cha3\"> ";
                    // line 435
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["itemc"], "nombre", array(), "array"), "html", null, true));
                    echo " </td>
                    <td class=\"cha4\">
                        <div class=\"custom-select \" >
                            <select class=\"select-horario\" name=\"\">
                                <option value=\"Horario\">Horario</option>
                                ";
                    // line 440
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["itemc"], "horarios", array(), "array"));
                    foreach ($context['_seq'] as $context["_key"] => $context["itemt"]) {
                        // line 441
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
                    // line 443
                    echo "                            </select>
                        </div>
                    </td>
                </tr>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['itemc'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 448
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
            // line 452
            echo "        <div class=\"message-error-carreras\"></div>

        <div class=\"btn_ir btn_ir_modal\"> <span> <a id=\"btn_insCharla\" href=\"\">Inscríbete</a> </span> </div>

    </div>
";
        }
        // line 458
        echo "

";
        // line 460
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "texto_3_imagen")) {
            // line 461
            echo "    <!--  seccion 7-->
    <div class=\"alumnos_pro\">
        <div class=\"cont_alum_pro\">
            <h2>";
            // line 464
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
            <div class=\"carousel\">
                <div class=\"list-items\" with-buttons infinite countitem-mob=\"1\" countitem-desk=\"3\">
                    ";
            // line 467
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 468
                echo "                    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 469
                    echo "                        <div class=\"item-note item_slide_ap\">
                            <figure>
                                <img src=\"";
                    // line 471
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/>
                            </figure>
                            <h2>";
                    // line 473
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                            <h3>";
                    // line 474
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h3>
                            <p> ";
                    // line 475
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh4", array(), "array")));
                    echo " </p>
                        </div>
                        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 478
                echo "                    ";
            }
            // line 479
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
        return array (  1181 => 479,  1178 => 478,  1169 => 475,  1165 => 474,  1161 => 473,  1156 => 471,  1152 => 469,  1147 => 468,  1145 => 467,  1139 => 464,  1134 => 461,  1132 => 460,  1128 => 458,  1120 => 452,  1103 => 448,  1093 => 443,  1082 => 441,  1078 => 440,  1070 => 435,  1067 => 434,  1063 => 433,  1052 => 426,  1046 => 424,  1044 => 423,  1041 => 422,  1024 => 421,  1008 => 407,  1006 => 406,  1001 => 403,  990 => 394,  987 => 393,  978 => 391,  973 => 390,  971 => 389,  965 => 385,  962 => 384,  953 => 382,  948 => 381,  946 => 380,  915 => 351,  912 => 350,  898 => 349,  892 => 347,  889 => 346,  886 => 345,  868 => 344,  866 => 343,  857 => 337,  852 => 335,  848 => 334,  839 => 332,  835 => 330,  833 => 329,  823 => 321,  820 => 320,  811 => 318,  806 => 317,  804 => 316,  798 => 312,  795 => 311,  786 => 309,  781 => 308,  779 => 307,  764 => 294,  761 => 293,  747 => 292,  741 => 290,  738 => 289,  735 => 288,  717 => 287,  715 => 286,  706 => 280,  701 => 278,  697 => 277,  691 => 273,  689 => 272,  680 => 265,  677 => 264,  668 => 262,  663 => 261,  661 => 260,  655 => 256,  652 => 255,  643 => 253,  638 => 252,  636 => 251,  623 => 240,  620 => 239,  606 => 238,  600 => 236,  597 => 235,  594 => 234,  576 => 233,  574 => 232,  565 => 226,  560 => 224,  556 => 223,  550 => 219,  548 => 218,  528 => 200,  525 => 199,  515 => 195,  510 => 192,  505 => 191,  503 => 190,  497 => 186,  494 => 185,  483 => 180,  479 => 178,  474 => 177,  472 => 176,  461 => 167,  458 => 166,  444 => 165,  440 => 163,  438 => 162,  433 => 160,  429 => 159,  423 => 156,  415 => 154,  411 => 152,  408 => 151,  390 => 150,  388 => 149,  383 => 147,  377 => 143,  375 => 142,  369 => 138,  358 => 129,  355 => 128,  337 => 124,  333 => 123,  328 => 122,  310 => 121,  308 => 120,  301 => 116,  297 => 115,  291 => 111,  289 => 110,  285 => 108,  280 => 105,  277 => 104,  263 => 98,  259 => 97,  254 => 95,  249 => 93,  245 => 92,  239 => 89,  234 => 87,  231 => 86,  226 => 85,  224 => 84,  219 => 81,  217 => 80,  214 => 79,  204 => 71,  201 => 70,  191 => 66,  187 => 64,  182 => 63,  180 => 62,  175 => 59,  172 => 58,  162 => 54,  158 => 52,  153 => 51,  151 => 50,  137 => 38,  128 => 31,  114 => 30,  107 => 26,  103 => 24,  100 => 23,  97 => 22,  80 => 21,  74 => 18,  66 => 13,  61 => 11,  56 => 8,  54 => 7,  48 => 3,  46 => 2,  43 => 1,);
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
