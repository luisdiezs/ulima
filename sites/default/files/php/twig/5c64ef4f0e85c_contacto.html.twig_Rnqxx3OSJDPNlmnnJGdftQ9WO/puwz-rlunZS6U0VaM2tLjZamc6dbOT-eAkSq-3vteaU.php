<?php

/* modules/contacto/templates/contacto.html.twig */
class __TwigTemplate_8fd2f90a3404f3c7198419a90eba66afeb30db87173ad5c725eb16ab5d6af6f8 extends Twig_Template
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
        $tags = array("if" => 1, "set" => 76, "for" => 90);
        $filters = array("raw" => 93);
        $functions = array("getOpenUlima" => 76);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set', 'for'),
                array('raw'),
                array('getOpenUlima')
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
        if (($this->getAttribute($this->getAttribute(($context["form"] ?? null), "form_theme", array()), 0, array(), "array") == "contacto")) {
            // line 2
            echo "     <script src=\"https://www.google.com/recaptcha/api.js\" async defer></script>

<!--section3-->
<div id=\"sec_maps\" class=\"mod_contacto\">
    <div class=\"form_contacto\">
        <div class=\"cont_form_c\">
            <div class=\"cont_inputs\">
                <h2>escríbenos</h2>
                <h3>Nos contactaremos contigo a la brevedad.</h3>


                     ";
            // line 13
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "nombres", array()), "html", null, true));
            echo "
                     ";
            // line 14
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "apellidos", array()), "html", null, true));
            echo "
                     ";
            // line 15
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "dni", array()), "html", null, true));
            echo "
                     ";
            // line 16
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "telefono", array()), "html", null, true));
            echo "
                    ";
            // line 17
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "correo", array()), "html", null, true));
            echo "
                    ";
            // line 18
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "mensaje", array()), "html", null, true));
            echo "
                   <div class=\"cont_capcha\">
                            <div class=\"terminos\">
                                <span><input name=\"terminos\" type=\"checkbox\" value=\"\"></span>
                            He leido y acepto la <a href=\"#\">política de protección de datos personales. Términos y condiciones</a> 
                              <div class=\"message-error\"></div>
                            </div>
                        <div class=\"g-recaptcha\" data-sitekey=\"6LepH5EUAAAAAEu5ceqmfBLB5IM1mxa4gDXP83xH\"></div>
                        </div>
                       
                    ";
            // line 28
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "enviar", array()), "html", null, true));
            echo "



                ";
            // line 50
            echo "            </div>
            ";
            // line 51
            if (twig_test_empty($this->getAttribute(($context["form"] ?? null), "apellidos", array()))) {
                // line 52
                echo "                <div class=\"cont_contfirmacion\" style=\"\">
                    <h3>¡Gracias por contactarnos!</h3>
                    <h4>Muy pronto nos comunicaremos contigo </h4>
                    <span class=\"o_mensaje\"><a href=\"\">ENVIAR OTRO MENSAJE</a></span>
                </div>
            ";
            }
            // line 58
            echo "            <div>

            ";
            // line 60
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_build_id", array()), "html", null, true));
            echo "
            ";
            // line 61
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_token", array()), "html", null, true));
            echo "
            ";
            // line 62
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_id", array()), "html", null, true));
            echo "
            </div>
        </div>
    </div>
    <figure>
        <img src=\"/themes/ulima/assets/img/contacto/signo.png\"/>
    </figure>
</div>
";
        } else {
            // line 71
            echo "

    <div class=\"    charlas\">
        <div class=\"ncarreras \">
            <div class=\"charlasxcarrera\">
                ";
            // line 76
            $context["result"] = $this->env->getExtension('Drupal\contacto\TwigExtension')->getOpenUlima();
            // line 77
            echo "                <div class=\"charlasxcarrera\">

            <div class=\"titu_charla\">

                <h2>Inscríbete en Charlas x Carrera</h2>

                <p>Ven con tu familia y amigos y resuelve todas tus dudas sobre la carrera que quieres seguir.

                    Selecciona la(s) carrera(s) de tu interés. (Vacantes limitadas).

                </p>

            </div>
            ";
            // line 90
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["result"] ?? null), "items", array(), "array"));
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
                // line 91
                echo "                <div class=\"itemdiacharla\">
                    ";
                // line 92
                if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                    // line 93
                    echo "                        <h4>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($this->getAttribute(($context["result"] ?? null), "settings", array(), "array"), "titulo1", array(), "array")));
                    echo "</h4>
                    ";
                }
                // line 95
                echo "                    <h2>";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "fecha", array(), "array"), "html", null, true));
                echo "</h2>
                    <div class=\"cont_itemcharla\">
                        <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                            <tr class=\"headcha\">
                                <td class=\"cha1\">CHARLAS X CARRERA</td>
                                <td class=\"cha2\">HORARIOS</td>
                            </tr>
                            ";
                // line 102
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["item"], "carreras", array(), "array"));
                foreach ($context['_seq'] as $context["_key"] => $context["itemc"]) {
                    // line 103
                    echo "                                <tr>
                                    <td class=\"cha3\"> ";
                    // line 104
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["itemc"], "nombre", array(), "array"), "html", null, true));
                    echo " </td>
                                    <td class=\"cha4\">
                                        <div class=\"custom-select \" >
                                            <select class=\"select-horario\" name=\"horarios\" id=\"horarios\">
                                                <option value=\"Horario\">Horario</option>
                                                ";
                    // line 109
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["itemc"], "horarios", array(), "array"));
                    foreach ($context['_seq'] as $context["key"] => $context["itemt"]) {
                        // line 110
                        echo "                                                    <option value=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["key"], "html", null, true));
                        echo "\"> ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["itemt"], "html", null, true));
                        echo "</option>
                                                ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['key'], $context['itemt'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 112
                    echo "                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['itemc'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 117
                echo "                        </table>
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
            // line 121
            echo "



        <div class=\"message-error-carreras\"></div>

        <div class=\"btn_ir btn_ir_modal\"> <span> <a id=\"btn_insCharla\" href=\"\">Inscríbete</a> </span> </div>

    </div>
            </div>
        </div>
    </div>

    <div class=\"modal_incrip\">
        <div class=\"layer_dark\"></div>
        <div>
            <div class=\"cont_inscrip\">

                <h2>Inscripción</h2>

                <h4>Ingresa tus datos para inscribirteal Open Ulima</h4>

                ";
            // line 143
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "nombres", array()), "html", null, true));
            echo "
                ";
            // line 144
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "apellidos", array()), "html", null, true));
            echo "
                ";
            // line 145
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "dni", array()), "html", null, true));
            echo "
                ";
            // line 146
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "telefono", array()), "html", null, true));
            echo "
                ";
            // line 147
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "colegio", array()), "html", null, true));
            echo "
                ";
            // line 148
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "grado", array()), "html", null, true));
            echo "
                ";
            // line 149
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "enviar", array()), "html", null, true));
            echo "


            </div>

            <span class=\"cerrar\"><a href=\"#\">  ";
            // line 154
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_build_id", array()), "html", null, true));
            echo "
                    ";
            // line 155
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_token", array()), "html", null, true));
            echo "
                    ";
            // line 156
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_id", array()), "html", null, true));
            echo " <img src=\"/themes/ulima/assets/img/png/cerrar.png\"/> </a></span>

        </div>


    </div>



";
        }
    }

    public function getTemplateName()
    {
        return "modules/contacto/templates/contacto.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  319 => 156,  315 => 155,  311 => 154,  303 => 149,  299 => 148,  295 => 147,  291 => 146,  287 => 145,  283 => 144,  279 => 143,  255 => 121,  238 => 117,  228 => 112,  217 => 110,  213 => 109,  205 => 104,  202 => 103,  198 => 102,  187 => 95,  181 => 93,  179 => 92,  176 => 91,  159 => 90,  144 => 77,  142 => 76,  135 => 71,  123 => 62,  119 => 61,  115 => 60,  111 => 58,  103 => 52,  101 => 51,  98 => 50,  91 => 28,  78 => 18,  74 => 17,  70 => 16,  66 => 15,  62 => 14,  58 => 13,  45 => 2,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/contacto/templates/contacto.html.twig", "/var/www/ulima/modules/contacto/templates/contacto.html.twig");
    }
}
