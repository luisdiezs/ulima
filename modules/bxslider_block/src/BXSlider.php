<?php

namespace Drupal\bxslider_block;

/**
 * Class BXSlider.
 *
 * @package Drupal\bxslider_block
 */
class BXSlider {

  public $bxid;
  public $title;
  public $description;
  public $machineName;
  public $settings;
  public $slideItems;

  /**
   * BXSlider constructor.
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
    $this->slideItems = unserialize($slider['slide_items']);
    $this->type = $this->settings['type'];
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
      'type' => $this->settings['type'],
    ];
    if ($this->slideItems != NULL) {
      $fields['slide_items'] = serialize($this->slideItems);
    }

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
  public function saveImageSlider($bxid = NULL) {
    $slideItems = serialize($this->slideItems);
    $fields = [
      'slide_items' => $slideItems,
    ];
    if ($bxid == NULL) {
      $response = BXSliderModel::insert($fields);
        BXSliderImageModel::insert($fields);
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
  public function deleteDataSlider($bxid) {

    // TODO: Implement deleteDataSlider() method.
    $condition = [
      'bxid' => $bxid,
    ];
    BXSliderImageModel::delete($condition);
    $response = BXSliderModel::delete($condition);
    return $response;
  }

  /**
   * {@inheritdoc}
   */
  public static function isSlider($slider) {
    $condition = [
      'machine_name' => $slider,
    ];
    $slider = BXSliderModel::load($condition);

    return $slider ? TRUE : FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function setSettings() {
    $default_settings = [
      'mode'          => 'video',
      'titulo1'         => '',
      'titulo2'   => '',
      'type'    => '',
      'horarios'    => '',
      'carreras'    => '',
    ];

    return $default_settings;
  }

}
