<?php
/**
 * Implementation of hook_form_system_theme_settings_alter()
 *
 * @param $form
 *   Nested array of form elements that comprise the form.
 *
 * @param $form_state
 *   A keyed array containing the current state of the form.
 */

function ulima_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
  $form['ulima_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('ulima Settings'),
    '#collapsible' => FALSE,
    '#collapsed' => FALSE,
  );
  $form['ulima_settings']['show_breadcrumbs'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show breadcrumbs in a page'),
    '#default_value' => theme_get_setting('show_breadcrumbs','ulima'),
    '#description'   => t("Check this option to show breadcrumbs in page. Uncheck to hide."),
  );
  $form['ulima_settings']['slideshow'] = array(
    '#type' => 'fieldset',
    '#title' => t('Slider de Portada'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['ulima_settings']['slideshow']['slideshow_display'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show slideshow'),
    '#default_value' => theme_get_setting('slideshow_display','ulima'),
    '#description'   => t("Check this option to show Slideshow in front page. Uncheck to hide."),
  );
  $form['ulima_settings']['slideshow']['slide'] = array(
    '#markup' => t('You can change the description and URL of each slide in the following Slide Setting fieldsets.'),
  );
  $form['ulima_settings']['slideshow']['slide1'] = array(
    '#type' => 'fieldset',
    '#title' => t('Slide 1'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['ulima_settings']['slideshow']['slide1']['slide1_head'] = array(
    '#type' => 'textfield',
    '#title' => t('Slide Headline'),
    '#default_value' => theme_get_setting('slide1_head','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide1']['slide1_desc'] = array(
    '#type' => 'textarea',
    '#title' => t('Slide Description'),
    '#default_value' => theme_get_setting('slide1_desc','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide1']['slide1_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Slide URL'),
    '#default_value' => theme_get_setting('slide1_url','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide1']['slide1_image'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image 1'),
    '#default_value' => theme_get_setting('slide1_image','ulima'),
    '#upload_location' => 'public://',
  );

  $form['ulima_settings']['slideshow']['slide2'] = array(
    '#type' => 'fieldset',
    '#title' => t('Slide 2'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['ulima_settings']['slideshow']['slide2']['slide2_head'] = array(
    '#type' => 'textfield',
    '#title' => t('Slide Headline'),
    '#default_value' => theme_get_setting('slide2_head','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide2']['slide2_desc'] = array(
    '#type' => 'textarea',
    '#title' => t('Slide Description'),
    '#default_value' => theme_get_setting('slide2_desc','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide2']['slide2_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Slide URL'),
    '#default_value' => theme_get_setting('slide2_url','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide2']['slide2_image'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image 2'),
    '#default_value' => theme_get_setting('slide2_image','ulima'),
    '#upload_location' => 'public://',
  );
  $form['ulima_settings']['slideshow']['slide3'] = array(
    '#type' => 'fieldset',
    '#title' => t('Slide 3'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  $form['ulima_settings']['slideshow']['slide3']['slide3_head'] = array(
    '#type' => 'textfield',
    '#title' => t('Slide Headline'),
    '#default_value' => theme_get_setting('slide3_head','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide3']['slide3_desc'] = array(
    '#type' => 'textarea',
    '#title' => t('Slide Description'),
    '#default_value' => theme_get_setting('slide3_desc','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide3']['slide3_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Slide URL'),
    '#default_value' => theme_get_setting('slide3_url','ulima'),
  );
  $form['ulima_settings']['slideshow']['slide3']['slide3_image'] = array(
    '#type' => 'managed_file',
    '#title' => t('Image 3'),
    '#default_value' => theme_get_setting('slide3_image','ulima'),
    '#upload_location' => 'public://',
  );
  $form['ulima_settings']['slideshow']['slideimage'] = array(
    '#markup' => t('To change the default Slide Images, Replace the slide-image-1.jpg, slide-image-2.jpg and slide-image-3.jpg in the images folder of the theme folder.'),
  );
  $form['#submit'][] = 'ulima_settings_form_submit';
  $theme = \Drupal::theme()->getActiveTheme()->getName();
  $theme_file = drupal_get_path('theme', $theme) . '/theme-settings.php';
  $build_info = $form_state->getBuildInfo();
  if (!in_array($theme_file, $build_info['files'])) {
    $build_info['files'][] = $theme_file;
  }
  $form_state->setBuildInfo($build_info);
}

function ulima_settings_form_submit(&$form, \Drupal\Core\Form\FormStateInterface $form_state) {
  $account = \Drupal::currentUser();
  $values = $form_state->getValues();
  for ($i = 1; $i <= 3; $i++) {
    if (isset($values["slide{$i}_image"]) && !empty($values["slide{$i}_image"])) {
      // Load the file via file.fid.
      if ($file = \Drupal\file\Entity\File::load($values["slide{$i}_image"][0])) {
        // Change status to permanent.
        $file->setPermanent();
        $file->save();
        $file_usage = \Drupal::service('file.usage');
        $file_usage->add($file, 'user', 'user', $account->id());
      }
    }
  }
}
