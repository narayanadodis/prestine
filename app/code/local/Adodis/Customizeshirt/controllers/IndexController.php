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
		Mage::getSingleton('core/session')->setDefaultShirtid('3');

			
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
	
	public function addtocartAction()
    {
		$basefabricid = $this->getRequest()->getParam('basecolor');
		$product = Mage::getModel('catalog/product')->load($basefabricid);
		//echo $basefabricid.'<br>';
		$basefabricname = $product->getName();
		$basefabricprice = $product->getFinalPrice();
		
		$collar_switchno = $this->getRequest()->getParam('collar');
		$collarcollection = Mage::getModel('customizeshirt/collar')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('collar_id', 'ASC');
		foreach($collarcollection as $collars) { 
		if($collars->getSwitchno() == $collar_switchno) {
		$collar = $collars->getCollarTitle().' Collar';
		}
		}
		
		$cuff_switchno = $this->getRequest()->getParam('cuff');
		$cuffcollection = Mage::getModel('customizeshirt/cuff')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('cuff_id', 'ASC');
		foreach($cuffcollection as $cuffs) { 
		if($cuffs->getSwitchno() == $cuff_switchno) {
		$cuff = $cuffs->getCuffTitle().' Cuff';
		}
		}
		
		$front_switchno = $this->getRequest()->getParam('placket');
		$frontcollection = Mage::getModel('customizeshirt/front')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('front_id', 'ASC');
		foreach($frontcollection as $fronts) { 
		if($fronts->getSwitchno() == $front_switchno) {
		$front = $fronts->getFrontTitle().' Front';
		}
		}
		
		$shoulder_switchno = $this->getRequest()->getParam('strap');
		$shouldercollection = Mage::getModel('customizeshirt/shoulder')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('shoulder_id', 'ASC');
		foreach($shouldercollection as $shoulders) { 
		if($shoulders->getSwitchno() == $shoulder_switchno) {
		$shoulder = $shoulders->getShoulderTitle().' Shoulder';
		}
		}
		
		$collarcolor_fid = $this->getRequest()->getParam('collarcolor');
		$cuffcolor_fid = $this->getRequest()->getParam('cuffcolor');
		$placketcolor_fid = $this->getRequest()->getParam('placketcolor');
		$collarliningcolor_fid = $this->getRequest()->getParam('collarliningcolor');
		$cuffinnercolor_fid = $this->getRequest()->getParam('cuffinnercolor');
		
		$category_id = '6';
		$products = Mage::getModel('catalog/category')->load($category_id)
		 ->getProductCollection()
		 ->addAttributeToSelect('*')
		 ->addAttributeToFilter('status', 1)
		 ->addAttributeToFilter('visibility', 4)
		 ->setOrder('price', 'ASC');
		foreach($products as $product) {
		if($product->getId() == $collarcolor_fid) {
		$collarcolor = 'Collar Contrast '.$product->getName();
		}
		if($product->getId() == $cuffcolor_fid) {
		$cuffcolor = 'Cuff Contrast '.$product->getName();
		}
		if(($product->getId() == $collarliningcolor_fid) && ($this->getRequest()->getParam('collarlining') == '1')) {
		$collarliningcolor = 'Collar Inner Lining '.$product->getName();
		}
		if(($product->getId() == $cuffinnercolor_fid) && ($this->getRequest()->getParam('cuffinner') == '1')) {
		$cuffinnercolor = 'Cuff Inner Lining '.$product->getName();
		}
		if($product->getId() == $placketcolor_fid) {
		$placketcolor = 'Front Contrast '.$product->getName();
		}
		}
		
		$cuffmono = $this->getRequest()->getParam('cuffmono');
		$pocketmono = $this->getRequest()->getParam('pocketmono');
		$collarmono = $this->getRequest()->getParam('collarmono');
		$monocolor = $this->getRequest()->getParam('monocolor');
		$monotext = $this->getRequest()->getParam('monotext');
		$monogramfont = $this->getRequest()->getParam('monogramfont');
		$embroiderycollection = Mage::getModel('customizeshirt/embroidery')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('embroidery_id', 'ASC');
		foreach($embroiderycollection as $embroidery) { 
		if($embroidery->getSwitchno() == $monogramfont) {
		$monogramfontstyle = $embroidery->getEmbroideryTitle();
		}
		}
		if(($cuffmono == '2') || ($pocketmono == '2') || ($collarmono == '2'))
		 {
		 if($cuffmono == '2') { $oncuff = 'Cuff, '; }
		 if($pocketmono == '2') { $onpocket = 'Pocket, '; }
		 if($collarmono == '2') { $oncollar = 'Collar, '; }
		 $monogram = 'Monogram "'.$monotext.'" on '.$oncuff.''.$pocketmono.''.$oncollar.'in '.$monocolor.' & Font Style:'.$monogramfontstyle;
		 }
		
		$placketlabel = $this->getRequest()->getParam('placketlabel');
		$collarlabel = $this->getRequest()->getParam('collarlabel');
		$labelcolor = $this->getRequest()->getParam('labelcolor');
		$labeltext = $this->getRequest()->getParam('labeltext');
		$labelfont = $this->getRequest()->getParam('labelfont');
		$embroiderycollection1 = Mage::getModel('customizeshirt/embroidery')->getCollection()
			->addFieldToFilter('status', 1)
			->setOrder('embroidery_id', 'ASC');
		foreach($embroiderycollection1 as $embroidery1) { 
		if($embroidery1->getSwitchno() == $labelfont) {
		$labelfontstyle = $embroidery1->getEmbroideryTitle();
		}
		}
		if(($placketlabel == '2') || ($collarlabel == '2'))
		 {
		 if($placketlabel == '2') { $onfront = 'Front, '; }
		 if($collarlabel == '2') { $oncollarlab = 'Collar, '; }
		 $label = 'Label "'.$monotext.'" on '.$onfront.''.$oncollarlab.'in '.$labelcolor.' & Font Style:'.$labelfontstyle;
		 }
		
		
		$custmized_product = Mage::getModel('catalog/product')->load('9');
		// set option value in product model?
		
		$specialPrice = $basefabricprice;

		// Make sure we don't have a negative
		if ($specialPrice > 0) {
			$custmized_product->setCustomPrice($specialPrice);
			$custmized_product->setOriginalCustomPrice($specialPrice);
			$custmized_product->getProduct()->setIsSuperMode(true);
		}
	
		$cart = Mage::helper('checkout/cart')->getCart();
		$params = array(
			'product' => $custmized_product->getId(), // This would be $custmized_product->getId()
			'qty' => 1,
			'options' => array(
				18 => $basefabricid,
				17 => $basefabricname,
				//16 => $basefabricprice,
				15 => $collar,
				14 => $cuff,
				13 => $front,
				12 => $shoulder,
				//11 => $sleeve,
				//10 => $back,
				//9 => $button,
				//8 => $pocket,
				7 => $collarcolor,
				6 => $collarliningcolor,
				5 => $cuffcolor,
				4 => $cuffinnercolor,
				3 => $placketcolor,
				2 => $monogram,
				1 => $label,
			)
		);
		$cart->addProduct($custmized_product, $params).
		$cart->save();
		
		$this->_redirect('checkout/cart');
    }
	
	
}
