<?php
class Adodis_Customizeshirt_IndexController extends Mage_Core_Controller_Front_Action
{
    public function indexAction()
    {
    	
    	/*
    	 * Load an object by id 
    	 * Request looking like:
    	 * http://site.com/customizeshirt?id=15 
    	 *  or
    	 * http://site.com/customizeshirt/id/15 	
    	 */
    	/* 
		$customizeshirt_id = $this->getRequest()->getParam('id');

  		if($customizeshirt_id != null && $customizeshirt_id != '')	{
			$customizeshirt = Mage::getModel('customizeshirt/customizeshirt')->load($customizeshirt_id)->getData();
		} else {
			$customizeshirt = null;
		}	
		*/
		
		 /*
    	 * If no param we load a the last created item
    	 */ 
    	/*
    	if($customizeshirt == null) {
			$resource = Mage::getSingleton('core/resource');
			$read= $resource->getConnection('core_read');
			$customizeshirtTable = $resource->getTableName('customizeshirt');
			
			$select = $read->select()
			   ->from($customizeshirtTable,array('customizeshirt_id','title','content','status'))
			   ->where('status',1)
			   ->order('created_time DESC') ;
			   
			$customizeshirt = $read->fetchRow($select);
		}
		Mage::register('customizeshirt', $customizeshirt);
		*/

			
		$this->loadLayout();     
		$this->renderLayout();
    }
}