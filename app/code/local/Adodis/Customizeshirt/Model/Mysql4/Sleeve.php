<?php

class Adodis_Customizeshirt_Model_Mysql4_Sleeve extends Mage_Core_Model_Mysql4_Abstract
{
    public function _construct()
    {    
        // Note that the sleeve_id refers to the key field in your database table.
        $this->_init('customizeshirt/sleeve', 'sleeve_id');
    }

}