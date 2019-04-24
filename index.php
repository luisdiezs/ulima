<?php
ini_set('display_errors',1);
/**
 * @file
 * The PHP page that serves all page requests on a Drupal installation.
 *
 * All Drupal code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt files in the "core" directory.
 */

use Drupal\Core\DrupalKernel;
use Symfony\Component\HttpFoundation\Request;

$autoloader = require_once 'autoload.php';

$kernel = new DrupalKernel('prod', $autoloader);

$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$content = $response->getContent();
$novalidate = " novalidate";
$content = str_replace('class="contacto-form"', 'class="form-validate" '.$novalidate, $content);

$content = str_replace('class="form-vanillajs-validate"', 'class="form-vanillajs-validate" data-jsv-form="true" ', $content);


$content = str_replace('class=" item_inscrip form-group', 'data-field-holder class="item_inscrip form-group s ', $content);


$busArray = array('<h2>Primer año</h2>','<h2>Segundo año</h2>','<h2>Tercer año</h2>','<h2>Cuarto año</h2>','<h2>Quinto año</h2>');
$remArray = array('<h2>Primer año</h2><span class="active-acc"></span>','<h2>Segundo año</h2><span></span>','<h2>Tercer año</h2><span></span>','<h2>Cuarto año</h2><span></span>','<h2>Quinto año</h2><span></span>');
$content = str_replace($busArray, $remArray, $content);
$content = str_replace("class='input_form form-control' />", "class='input_form form-control' /><div class='message-error'></div>", $content);
$content = str_replace("form-item js-form-type-select", "form-group", $content);
if($request->getRequestUri() == '/contacto'){
    $content = str_replace("form-item js-form-type-textfield", "form-group", $content);
    $content = str_replace(" form-text", "", $content);
}else{
    $content = str_replace("form-item js-form-type-textfield", "item_inscrip form-group", $content);
}

$content = str_replace("js-form-item", "", $content);
//$content = str_replace('<script src="/core/assets/vendor/domready/ready.min.js?v=1.0.8"></script>', "", $content);
//$content = preg_replace('#::.*::#', '$1', $content);
/*
$content = str_replace('<script src="/core/assets/vendor/jquery/jquery.min.js?v=3.2.1"></script>', "", $content);
$content = str_replace('<script src="/core/assets/vendor/jquery-once/jquery.once.min.js?v=2.2.0"></script>', "", $content);
$content = str_replace('<script src="/core/misc/drupalSettingsLoader.js?v=8.6.4"></script>', "", $content);
$content = str_replace('<script src="/sites/default/files/languages/es_K-8Zy0ChDxz8uOjIS80rqw3MV9QNSTGBlnX8FIq6Eew.js?pnum7w"></script>', "", $content);
$content = str_replace('<script src="/core/misc/drupal.js?v=8.6.4"></script>', "", $content);
$content = str_replace('<script src="/core/misc/drupal.init.js?v=8.6.4"></script>', "", $content);
//$content = str_replace('<script src="/themes/ulima/assets/js/main.bundle.js', "", $content);
$content = str_replace('<script src="/core/misc/progress.js?v=8.6.4"></script>', "", $content);
$content = str_replace('<script src="/core/misc/ajax.js?v=8.6.4"></script>', "", $content);
$content = str_replace('<script src="/core/modules/big_pipe/js/big_pipe.js?v=8.6.4"></script>', "", $content);
*/
$response->setContent($content);
$response->send();

$kernel->terminate($request, $response);
