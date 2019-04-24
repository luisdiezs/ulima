<?php

namespace Drupal\contacto\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Controller\ControllerBase;

use Drupal\bxslider_block\BXSliderModel;
use Drupal\file\Entity\File;

/**
 * An example controller.
 */
class JsonController extends ControllerBase {

    /**
     * {@inheritdoc}
     */
    public function api() {
        $request= new Request($_GET);
        $string = $request->get('term');
        $matches = array();
        $precioArray= array('P'=>'850', 'Q'=>'675', 'R'=> '549', 'S'=>'468','T'=>'468');
        if ($string) {
            $result =  db_select('product', 'n')
                ->fields('n', array('number', 'name','type'))
                ->condition('n.name', '%' . db_like($string) . '%', 'LIKE')
                ->range(0, 10)
                ->execute()
                ->fetchAll();
            foreach ($result as $node) {
                $matches[] = array('name' => $node->name, 'type' => $node->type, 'id' => $node->number , 'precio' => $precioArray[$node->type] );
            }
        }


        $temp['data']= $matches;
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

    public function convenio() {
        $request= new Request($_GET);
        $string = $request->get('term');
        $string = ($string) ?$string: 'slider_inscribete_en_charlas_x_carrera_horarios_';
        $entry = [
            'machine_name' =>  $string
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
                
                $value['name'] = $value['tituloh2'];
                 $value['url'] = $value['tituloh3'];
                unset($value['actions']);
                unset($value['tituloh3']);
                unset($value['tituloh2']);

            }
        }
        $temp['name']= $settings['titulo1'];
        $temp['data']= $slideItems;

        return $this->crearJsonResponse($temp);
    }

    
    public function galeria() {

        $request= new Request($_GET);
        $string = $request->get('term');
        $string = ($string) ?$string: 'slider_inscribete_en_charlas_x_carrera_horarios_';
        $entry = [
            'machine_name' =>  $string
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
                        $value['image'] = file_create_url($file->getFileUri());
                        unset($value['actions']);
                    }
                }

            }
        }
        $temp['name']= $settings['titulo1'];
        $temp['data']= $slideItems;

        return $this->crearJsonResponse($temp);
    }
}
