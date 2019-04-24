<?php

namespace Drupal\simulador\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * An simulador controller.
 */
class HomeController extends ControllerBase {

    /**
     * {@inheritdoc}
     */
    public function build() {
        $build =  [
            '#theme' => 'simulador',
            '#test_var' => '123456',
        ];

        return $build;

    }

}
