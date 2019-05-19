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

      $request= new Request($_SERVER);
      $theme = str_replace(array('/','-'),array('',''), $request->get('REQUEST_URI'));
      $form['form_theme'][0] = $theme;
      //$form['#ok'] = @$request->get('slug');
      if($this->step == 1) {

        $form['actions']['submit'] = array('');
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
                '#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Colegio'),),
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
                '#weight' => 0,
'#attributes' => array('class' =>  array('item_inscrip form-group'), 'placeholder' => t('Otros (especificar)'),),
            );
        $form['enviar'] = array(
            '#type' => 'submit',
            '#value' => $this->t('Enviar'),
            '#attributes' => array('class' => array('input_btn btn-disabled')),
        );
      }else{
          $form['#theme'] = 'contacto_ok';
      }

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
  public function submitForm(array &$form, FormStateInterface $form_state) {

      if($this->step < 3) {
          $form_state->setRebuild();
          $this->step++;
          //$form['#theme'] = 'contacto_ok';

         // $form['step'] = array(0 => $this->step);
          $form_state->setRebuild();
         // $emails = $form_state->getValue('correo');

    $arrayHorarios = array();
            foreach ($_POST['horarios'] as $key => $value) {
              if($value !='Horario'){
                $arrayHorarios['horarios'][] = $value;
              }
              # code...
            }

          $reply_to = $form_state->getValue('email');
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

          $params['nombres'] .= '<br/>Nombre: ' . $form_state->getValue('nombres');
          $params['apellidos'] .= '<br/>Apellido: ' . $form_state->getValue('apellidos');
          $params['numdoc'] .= '<br/>DNI: ' . $form_state->getValue('numdoc');
          $params['telefono'] .= '<br/>Telefono: ' . $form_state->getValue('telefono');
          $params['correo'] .= '<br/>Correo: ' . $form_state->getValue('email');
          $params['colegios'] .= '<br/>Colegio: ' . $form_state->getValue('colegios');
          $params['otros'] .= '<br/>Otros: ' . $form_state->getValue('otros');
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
          $result = $mailManager->mail($module, $key, $to, $langcode, $params, $reply_to, $send);
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

          if($form['form_theme'] == 'contacto'){
            $tipo = 2;
          }else{
            $tipo = 1;
            $fields['grado_egresado'] = $form_state->getValue('grado');
            $arrayHorarios = array();
            foreach ($_POST['horarios'] as $key => $value) {
              if($value !='Horario'){
                $arrayHorarios['horarios'][] = $value;
              }
              # code...
            }
            $fields['horarios'] = json_encode($arrayHorarios);
            $fields['colegio'] = $form_state->getValue('colegio');
          }

          $fields['nombres'] = $form_state->getValue('nombres');
          $fields['apellidos'] = $form_state->getValue('apellidos');
          $fields['dni'] = $form_state->getValue('numdoc');
          $fields['correo'] = $form_state->getValue('email');
          $fields['telefono'] = $form_state->getValue('telefono');
          $fields['otros'] = $form_state->getValue('otros');
          //$fields['telefono'] = $form_state->getValue('horarios');
          $fields['colegio'] = $form_state->getValue('colegios');

          $fields['fecha'] = time();
          $fields['tipo'] = $tipo;
          $response = ContactoModel::insert($fields);
          $temp['data'] = $response;
          exit;
          return $this->crearJsonResponse($temp);

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
