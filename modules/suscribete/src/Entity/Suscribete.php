<?php

namespace Drupal\suscribete\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\Core\Field\BaseFieldDefinition;


/**
 * Defines the suscribete entity.
 *
 * @ContentEntityType(
 *   id = "suscribete",
 *   label = @Translation("Suscribete"),
 *   bundle_label = @Translation("Suscribete type"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\suscribete\SuscribeteListBuilder",
 *     "views_data" = "Drupal\suscribete\Entity\SuscribeteViewsData",
 *     "form" = {
 *       "default" = "Drupal\suscribete\Form\SuscribeteForm",
 *       "add" = "Drupal\suscribete\Form\SuscribeteForm",
 *       "edit" = "Drupal\suscribete\Form\SuscribeteForm",
 *       "delete" = "Drupal\Core\Entity\ContentEntityDeleteForm",
 *     },
 *    "route_provider" = {
 *      "html" = "Drupal\Core\Entity\Routing\AdminHtmlRouteProvider"
 *    },
 *   "access" = "Drupal\suscribete\Access\SuscribeteAccessControlHandler",
 *   },
 *   base_table = "suscribete",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "name",
 *     "uuid" = "uuid",
 *     "bundle" = "type",
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/suscribete/{Suscribete}",
 *     "add-page" = "/admin/structure/suscribete/add",
 *     "edit-form" = "/admin/structure/suscribete/{suscribete}/edit",
 *     "delete-form" = "/admin/structure/suscribete/{suscribete}/delete",
 *     "collection" = "/admin/structure/suscribete",
 *   },
 * )
 */
class Suscribete extends ContentEntityBase implements SuscribeteInterface {

    use EntityChangedTrait;

    /**
     * {@inheritdoc}
     */
    public function getName() {
        return $this->get('name')->value;
    }

    /**
     * {@inheritdoc}
     */
    public function setName($name) {
        $this->set('name', $name);
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getSuscribeteNumber() {
        return $this->get('number')->value;
    }

    /**
     * {@inheritdoc}
     */
    public function setSuscribeteNumber($number) {
        $this->set('number', $number);
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getRemoteId() {
        return $this->get('remote_id')->value;
    }

    /**
     * {@inheritdoc}
     */
    public function setRemoteId($id) {
        $this->set('remote_id', $id);
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getSource() {
        return $this->get('source')->value;
    }

    /**
     * {@inheritdoc}
     */
    public function setSource($source) {
        $this->set('source', $source);
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getImage() {
        return $this->get('image')->entity;
    }

    /**
     * {@inheritdoc}
     */
    public function setImage($image) {
        $this->set('image', $image);
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public function getCreatedTime() {
        return $this->get('created')->value;
    }

    /**
     * {@inheritdoc}
     */
    public function setCreatedTime($timestamp) {
        $this->set('created', $timestamp);
        return $this;
    }

    /**
     * {@inheritdoc}
     */
    public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
        $fields = parent::baseFieldDefinitions($entity_type);

        $fields['name'] = BaseFieldDefinition::create('string')
            ->setLabel(t('Name'))
            ->setDescription(t('The name of the Suscribete.'))
            ->setSettings([
                'max_length' => 255,
                'text_processing' => 0,
            ])
            ->setDefaultValue('')
            ->setDisplayOptions('view', [
                'label' => 'hidden',
                'type' => 'string',
                'weight' => -4,
            ])
            ->setDisplayOptions('form', [
                'type' => 'string_textfield',
                'weight' => -4,
            ])
            ->setDisplayConfigurable('form', TRUE)
            ->setDisplayConfigurable('view', TRUE);

        $fields['number'] = BaseFieldDefinition::create('integer')
            ->setLabel(t('Number'))
            ->setDescription(t('The Suscribete number.'))
            ->setSettings([
                'min' => 1,
                'max' => 10000
            ])
            ->setDefaultValue(NULL)
            ->setDisplayOptions('view', [
                'label' => 'above',
                'type' => 'number_unformatted',
                'weight' => -4,
            ])
            ->setDisplayOptions('form', [
                'type' => 'number',
                'weight' => -4,
            ])
            ->setDisplayConfigurable('form', TRUE)
            ->setDisplayConfigurable('view', TRUE);

        $fields['remote_id'] = BaseFieldDefinition::create('string')
            ->setLabel(t('Remote ID'))
            ->setDescription(t('The remote ID of the Suscribete.'))
            ->setSettings([
                'max_length' => 255,
                'text_processing' => 0,
            ])
            ->setDefaultValue('');

        $fields['source'] = BaseFieldDefinition::create('string')
            ->setLabel(t('Source'))
            ->setDescription(t('The source of the Suscribete.'))
            ->setSettings([
                'max_length' => 255,
                'text_processing' => 0,
            ])
            ->setDefaultValue('');

        $fields['image'] = BaseFieldDefinition::create('image')
            ->setLabel(t('Image'))
            ->setDescription(t('The Suscribete image.'))
            ->setDisplayOptions('form', array(
                'type' => 'image_image',
                'weight' => 5,
            ))
            ->setDisplayOptions('view', array(
                'type' => 'image',
                'weight' => 10,
                'settings' => [
                    'image_style' => 'large'
                ]
            ));

        $fields['created'] = BaseFieldDefinition::create('created')
            ->setLabel(t('Created'))
            ->setDescription(t('The time that the entity was created.'));

        $fields['changed'] = BaseFieldDefinition::create('changed')
            ->setLabel(t('Changed'))
            ->setDescription(t('The time that the entity was last edited.'));

        return $fields;
    }
}
