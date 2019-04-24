<?php
namespace Drupal\contacto;
use Drupal\block\Entity\Block;
use Drupal\bxslider_block\BXSliderModel;
use Drupal\Component\Plugin\PluginInspectionInterface;
use Drupal\Core\Entity\EntityWithPluginCollectionInterface;
use Drupal\Tests\Core\Plugin\PluginDependencyTraitTest;
use Drupal\Tests\Core\Plugin\TestPluginDependency;
use Drupal\user\Entity\User;
use Drupal\node\Entity\Node;
use Drupal\Core\Plugin\PluginDependencyTrait;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Yaml\Yaml;
use Drupal\file\Entity\File;

/**
 * Class DefaultService.
 *
 * @package Drupal\demo_module
 */
class TwigExtension extends \Twig_Extension {

    /**
     * {@inheritdoc}
     * This function must return the name of the extension. It must be unique.
     */
    public function getName() {
        return 'block_display';
    }

    protected $requestStack;
    /**
     * In this function we can declare the extension function.
     */
    public function getFunctions() {
        return array(
            new \Twig_SimpleFunction('getImageAlt', array($this, 'getImageAlt'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('getbloques', array($this, 'getbloques'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('getSidebarClass', array($this, 'getSidebarClass'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('getArticlePortada', array($this, 'getArticlePortada'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('getClassVideoLista', array($this, 'getClassVideoLista'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('getOpenUlima', array($this, 'getOpenUlima'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('validarUrl', array($this, 'validarUrl'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('getInfraestructura', array($this, 'getInfraestructura'), array('is_safe' => array('html'))),
            new \Twig_SimpleFunction('depure', array($this, 'depure'), array('is_safe' => array('html'))),
        );
    }

    use PluginDependencyTrait;
    /*
     * This function is used to return alt of an image
     * Set image title as alt.
     */
    public function getImageAlt($content) {
        $content = preg_replace('#{(.*)?}#', '<span class="$1"></span>', $content);
        $content = str_replace('<ul>', '<ul class="list-items" infinite onlyone with-buttons with-dots countitem-mob="1" countitem-desk="5">', $content);
        $content = str_replace('<li>', '<li class="item-note ">', $content);
        return $content['#text'];
    }
    /*
     * This function is used to return alt of an image
     * Set image title as alt.
     */
    public function getbloques($content) {
       // print_r($content); exit;
        if($content['#text']){
            return $content['#text'];
        }else{
            return $content['#context']['value'];
        }

    }
    /*
     * This function is used to return alt of an image
     * Set image title as alt.
     */
    public function getSidebarClass($items,$item) {
        $count = count($items);
        if ($item % 3 == 0 ) {
            return;
        }elseif ( $item % 2 == 0) {
           return 'vl3';
        }else{
            return 'vl2';
        }
        return $retul;
    }

    /*
     * This function is used to return alt of an image
     * Set image title as alt.
     */
    public function getClassVideoLista($item) {
       if ( $item % 2 == 0) {
           return 'vl3';
        }else{
            return ;
        }
        return $retul;
    }
    /*
     * This function is used to return alt of an image
     * Set image title as alt.
     */
    public function getInfraestructura() {

        $entry = [
            'type' => 'slider_popup',
        ];
        $settings =  array();
        $sliderArray = BXSliderModel::getAll($entry);
        foreach ($sliderArray as $key => $slider){
            $settings[$key] = unserialize($slider->settings);
            $slideItems[$key] = unserialize($slider->slide_items);
            if (is_array($slideItems[$key])) {
                foreach ($slideItems[$key] as &$value) {
                    if (!empty($value['image'][0])) {
                        $file = File::load($value['image'][0]);
                        if ($file) {
                            $value['uri'] = $file->getFileUri();
                            $value['url'] = file_create_url($file->getFileUri());
                        }
                    }

                }
            }
        }
        return array('items'=>$slideItems, 'settings'=>$settings);

    }
    /*
     * This function is used to return alt of an image
     * Set image title as alt.
     */
    public function getOpenUlima() {
        $entry = [
            'machine_name' => 'slider_inscribete_en_charlas_x_carrera_horarios_',
        ];

        $slider = BXSliderModel::load($entry);

        if (!$slider) {
            return [
                '#markup' => "<h3>" . $this->t("This Slider doesn\'t exit") . "</h3>",
            ];
        }

        $settings = unserialize($slider['settings']);
        $slideItems = unserialize($slider['slide_items']);
        if (is_array($slideItems)) {
            foreach ($slideItems as &$value) {
                if (!empty($value['image'][0])) {
                    $file = File::load($value['image'][0]);
                    if ($file) {
                        $value['uri'] = $file->getFileUri();
                        $value['url'] = file_create_url($file->getFileUri());
                    }
                }

            }
        }

        $options = [
            'bxslider'  => [$slider['bxid'] => $settings],
        ];
        if($settings['mode'] == 'horarios'){
            $slideItems =  $this->getHorarios($settings, $slideItems);
        }

        return array('items'=>$slideItems, 'settings'=>$settings);

    }

    protected function getHorarios($settings, $slideItems){

        // print_r($slideItems);

        $horarios = Yaml::parse($settings['horarios']);
        $carreras = Yaml::parse($settings['carreras']);
        $arrayHorarios = array();
        $arrayti = array();
        foreach ($slideItems as $key => $value){
            $arrayHorarios[$value['tituloh3']][$value['carreras']] = $value['horarios'];
            $arrayti[$value['tituloh3']] = $value['tituloh2'];
        }

        $resulArray = array();
        foreach ($arrayHorarios as $key => $value){
            $resulArray[$key]['fecha'] = $arrayti[$key].' '.$this->fechaCastellano($key);
            foreach ($value as $key1 => $value1){
                $resulArray[$key]['carreras'][$key1]['nombre'] = $carreras[$key1];
                foreach ($value1 as $key2 => $value2){
                    $keyarrary = $key.'|'.$key1.'|'.$key2;
                    $resulArray[$key]['carreras'][$key1]['horarios'][$keyarrary] = $horarios[$key2];
                }
            }
        }
        //print_r($resulArray);
        return $resulArray;
    }

    protected function fechaCastellano($fecha) {
        $fecha = substr($fecha, 0, 10);
        $numeroDia = date('d', strtotime($fecha));
        $dia = date('l', strtotime($fecha));
        $mes = date('F', strtotime($fecha));
        $anio = date('Y', strtotime($fecha));
        $dias_ES = array("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
        $dias_EN = array("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday");
        $nombredia = str_replace($dias_EN, $dias_ES, $dia);
        $meses_ES = array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
        $meses_EN = array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        $nombreMes = str_replace($meses_EN, $meses_ES, $mes);
        return $nombredia." ".$numeroDia." de ".$nombreMes." de ".$anio;
    }

    public function getArticlePortada() {
        $query = \Drupal::entityQuery('node');
        $query->condition('status', 1);
        $query->condition('type', 'carreras');
        $result = $query->execute();
        $nids = $result;
        $nodes = Node::loadMultiple($nids);
        foreach ($nodes as $contentType) {
            $contentTypesList[$contentType->id()] = strtoupper($contentType->label());
        }
        return $contentTypesList;
    }

    public function validarUrl() {
        $id =  \Drupal::request()->getPathInfo();
        $id = explode('/', $id);
        if($id[1] == 'search'){
            return true;
        }
        return false;
    }
    public function depure($com) {



        foreach ($com as $key =>$value){
            print_r($key);
            if($key == '#type'){
               // print_r($value);
            }

           // print_r($value);
    foreach ($value as $key1 =>$value1){
        print_r($value1);
        echo '=====';
        exit;
        print_r($key1);
if($key1 == '#block'){

   // $valuex = $value1->getPluginCollections();
    $arry = Array();

    foreach ($value1->getPluginCollections() as $plugin_collection) {
        //$test_class = new PluginDependencyTrait();
        //print_r($plugin_collection->manager());

    }
      /* foreach ($valuex as $key2 =>$value2){
    echo  $key2;
    print_r($value2);
}*/
      print_r($arry);
      exit;
}
    }

        print_r($key);
        echo '=============================';
        }
    }

    protected function calculatePluginDependencies(PluginInspectionInterface $instance) {
         //   print_r($instance);
        $this->addDependencies($this->getPluginDependencies($instance));
    }

    protected function addDependencies(array $dependencies) {
        foreach ($dependencies as $dependency_type => $list) {
            foreach ($list as $name) {
                $this->addDependency($dependency_type, $name);
            }
        }
    }

    protected function addDependency($type, $name) {
        if (empty($this->dependencies[$type])) {
            $this->dependencies[$type] = [$name];
            if (count($this->dependencies) > 1) {
                // Ensure a consistent order of type keys.
                ksort($this->dependencies);
            }
        }
        elseif (!in_array($name, $this->dependencies[$type])) {
            $this->dependencies[$type][] = $name;
            // Ensure a consistent order of dependency names.
            sort($this->dependencies[$type], SORT_FLAG_CASE);
        }
        return $this;
    }

    protected function getPluginDependencies(PluginInspectionInterface $instance) {
        $dependencies = [];
        $definition = $instance->getPluginDefinition();
        if ($definition instanceof PluginDefinitionInterface) {
            $dependencies['module'][] = $definition->getProvider();
            if ($definition instanceof DependentPluginDefinitionInterface && $config_dependencies = $definition->getConfigDependencies()) {
                $dependencies = NestedArray::mergeDeep($dependencies, $config_dependencies);
            }
        }
        elseif (is_array($definition)) {
            $dependencies['module'][] = $definition['provider'];
            // Plugins can declare additional dependencies in their definition.
            if (isset($definition['config_dependencies'])) {
                $dependencies = NestedArray::mergeDeep($dependencies, $definition['config_dependencies']);
            }
        }

        // If a plugin is dependent, calculate its dependencies.
        if ($instance instanceof DependentPluginInterface && $plugin_dependencies = $instance->calculateDependencies()) {
            $dependencies = NestedArray::mergeDeep($dependencies, $plugin_dependencies);
        }
        return $dependencies;
    }

    public function set($property_name, $value) {
        print_r($value);
        if ($this instanceof EntityWithPluginCollectionInterface) {
            $plugin_collections = $this->getPluginCollections();
            if (isset($plugin_collections[$property_name])) {
                // If external code updates the settings, pass it along to the plugin.
                $plugin_collections[$property_name]->setConfiguration($value);
            }
        }
print_r($plugin_collections);
        $this->{$property_name} = $value;
print_r($this);
        return $this;
    }
}
