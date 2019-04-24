<?php

namespace Drupal\bxslider_block\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Asset\LibraryDiscovery;
use Drupal\Core\Cache\CacheBackendInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\bxslider_block\BXSlider;
use Drupal\bxslider_block\BXSliderModel;
use Drupal\bxslider_block\Process\SliderRender;

/**
 * Class BXSliderAddForm.
 *
 * @package Drupal\bxslider_block\Form
 */
class BXSliderAddForm extends ConfigFormBase {

  protected $slider;

  /**
   * The library discovery service.
   *
   * @var \Drupal\Core\Asset\LibraryDiscovery
   */
  private $libraryDiscovery;
  private $cacheBackendInterface;

  /**
   * Constructs a new bXSliderFormSettings.
   */
  public function __construct(ConfigFactoryInterface $configFactory, LibraryDiscovery $libraryDiscovery, CacheBackendInterface $cacheBackendInterface) {
    parent::__construct($configFactory);
    $this->libraryDiscovery = $libraryDiscovery;
    $this->cacheBackendInterface = $cacheBackendInterface;
  }

  /**
   * Use Symfony's ContainerInterface to declare dependency for constructor.
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('library.discovery'),
      $container->get('cache.discovery')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'bxslider_add';
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['bxslider.add'];
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $machine_name = NULL) {
    if ($machine_name == NULL) {
      $slider = new BXSlider();
    }
    else {
      $slider = new BXSlider();
      $slider->getDataSlider($machine_name);
    }

    $this->slider = $slider;
    $settings = $slider->settings;

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#maxlength' => 255,
      '#default_value' => $slider->title,
      '#description' => $this->t("Label for the Mega Slider."),
      '#required' => TRUE,
      '#disabled' => !empty($slider->machineName),
    ];
    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $slider->machineName,
      '#machine_name' => [
        'exists' => '\Drupal\bxslider_block\BXSlider::isSlider',
      ],
      '#disabled' => !empty($slider->machineName),
    ];
    $form['is_new'] = [
      '#type' => 'hidden',
      '#value' => empty($slider->machineName),
    ];

    $form['general'] = [
      '#type' => 'details',
      '#title' => $this->t('General'),
      '#open' => TRUE,
    ];
    $form['general']['mode'] = [
      '#type' => 'select',
      '#options' => [
        'video' => $this->t('Video'),
        'horarios' => $this->t('Horarios'),
        'imagen' => $this->t('Imagen'),
        'imagen_texto' => $this->t('Imagen con Texto'),
        'texto' => $this->t('Texto'),
        'video_imagen' => $this->t('1 Video + Imagenes'),
        'texto_3_imagen' => $this->t('3 texto + Imagenes'),
      ],
      '#default_value' => isset($settings['mode']) ? $settings['mode'] : 'imagen',
      '#title' => $this->t('Mode'),
      '#description' => $this->t('Type of transition between slides'),
    ];

    $form['principal'] = [
          '#type' => 'details',
          '#title' => $this->t('Principal'),
          '#open' => false,
      ];
  $form['principal']['titulo1'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Primer Titulo'),
      '#default_value' => isset($settings['titulo1']) ? $settings['titulo1'] : '',
      '#maxlength' => 255,
      '#description' => $this->t(''),
  ];
  $form['principal']['titulo2'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Segundo Titulo'),
      '#default_value' => isset($settings['titulo2']) ? $settings['titulo2'] : '',
      '#maxlength' => 255,
      '#description' => $this->t(''),
  ];
      $form['principal']['type'] = [
          '#type' => 'select',
          '#options' => [
              'galeria_default' => $this->t('Galeria Default'),
              'galeria_ta' => $this->t('Galeria Talleres Artisticos'),
              'galeria_td' => $this->t('Galeria Talleres Deportivos'),
              'paises' => $this->t('Pais'),
              'galeria_convenios' => $this->t('Galeria convenios'),
              'galeria_lista' => $this->t('Galeria lista'),
              'slider_popup' => $this->t('Galeria Popup'),
          ],
          '#default_value' => isset($settings['type']) ? $settings['type'] : 'imagen',
          '#title' => $this->t('Mode'),
          '#description' => $this->t('Type of transition between slides'),
      ];
      $form['principal']['horarios'] = [
          '#type' => 'textarea',
          '#title' => $this->t('Horarios'),
          '#default_value' => isset($settings['horarios']) ? $settings['horarios'] : '',
          '#maxlength' => 255,
          '#description' => $this->t(''),
      ];
      $form['principal']['carreras'] = [
          '#type' => 'textarea',
          '#title' => $this->t('Carreras'),
          '#default_value' => isset($settings['carreras']) ? $settings['carreras'] : '',
          '#maxlength' => 255,
          '#description' => $this->t(''),
      ];
    $form['submit'] = [
      '#type' => 'submit',
      '#value' => !empty($slider->machineName) ? $this->t('Update') : $this->t('Create'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $is_new = $form_state->getValue('is_new');
    if ($is_new) {
      $machineName = $form_state->getValue('id');
      $condition = [
        'machine_name' => $machineName,
      ];
      $slider = BXSliderModel::load($condition);
      if ($slider) {
        $form_state->setErrorByName('id', $this->t('The machine-readable name is already in use. It must be unique.'));
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $slider = $this->slider;

    $settings = $slider->settings;
    $values = $form_state->getValues();
    foreach ($values as $setting => $value) {
      if (isset($settings[$setting])) {
        $settings[$setting] = $value;
      }
    }

    $slider->settings = $settings;
    $slider->title = $form_state->getValue('label');
    $slider->machineName = $form_state->getValue('id');
    $slider->description = '';
    $is_new = $form_state->getValue('is_new');
    $js = new SliderRender();
    $js->saveFileJs($slider->machineName, $settings);

    if ($is_new) {
      $response = $slider->saveDataSlider();
      if ($response) {
        drupal_set_message($this->t('bxSlider %slider has been created.', ['%slider' => $slider->title]));
      }
      $this->libraryDiscovery->clearCachedDefinitions();

      /* $cache = \Drupal::cache('discovery')->delete('block_plugins'); */
      $this->cacheBackendInterface->delete('block_plugins');
      $form_state->setRedirect('bxslider_block.admin.edit', [
        'slider' => $slider->machineName,
      ]);
    }
    else {
      $response = $slider->saveDataSlider($slider->bxid);
      $this->libraryDiscovery->clearCachedDefinitions();
      if ($response) {
        drupal_set_message($this->t('Slider %slider has been updated.', ['%slider' => $slider->title]));
      }
    }
  }

}
