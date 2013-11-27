<?php

class Adodis_Customizeshirt_Model_Button extends Mage_Core_Model_Abstract
{
	
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/button');
    }
	/*public function getcat()
	{
	$options = Mage::getResourceModel('customizeshirt/button_collection')->load()->toOptionArray();		
    array_unshift($options, array('value'=>'', 'label'=>Mage::helper('customizeshirt')->__('Select Categories')));
    return $options;
	}
	*/
}