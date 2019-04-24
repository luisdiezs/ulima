<?php

namespace Drupal\bxslider_block\Form;

use Drupal\Core\Form\ConfirmFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\bxslider_block\BXSlider;

/**
 * Class BXSliderDeleteForm.
 *
 * @package Drupal\bxslider_block\Form
 */
class BXSliderDeleteForm extends ConfirmFormBase {
  /**
   * Machine Name Slider.
   *
   * @var string
   */
  protected $slider;

  /**
   * Class BXSlider.
   *
   * @var class
   */
  protected $bxSlider = NULL;

  /**
   * {@inheritdoc}
   */
  public function getDescription() {
    return $this->t('This action cannot be undone.');
  }

  /**
   * {@inheritdoc}
   */
  public function getConfirmText() {
    return $this->t('Delete');
  }

  /**
   * {@inheritdoc}
   */
  public function getQuestion() {

    // TODO: Implement getQuestion() method.
    return t('Do you want to delete slider %id?', ['%id' => $this->slider]);
  }

  /**
   * {@inheritdoc}
   */
  public function getCancelUrl() {

    // TODO: Implement getCancelUrl() method.
    return new Url('bxslider_block.admin');
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {

    // TODO: Implement getFormId() method.
    return 'bx_slider_delete';
  }

  /**
   * {@inheritdoc}
   *
   * @param array $form
   *   Form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Form state.
   * @param int $slider
   *   (optional) The ID of the item to be deleted.
   */
  public function buildForm(array $form, FormStateInterface $form_state, $slider = '') {
    $this->slider = $slider;
    $bx_slider = new BXSlider();
    if ($bx_slider->isSlider($slider)) {
      $bx_slider->machine_name = $slider;
      $this->bxSlider = $bx_slider;
      return parent::buildForm($form, $form_state);
    }
    else {
      $form['joke'] = [
        '#markup' => '<h3>' . $this->t('Are you kidding me?') . '</h3>',
      ];
      return $form;
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    if ($this->bxSlider) {
      $this->bxSlider->getDataSlider($this->bxSlider->machine_name);
      $response = $this->bxSlider->deleteDataSlider($this->bxSlider->bxid);
      if ($response) {
        drupal_set_message($this->t('Slider %slider has been deleted.', ['%slider' => $this->bxSlider->title]));
      }
      $form_state->setRedirect('bxslider_block.admin');
    }
  }

}
