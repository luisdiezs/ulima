<?php

namespace Drupal\bxslider_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\bxslider_block\BXSliderModel;
use Symfony\Component\Yaml\Yaml;
use Drupal\file\Entity\File;

/**
 * Provides blocks which belong to BX Slider.
 *
 * @Block(
 *   id = "bxslider_block",
 *   admin_label = @Translation("BX Slider"),
 *   category = @Translation("bxSlider"),
 *   deriver = "Drupal\bxslider_block\Plugin\Derivative\BXSliderBlock",
 * )
 */
class BXSliderBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $slider_name = $this->getDerivativeId();
    $entry = [
      'machine_name' => $slider_name,
    ];

    $slider = BXSliderModel::load($entry);

    if (!$slider) {
      return [
        '#markup' => "<h3>" . $this->t("This Slider doesn\'t exit") . "</h3>",
      ];
    }
    $entry = [
      'bxid' => $slider['bxid'],
    ];
    $settings = unserialize($slider['settings']);
    $slideItems = unserialize($slider['slide_items']);
    //print_r($slideItems);
    if (is_array($slideItems)) {
      foreach ($slideItems as &$value) {
        if (!empty($value['image'][0])) {
      //      echo 'xxxxxxx';
          $file = File::load($value['image'][0]);
          if ($file) {
        //      echo 'ttttttt';

              $value['uri'] = $file->getFileUri();
            $value['url'] = file_create_url($file->getFileUri());
          }
        }

      }
    }
    //echo '========';
     // print_r($slideItems);


    $options = [
      'bxslider'  => [$slider['bxid'] => $settings],
    ];
    if($settings['mode'] == 'horarios'){
      $slideItems =  $this->getHorarios($settings, $slideItems);
    }

    return [
      '#theme' => 'bx_slider',
      '#slider_name' => $this->getDerivativeId(),
      '#bxid' => $slider['bxid'],
      '#machine_name' => $slider['machine_name'],
      '#items' => $slideItems,
      '#settings' => $settings,
      '#attached' => [
        'drupalSettings' => $options,
      ],
      '#cache' => [
        'max-age' => 0,
      ],
      '#contextual_links' => [
        'bxslider_block' => [
          'route_parameters' => ['slider' => $this->getDerivativeId()],
        ],
      ],
    ];
  }

  protected function getHorarios($settings, $slideItems){

     // print_r($slideItems);

      $horarios = Yaml::parse($settings['horarios']);
      $carreras = Yaml::parse($settings['carreras']);
      $arrayHorarios = array();
      foreach ($slideItems as $key => $value){
          $arrayHorarios[$value['tituloh3']][$value['carreras']] = $value['horarios'];
      }

      $resulArray = array();
      foreach ($arrayHorarios as $key => $value){
          $resulArray[$key]['fecha'] = $this->fechaCastellano($key);
          foreach ($value as $key1 => $value1){
              $resulArray[$key]['carreras'][$key1]['nombre'] = $carreras[$key1];
              foreach ($value1 as $key2 => $value2){
                  $resulArray[$key]['carreras'][$key1]['horarios'][] = $horarios[$key2];
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

}
