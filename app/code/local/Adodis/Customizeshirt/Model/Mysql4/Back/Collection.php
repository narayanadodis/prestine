<?php

class Adodis_Customizeshirt_Model_Mysql4_Back_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/back');
			
        //$this->_map['fields']['back_id'] = 'main_table.back_id';
    }

	
}