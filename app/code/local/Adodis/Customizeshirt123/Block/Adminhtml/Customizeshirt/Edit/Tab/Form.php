<?php

class Adodis_Customizeshirt_Block_Adminhtml_Customizeshirt_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
      $form = new Varien_Data_Form();
      $this->setForm($form);
      $fieldset = $form->addFieldset('customizeshirt_form', array('legend'=>Mage::helper('customizeshirt')->__('Item information')));
     
      $fieldset->addField('title', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Title'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'title',
      ));

      $fieldset->addField('filename', 'file', array(
          'label'     => Mage::helper('customizeshirt')->__('File'),
          'required'  => false,
          'name'      => 'filename',
	  ));
		
      $fieldset->addField('status', 'select', array(
          'label'     => Mage::helper('customizeshirt')->__('Status'),
          'name'      => 'status',
          'values'    => array(
              array(
                  'value'     => 1,
                  'label'     => Mage::helper('customizeshirt')->__('Enabled'),
              ),

              array(
                  'value'     => 2,
                  'label'     => Mage::helper('customizeshirt')->__('Disabled'),
              ),
          ),
      ));
     
      $fieldset->addField('content', 'editor', array(
          'name'      => 'content',
          'label'     => Mage::helper('customizeshirt')->__('Content'),
          'title'     => Mage::helper('customizeshirt')->__('Content'),
          'style'     => 'width:700px; height:500px;',
          'wysiwyg'   => false,
          'required'  => true,
      ));
     
      if ( Mage::getSingleton('adminhtml/session')->getCustomizeshirtData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getCustomizeshirtData());
          Mage::getSingleton('adminhtml/session')->setCustomizeshirtData(null);
      } elseif ( Mage::registry('customizeshirt_data') ) {
          $form->setValues(Mage::registry('customizeshirt_data')->getData());
      }
      return parent::_prepareForm();
  }
}