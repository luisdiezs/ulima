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

class MultiStepForm extends ConfigFormBase
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
    return 'contacto_form';
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
        return 'form_validate';
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
            '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Nombres'),),
          //  '#required' => TRUE,
        );
        $form['apellidos'] = array(
            '#type' => 'textfield',
            //'#title' => $this->t('Nombres'),
            '#name' => $this->t('apellidos'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Apellidos'),),
            //  '#required' => TRUE,
        );
        $form['dni'] = array(
            '#type' => 'textfield',
            //'#title' => $this->t('Nombres'),
            '#name' => $this->t('numdoc'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('DNI'),),
            //  '#required' => TRUE,
        );
        $form['telefono'] = array(
            '#type' => 'textfield',
            '#name' => $this->t('telefono'),
            '#maxlength' => 255,
            '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Teléfono / Celular'),),
            //  '#required' => TRUE,
        );
        if($theme == 'contacto'){

            $form['correo'] = array(
                '#type' => 'textfield',
                '#name' => $this->t('email'),
                '#maxlength' => 255,
                '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Correo Electrónico'),),
                //  '#required' => TRUE,
            );
            $form['mensaje'] = array(
                '#type' => 'textarea',
                '#name' => $this->t('textarea'),
                '#maxlength' => 255,
                '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Mensaje'),),
                //  '#required' => TRUE,
            );
        }else{
            $form['colegio'] = array(
                '#type' => 'textfield',
                '#name' => $this->t('colegio'),
                '#maxlength' => 255,
                '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Colegio'),),
                //  '#required' => TRUE,
            );
            $form['grado'] = array(
                '#type' => 'textfield',
                '#name' => $this->t('grado'),
                '#maxlength' => 255,
                '#attributes' => array('class' =>  array('input_form form-control'), 'placeholder' => t('Grado/Egresado'),),
                //  '#required' => TRUE,
            );
        }
        $form['enviar'] = array(
            '#type' => 'submit',
            '#value' => $this->t('Enviar'),
            //'#title' => $this->t('Nombres'),$button_label = $this->t('Next');
            '#attributes' => array('class' => array('input_btn btn-disabled')),
            //  '#required' => TRUE,
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
          
          print_r($form_state->getValue('horarios'));

          exit;
         // $form['step'] = array(0 => $this->step);
          $form_state->setRebuild();
          $emails = $form_state->getValue('correo');
          $reply_to = $form_state->getValue('mail');
          $params['message'] = '';
          $params['nombres'] .= '<br/>Message: ' . $form_state->getValue('nombres');
          $params['apellidos'] .= '<br/>Message: ' . $form_state->getValue('apellidos');
          $params['numdoc'] .= '<br/>Message: ' . $form_state->getValue('numdoc');
          $params['telefono'] .= '<br/>Message: ' . $form_state->getValue('telefono');
          $params['correo'] .= '<br/>Message: ' . $form_state->getValue('correo');
          $params['message'] .= '<br/>Message: ' . $form_state->getValue('textarea');

          // Send the e-mail to the recipients.
          $mailManager = \Drupal::service('plugin.manager.mail');

          $to = ($emails)? implode(', ', $emails) : '';
          $module = 'email_contact';
          $key = 'contact';
          $langcode = \Drupal::currentUser()->getPreferredLangcode();
          $send = true;
          $result = $mailManager->mail($module, $key, $to, $langcode, $params, $reply_to, $send);
          if ($result['result'] !== true) {
              drupal_set_message($this->t('There was a problem sending your message and it was not sent.'), 'error');
          } else {
              drupal_set_message($this->t('Your message has been sent.'));
              $msg = 'Email sent from: @replyto to: @to about: "@subject" containing: "@message"';
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
            $fields['horarios'] = $form_state->getValue('horarios');
            $fields['colegio'] = $form_state->getValue('colegio');
          }

          $fields['nombres'] = $form_state->getValue('nombres');
          $fields['apellidos'] = $form_state->getValue('apellidos');
          $fields['dni'] = $form_state->getValue('numdoc');
          $fields['correo'] = $form_state->getValue('email');
          $fields['telefono'] = $form_state->getValue('telefono');
          //$fields['telefono'] = $form_state->getValue('horarios');
          $fields['mensaje'] = $form_state->getValue('textarea');

          $fields['fecha'] = time();
          $fields['tipo'] = $tipo;

          $response = ContactoModel::insert($fields);
          $temp['data'] = $response;
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


}
