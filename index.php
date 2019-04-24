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
$busArray = array('<h2>Primer año</h2>','<h2>Segundo año</h2>','<h2>Tercer año</h2>','<h2>Cuarto año</h2>','<h2>Quinto año</h2>');
$remArray = array('<h2>Primer año</h2><span class="active-acc"></span>','<h2>Segundo año</h2><span></span>','<h2>Tercer año</h2><span></span>','<h2>Cuarto año</h2><span></span>','<h2>Quinto año</h2><span></span>');
$content = str_replace($busArray, $remArray, $content);
$content = str_replace("class='input_form form-control' />", "class='input_form form-control' /><div class='message-error'></div>", $content);
//$content = preg_replace('#::.*::#', '$1', $content);
$response->setContent($content);
$response->send();

$kernel->terminate($request, $response);
