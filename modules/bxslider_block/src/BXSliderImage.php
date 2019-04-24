<?php

namespace Drupal\bxslider_block;

/**
 * Class BXSliderImage.
 *
 * @package Drupal\bxslider_block
 */
class BXSliderImage {

  public $bxid;
  public $fid;
  public $alt;
  public $machineName;
  public $settings;

  /**
   * BXSliderImage constructor.
   */
  public function __construct() {
    $this->settings = $this->setSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function getDataSlider($slider) {
    $condition = [
      'machine_name' => $slider,
    ];
    $slider = BXSliderModel::load($condition);
    $this->bxid = $slider['bxid'];
    $this->title = $slider['title'];
    $this->description = $slider['description'];
    $this->machineName = $slider['machine_name'];
    $this->settings = unserialize($slider['settings']);
  }

  /**
   * {@inheritdoc}
   */
  public function saveDataSlider($bxid = NULL) {
    $setttings = serialize($this->settings);
    $fields = [
      'title' => $this->title,
      'description' => $this->description,
      'machine_name' => $this->machineName,
      'settings' => $setttings,
    ];
    if ($bxid == NULL) {
      $response = BXSliderModel::insert($fields);
    }
    else {
      $fields['bxid'] = $bxid;
      $condition = [
        'bxid' => $bxid,
      ];
      $response = BXSliderModel::update($fields, $condition);
    }

    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public function setSettings() {
    $default_settings = [
      'position'    => 0,
      'type'        => 1,
      'bxid'        => 0,
    ];

    return $default_settings;
  }

}
