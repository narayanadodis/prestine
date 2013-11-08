<?php

class Adodis_Customizeshirt_Model_Mysql4_Sleeve_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/sleeve');
			
    }

	
}