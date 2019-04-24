<?php

namespace Drupal\bxslider_block\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Asset\LibraryDiscovery;
use Drupal\file\Entity\File;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\bxslider_block\BXSlider;
use Symfony\Component\Yaml\Yaml;

/**
 * Class BXSliderEditForm.
 *
 * @package Drupal\bxslider_block\Form
 */
class BXSliderEditForm extends ConfigFormBase {

  protected $slider;

  /**
   * The library discovery service.
   *
   * @var \Drupal\Core\Asset\LibraryDiscovery
   */
  private $libraryDiscovery;

  /**
   * Constructs a new bXSliderFormSettings.
   */
  public function __construct(ConfigFactoryInterface $configFactory, LibraryDiscovery $libraryDiscovery) {
    parent::__construct($configFactory);
    $this->libraryDiscovery = $libraryDiscovery;
  }

  /**
   * Use Symfony's ContainerInterface to declare dependency for constructor.
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('library.discovery')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'bx_slider_edit';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['bxslider.edit'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, BXSlider $slider = NULL) {
    if ($slider->bxid == NULL) {
      $form['slider_msg'] = [
        '#markup' => '<h3>This slider not exist. Please try again!</h3>',
      ];
    }
    else {
      $this->slider = $slider;
      $slide_items = $slider->slideItems;

      $form['#tree'] = TRUE;

      $slide_field = $form_state->get('num_slides');

      if (empty($slide_field)) {
        $form_state->set('num_slides', count($slide_items) + 1);
        $slide_field = count($slide_items) + 1;
      }
      if (empty($slide_field)) {
        $form_state->set('num_slides', 1);
        $slide_field = 1;
      }

      $form_state->setCached(FALSE);

      $form['actions']['add_name'] = [
        '#type' => 'submit',
        '#value' => $this->t('Add one more slide'),
        '#submit' => ['::addOne'],
        '#ajax' => [
          'callback' => '::addmoreCallback',
          'wrapper' => "slide-item-wrapper",
        ],
      ];
      $form['actions']['remove_name'] = [
        '#type' => 'submit',
        '#value' => $this->t('Remove one'),
        '#submit' => ['::removeCallback'],
        '#ajax' => [
          'callback' => '::addmoreCallback',
          'wrapper' => "slide-item-wrapper",
        ],
      ];
      $form['sliders'] = [
        '#type' => 'vertical_tabs',
        '#title' => $this->t('Slider Item'),
        '#prefix' => '<div id="slide-item-wrapper">',
        '#suffix' => '</div>',
      ];
        $horarios = Yaml::parse($this->slider->settings['horarios']);
        $carreras = Yaml::parse($this->slider->settings['carreras']);

        for ($i = 0; $i < $slide_field; $i++) {
        $form['slide'][$i] = [
          '#type' => 'details',
          '#title' => $this->t('Slide') . ' ' . ($i + 1),
          '#group' => 'sliders',
        ];


          if($this->slider->settings['mode'] =='video' ) {

              $form['slide'][$i]['video'] = [
                  '#type' => 'textfield',
                  '#title' => $this->t('Video'),
                  '#maxlength' => 64,
                  '#size' => 64,
                  '#default_value' => isset($slide_items[$i]['video']) ? $slide_items[$i]['video'] : "",
              ];

              if($this->slider->settings['type'] =='galeria_lista' ) {
                  $form['slide'][$i]['tituloh2'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Titulo'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh2']) ? $slide_items[$i]['tituloh2'] : "",
                  ];
                  $form['slide'][$i]['tituloh3'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Descripcion'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh3']) ? $slide_items[$i]['tituloh3'] : "",
                  ];
              }
          }elseif($this->slider->settings['mode'] == 'horarios' ) {
              $form['slide'][$i]['tituloh2'] = [
                  '#type' => 'textfield',
                  '#title' => $this->t('Titulo'),
                  '#maxlength' => 200,
                  '#default_value' => isset($slide_items[$i]['tituloh2']) ? $slide_items[$i]['tituloh2'] : "",
              ];
              $form['slide'][$i]['tituloh3'] = [
                  '#type' => 'date',
                  '#title' => $this->t('Fecha'),
                  '#maxlength' => 200,
                  '#weight' => 0,
                  '#date_format' => 'Y-m-d h',
                  '#default_value' => date('Y-m-d h'),
                  '#default_value' => isset($slide_items[$i]['tituloh3']) ? $slide_items[$i]['tituloh3'] : "",
              ];


              $form['slide'][$i]['carreras'] = array(
                  '#type' => 'select',
                  '#title' => t('Carreras'),
                  '#options' => isset($carreras) ? $carreras : '',
                  '#weight' => 0,
                  '#default_value' => isset($slide_items[$i]['carreras']) ? $slide_items[$i]['carreras'] : "",
              );

              $form['slide'][$i]['horarios'] = array(
                  '#type' => 'select',
                  '#multiple' => TRUE,
                  '#title' => t('Horarios'),
                  '#required' => FALSE,
                  '#options' => isset($horarios) ? $horarios : '',
                  '#default_value' => isset($slide_items[$i]['horarios']) ? $slide_items[$i]['horarios'] : "",
                  '#size' => 5,
                  '#weight' => 0,
              );


          }elseif($this->slider->settings['mode'] =='texto' ) {
              $Titulo = ($this->slider->settings['type'] =='paises')? 'URL':'Titulo';
              $form['slide'][$i]['tituloh2'] = [
                  '#type' => 'textfield',
                  '#title' => $this->t($Titulo),
                  '#maxlength' => 200,
                  '#default_value' => isset($slide_items[$i]['tituloh2']) ? $slide_items[$i]['tituloh2'] : "",
              ];
              $form['slide'][$i]['tituloh3'] = [
                  '#type' => 'textfield',
                  '#title' => $this->t('Descripcion'),
                  '#maxlength' => 200,
                  '#default_value' => isset($slide_items[$i]['tituloh3']) ? $slide_items[$i]['tituloh3'] : "",
              ];

          }else{
              if($this->slider->settings['mode'] =='texto_3_imagen'){
                  $form['slide'][$i]['tituloh2'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Titulo'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh2']) ? $slide_items[$i]['tituloh2'] : "",
                  ];
                  $form['slide'][$i]['tituloh3'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Descripcion 1'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh3']) ? $slide_items[$i]['tituloh3'] : "",
                  ];
                  $form['slide'][$i]['tituloh4'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Descripcion 2'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh4']) ? $slide_items[$i]['tituloh4'] : "",
                  ];
              }
                if($i == 0 && $this->slider->settings['mode'] =='video_imagen'){
                    $form['slide'][$i]['video'] = [
                        '#type' => 'textfield',
                        '#title' => $this->t('Video'),
                        '#maxlength' => 64,
                        '#size' => 64,
                        '#default_value' => isset($slide_items[$i]['video']) ? $slide_items[$i]['video'] : "",
                    ];
                }

                $form['slide'][$i]['image'] = [
                  '#type' => 'managed_file',
                  '#title' => $this->t('Image'.$this->slider->settings['mode'].$i),
                  '#upload_validators' => [
                    'file_validate_extensions' => ['gif png jpg jpeg'],
                    'file_validate_size' => [25600000],
                  ],
                  '#upload_location' => 'public://bxslider',
                  '#default_value' => isset($slide_items[$i]['image']) ? $slide_items[$i]['image'] : '',
                  '#description' => $this->t('Upload a file, allowed extensions: jpg, jpeg, png, gif'),
                  '#prefix' => "Slide {$i}",
                ];
                if (isset($slide_items[$i]['image'][0])) {
                  $img = @File::load($slide_items[$i]['image'][0]);
                  if($img){
                  $form['slide'][$i]['preview']['#markup'] = '<img src="' . file_create_url($img->getFileUri()) . '" alt="' . $slide_items[$i]['alt'] . '" style="max-width:95%;">';
                  }
                }

              if($this->slider->settings['mode'] =='imagen_texto'){
                  $form['slide'][$i]['tituloh2'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Egresados Notables'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh2']) ? $slide_items[$i]['tituloh2'] : "",
                  ];
                  $form['slide'][$i]['tituloh3'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Nombre'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh3']) ? $slide_items[$i]['tituloh3'] : "Eduardo Julian Chavéz",
                  ];
                  $form['slide'][$i]['tituloh4'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Gerente de Proyectos de Comunicación Empresarial'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh4']) ? $slide_items[$i]['tituloh4'] : "Gerente de Proyectos de Comunicación Empresarial ",
                  ];
                  $form['slide'][$i]['titulop'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Gerente de Proyectos de Comunicación Empresarial'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['titulop']) ? $slide_items[$i]['titulop'] : "Periodista, editor y asesor de comunicaciones, con amplia experiencia y conocimiento de los usos y personajes claves en el proceso de producción.",
                  ];
                  $form['slide'][$i]['tituloh5'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('Conoce mas en '),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['tituloh5']) ? $slide_items[$i]['tituloh5'] : "Conoce mas en ",
                  ];
                  $form['slide'][$i]['link'] = [
                      '#type' => 'textfield',
                      '#title' => $this->t('link'),
                      '#maxlength' => 200,
                      '#default_value' => isset($slide_items[$i]['link']) ? $slide_items[$i]['link'] : "www.egresadosnotables.com.pe",
                  ];

              }

          }


        $form['slide'][$i]['actions']['remove_name'] = [
          '#type' => 'submit',
          '#value' => $this->t('Remove this slide'),
          '#submit' => ['::removeCallback'],
          '#ajax' => [
            'callback' => '::addmoreCallback',
            'wrapper' => "slide-item-wrapper",
          ],
        ];
      }

      $form['slider_id'] = [
        '#type' => 'hidden',
        '#default_value' => $slider->bxid,
      ];
      $form['machine_name'] = [
        '#type' => 'hidden',
        '#default_value' => $slider->machineName,
      ];
      $form['slider_save'] = [
        '#type' => 'submit',
        '#value' => $this->t('Save'),
      ];
    }
    return $form;
  }

  /**
   * Callback for both ajax-enabled buttons.
   *
   * Selects and returns the fieldset with the names in it.
   */
  public function addmoreCallback(array &$form, FormStateInterface $form_state) {
    return $form['sliders'];
  }

  /**
   * Submit handler for the "add-one-more" button.
   *
   * Increments the max counter and causes a rebuild.
   */
  public function addOne(array &$form, FormStateInterface $form_state) {
    $slide_field = $form_state->get('num_slides');
    $add_button = $slide_field + 1;
    $form_state->set('num_slides', $add_button);
    $form_state->setRebuild();
  }

  /**
   * Submit handler for the "remove one" button.
   *
   * Decrements the max counter and causes a form rebuild.
   */
  public function removeCallback(array &$form, FormStateInterface $form_state) {
    $slide_field = $form_state->get('num_slides');
    if ($slide_field > 1) {
      $remove_button = $slide_field - 1;
      $form_state->set('num_slides', $remove_button);
    }
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $slider = $this->slider;
    $tmp = $form_state->getValue(['slide']);
    $slide_item = [];
    for ($i = 0; $i < count($tmp); $i++) {
        if (!empty($tmp[$i]['image'][0]) || !empty($tmp[$i]['video'][0]) || !empty($tmp[$i]['tituloh2']) || !empty($tmp[$i]['tituloh3']) ) {
            $slide_item[] = $tmp[$i];
        }
        if(!empty($tmp[$i]['image'][0]) ){
            $file = File::load($tmp[$i]['image'][0]);
            $file->setPermanent();
            $file->save();
        }
    }
  //  print_r($slide_item); exit;
    $slider->slideItems = $slide_item;
    $response = $slider->saveImageSlider($slider->bxid);

    // $this->libraryDiscovery->clearCachedDefinitions();
    if ($response) {
      drupal_set_message($this->t('Slider %slider has been updated.', ['%slider' => $slider->title]));
    }
  }

}
