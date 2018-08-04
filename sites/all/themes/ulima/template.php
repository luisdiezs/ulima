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

  $texto1 = isset($variables['node']->field_texto_1['und']) ? $variables['node']->field_texto_1['und'][0]['value'] : NULL;
  $texto2 = isset($variables['node']->field_texto_2['und']) ? $variables['node']->field_texto_2['und'][0]['value'] : NULL;
  $variables['texto1'] = $texto1;
  $variables['texto2'] = $texto2;
	$variables['theme_hook_suggestions'][] = 'page__carrera';
 

}
  
if((isset($variables['node'])) && $variables['node']->type =='perfil'){

  $variables['theme_hook_suggestions'][] = 'page__perfil';
    $nodoid = $variables['node']->field_carrera['und'][0]['target_id'];
    $variables['idcarrera'] = $variables['node']->field_carrera['und'][0]['target_id'];
    $variables['carrera'] = node_load($nodoid)->title;
}

if((isset($variables['node'])) && $variables['node']->type =='malla_curricular'){
   $nodoid = $variables['node']->field_carrera['und'][0]['target_id'];
    $variables['idcarrera'] = $variables['node']->field_carrera['und'][0]['target_id'];
    $variables['carrera'] = node_load($nodoid)->title;
    $variables['theme_hook_suggestions'][] = 'page__malla';
}
  


if((isset($variables['node'])) && $variables['node']->type =='modalidades'){

  

    $mensaje_introductorio = isset($variables['node']->field_mensaje_introductorio['und']) ? $variables['node']->field_mensaje_introductorio['und'][0]['value'] : NULL;
    $variables['mensaje_introductorio'] = $mensaje_introductorio;
  

  $variables['theme_hook_suggestions'][] = 'page__modalidades';
}
  
  if(arg(0)== 'admision' && arg(1) == NULL){
    
   $variables['theme_hook_suggestions'][] = 'page__admision';
  }
    if(arg(0)== 'openlima' && arg(1) == NULL){
    
   $variables['theme_hook_suggestions'][] = 'page__openlima';
  }

  if(arg(0)== 'carreras' && arg(1) == NULL){
    
   $variables['theme_hook_suggestions'][] = 'page__seccioncarreras';
  }

  if( arg(1) == 125){ // contacto
    

$direccion = isset($variables['node']->field_direccion['und']) ? $variables['node']->field_direccion['und'][0]['value'] : NULL;

$imagene = isset($variables['node']->field_imagen_peque_a_cabecera['und']) ? $variables['node']->field_imagen_peque_a_cabecera['und'][0]['uri'] : NULL;
 $imagene =  file_create_url($imagene); 
  $variables['direccion'] = $direccion;
   $variables['imagen'] = $imagene;
   $variables['theme_hook_suggestions'][] = 'page__contacto';
  }

  if(arg(0)== 'inversion' && arg(1) == NULL){
    
   $variables['theme_hook_suggestions'][] = 'page__inversion';
  }



if(arg(0)== 'inversion' || arg(0)== 'openlima'  || arg(0)== 'somosulima' || arg(0) =='convenios' ){

$variables['title'] = NULL;

}

  
  

  
  if(arg(0)== 'somosulima'){
     drupal_add_css(drupal_get_path('theme', 'ulima') .'/css/jquery.fancybox.min.css');

    drupal_add_js(drupal_get_path('theme', 'ulima') .'/js/jquery.fancybox.min.js', 'file');
    drupal_add_js('
jQuery(document).ready(function () {
   
        jQuery(".cont_video .view-content a").fancybox({
             type: "iframe",
          });
  });', 'inline');
    
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

    

    $sub_title = isset($variables['node']->field_subtitulo_nodo['und']) ? $variables['node']->field_subtitulo_nodo['und'][0]['value'] : NULL;
    
    $variables['subtitle'] = $sub_title;
     //$variables['title'] = $variables['title'] .''.$sub_title;

  $variables['theme_hook_suggestions'][] = 'page__empleabilidad';
  
  }

     if((isset($variables['node'])) && $variables['node']->type =='infraestructura') {

  $texto1 = isset($variables['node']->field_texto_1['und']) ? $variables['node']->field_texto_1['und'][0]['value'] : NULL;
  $texto2 = isset($variables['node']->field_texto_2['und']) ? $variables['node']->field_texto_2['und'][0]['value'] : NULL;
  $variables['texto1'] = $texto1;
  $variables['texto2'] = $texto2;

  $variables['theme_hook_suggestions'][] = 'page__infraestructura';
   drupal_add_js(drupal_get_path('theme', 'ulima') .'/js/jquery.fancybox.min.js', 'file');
 drupal_add_css(drupal_get_path('theme', 'ulima') .'/css/jquery.fancybox.min.css');
     drupal_add_js('
jQuery(document).ready(function () {
   
        jQuery(".cont_v_ulima .view-content a").fancybox({
             type: "iframe",
          });
  });', 'inline');
    
  
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