<?php

class Adodis_Customizeshirt_Model_Mysql4_Shoulder_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/shoulder');
			
        //$this->_map['fields']['shoulder_id'] = 'main_table.shoulder_id';
    }

	
}