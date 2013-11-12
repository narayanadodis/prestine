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
	
	public function cuffAction()
    {
    	$switchno = $_GET['switchno'];
		//echo $switchno;
		//$collection = Mage::getModel('customizeshirt/cuff')->getCollection();
		$collection = Mage::getModel('customizeshirt/cuff')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('cuff_id', 'ASC');
		//print_r($collection);
		foreach($collection as $cuff) { 
		if($cuff->getSwitchno() == $switchno) {
		echo $cuff->getCuffTitle().' Cuff';
		}
		} 
    }
	
	public function collarAction()
    {
    	$switchno = $_GET['switchno'];
		//echo $switchno;
		$collection = Mage::getModel('customizeshirt/collar')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('collar_id', 'ASC');
		//print_r($collection);
		foreach($collection as $collar) { 
		if($collar->getSwitchno() == $switchno) {
		echo $collar->getCollarTitle().' Collar';
		}
		} 
    }
	
	public function frontAction()
    {
    	$switchno = $_GET['switchno'];
		//echo $switchno;
		$collection = Mage::getModel('customizeshirt/front')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('front_id', 'ASC');
		//print_r($collection);
		foreach($collection as $front) { 
		if($front->getSwitchno() == $switchno) {
		echo $front->getFrontTitle().' Front';
		}
		} 
    }
	
	public function pocketAction()
    {
    	/*$switchno = $_GET['switchno'];
		//echo $switchno;
		$collection = Mage::getModel('customizeshirt/front')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('front_id', 'ASC');
		//print_r($collection);
		foreach($collection as $front) { 
		if($front->getSwitchno() == $switchno) {
		echo $front->getFrontTitle().' Front';
		}
		} */
    }
	
	public function shoulderAction()
    {
    	$switchno = $_GET['switchno'];
		//echo $switchno;
		$collection = Mage::getModel('customizeshirt/shoulder')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('shoulder_id', 'ASC');
		//print_r($collection);
		foreach($collection as $shoulder) { 
		if($shoulder->getSwitchno() == $switchno) {
		echo $shoulder->getShoulderTitle().' Shoulder';
		}
		} 
    }
	
	public function collarcolorAction()
    {
    	$fid = $_GET['fid'];
		$category_id = '6';
		$products = Mage::getModel('catalog/category')->load($category_id)
		 ->getProductCollection()
		 ->addAttributeToSelect('*')
		 ->addAttributeToFilter('status', 1)
		 ->addAttributeToFilter('visibility', 4)
		 ->setOrder('price', 'ASC');
		foreach($products as $product) {
		if($product->getId() == $fid) {
		echo 'Collar Contrast '.$product->getName();
		}
		} 
    }
	
	public function collarliningcolorAction()
    {
    	$fid = $_GET['fid'];
		$category_id = '6';
		$products = Mage::getModel('catalog/category')->load($category_id)
		 ->getProductCollection()
		 ->addAttributeToSelect('*')
		 ->addAttributeToFilter('status', 1)
		 ->addAttributeToFilter('visibility', 4)
		 ->setOrder('price', 'ASC');
		foreach($products as $product) {
		if($product->getId() == $fid) {
		echo 'Collar Inner Lining '.$product->getName();
		}
		} 
    }
	
	public function cuffcolorAction()
    {
    	$fid = $_GET['fid'];
		$category_id = '6';
		$products = Mage::getModel('catalog/category')->load($category_id)
		 ->getProductCollection()
		 ->addAttributeToSelect('*')
		 ->addAttributeToFilter('status', 1)
		 ->addAttributeToFilter('visibility', 4)
		 ->setOrder('price', 'ASC');
		foreach($products as $product) {
		if($product->getId() == $fid) {
		echo 'Cuff Contrast '.$product->getName();
		}
		} 
    }
	
	public function cuffinnercolorAction()
    {
    	$fid = $_GET['fid'];
		$category_id = '6';
		$products = Mage::getModel('catalog/category')->load($category_id)
		 ->getProductCollection()
		 ->addAttributeToSelect('*')
		 ->addAttributeToFilter('status', 1)
		 ->addAttributeToFilter('visibility', 4)
		 ->setOrder('price', 'ASC');
		foreach($products as $product) {
		if($product->getId() == $fid) {
		echo 'Cuff Inner Lining '.$product->getName();
		}
		} 
    }
	
	public function placketcolorAction()
    {
    	$fid = $_GET['fid'];
		$category_id = '6';
		$products = Mage::getModel('catalog/category')->load($category_id)
		 ->getProductCollection()
		 ->addAttributeToSelect('*')
		 ->addAttributeToFilter('status', 1)
		 ->addAttributeToFilter('visibility', 4)
		 ->setOrder('price', 'ASC');
		foreach($products as $product) {
		if($product->getId() == $fid) {
		echo 'Front Contrast '.$product->getName();
		}
		} 
    }
	
}