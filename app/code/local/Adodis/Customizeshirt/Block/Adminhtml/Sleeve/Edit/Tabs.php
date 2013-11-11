<?php

class Adodis_Customizeshirt_Block_Adminhtml_Sleeve_Edit_Tabs extends Mage_Adminhtml_Block_Widget_Tabs
{

  public function __construct()
  {
      parent::__construct();
      $this->setId('sleeve_tabs');
      $this->setDestElementId('edit_form');
      $this->setTitle(Mage::helper('customizeshirt')->__('Item Information'));
  }

  protected function _beforeToHtml()
  {
      $this->addTab('form_section', array(
          'label'     => Mage::helper('customizeshirt')->__('Item Information'),
          'title'     => Mage::helper('customizeshirt')->__('Item Information'),
          'content'   => $this->getLayout()->createBlock('customizeshirt/adminhtml_sleeve_edit_tab_form')->toHtml(),
      ));
     
      return parent::_beforeToHtml();
  }
}