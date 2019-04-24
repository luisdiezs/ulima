<?php

namespace Drupal\products\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\products\Entity\Importer;
use Drupal\products\Plugin\ImporterManager;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Form for creating/editing Importer entities.
 */
class ImporterForm extends EntityForm {

  /**
   * @var \Drupal\products\Plugin\ImporterManager
   */
  protected $importerManager;

  /**
   * ImporterForm constructor.
   *
   * @param \Drupal\products\Plugin\ImporterManager $importerManager
   * @param \Drupal\Core\Entity\EntityTypeManager $entityTypeManager
   */
  public function __construct(ImporterManager $importerManager, EntityTypeManager $entityTypeManager) {
    $this->importerManager = $importerManager;
    $this->entityTypeManager = $entityTypeManager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('products.importer_manager'),
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    /** @var Importer $importer */
    $importer = $this->entity;

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Name'),
      '#maxlength' => 255,
      '#default_value' => $importer->label(),
      '#description' => $this->t('Name of the Importer.'),
      '#required' => TRUE,
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $importer->id(),
      '#machine_name' => [
        'exists' => '\Drupal\products\Entity\Importer::load',
      ],
      '#disabled' => !$importer->isNew(),
    ];

    $definitions = $this->importerManager->getDefinitions();
    $options = [];
    foreach ($definitions as $id => $definition) {
      $options[$id] = $definition['label'];
    }

    $form['plugin'] = [
      '#type' => 'select',
      '#title' => $this->t('Plugin'),
      '#default_value' => $importer->getPluginId(),
      '#options' => $options,
      '#description' => $this->t('El plugin que se utilizará con este importador.'),
      '#required' => TRUE,
      '#empty_option' => $this->t('Por favor seleccione un plugin'),
      '#ajax' => array(
        'callback' => [$this, 'pluginConfigAjaxCallback'],
        'wrapper' => 'plugin-configuration-wrapper'
      ),
    ];

    $form['plugin_configuration'] = [
      '#type' => 'hidden',
      '#prefix' => '<div id="plugin-configuration-wrapper">',
      '#suffix' => '</div>',
    ];

    $plugin_id = NULL;
    if ($importer->getPluginId()) {
      $plugin_id = $importer->getPluginId();
    }
    if ($form_state->getValue('plugin') && $plugin_id !== $form_state->getValue('plugin')) {
      $plugin_id = $form_state->getValue('plugin');
    }

    if ($plugin_id) {
      /** @var \Drupal\products\Plugin\ImporterInterface $plugin */
      $plugin = $this->importerManager->createInstance($plugin_id, ['config' => $importer]);
      $form['plugin_configuration']['#type'] = 'details';
      $form['plugin_configuration']['#tree'] = TRUE;
      $form['plugin_configuration']['#open'] = TRUE;
      $form['plugin_configuration']['#title'] = $this->t('Plugin configuration for <em>@plugin</em>', ['@plugin' => $plugin->getPluginDefinition()['label']]);
      $form['plugin_configuration']['plugin'] = $plugin->getConfigurationForm($importer);
    }

    $form['update_existing'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Update existing'),
      '#description' => $this->t('Whether to update existing products if already imported.'),
      '#default_value' => $importer->updateExisting(),
    ];
/*
    $form['source'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Source'),
      '#description' => $this->t('The source of the products.'),
      '#default_value' => $importer->getSource(),
    ];
/*
    $form['bundle'] = [
      '#type' => 'entity_autocomplete',
      '#target_type' => 'product_type',
      '#title' => $this->t('Product type'),
      '#default_value' => $importer->getBundle() ? $this->entityTypeManager->getStorage('product_type')->load($importer->getBundle()) : NULL,
      '#description' => $this->t('The type of products that need to be created.'),
      '#required' => TRUE,
    ];
*/
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    /** @var Importer $importer */
    $importer = $this->entity;
    $importer->set('plugin_configuration', $importer->getPluginConfiguration()['plugin']);
    $status = $importer->save();
//print_r($importer);
    $this->products_products_import_run();
    switch ($status) {
      case SAVED_NEW:
        drupal_set_message($this->t('Created the %label Importer.', [
          '%label' => $importer->label(),
        ]));
        break;

      default:
        drupal_set_message($this->t('Saved the %label Importer.', [
          '%label' => $importer->label(),
        ]));
    }
    $form_state->setRedirectUrl($importer->toUrl('collection'));
  }

  /**
   * Ajax callback for the plugin configuration form elements.
   *
   * @param $form
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *
   * @return array
   */
  public function pluginConfigAjaxCallback($form, FormStateInterface $form_state) {
    return $form['plugin_configuration'];
  }


   public function products_products_import_run($importer = array()) {
        /** @var \Drupal\products\Plugin\ImporterManager $manager */
        $manager = \Drupal::service('products.importer_manager');


        $plugins = $manager->createInstanceFromAllConfigs();
        //print_r($plugins);
        if (!$plugins) {
            drupal_set_message(t('There are no importers to run'), 'error');
            return;
        }

        foreach ($plugins as $plugin) {
            $this->_products_products_import_run_plugin($plugin);
        }
    }

    /**
     * Runs an individual Importer plugin.
     *
     * @see products_products_import_run().
     *
     * @param \Drupal\products\Plugin\ImporterInterface $plugin
     */
    public function _products_products_import_run_plugin(\Drupal\products\Plugin\ImporterInterface $plugin) {
        $lock = \Drupal::lock();
        if (!$lock->acquire($plugin->getPluginId())) {
            if ($lock->wait($plugin->getPluginId())) {
                return;
            }
        }
        $result = $plugin->import();
        $message_values = ['@importer' => $plugin->getConfig()->label()];
        $message = $result ? t('The "@importer" importer has been run.', $message_values) : t('There was a problem running the "@importer" importer.', $message_values);
        $message_status = $result ? 'success' : 'error';
        $lock->release($plugin->getPluginId());
    }

}
