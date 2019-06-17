<?php

/**
 * @file
 * Contains Drupal\contacto\Form\MultiStepForm.
 */

namespace Drupal\contacto\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\contacto\ContactoModel;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Url;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\Yaml\Yaml;
use Drupal\bxslider_block\BXSliderModel;

class MultiStepFormOpen extends ConfigFormBase
 {

  protected $step = 1;
  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {}

  /**
   * {@inheritdoc}
   */
  public function getFormID() {
    return 'form_vanillajs_validate';
  }

    /**
     * {@inheritdoc}
     */
    public function getFormKey() {
        return 'analyze';
    }
    /**
     * {@inheritdoc}
     */
    public function getFormClass() {
        return 'form_vanillajs_validate';
    }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    //$form = parent::buildForm($form, $form_state);
 //  $config = $this->config('contacto.contacto_form_config');
if($_POST){
  $this->envioPost();

}
      $request= new Request($_SERVER);
      $theme = str_replace(array('/','-'),array('',''), $request->get('REQUEST_URI'));
     // $form['form_theme'][0] = $theme;
      //$form['#ok'] = @$request->get('slug');

        //$form['actions']['submit'] = array('');
        $form['nombres'] = array(
            '#type' => 'textfield',
            //'#title' => $this->t('Nombres'),
            '#name' => $this->t('nombres'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Nombres'),),
          //  '#required' => TRUE,
        );
        $form['apellidos'] = array(
            '#type' => 'textfield',
            //'#title' => $this->t('Nombres'),
            '#name' => $this->t('apellidos'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Apellidos'),),
            //  '#required' => TRUE,
        );
        $form['dni'] = array(
            '#type' => 'textfield',
            //'#title' => $this->t('Nombres'),
            '#name' => $this->t('numdoc'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('DNI'),),
            //  '#required' => TRUE,
        );
        $form['email'] = array(
            '#type' => 'textfield',
            //'#title' => $this->t('Nombres'),
            '#name' => $this->t('email'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Correo Electrónico'),),
            //  '#required' => TRUE,
        );
        $form['telefono'] = array(
            '#type' => 'textfield',
            '#name' => $this->t('telefono'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Teléfono / Celular'),),
            //  '#required' => TRUE,
        );
   
            $form['colegio'] = array(
                '#type' => 'textfield',
                '#name' => $this->t('colegio'),
                '#maxlength' => 255,
                '#attributes' => array('class' =>  array('ui-autocomplete-input form-control input_inscrip colegios-list'), 'id' =>  array('colegios-list'), 'placeholder' => t('Colegio'),),
            );
            $form['otros'] = array(
                '#type' => 'textfield',
                '#name' => $this->t('otros'),
                '#maxlength' => 255,
                '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Otros (especificar)'),),
            );
         
            $grado = array('Grado/Egresado',1,2,3,4,5,'Egresado','Bachillerato');
            $form['grado'] = array(
                '#type' => 'select',
                '#options' => isset($grado) ? $grado: '',
                 '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Otros (especificar)'),),
            );
        $form['enviar'] = array(
            '#type' => 'submit',
            '#value' => $this->t('Enviar'),
            '#attributes' => array('class' => array('input_btn btn-disabled')),
        );
  

      $form['#theme'] = 'contacto' ;

    return $form;

  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
     // exit;
    return parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */

  public function envioPost( ) {

      if($_POST) {
         // $form_state->setRebuild();
         
          //$form['#theme'] = 'contacto_ok';

         // $form['step'] = array(0 => $this->step);
        //  $form_state->setRebuild();
         // $emails = $_POST['correo');

print_r($_POST['horarios']);

    $arrayHorarios = array();
            foreach ($_POST['horarios'] as $key => $value) {
              if($value !='Horario'){
                $arrayHorarios['horarios'][] = $value;
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
          exit;

      }
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

}
