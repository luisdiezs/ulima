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
        $filters = array("length" => 7, "raw" => 114);
        $functions = array("getSidebarClass" => 121, "getClassVideoLista" => 150);

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
            // line 37
            echo "
    </div>
</div>




<div class=\"modal_incrip msn_galery \">
    <div class=\"layer_dark\"></div>
    <div>
        <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
            <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
                ";
            // line 49
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 50
                echo "                    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 51
                    echo "                        <li class=\"item-note\">
                            <figure class=\"vyt\">
                                <iframe class=\"video-iframe\" width=\"310\" height=\"174\" src=\"";
                    // line 53
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><strong></strong>
                            </figure>
                        </li>
                    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 57
                echo "                ";
            }
            // line 58
            echo "            </div>
            <div class=\"custom-dots-container\">
                <ul class=\"custom-dots\">
                    ";
            // line 61
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 62
                echo "                        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 63
                    echo "                            <li>
                                <figure class=\"vyt\">
                                    <iframe class=\"video-iframe\" width=\"310\" height=\"174\" src=\"";
                    // line 65
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><strong></strong>
                                </figure>
                            </li>
                        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 69
                echo "                    ";
            }
            // line 70
            echo "                </ul>
            </div>
        </div>
        <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
    </div>
</div>

";
        }
        // line 78
        echo "
";
        // line 79
        if ((($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "imagen_texto") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == ""))) {
            // line 80
            echo "<!--mod_egrenotable-->
<div class=\"mod_egrenotable carousel\">
    <div class=\"list-items\" infinite with-buttons countitem-mob=\"1\" countitem-desk=\"1\">
    ";
            // line 83
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 84
                echo "        ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 85
                    echo "        <div class=\"cont_notable item-note\">
            <figure> <img src=\"";
                    // line 86
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/> </figure>
            <div class=\"txt_notable\">
                <h2>";
                    // line 88
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh2", array(), "array"), "html", null, true));
                    echo "</h2>
                <div class=\"perfil_egresado\">
                    <div class=\"datos_egre\">
                        <h3>";
                    // line 91
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh3", array(), "array"), "html", null, true));
                    echo "</h3>
                        <h4>";
                    // line 92
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh4", array(), "array"), "html", null, true));
                    echo "</h4>
                        <span></span> </div>
                    <p>";
                    // line 94
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "titulop", array(), "array"), "html", null, true));
                    echo "</p>
                    <div class=\"conocemas\">
                        <h4>";
                    // line 96
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "tituloh5", array(), "array"), "html", null, true));
                    echo "</h4>
                        <h4> <a href=\"";
                    // line 97
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
                // line 103
                echo "        ";
            }
            // line 104
            echo "    </div>
</div>
";
        }
        // line 107
        echo "

";
        // line 109
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "texto")) {
            // line 110
            echo "    <!--somosulima-->
    <div class=\"somosulima\">
        <div class=\"cont_slima\">
            <div class=\"slima1\">
                <h2>";
            // line 114
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
                <h3>";
            // line 115
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
            echo "</h3>
            </div>
            <div class=\"carousel\">
                 <div class=\"slima2 list-items\" infinite with-dots countitem-mob=\"1\" countitem-desk=\"3\">
                    ";
            // line 119
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 120
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
                    // line 121
                    echo "                        <div class=\"item-note valoresulima ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\contacto\TwigExtension')->getSidebarClass(($context["items"] ?? null), $this->getAttribute($context["loop"], "index0", array()))));
                    echo "\">
                            <h2>";
                    // line 122
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                            <h4>";
                    // line 123
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
                // line 127
                echo "                    ";
            }
            // line 128
            echo "
                </div>
            </div>
            <h4 class=\"m_encuesta\">*Antes de cumplir un año de egreso. Fuente: Encuesta de satisfacción de Egresados 2018 (Oficina de Planificación y Acreditación de la Universidad de Lima)</h4>
        </div>
    </div>


";
        }
        // line 137
        echo "



";
        // line 141
        if (($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_lista")) {
            // line 142
            echo " <!--section7-->
 <div class=\"areas_ul comunidad_ul\">
    <div class=\"cont_areas_ul\">
       <div class=\"cont_sedes\">
          <h2>";
            // line 146
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
       </div>
        ";
            // line 148
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 149
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
                    // line 150
                    echo "                ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) == "vl3")) {
                        // line 151
                        echo "                   <div class=\"campusdeportivos cont-video\">
                ";
                    }
                    // line 153
                    echo "                  <div class=\"area_ul1 ";
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        echo " fr";
                    }
                    echo "\">
                     <figure class=\"vyt\">
                    <iframe class=\"video-iframe\" src=\"";
                    // line 155
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>

                      </figure>
                      <h2>";
                    // line 158
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                      <h3>";
                    // line 159
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h3>
                  </div>
                ";
                    // line 161
                    if (($this->env->getExtension('Drupal\contacto\TwigExtension')->getClassVideoLista($this->getAttribute($context["loop"], "index0", array())) != "vl3")) {
                        // line 162
                        echo "                </div>
                ";
                    }
                    // line 164
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
                // line 165
                echo "            <div class=\"btn_ir\"> <span> <a href=\"https://www.youtube.com/channel/UCI3ZakE5Ya1i9Xdm6TbJjJA/featured\" target=\"_blank\">VER MÁS </a> </span> </div>

        ";
            }
            // line 168
            echo "    </div>
</div>


<div class=\"modal_incrip msn_galery modal-video modal-video-ulima\">
    <div class=\"layer_dark\"></div>
    <div>
        <div class=\"cont_galery_pu_modal cont_galery_pu carousel\">
            <div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\">
           ";
            // line 177
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 178
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 179
                    echo "                <li class=\"item-note\">
                    <figure class=\"vyt\">
                        <iframe class=\"video-iframe\" src=\"";
                    // line 181
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                    </figure>
                </li>
          
                 ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 186
                echo "        ";
            }
            // line 187
            echo "
            </div>
            <div class=\"custom-dots-container\">
                <ul class=\"custom-dots dots100\">
            ";
            // line 191
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 192
                echo "            ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 193
                    echo "
                    <li>
                        <figure class=\"vyt\">
                            <iframe class=\"video-iframe\" src=\"";
                    // line 196
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "video", array(), "array"), "html", null, true));
                    echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
                        </figure>
                    </li>
                                   ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 200
                echo "        ";
            }
            // line 201
            echo "
                </ul>
            </div>
        </div>
        <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
    </div>
</div>










";
        } else {
            // line 219
            if ((($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "video_imagen") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_ta"))) {
                // line 220
                echo "<!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria_ul tallers_ulima\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 224
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 225
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 227
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galería de fotos</h3>
                    <ul class=\"list-items\" with-buttons onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 233
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 234
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
                        // line 235
                        echo "                         ";
                        if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                            // line 236
                            echo "                          ";
                        } else {
                            // line 237
                            echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                            echo "\"/></a></li>
                             ";
                        }
                        // line 239
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
                    // line 240
                    echo "                    ";
                }
                // line 241
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
                // line 252
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 253
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 254
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 256
                    echo "                    ";
                }
                // line 257
                echo "
                </div>
                <div class=\"custom-dots-container\">
                    <ul class=\"custom-dots\">
                        ";
                // line 261
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 262
                    echo "                            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 263
                        echo "                                <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 265
                    echo "                        ";
                }
                // line 266
                echo "                    </ul>
                </div>
            </div>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
        </div>
    </div>

";
            } elseif ((($this->getAttribute(            // line 273
($context["settings"] ?? null), "mode", array(), "array") == "video_imagen") && ($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_td"))) {
                // line 274
                echo "<!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria_ul tallers_dep\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 278
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 279
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 281
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galeria de fotos</h3>
                    <ul class=\"list-items\" with-buttons onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 287
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 288
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
                        // line 289
                        echo "                         ";
                        if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                            // line 290
                            echo "                          ";
                        } else {
                            // line 291
                            echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                            echo "\"/></a></li>
                             ";
                        }
                        // line 293
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
                    // line 294
                    echo "                    ";
                }
                // line 295
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
                // line 308
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 309
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 310
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 312
                    echo "                    ";
                }
                // line 313
                echo "
                </div>
                <div class=\"custom-dots-container\">
                    <ul class=\"custom-dots\">
                        ";
                // line 317
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 318
                    echo "                            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 319
                        echo "                                <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 321
                    echo "                        ";
                }
                // line 322
                echo "                    </ul>
                </div>
            </div>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
        </div>
    </div>


";
            } elseif (($this->getAttribute(            // line 330
($context["settings"] ?? null), "mode", array(), "array") == "video_imagen")) {
                // line 331
                echo "    <!--section7-->
       <!--galeria-convenio-->
    <div class=\"galeria-convenio ";
                // line 333
                if (($this->getAttribute(($context["settings"] ?? null), "type", array(), "array") == "galeria_color")) {
                    echo " tallers_ulima ";
                } else {
                    echo "galeria_ul ";
                }
                echo "\">
        <div class=\"cont_galeria\">
                <h2>";
                // line 335
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                echo "</h2>
                <p>";
                // line 336
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo2", array(), "array")));
                echo "</p>
            <div class=\"video_convenio vyt\">
                <iframe  width=\"900\" height=\"506\" src=\"";
                // line 338
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["items"] ?? null), 0, array(), "array"), "video", array(), "array"), "html", null, true));
                echo "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>
            </div>
            <div class=\"carousel\">
                <div class=\"cont_galefotos\">
                    <h3>Galeria de fotos</h3>
                    <ul class=\"list-items\" with-buttons onlyone countitem-mob=\"2\" countitem-desk=\"5\">
                    ";
                // line 344
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 345
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
                        // line 346
                        echo "                         ";
                        if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                            // line 347
                            echo "                          ";
                        } else {
                            // line 348
                            echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                            echo "\"/></a></li>
                             ";
                        }
                        // line 350
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
                    // line 351
                    echo "                    ";
                }
                // line 352
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
                // line 381
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 382
                    echo "                        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 383
                        echo "                            <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                        ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 385
                    echo "                    ";
                }
                // line 386
                echo "
                </div>
                <div class=\"custom-dots-container\">
                    <ul class=\"custom-dots\">
                        ";
                // line 390
                if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                    // line 391
                    echo "                            ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                        // line 392
                        echo "                                <li class=\"item-note\"><a href=\"\"> <img src=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                        echo "\"/></a></li>
                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 394
                    echo "                        ";
                }
                // line 395
                echo "                    </ul>
                </div>
            </div>
            <span class=\"cerrar\"><a href=\"\"> <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /></a></span>
        </div>
    </div>

";
            }
        }
        // line 404
        echo "


";
        // line 407
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "horarios")) {
            // line 408
            echo "    <!--section7-->
    <div class=\"charlasxcarrera\">

        <div class=\"titu_charla\">

            <h2>Inscríbete en Charlas x Carrera</h2>

            <p>Ven con tu familia y amigos y resuelve todas tus dudas sobre la carrera que quieres seguir.

                Selecciona la(s) carrera(s) de tu interés. (Vacantes limitadas).

            </p>

        </div>
   ";
            // line 422
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
                // line 423
                echo "    <div class=\"itemdiacharla\">
       ";
                // line 424
                if (($this->getAttribute($context["loop"], "index0", array()) == "1")) {
                    // line 425
                    echo "        <h4>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
                    echo "</h4>
       ";
                }
                // line 427
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
                // line 434
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["item"], "carreras", array(), "array"));
                foreach ($context['_seq'] as $context["_key"] => $context["itemc"]) {
                    // line 435
                    echo "                <tr>
                    <td class=\"cha3\"> ";
                    // line 436
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["itemc"], "nombre", array(), "array"), "html", null, true));
                    echo " </td>
                    <td class=\"cha4\">
                        <div class=\"custom-select \" >
                            <select class=\"select-horario\" name=\"\">
                                <option value=\"Horario\">Horario</option>
                                ";
                    // line 441
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["itemc"], "horarios", array(), "array"));
                    foreach ($context['_seq'] as $context["_key"] => $context["itemt"]) {
                        // line 442
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
                    // line 444
                    echo "                            </select>
                        </div>
                    </td>
                </tr>
                ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['itemc'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 449
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
            // line 453
            echo "        <div class=\"message-error-carreras\"></div>

        <div class=\"btn_ir btn_ir_modal\"> <span> <a id=\"btn_insCharla\" href=\"\">Inscríbete</a> </span> </div>

    </div>
";
        }
        // line 459
        echo "

";
        // line 461
        if (($this->getAttribute(($context["settings"] ?? null), "mode", array(), "array") == "texto_3_imagen")) {
            // line 462
            echo "    <!--  seccion 7-->
    <div class=\"alumnos_pro\">
        <div class=\"cont_alum_pro\">
            <h2>";
            // line 465
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute(($context["settings"] ?? null), "titulo1", array(), "array")));
            echo "</h2>
            <div class=\"carousel\">
                <div class=\"list-items\" with-buttons infinite countitem-mob=\"1\" countitem-desk=\"3\">
                    ";
            // line 468
            if ((twig_length_filter($this->env, ($context["items"] ?? null)) > 0)) {
                // line 469
                echo "                    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 470
                    echo "                        <div class=\"item-note item_slide_ap\">
                            <figure>
                                <img src=\"";
                    // line 472
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array(), "array"), "html", null, true));
                    echo "\"/>
                            </figure>
                            <h2>";
                    // line 474
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh2", array(), "array")));
                    echo "</h2>
                            <h3>";
                    // line 475
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh3", array(), "array")));
                    echo "</h3>
                            <p> ";
                    // line 476
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($context["item"], "tituloh4", array(), "array")));
                    echo " </p>
                        </div>
                        ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 479
                echo "                    ";
            }
            // line 480
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
        return array (  1182 => 480,  1179 => 479,  1170 => 476,  1166 => 475,  1162 => 474,  1157 => 472,  1153 => 470,  1148 => 469,  1146 => 468,  1140 => 465,  1135 => 462,  1133 => 461,  1129 => 459,  1121 => 453,  1104 => 449,  1094 => 444,  1083 => 442,  1079 => 441,  1071 => 436,  1068 => 435,  1064 => 434,  1053 => 427,  1047 => 425,  1045 => 424,  1042 => 423,  1025 => 422,  1009 => 408,  1007 => 407,  1002 => 404,  991 => 395,  988 => 394,  979 => 392,  974 => 391,  972 => 390,  966 => 386,  963 => 385,  954 => 383,  949 => 382,  947 => 381,  916 => 352,  913 => 351,  899 => 350,  893 => 348,  890 => 347,  887 => 346,  869 => 345,  867 => 344,  858 => 338,  853 => 336,  849 => 335,  840 => 333,  836 => 331,  834 => 330,  824 => 322,  821 => 321,  812 => 319,  807 => 318,  805 => 317,  799 => 313,  796 => 312,  787 => 310,  782 => 309,  780 => 308,  765 => 295,  762 => 294,  748 => 293,  742 => 291,  739 => 290,  736 => 289,  718 => 288,  716 => 287,  707 => 281,  702 => 279,  698 => 278,  692 => 274,  690 => 273,  681 => 266,  678 => 265,  669 => 263,  664 => 262,  662 => 261,  656 => 257,  653 => 256,  644 => 254,  639 => 253,  637 => 252,  624 => 241,  621 => 240,  607 => 239,  601 => 237,  598 => 236,  595 => 235,  577 => 234,  575 => 233,  566 => 227,  561 => 225,  557 => 224,  551 => 220,  549 => 219,  529 => 201,  526 => 200,  516 => 196,  511 => 193,  506 => 192,  504 => 191,  498 => 187,  495 => 186,  484 => 181,  480 => 179,  475 => 178,  473 => 177,  462 => 168,  457 => 165,  443 => 164,  439 => 162,  437 => 161,  432 => 159,  428 => 158,  422 => 155,  414 => 153,  410 => 151,  407 => 150,  389 => 149,  387 => 148,  382 => 146,  376 => 142,  374 => 141,  368 => 137,  357 => 128,  354 => 127,  336 => 123,  332 => 122,  327 => 121,  309 => 120,  307 => 119,  300 => 115,  296 => 114,  290 => 110,  288 => 109,  284 => 107,  279 => 104,  276 => 103,  262 => 97,  258 => 96,  253 => 94,  248 => 92,  244 => 91,  238 => 88,  233 => 86,  230 => 85,  225 => 84,  223 => 83,  218 => 80,  216 => 79,  213 => 78,  203 => 70,  200 => 69,  190 => 65,  186 => 63,  181 => 62,  179 => 61,  174 => 58,  171 => 57,  161 => 53,  157 => 51,  152 => 50,  150 => 49,  136 => 37,  128 => 31,  114 => 30,  107 => 26,  103 => 24,  100 => 23,  97 => 22,  80 => 21,  74 => 18,  66 => 13,  61 => 11,  56 => 8,  54 => 7,  48 => 3,  46 => 2,  43 => 1,);
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
