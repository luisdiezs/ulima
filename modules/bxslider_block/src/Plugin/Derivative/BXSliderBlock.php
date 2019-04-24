<?php

namespace Drupal\bxslider_block\Plugin\Derivative;

use Drupal\bxslider_block\BXSliderModel;
use Drupal\Component\Plugin\Derivative\DeriverBase;

/**
 * Provides blocks which belong to bxSlider.
 */
class BXSliderBlock extends DeriverBase {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $sliders = BXSliderModel::getAll();
    foreach ($sliders as $slide) {
      $name = $slide->machine_name;
      $this->derivatives[$name] = $base_plugin_definition;
      $this->derivatives[$name]['admin_label'] = $slide->title;
    }
    return $this->derivatives;
  }

}
