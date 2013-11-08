<?php

class Adodis_Customizeshirt_Adminhtml_SleeveController extends Mage_Adminhtml_Controller_action
{
	protected function _initAction() 
	{
		$this->loadLayout()
			->_setActiveMenu('customizeshirt/items')
			->_addBreadcrumb(Mage::helper('adminhtml')->__('Items Manager'), Mage::helper('adminhtml')->__('Item Manager'));
		
		return $this;
	}

	public function indexAction() 
	{
		$this->_initAction()
			->renderLayout();
	}
}