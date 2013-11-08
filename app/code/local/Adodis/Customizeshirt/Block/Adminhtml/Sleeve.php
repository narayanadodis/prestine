<?php
class Adodis_Customizeshirt_Block_Adminhtml_Sleeve extends Mage_Adminhtml_Block_Widget_Grid_Container
{
  public function __construct()
  {
    $this->_controller = 'adminhtml_sleeve';
    $this->_blockGroup = 'customizeshirt';
    $this->_headerText = Mage::helper('customizeshirt')->__('Item Manager');
    $this->_addButtonLabel = Mage::helper('customizeshirt')->__('Add Item');
    parent::__construct();
  }
}