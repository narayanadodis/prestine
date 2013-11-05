<?php

class Adodis_Customizeshirt_Model_Mysql4_Front_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/front');
			
        //$this->_map['fields']['front_id'] = 'main_table.front_id';
    }

	
}