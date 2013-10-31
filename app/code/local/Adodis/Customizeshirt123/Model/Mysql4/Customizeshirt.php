<?php

class Adodis_Customizeshirt_Model_Mysql4_Customizeshirt extends Mage_Core_Model_Mysql4_Abstract
{
    public function _construct()
    {    
        // Note that the customizeshirt_id refers to the key field in your database table.
        $this->_init('customizeshirt/customizeshirt', 'customizeshirt_id');
    }
}