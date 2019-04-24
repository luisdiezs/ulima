<?php

namespace Drupal\contacto\Controller;

use Drupal\contacto\ContactoModel;
use Drupal\Core\Url;
use Drupal\Core\Controller\ControllerBase;

/**
 * Class SuscribeteController.
 *
 * @package Drupal\contacto\Controller
 */
class SuscribeteController extends ControllerBase {

  /**
   * List bx slider.
   */
  public function lista() {
      exit;
    $all_slider = ContactoModel::getAll();

    $header = [
      'slider-name' => $this->t('Nombre de Slider'),
      'slider-description' => $this->t('Descripcion de Slider'),
      'slider-operations' => $this->t('Opciones'),
    ];
    $rows = [];
    foreach ($all_slider as $index => $slide) {
      $rows[$index]['slider-name'] = $slide->title;
      $rows[$index]['slider-description'] = $slide->description;
      $operations = [
        '#type' => 'operations',
        '#links' => [
          'config' => [
            'url' => new Url('bxslider_block.admin.configure', ['machine_name' => $slide->machine_name]),
            'title' => 'Configuration',
          ],
          'edit' => [
            'url' => new Url('bxslider_block.admin.edit', ['slider' => $slide->machine_name]),
            'title' => 'Edit ',
          ],
          'delete' => [
            'url' => new Url('bxslider_block.admin.delete', ['slider' => $slide->machine_name]),
            'title' => 'Delete',
          ],
          'clone' => [
            'url' => new Url('bxslider_block.admin.clone', ['slider' => $slide->machine_name]),
            'title' => 'Clone',
          ],
        ],
      ];
      $rows[$index]['slider-operations'] = ['data' => $operations];
    }
    return [
      '#theme' => 'table',
     //   '#render' => array('drupal_pre_render_links'),
      '#header' => $header,
      '#rows' => $rows,
       // '#href' => "admin/config/mymodule/add",
      '#empty' => $this->t('No any slider available. <a href="add">Agregar Galeria</a>.', ['@link' => Url::fromRoute('bxslider_block.admin.add')]),
      '#attributes' => ['id' => 'bx-slider'],
    ];
  }

  /**
   * Edit bx slider.
   */
  public function editbxSlider($slider) {
    $bxSlider = new BXSlider();
    $bxSlider->getDataSlider($slider);
    $form_builder = \Drupal::formBuilder();
    $build['form'] = $form_builder->getForm('\Drupal\bxslider_block\Form\BXSliderEditForm', $bxSlider);

    return $build;
  }

}
