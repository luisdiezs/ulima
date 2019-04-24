<?php
namespace Drupal\contacto\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Configure example settings for this site.
 */
class contactoSettingsForm extends ConfigFormBase {
    /**
     * {@inheritdoc}
     */
    public function getFormId() {
        return 'contacto_admin_settings';
    }

    /**
     * {@inheritdoc}
     */
    protected function getEditableConfigNames() {
        return [
            'contacto.settings',
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(array $form, FormStateInterface $form_state) {
        $config = $this->config('contacto.settings');

        $form['example_thing'] = array(
            '#type' => 'textfield',
            '#title' => $this->t('Nombre'),
            '#default_value' => $config->get('example_thing'),
        );

        $form['other_things'] = array(
            '#type' => 'textfield',
            '#title' => $this->t('Email'),
            '#default_value' => $config->get('other_things'),
        );

        return parent::buildForm($form, $form_state);
    }

    /**
     * {@inheritdoc}
     */
    public function submitForm(array &$form, FormStateInterface $form_state) {
        // Retrieve the configuration
        \Drupal::configFactory()->getEditable('contacto.settings')
            // Set the submitted configuration setting
            ->set('example_thing', $form_state->getValue('example_thing'))
            // You can set multiple configurations at once by making
            // multiple calls to set()
            ->set('other_things', $form_state->getValue('other_things'))
            ->save();

        parent::submitForm($form, $form_state);
    }
}
