<?php

class Adodis_Customizeshirt_Model_Customizeshirt extends Mage_Core_Model_Abstract
{
    public function _construct()
    {
        parent::_construct();
        $this->_init('customizeshirt/customizeshirt');
    }
}