<?php

namespace Drupal\contacto;

/**
 * Class contactoModel.
 *
 * @package Drupal\contacto
 */
class ContactoModel {

  protected static $table = 'contacto';

  /**
   * {@inheritdoc}
   */
  public static function load($entry = []) {
    $select = db_select(self::$table, 'table_alias');
    $select->fields('table_alias');
    foreach ($entry as $field => $value) {
      $select->condition($field, $value);
    }
    return $select->execute()->fetchAssoc();
  }

  /**
   * {@inheritdoc}
   */
  public static function getAll($entry = [], $sort = []) {
    $select = db_select(self::$table, 'table_alias');
    $select->fields('table_alias');
    if (count($entry) > 0) {
      foreach ($entry as $field => $value) {
        $select->condition($field, $value);
      }
    }
    if (count($sort) > 0) {
      foreach ($sort as $field => $value) {
        $select->orderBy($field, $value);
      }
    }

    return $select->execute()->fetchAll();
  }

  /**
   * {@inheritdoc}
   */
  public static function insert($field) {
    $return_value = NULL;
    try {
      $return_value = db_insert(self::$table)
        ->fields($field)
        ->execute();
    }
    catch (\Exception $e) {
      drupal_set_message(t('db_insert failed. Message = %message, query= %query', [
        '%message' => $e->getMessage(),
        '%query' => $e->query_string,
      ]), 'error');
    }
    return $return_value;
  }

  /**
   * {@inheritdoc}
   */
  public static function update($fields, $conditions) {
    try {
      $count = db_update(self::$table)
        ->fields($fields);
      foreach ($conditions as $field => $value) {
        $count->condition($field, $value);
      }
      $count->execute();
    }
    catch (\Exception $e) {
      drupal_set_message(t('db_update failed. Message = %message, query= %query', [
        '%message' => $e->getMessage(),
        '%query' => $e->query_string,
      ]), 'error');
    }
    return $count;
  }

  /**
   * {@inheritdoc}
   */
  public static function delete($entry = []) {
    $delete = db_delete(self::$table);
    if (count($entry) > 0) {
      foreach ($entry as $field => $value) {
        $delete->condition($field, $value);
      }
    }
    return $delete->execute();
  }

}
