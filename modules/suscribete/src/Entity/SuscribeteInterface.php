<?php

namespace Drupal\suscribete\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;

/**
 * Represents a Suscribete entity.
 */
interface SuscribeteInterface extends ContentEntityInterface, EntityChangedInterface {

  /**
   * Gets the Suscribete name.
   *
   * @return string
   */
  public function getName();

  /**
   * Sets the Suscribete name.
   *
   * @param string $name
   *
   * @return \Drupal\suscribete\Entity\SuscribeteInterface
   *   The called Suscribete entity.
   */
  public function setName($name);

  /**
   * Gets the Suscribete number.
   *
   * @return int
   */
  public function getSuscribeteNumber();

  /**
   * Sets the Suscribete number.
   *
   * @param int $number
   *
   * @return \Drupal\suscribete\Entity\SuscribeteInterface
   *   The called Suscribete entity.
   */
  public function setSuscribeteNumber($number);

  /**
   * Gets the Suscribete remote ID.
   *
   * @return string
   */
  public function getRemoteId();

  /**
   * Sets the Suscribete remote ID.
   *
   * @param string $id
   *
   * @return \Drupal\Suscribete\Entity\SuscribeteInterface
   *   The called Suscribete entity.
   */
  public function setRemoteId($id);

  /**
   * Gets the Suscribete source.
   *
   * @return string
   */
  public function getSource();

  /**
   * Sets the Suscribete source.
   *
   * @param string $source
   *
   * @return \Drupal\Suscribete\Entity\suscribeteInterface
   *   The called Suscribete entity.
   */
  public function setSource($source);

  /**
   * Gets the Suscribete image.
   *
   * @return \Drupal\file\FileInterface
   */
  public function getImage();

  /**
   * Sets the Suscribete image.
   *
   * @param int $image
   *
   * @return \Drupal\Suscribete\Entity\suscribeteInterface
   *   The called Suscribete entity.
   */
  public function setImage($image);

  /**
   * Gets the Suscribete creation timestamp.
   *
   * @return int
   */
  public function getCreatedTime();

  /**
   * Sets the Suscribete creation timestamp.
   *
   * @param int $timestamp
   *
   * @return \Drupal\suscribete\Entity\SuscribeteInterface
   *   The called Suscribete entity.
   */
  public function setCreatedTime($timestamp);

}