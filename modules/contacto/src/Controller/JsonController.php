<?php

namespace Drupal\contacto\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Controller\ControllerBase;
use Drupal\contacto\ContactoModel;
use Drupal\bxslider_block\BXSliderModel;
use Drupal\file\Entity\File;
use Camcima\Soap\Client;
use Symfony\Component\Yaml\Yaml;
/**
 * An example controller.
 */
class JsonController extends ControllerBase {

    /**
     * {@inheritdoc}
     */

     public function data() {

      if($_POST) {
         // $form_state->setRebuild();
         
          //$form['#theme'] = 'contacto_ok';

         // $form['step'] = array(0 => $this->step);
        //  $form_state->setRebuild();
         // $emails = $_POST['correo');


            $arrayHorarios = array();
            foreach ($_POST['horarios'] as $key => $value) {
              if($value !='Horario'){
                $data = explode('|', $value);
                $arrayHorarios['horarios'][] =  $data[1].'|'.$data[0].'|'.$data[2];
              }
              # code...
            }

          $reply_to = $_POST['email'];
          $params['message'] = '¡Gracias por registrarte a nuestro Open Ulima 2019!';
          $params[':'] = 'Te esperamos en nuestro campus';
          $params['Datos:'] = 'Datos de Carreras:';


          $entry = [
            'machine_name' => 'slider_inscribete_en_charlas_x_carrera_horarios_',
            ];
          
          $slider = BXSliderModel::load($entry);
          $settings = unserialize($slider['settings']);
          $result = json_encode($arrayHorarios);

         $params['horarios'] = $this->horarios(json_decode($result ), $settings);

          $params['nombres'] .= '<br/>Nombre: ' . $_POST['nombres'];
          $params['apellidos'] .= '<br/>Apellido: ' . $_POST['apellidos'];
          $params['numdoc'] .= '<br/>DNI: ' . $_POST['numdoc'];
          $params['telefono'] .= '<br/>Telefono: ' . $_POST['telefono'];
          $params['correo'] .= '<br/>Correo: ' . $_POST['email'];
          $params['colegios'] .= '<br/>Colegio: ' . $_POST['colegios'];
          $params['otros'] .= '<br/>Otros: ' . $_POST['otros'];
          $params['destalle'] .= '<br/>*Vacantes Limitadas
          <br/>Atentamente,
          <br/>Universidad de lima 
          <br/> Avenida Javier Prado Este N.° 4600, Urbanización Fundo Monterrico Chico.
          <br/> Distrito de Santiago de Surco. Provincia y departamento de Lima.
          ' ;
          // Send the e-mail to the recipients.
          $mailManager = \Drupal::service('plugin.manager.mail');
          $to = 'admision@ulima.edu.pe';
          $module = 'email_contact';
          $key = 'contact';
          $langcode = \Drupal::currentUser()->getPreferredLangcode();
          $send = true;
        //  $result = $mailManager->mail($module, $key, $to, $langcode, $params, $reply_to, $send);
          if ($result['result'] !== true) {
              drupal_set_message($this->t('There was a problem sending your message and it was not sent.'), 'error');
          } else {
              drupal_set_message($this->t('Your message has been sent.'));
              $msg = '¡Gracias por registrarte a nuestro Open Ulima 2019! from: @replyto to: @to about: "@subject" containing: "@message"';
              $this->logger('email_contact')->notice($msg, [
                  '@name' => $params['name'],
                  '@replyto' => $reply_to,
                  '@to' => $to,
                  '@subject' => $params['subject'],
                  '@message' => $params['message']
              ]);
          }

      
            $tipo = 1;
            $fields['grado_egresado'] = $_POST['grado'];
            $arrayHorarios = array();
            foreach ($_POST['horarios'] as $key => $value) {
              if($value !='Horario'){
                $arrayHorarios['horarios'][] = $value;
              }
              # code...
            }
            $fields['horarios'] = json_encode($arrayHorarios);
            $fields['colegio'] = $_POST['colegio'];

          $fields['nombres'] = $_POST['nombres'];
          $fields['apellidos'] = $_POST['apellidos'];
          $fields['dni'] = $_POST['numdoc'];
          $fields['correo'] = $_POST['email'];
          $fields['telefono'] = $_POST['telefono'];
          $fields['otros'] = $_POST['otros'];
          //$fields['telefono'] = $_POST['horarios'];
          $fields['colegio'] = $_POST['colegios'];

          $fields['fecha'] = time();
          $fields['tipo'] = $tipo;
          $response = ContactoModel::insert($fields);
          $temp['data'] = $response;
         
          return $this->crearJsonResponse($temp);

      }
      echo 'asdasd';
      exit;
  
  }

 public function horarios($value, $settings) {
        $horarios = Yaml::parse($settings['horarios']);
    $carreras = Yaml::parse($settings['carreras']);
    if($value->horarios){
        foreach ($value->horarios as $key => $value) {
          $arrayResul = explode('|', $value);
          $result[$arrayResul[0]][] =  $carreras[$arrayResul[1]] . '  Hora: ' . $horarios[$arrayResul[2]] ;
        }
        foreach ($result as $keyc => $valuec) {
          $arrayResul = explode('|', $value);
          $resultx .=  " Fecha: ".$keyc ." Cursos: ". implode(", ", $valuec) .' <br/> ';
        }
    }
    
    return $resultx;
  }
    public function api() {

        $request= new Request($_GET);
        $string = $request->get('term');
        $matches = array();
        $precioArray= array('P'=>'850', 'Q'=>'675', 'R'=> '549', 'S'=>'468','T'=>'468');
        if ($string) {
            $result =  db_select('product', 'n')
                ->fields('n', array('number', 'name','type'))
           //     ->condition('n.name', '%' . db_like($string) . '%', 'LIKE')
                ->range(0, 10000)
                ->execute()
                ->fetchAll();
            foreach ($result as $node) {
                $matches[] = array('name' => $node->name, 'type' => $node->type, 'id' => $node->number , 'precio' => $precioArray[$node->type] );
            }
        }


       // $temp['data']= $matches;
        return $this->crearJsonResponse($matches);
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
                
                $value['name'] = $value['tituloh3'];
                 $value['url'] = $value['tituloh2'];
                unset($value['actions']);
                unset($value['tituloh3']);
                unset($value['tituloh2']);

            }
        }
        $temp['titulo']= $settings['titulo1'];
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

    public function service(){

        $client = new \SimpleXMLElement("/var/www/ulima/data/colegio.xml");
   
print_r($client);
exit;
     /*   $wsdl = "/var/www/ulima/data/simulacion.wsdl";
//$clientOptions = array(‘login’ => ’nuestroUser’, ‘password‘ => ‘nuestraContr’);
$client = new SoapClient($wsdl, $clientOptions);
$result = $client->webservice($parameters);
print_r($result);
exit;*/
        //$soapclient = new SoapClient('http://www.webservicex.net/globalweather.asmx?WSDL');
        $soapclient  = new Client('/var/www/ulima/data/simulacion.wsdl', array(''));
print_r($soapclient);

$soapClient = new Client($wsdlUrl);
$soapResult = $soapClient->GetCityForecastByZIP($getForecastByZip);
$resultClassmap = array(
    'GetCityForecastByZIPResult' => '\Camcima\Soap\Test\Fixtures\GetCityForecastByZIPResult',
    'ForecastResult' => '\Camcima\Soap\Test\Fixtures\ForecastResult',
    'array|Forecast' => '\Camcima\Soap\Test\Fixtures\ForecastEntry',
    'Temperatures' => '\Camcima\Soap\Test\Fixtures\Temperatures',
    'ProbabilityOfPrecipiation' => '\Camcima\Soap\Test\Fixtures\ProbabilityOfPrecipiation'
);
$getCityForecastByZIPResult = $soapClient->mapSoapResult($soapResult, 'GetCityForecastByZIPResult', $resultClassmap, true);


        //Use the functions of the client, the params of the function are in 
        //the associative array
        $params = array('CountryName' => 'Spain', 'CityName' => 'Alicante');
        $response = $soapclient->getWeather($params);

        print_r( $response);
         
    }
}
