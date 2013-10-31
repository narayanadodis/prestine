<?php
class Adodis_Customizeshirt_Block_Customizeshirt extends Mage_Core_Block_Template
{
	public function _prepareLayout()
    {
		return parent::_prepareLayout();
    }
    
     public function getCustomizeshirt()     
     { 
        if (!$this->hasData('customizeshirt')) {
            $this->setData('customizeshirt', Mage::registry('customizeshirt'));
        }
        return $this->getData('customizeshirt');
        
    }
}