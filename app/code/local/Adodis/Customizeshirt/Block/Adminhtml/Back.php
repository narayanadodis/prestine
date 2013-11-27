<?php
class Adodis_Customizeshirt_Block_Adminhtml_Back extends Mage_Adminhtml_Block_Widget_Grid_Container
{
  public function __construct()
  {
  
    $this->_controller = 'adminhtml_back';
    $this->_blockGroup = 'customizeshirt';
    $this->_headerText = Mage::helper('customizeshirt')->__('Item Manager');
    $this->_addBackLabel = Mage::helper('customizeshirt')->__('Add Item');
    parent::__construct();
  }
}