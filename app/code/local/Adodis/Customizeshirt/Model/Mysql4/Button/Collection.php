<?php

class Adodis_Customizeshirt_Model_Mysql4_Button_Collection extends Mage_Core_Model_Mysql4_Collection_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/button');
			
        //$this->_map['fields']['button_id'] = 'main_table.button_id';
    }

	
}