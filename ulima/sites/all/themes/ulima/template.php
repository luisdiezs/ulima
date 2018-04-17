<?php
/**
 * @file
 * The primary PHP file for this theme.
 */



function ulima_preprocess_page(&$variables) {

 

  if (drupal_is_front_page()) {
    $variables['theme_hook_suggestions'][] = 'page__front';

    /*
       $image_uri = _get_slider();

         $image_path =  image_style_url('compartir',$image_uri );
       
          $element = array(
            '#tag' => 'meta',
            '#attributes' => array(
              "property" => "og:image",
              "content" => $image_path,
            ),
          );
    
       
       drupal_add_html_head($element,'facebook_share_image');*/

  }

if((isset($variables['node'])) && $variables['node']->type =='carrera'){

	$variables['theme_hook_suggestions'][] = 'page__carrera';
}
  

if((isset($variables['node'])) && $variables['node']->type =='perfil'){

  $variables['theme_hook_suggestions'][] = 'page__perfil';
}
  



      
   






  
}

/*
function ulima_menu_link(array $variables) {
  $element = $variables['element'];
  if ($element['#original_link']['menu_name'] = 'main-menu' && isset($element['#below'])) {
    unset($element['#localized_options']['attributes']['data-target']);
    unset($element['#localized_options']['attributes']['data-hover']);
  }
  return theme_menu_link($variables);
}
*/


/*
function ulima_preprocess_node(&$variables){
$attr_array = array('style' => 'color:red'); // Array of aatributes which we want to pass to the node div.
if($variables['teaser'] == TRUE){ // Condition for teaser format
    $variables['attributes_array'] = $attr_array; 
}
*/
function ulima_status_messages($variables){
  $display = $variables['display'];
  $output = '';

  $status_heading = array(
    'status' => t('Status message'),
    'error' => t('Error message'),
    'warning' => t('Warning message'),
  );
  foreach (drupal_get_messages($display) as $type => $messages) {
    $output .= "<div class=\"messages $type\">\n";
    if (!empty($status_heading[$type])) {
      $output .= '<h2 class="element-invisible">' . $status_heading[$type] . "</h2>\n";
    }
    if (count($messages) > 1) {
      $output .= " <ul>\n";
      foreach ($messages as $message) {
        $output .= '  <li>' . $message . "</li>\n";
      }
      $output .= " </ul>\n";
    }
    else {
      $output .= reset($messages);
    }
    $output .= "</div>\n";
  }
  return $output;
}

function ulima_preprocess_node(&$variables) {
  // Add view-mode class to nodes

  if ($variables['view_mode'] == 'teaser' and $variables['node']->type =='slider')   {
    if(isset($variables['node']->field_activar_countdown['und']))  {
  $variables['classes_array'][] = drupal_html_class('countdowncase');
}
}
}