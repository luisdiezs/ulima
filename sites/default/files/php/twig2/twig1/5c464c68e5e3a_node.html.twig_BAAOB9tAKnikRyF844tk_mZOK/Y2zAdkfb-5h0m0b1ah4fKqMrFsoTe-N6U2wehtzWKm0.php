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
        $tags = array("set" => 67, "if" => 85);
        $filters = array("clean_class" => 69);
        $functions = array("getbloques" => 90, "getImageAlt" => 107);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if'),
                array('clean_class'),
                array('getbloques', 'getImageAlt')
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
            echo "      OTRO => CARRWE
  ";
        } else {
            // line 114
            echo "    ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["content"] ?? null), "html", null, true));
            echo "
  ";
        }
        // line 116
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
        return array (  122 => 116,  116 => 114,  112 => 112,  104 => 107,  99 => 105,  95 => 103,  92 => 102,  85 => 98,  81 => 96,  78 => 95,  70 => 90,  65 => 87,  62 => 86,  59 => 85,  57 => 84,  55 => 79,  50 => 77,  48 => 73,  47 => 72,  46 => 71,  45 => 70,  44 => 69,  43 => 67,);
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
