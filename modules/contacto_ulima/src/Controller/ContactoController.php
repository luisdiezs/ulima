<?php
namespace Drupal\contacto_ulima\Controller;
use Drupal\Core\Controller\ControllerBase;

class ContactoController extends ControllerBase {

    /* Método acción content devuelve directamente un contenido en html,
    este método será usado en una ruta */
    public function content() {
        return array(
            '#type' => 'markup',
            '#markup' => $this->t('Hola mundo !!'),
        );
    }

}
