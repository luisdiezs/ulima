<?php

namespace Drupal\contacto\Controller;

use Drupal\contacto\ContactoModel;
use Drupal\Core\Url;
use Drupal\Core\Controller\ControllerBase;

/**
 * Class ContactoController.
 *
 * @package Drupal\contacto\Controller
 */
class ContactoController extends ControllerBase {

  /**
   * List bx slider.
   */
  public function lista() {
    $suscribeteAray = ContactoModel::getAll();

    $header = [
      'name' => $this->t('ID'),
      'apellido' => $this->t('Nombre y Apellido'),
      'correo' => $this->t('Correo'),
      'telefono' => $this->t('Telefono'),
      'fecha' => $this->t('Fecha'),
     // 'operation' => $this->t('Operacion'),
    ];
    $rows = [];
    foreach ($suscribeteAray as $index => $suscribete) {
      $rows[$index]['name'] = $suscribete->id;
      $rows[$index]['apellido'] = $suscribete->nombre . ' '. $suscribete->apellidos;
      $rows[$index]['correo'] = $suscribete->correo;
      $rows[$index]['telefono'] = $suscribete->telefono;
      $rows[$index]['fecha'] = date('Y-m-d',$suscribete->fecha);
      $operations = [
        '#type' => 'operations',
        '#links' => [
          'edit' => [
            'url' => new Url('contacto.admin.edit', ['slider' => $suscribete->id]),
            'title' => 'Editar ',
          ],
          'delete' => [
            'url' => new Url('contacto.admin.delete', ['slider' => $suscribete->id]),
            'title' => 'Exportar',
          ],
        ],
      ];
      //$rows[$index]['operation'] = ['data' => $operations];
    }
    return [
      '#theme' => 'table',
     //   '#render' => array('drupal_pre_render_links'),
        '#caption' => $this->t('<div class="dropbutton-widget"><ul class="dropbutton"><li class="delete dropbutton-action secondary-action"><a href="/admin/structure/suscribete/1/delete">Exportar</a></li></ul></div>'),
      '#header' => $header,
      '#rows' => $rows,
       // '#href' => "admin/config/mymodule/add",
      '#attributes' => ['id' => 'bx-slider'],
    ];
  }

  /**
   * Edit bx slider.
   */
  public function edit($slider) {
    $bxSlider = new BXSlider();
    $bxSlider->getDataSlider($slider);
    $form_builder = \Drupal::formBuilder();
    $build['form'] = $form_builder->getForm('\Drupal\bxslider_block\Form\BXSliderEditForm', $bxSlider);

    return $build;
  }
    /**
     * Edit bx slider.
     */
    public function delete($slider) {
        ini_set('display_errors',1);
        $suscribeteAray = ContactoModel::getAll();


        $rows = [];


            $delimiter = ",";
            $filename = "members_" . date('Y-m-d') . ".csv";

            //create a file pointer
            $f = fopen('php://memory', 'w');

            //set column headers
            $fields = array('ID', 'Name', 'Email', 'Phone', 'Created', 'Status');
            fputcsv($f, $fields, $delimiter);
        foreach ($suscribeteAray as $index => $suscribete) {
                $lineData = array($suscribete->id, $suscribete->nombre, $suscribete->apellidos, $suscribete->correo, $suscribete->telefono, $suscribete->fecha );
                fputcsv($f, $lineData, $delimiter);
            }

            //move back to beginning of file
            fseek($f, 0);

            //set headers to download file rather than displayed
            header('Content-Type: text/csv');
            header('Content-Disposition: attachment; filename="' . $filename . '";');

            //output all remaining data on a file pointer
            fpassthru($f);
        exit;

    }
    /**
     * Edit bx slider.
     */
    public function exportar($slider) {
        $bxSlider = new BXSlider();
        $bxSlider->getDataSlider($slider);
        $form_builder = \Drupal::formBuilder();
        $build['form'] = $form_builder->getForm('\Drupal\bxslider_block\Form\BXSliderEditForm', $bxSlider);

        return $build;
    }
}
