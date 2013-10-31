<?php

class Jextn_Testimonials_Block_Adminhtml_Testimonials_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
      $form = new Varien_Data_Form();
      $this->setForm($form);
      $fieldset = $form->addFieldset('testimonials_form', array('legend'=>Mage::helper('testimonials')->__('Item information')));
     
      $fieldset->addField('name', 'text', array(
          'label'     => Mage::helper('testimonials')->__('Name'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'name',
      ));
	  $fieldset->addField('email', 'text', array(
          'label'     => Mage::helper('testimonials')->__('Email'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'email',
      ));
	$fieldset->addField('url', 'text', array(
          'label'     => Mage::helper('testimonials')->__('URL'),
          'required'  => false,
          'name'      => 'url',
      ));
      		
      $fieldset->addField('status', 'select', array(
          'label'     => Mage::helper('testimonials')->__('Status'),
          'name'      => 'status',
          'values'    => array(
              array(
                  'value'     => 1,
                  'label'     => Mage::helper('testimonials')->__('Approved'),
              ),

              array(
                  'value'     => 2,
                  'label'     => Mage::helper('testimonials')->__('Pending'),
              ),
          ),
      ));
     $fieldset->addField('sidebar', 'select', array(
          'label'     => Mage::helper('testimonials')->__('Side bar display'),
          'name'      => 'sidebar',
          'values'    => array(
              array(
                  'value'     => 1,
                  'label'     => Mage::helper('testimonials')->__('yes'),
              ),

              array(
                  'value'     => 0,
                  'label'     => Mage::helper('testimonials')->__('No'),
              ),
          ),
      ));     
      $fieldset->addField('content', 'editor', array(
          'name'      => 'content',
          'label'     => Mage::helper('testimonials')->__('Testimonial Content'),
          'title'     => Mage::helper('testimonials')->__('Testimonial Content'),
          'style'     => 'width:700px; height:200px;',
          'wysiwyg'   => false,
          'required'  => true,
      ));

      if ( Mage::getSingleton('adminhtml/session')->getTestimonialsData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getTestimonialsData());
          Mage::getSingleton('adminhtml/session')->setTestimonialsData(null);
      } elseif ( Mage::registry('testimonials_data') ) {
          $form->setValues(Mage::registry('testimonials_data')->getData());
      }
      return parent::_prepareForm();
  }
}