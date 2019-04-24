<?php

/* themes/ulima/templates/breadcrumb.html.twig */
class __TwigTemplate_c6b4c61cfc02ee1a464d8fb9eac78c7953a82287d70cf0dcdce55cda25f960a8 extends Twig_Template
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
        $tags = array("if" => 12, "for" => 62);
        $filters = array();
        $functions = array("validarUrl" => 14, "phatUrl" => 30);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array(),
                array('validarUrl', 'phatUrl')
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

        // line 12
        if (($context["breadcrumb"] ?? null)) {
            // line 13
            echo "<!--section2-->
";
            // line 14
            if ($this->env->getExtension('Drupal\contacto\TwigExtension')->validarUrl()) {
                // line 15
                echo "<div class=\"r_busqueda r_b2\">
  <div class=\"cont_rbusqueda\">
    <div class=\"search_r\">
      <input class=\"srch_btn\" name=\"\" type=\"button\">
      <input type=\"text\" class=\"srch_input\" value=\"¿Qué estás buscando?\">
      <div class=\"result_b\">
        Se han encontrado 31 resultados para “Modalidades”
      </div>
    </div>
  </div>
</div>
";
            } else {
                // line 27
                echo "<div class=\"cont-bc\">
  <div class=\"parent-container\">
    <div class=\"container-breadcream\">
      <ul class=\"breadcream ";
                // line 30
                if ((($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(2) == "administracion") || ($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(1) == "contacto"))) {
                    echo "nborder";
                }
                echo " \">
        ";
                // line 31
                if (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(2) == "open-ulima")) {
                    // line 32
                    echo "        <li><a href=\"/\">Inicio </a> <span> / </span> </li>
        <li><a href=\"/carreras\">Carreras</a> <span> / </span> </li>
        <li> Open Ulima</li> 
        ";
                } elseif (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(1) == "contacto")) {
                    // line 36
                    echo "        <li><a href=\"/\">Inicio </a> <span> / </span> </li>
        <li> Contacto</li> 
        ";
                } elseif (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(3) == "plan-de-estudios")) {
                    // line 39
                    echo "        <li><a href=\"/\">Inicio </a> <span> / </span> </li>
        <li><a href=\"/carreras\">Carreras</a> <span> / </span> </li>
        <li><a href=\"/carreras/administracion\">Administración</a> <span> / </span> </li>
        <li> Plan de estudios</li>
        ";
                } elseif (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(2) == "examen-de-admisión")) {
                    // line 44
                    echo "        <li><a href=\"/\">Inicio </a> <span> / </span> </li>
        <li><a href=\"/admision\">Admisión</a> <span> / </span> </li>
        <li><a href=\"/admision/examen-de-admisión\"> Modalidades de Admisión </a> <span> / </span> </li>
        <li> Examen de Admisión</li>
        ";
                } elseif (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(2) == "colegio-acreditado-por-la-Ulima")) {
                    // line 49
                    echo "        <li><a href=\"\">Inicio </a> <span> / </span> </li>
        <li><a href=\"/\"> Admisión </a> <span> / </span> </li>
        <li><a href=\"/admision\">Modalidades de Admisión </a> <span> / </span> </li>
        <li> Colegio Acreditado por la Ulima</li>
        ";
                } elseif (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(1) == "admision")) {
                    // line 54
                    echo "          <li><a href=\"/\">Inicio </a> <span> / </span> </li>
          <li><a href=\"/admision\">Admisión</a> <span> / </span> </li>
          <li> Modalidades de Admisión</li>
        ";
                } elseif (($this->env->getExtension('Drupal\contacto\TwigExtension')->phatUrl(2) == "examen-de-admisión")) {
                    // line 58
                    echo "        <li><a href=\"/\">Inicio </a> <span> / </span> </li>
        <li><a href=\"/admision\">Admisión</a> <span> / </span> </li>
        <li> Modalidades de Admisión</li>
        ";
                } else {
                    // line 62
                    echo "        ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["breadcrumb"] ?? null));
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
                        // line 63
                        echo "        <li>
          ";
                        // line 64
                        if ($this->getAttribute($context["loop"], "last", array())) {
                            // line 65
                            echo "          ";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true));
                            echo "
          ";
                        } else {
                            // line 67
                            echo "          <a href=\"";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "url", array()), "html", null, true));
                            echo "\">";
                            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["item"], "text", array()), "html", null, true));
                            echo "</a>
          <span> / </span>
          ";
                        }
                        // line 70
                        echo "        </li>
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
                    // line 72
                    echo "        ";
                }
                // line 73
                echo "
      </ul>
    </div>
  </div>
</div>
";
            }
        }
    }

    public function getTemplateName()
    {
        return "themes/ulima/templates/breadcrumb.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  177 => 73,  174 => 72,  159 => 70,  150 => 67,  144 => 65,  142 => 64,  139 => 63,  121 => 62,  115 => 58,  109 => 54,  102 => 49,  95 => 44,  88 => 39,  83 => 36,  77 => 32,  75 => 31,  69 => 30,  64 => 27,  50 => 15,  48 => 14,  45 => 13,  43 => 12,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/ulima/templates/breadcrumb.html.twig", "/var/www/ulima/themes/ulima/templates/breadcrumb.html.twig");
    }
}
