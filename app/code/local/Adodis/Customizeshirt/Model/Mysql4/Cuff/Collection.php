<?php

class Adodis_Customizeshirt_Model_Mysql4_Cuff_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/cuff');
			
        //$this->_map['fields']['cuff_id'] = 'main_table.cuff_id';
    }

	
}