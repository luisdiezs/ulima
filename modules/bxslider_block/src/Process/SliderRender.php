<?php

namespace Drupal\bxslider_block\Process;

/**
 * Class SliderRender.
 *
 * @package Drupal\bxslider_block\Process
 */
class SliderRender {

  /**
   * Store array value css.
   *
   * @var array
   */
  protected $css;

  /**
   * Store array value js.
   *
   * @var array
   */
  protected $js;

  /**
   * Render constructor.
   */
  public function __construct() {
    $this->css = "";
    $this->js = "";
  }

  /**
   * {@inheritdoc}
   */
  public function getJs($index, $js) {
    $js = $this->js;
    if ($js != "") {

    }
  }

  /**
   * {@inheritdoc}
   */
  public static function saveFileJs($slider_name, $settings) {
    $js = '(function($){';
    $js .= "$('#bx-slider-" . $slider_name . "-block .bxslider').bxSlider({";
    if (is_array($settings)) {
      foreach ($settings as $key => $value) {
        if ($value == NULL) {
          $value = 'false';
        }
        elseif (!is_numeric($value)) {
          $value = "'" . $value . "'";
        }
        $js .= $key . ':' . $value . ',';
      }
    }
    $js .= "});";
    $js .= '})(jQuery, Drupal, drupalSettings);';
    $destination_dir = 'public://bxslider-js';
    file_prepare_directory($destination_dir, FILE_CREATE_DIRECTORY);
    file_unmanaged_save_data($js, $destination_dir . "/bxslider-{$slider_name}.js", FILE_EXISTS_REPLACE);
  }

  /**
   * {@inheritdoc}
   */
  public static function saveFileCss($slider_name, $style) {
    $css = implode("\r\n", $style);
    $destination_dir = 'public://bxslider-css';
    file_prepare_directory($destination_dir, FILE_CREATE_DIRECTORY);
    file_unmanaged_save_data($css, $destination_dir . "/bxslider-{$slider_name}.css", FILE_EXISTS_REPLACE);
  }

}
