<?php

class Adodis_Customizeshirt_Model_Mysql4_Embroidery extends Mage_Core_Model_Mysql4_Abstract
{
	//protected $_store = null;
    public function _construct()
    {    
        // Note that the customizeshirt_id refers to the key field in your database table.
        $this->_init('customizeshirt/embroidery', 'embroidery_id');
    }

	
}