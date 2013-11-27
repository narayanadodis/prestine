<?php

class Adodis_Customizeshirt_Model_Pocket extends Mage_Core_Model_Abstract
{
	
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/pocket');
    }
	/*public function getcat()
	{
	$options = Mage::getResourceModel('customizeshirt/pocket_collection')->load()->toOptionArray();		
    array_unshift($options, array('value'=>'', 'label'=>Mage::helper('customizeshirt')->__('Select Categories')));
    return $options;
	}
	*/
}