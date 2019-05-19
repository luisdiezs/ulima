<?php

namespace Drupal\suscribete\Controller;

use Drupal\suscribete\SuscribeteModel;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\EventSubscriber\RequestCloseSubscriber;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\ParameterBag as baseParameter;
use Drupal\Core\Url;
/**
 * An example controller.
 */
class SuscribeteController extends ControllerBase {

    protected $parameters;

/**
 * {@inheritdoc}
 */
  public function build() {
      $request = new Request($_GET);
      if(empty($request)) $request = new Request($_GET);
      $temp = array();
      $request->query = (array) $request->query;
        $obj = new baseParameter($request->query);
     foreach ($obj->all() as $value){
        $email = $value['email'];
        $key = $value['key'];
     }
      $existe = SuscribeteModel::load(array('email'=> $email));
      if($email and $key and empty($existe)){
          $fields = [
              'email' => $email,
              'fecha' => time(),
              'tipo' => 2,
          ];

          $response = SuscribeteModel::insert($fields);
      }
      $temp['data']= $response;
      return $this->crearJsonResponse($temp);
  }

    protected function crearJsonResponse($data)
    {
        $request= new Request($_GET);
        $callback = $request->get('callback');
        $response = new JsonResponse();
        $response->setData($data);
        $response->setCallback($callback );
        return $response;
    }

    /**
     * {@inheritdoc}
     */
    public function ok() {
        $build =  [
            '#theme' => 'contacto_ok',
            '#test_var' => '123456',
        ];

        return $build;
    }

 public function newsletter() {
    $suscribeteAray = SuscribeteModel::getAll('',array('id'=>'DESC'));

    $header = [
      'id' => $this->t('ID'),
      'correo' => $this->t('Correo'),
      'fecha' => $this->t('Fecha'),
     // 'operation' => $this->t('Operacion'),
    ];
    $rows = [];
    foreach ($suscribeteAray as $index => $suscribete) {
      $rows[$index]['name'] = $suscribete->id;
      $rows[$index]['correo'] = $suscribete->email;
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
     // $rows[$index]['operation'] = ['data' => $operations];
    }
    return [
      '#theme' => 'table',
      '#render' => array('ddd'),
      '#pager' => ['#type' => 'pager'],
        '#caption' => $this->t('<div class="dropbutton-widget"><ul class="dropbutton"><li class="delete dropbutton-action secondary-action"><a href="/admin/structure/newsletter/exportar">Exportar</a></li></ul></div>'),
      '#header' => $header,
      '#rows' => $rows,
        '#href' => "admin/config/mymodule/add",
      '#attributes' => ['id' => 'bx-slider'],
    ];
  }
    /**
     * Edit bx slider.
     */
    public function exportarnews() {
        ini_set('display_errors',1);
        $suscribeteAray = SuscribeteModel::getAll('','',100000000);


        $rows = [];


        $delimiter = ",";
        $filename = "members_" . date('Y-m-d') . ".csv";

        //create a file pointer
        $f = fopen('php://memory', 'w');

        //set column headers
        $fields = array('ID', 'Email', 'Fecha' );
        fputcsv($f, $fields, $delimiter);
        foreach ($suscribeteAray as $index => $suscribete) {
            $lineData = array($suscribete->id, $suscribete->email, $suscribete->fecha );
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
}
