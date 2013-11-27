<?php

class Adodis_Customizeshirt_Model_Mysql4_Pocket_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/pocket');
			
        //$this->_map['fields']['pocket_id'] = 'main_table.pocket_id';
    }

	
}