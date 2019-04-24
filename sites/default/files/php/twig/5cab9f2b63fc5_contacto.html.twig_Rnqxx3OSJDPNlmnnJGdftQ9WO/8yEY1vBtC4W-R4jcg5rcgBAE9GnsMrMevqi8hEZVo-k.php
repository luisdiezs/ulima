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
        $tags = array("if" => 1, "set" => 83, "for" => 97);
        $filters = array("raw" => 100);
        $functions = array("getOpenUlima" => 83);

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
            echo "<script src=\"https://www.google.com/recaptcha/api.js\" async defer></script>

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
                        He leido y acepto la <a href=\"#\">política de protección de datos personales. Términos y
                            condiciones</a>
                        <div class=\"message-error\"></div>
                    </div>
                    <div class=\"capcha\">
                    <div class=\"g-recaptcha\" data-sitekey=\"6LeBdm8UAAAAAEkgv_uIM-r_6XRCDccPLvnK63CT\" data-callback=\"recaptchaCallback\"
                        data-expired-callback=\"recaptchaExpired\"></div>
                    </div>
                    <input id=\"hidden-grecaptcha\" name=\"hidden-grecaptcha\" type=\"text\" style=\"opacity: 0; position: absolute; top: 0; left: 0; height: 1px; width: 1px;\" />


                </div>

                ";
            // line 35
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "enviar", array()), "html", null, true));
            echo "



                ";
            // line 57
            echo "            </div>
            ";
            // line 58
            if (twig_test_empty($this->getAttribute(($context["form"] ?? null), "apellidos", array()))) {
                // line 59
                echo "            <div class=\"cont_contfirmacion\" style=\"\">
                <h3>¡Gracias por contactarnos!</h3>
                <h4>Muy pronto nos comunicaremos contigo </h4>
                <span class=\"o_mensaje\"><a href=\"\">ENVIAR OTRO MENSAJE</a></span>
            </div>
            ";
            }
            // line 65
            echo "            <div>

                ";
            // line 67
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_build_id", array()), "html", null, true));
            echo "
                ";
            // line 68
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_token", array()), "html", null, true));
            echo "
                ";
            // line 69
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_id", array()), "html", null, true));
            echo "
            </div>
        </div>
    </div>
    <figure>
        <img src=\"/themes/ulima/assets/img/contacto/signo.png\" />
    </figure>
</div>
";
        } else {
            // line 78
            echo "

<div class=\"  cc  charlas\">
    <div class=\"ncarreras \">
        <div class=\"charlasxcarrera\">
            ";
            // line 83
            $context["result"] = $this->env->getExtension('Drupal\contacto\TwigExtension')->getOpenUlima();
            // line 84
            echo "            <div class=\"charlasxcarrera\">

                <div class=\"titu_charla\">

                    <h2>Inscríbete en Charlas x Carrera</h2>

                    <p>Ven con tu familia y amigos y resuelve todas tus dudas sobre la carrera que quieres seguir.

                        Selecciona la(s) carrera(s) de tu interés. (Vacantes limitadas).

                    </p>

                </div>
                ";
            // line 97
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
                // line 98
                echo "                <div class=\"itemdiacharla\">
                    ";
                // line 99
                if (($this->getAttribute($context["loop"], "index0", array()) == "0")) {
                    // line 100
                    echo "                    <h4>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->getAttribute($this->getAttribute(($context["result"] ?? null), "settings", array(), "array"), "titulo1", array(), "array")));
                    echo "</h4>
                    ";
                }
                // line 102
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
                // line 109
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["item"], "carreras", array(), "array"));
                foreach ($context['_seq'] as $context["_key"] => $context["itemc"]) {
                    // line 110
                    echo "                            <tr>
                                <td class=\"cha3\"> ";
                    // line 111
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["itemc"], "nombre", array(), "array"), "html", null, true));
                    echo " </td>
                                <td class=\"cha4\">
                                    <div class=\"custom-select \">
                                        <select class=\"select-horario\" name=\"horarios[]\" id=\"horarios\">
                                            <option >Horario</option>
                                            ";
                    // line 116
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable($this->getAttribute($context["itemc"], "horarios", array(), "array"));
                    foreach ($context['_seq'] as $context["key"] => $context["itemt"]) {
                        // line 117
                        echo "                                            <option value=\"";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["key"], "html", null, true));
                        echo "\"> ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["itemt"], "html", null, true));
                        echo "</option>
                                            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['key'], $context['itemt'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 119
                    echo "                                        </select>
                                    </div>
                                </td>
                            </tr>
                            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['itemc'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 124
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
            // line 128
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









<fieldset class=\"line-form\">
                            <div class=\"item_inscrip form-group\" data-field-holder>
                                <input type=\"text\" name=\"nombres\" class=\"form-control input_inscrip\" data-jsv-message-target=\"invalid-nombres\" placeholder=\"Nombres\" data-jsv-validators=\"require\" data-jsv-field-error-require='*Asegurese de ingresar los datos solicitados.'>
                            </div>

                            <div class=\"message-error validate-field-error-message\" id=\"invalid-nombres\" data-field-error>
                            </div>
                        </fieldset>
                        <fieldset class=\"line-form\">
                            <div class=\"item_inscrip form-group\" data-field-holder>
                                <input type=\"text\" name=\"apellidos\" class=\"form-control input_inscrip\" data-jsv-message-target=\"invalid-apellidos\" placeholder=\"Apellidos\" data-jsv-validators=\"require\" data-jsv-field-error-require='*Asegurese de ingresar los datos solicitados.'>
                            </div>
                            <div class=\"message-error validate-field-error-message\" id=\"invalid-apellidos\" data-field-error>
                            </div>
                        </fieldset>
                        <fieldset class=\"line-form\">
                            <div class=\"item_inscrip form-group\" data-field-holder>
                                <input type=\"text\" name=\"numdoc\" class=\"form-control input_inscrip\" data-jsv-message-target=\"invalid-numdoc\" placeholder=\"DNI\" data-jsv-validators=\"require, number, exact\" data-jsv-exact=\"8\" data-jsv-field-error-exact='*Deben ser 8 números' data-jsv-field-error-number='*Solo numeros.'
                                    data-jsv-field-error-require='*Asegurese de ingresar los datos solicitados.'>
                            </div>
                            <div class=\"message-error validate-field-error-message\" id=\"invalid-numdoc\" data-field-error>
                            </div>
                        </fieldset>
                        <fieldset class=\"line-form\">
                            <div class=\"item_inscrip form-group\" data-field-holder>
                                <input type=\"text\" name=\"telefono\" class=\"form-control input_inscrip\" data-jsv-message-target=\"invalid-telefono\" placeholder=\"Telefono/Celular\" data-jsv-validators=\"require, number, length\" data-jsv-field-error-length='*Son requeridos de 7 a 9 números.'
                                    data-jsv-field-error-number='*Solo numeros.' data-jsv-min=\"7\" data-jsv-max=\"9\" data-jsv-field-error-require='*Asegurese de ingresar los datos solicitados.'>
                            </div>
                            <div class=\"message-error validate-field-error-message\" id=\"invalid-telefono\" data-field-error>
                            </div>
                        </fieldset>
                        <fieldset class=\"line-form\">
                            <div class=\"item_inscrip form-group\">
                                <input type=\"text\" name=\"colegios\" class=\"form-control input_inscrip\" placeholder=\"Colegio\">
                            </div>
                            <div class=\"item_inscrip form-group sublevel\">
                                <h4>Si no encuentras tu colegio ingresar aquí:</h4>
                                <span class=\"cont_otros_inscrip\">
                                <span>Otros (especificar)</span>
                                <input type=\"text\" name=\"Otros\" class=\"form-control input_inscrip\" placeholder=\"\">
                                </span>
                            </div>
                        </fieldset>
                        <fieldset class=\"line-form\">
                            <div class=\"item_inscrip form-group\">
                                <select name=\"grado\" class=\"form-control input_inscrip\" data-jsv-message-target=\"invalid-grado\" data-jsv-validators=\"require\" data-jsv-field-error-require='*Asegurese de ingresar los datos solicitados.'>
                                <option value=\"\">Grado/Egresado</option>
                                <option value=\"0\">1</option>
                                <option value=\"1\">2</option>
                                <option value=\"2\">3</option>
                                <option value=\"3\">4</option>
                                <option value=\"4\">5</option>
                                <option value=\"egresado\">egresado</option>
                                <option value=\"bachillerato\">bachillerato</option>
                            </select>
                            </div>
                            <div class=\"message-error  validate-field-error-message\" id=\"invalid-grado\" data-field-error></div>
                        </fieldset>
                        <fieldset class=\"line-form\">
                            <div class=\"item_inscrip declaracion \">
                                <span data-field-holder>
                                <input class=\"form-control input_inscrip\" name=\"terminos\" data-jsv-message-target=\"invalid-terminos\" type=\"checkbox\" data-jsv-validators=\"require\"
                                    data-jsv-field-error-require='*Asegurese de ingresar los datos solicitados.'>
                        
                            </span>
                                <h4>
                                    Declaro haber leído la
                                    <a href=\"\">política de protección de datos personales de la Universidad de Lima</a> y doy mi consentimiento para el tratamiento de mis datos personales de acuerdo a los términos de esta.
                                </h4>
                            </div>
                            <div class=\"message-error validate-field-error-message\" id=\"invalid-terminos\" data-field-error></div>

                        </fieldset>


















";
            // line 295
            echo "            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "enviar", array()), "html", null, true));
            echo "


        </div>

        <span class=\"cerrar\"><a href=\"#\"> ";
            // line 300
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_build_id", array()), "html", null, true));
            echo "
                ";
            // line 301
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_token", array()), "html", null, true));
            echo "
                ";
            // line 302
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["form"] ?? null), "form_id", array()), "html", null, true));
            echo " <img src=\"/themes/ulima/assets/img/png/cerrar.png\" /> </a></span>

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
        return array (  402 => 302,  398 => 301,  394 => 300,  385 => 295,  262 => 128,  245 => 124,  235 => 119,  224 => 117,  220 => 116,  212 => 111,  209 => 110,  205 => 109,  194 => 102,  188 => 100,  186 => 99,  183 => 98,  166 => 97,  151 => 84,  149 => 83,  142 => 78,  130 => 69,  126 => 68,  122 => 67,  118 => 65,  110 => 59,  108 => 58,  105 => 57,  98 => 35,  78 => 18,  74 => 17,  70 => 16,  66 => 15,  62 => 14,  58 => 13,  45 => 2,  43 => 1,);
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
