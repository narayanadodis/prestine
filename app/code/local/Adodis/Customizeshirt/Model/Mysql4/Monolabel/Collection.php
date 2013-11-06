<?php

class Adodis_Customizeshirt_Model_Mysql4_Monolabel_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/monolabel');
			
        //$this->_map['fields']['monolabel_id'] = 'main_table.monolabel_id';
    }

	
}