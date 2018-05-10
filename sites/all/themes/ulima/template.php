<?php
/**
 * @file
 * The primary PHP file for this theme.
 */
function ulima_preprocess_html(&$variables) {

 $node = menu_get_object();

 
  if ($node && isset($node->nid) && $node->type =='modalidades' ) {

    $tipo = $node->field_tipo_de_calendario['und'][0]['value'];
  $variables['classes_array'][] = $tipo;
}

}

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
  $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;

    $variables['mensaje_introductorio'] = $mensaje_introductorio;

}
  
if((isset($variables['node'])) && $variables['node']->type =='perfil'){

  $variables['theme_hook_suggestions'][] = 'page__perfil';
  $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;
}

if((isset($variables['node'])) && $variables['node']->type =='malla_curricular'){

  $variables['theme_hook_suggestions'][] = 'page__malla';
  $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;
}
  
if((isset($variables['node'])) && $variables['node']->type =='modalidades'){

  

    $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;
  

  $variables['theme_hook_suggestions'][] = 'page__modalidades';
}
  
  if(arg(0)== 'admision' && arg(1) == NULL){
    
   $variables['theme_hook_suggestions'][] = 'page__admision';
  }


if(arg(0)== 'inversion' || arg(0)== 'openlima'  || arg(0)== 'somosulima' || arg(0) =='convenios' ){

$variables['title'] = NULL;

}

  
  

  
  if(arg(0)== 'somosulima'){
    
  $variables['theme_hook_suggestions'][] = 'page__somosulima';
  }  

 if(arg(0)== 'convenios'){
      drupal_add_js(drupal_get_path('theme', 'ulima') .'/js/mapamundi.js', 'file');
      drupal_add_css(drupal_get_path('theme', 'ulima') .'/css/mapamundi.css');
  $variables['theme_hook_suggestions'][] = 'page__convenios';
  }    
   
  if((isset($variables['node'])) && $variables['node']->type =='page') {

    $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;
    
  $variables['theme_hook_suggestions'][] = 'page__basica';
  
  }

    if((isset($variables['node'])) && $variables['node']->type =='empleabilidad') {

    $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;

    $new_title = isset($variables['node']->field_titulo_color_node['und']) ? $variables['node']->field_titulo_color_node['und'][0]['value'] : NULL;
    $new_title = strip_tags($new_title, '<strong>');
    $variables['title'] = $new_title;

  $variables['theme_hook_suggestions'][] = 'page__empleabilidad';
  
  }

     if((isset($variables['node'])) && $variables['node']->type =='infraestructura') {

    $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;

    $new_title = isset($variables['node']->field_titulo_color_node['und']) ? $variables['node']->field_titulo_color_node['und'][0]['value'] : NULL;
    $new_title = strip_tags($new_title, '<strong>');
    $variables['title'] = $new_title;

  $variables['theme_hook_suggestions'][] = 'page__infraestructura';
   drupal_add_js(drupal_get_path('theme', 'ulima') .'/js/jquery.fancybox.min.js', 'file');
 drupal_add_css(drupal_get_path('theme', 'ulima') .'/css/jquery.fancybox.min.css');
  
  }









  
}


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