<?php

class Adodis_Customizeshirt_Model_Mysql4_Collar_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/collar');
			
        //$this->_map['fields']['collar_id'] = 'main_table.collar_id';
    }

	
}