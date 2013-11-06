<?php

class Adodis_Customizeshirt_Model_Monolabel extends Mage_Core_Model_Abstract
{
	
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/monolabel');
    }
	/*public function getcat()
	{
	$options = Mage::getResourceModel('customizeshirt/monolabel_collection')->load()->toOptionArray();		
    array_unshift($options, array('value'=>'', 'label'=>Mage::helper('customizeshirt')->__('Select Categories')));
    return $options;
	}
	*/
}