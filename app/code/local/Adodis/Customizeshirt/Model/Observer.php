<?php

class Adodis_Customizeshirt_Model_Observer extends Varien_Object
{
    public function cartCustomAddition(Varien_Event_Observer $observer)
	{
		/* @var $item Mage_Sales_Model_Quote_Item */
    $item = $observer->getQuoteItem();
    if ($item->getParentItem()) {
        $item = $item->getParentItem();
    }
	
	 if($item->getProductId() == 9) {
    // This makes sure the discount isn't applied over and over when refreshing
	$basefabricid = Mage::app()->getRequest()->getParam('basecolor');
	$product = Mage::getModel('catalog/product')->load($basefabricid);
	$basefabricprice = $product->getFinalPrice();
	
	$specialPrice = $basefabricprice;
    // Make sure we don't have a negative
    if ($specialPrice > 0) {
        $item->setCustomPrice($specialPrice);
        $item->setOriginalCustomPrice($specialPrice);
        $item->getProduct()->setIsSuperMode(true);
    }
	
	
	// BEGIN Saving image to folder
	$img_val = Mage::app()->getRequest()->getParam('img_val');
	//Show the image
	//echo '<img src="'.$img_val.'" />';
	//Get the base-64 string from data
	$filteredData=substr($img_val, strpos($img_val, ",")+1);
	//Decode the string
	$unencodedData=base64_decode($filteredData);
	//Save the image
	$varimg = uniqid();
	file_put_contents('media/customizeshirt/finalshirt/img_'.$varimg.'.png', $unencodedData);
	
	/*
	$img_val_back = Mage::app()->getRequest()->getParam('img_val_back');
	//Show the image
	//echo '<img src="'.$img_val_back.'" />';
	//Get the base-64 string from data
	$filteredData1=substr($img_val_back, strpos($img_val_back, ",")+1);
	//Decode the string
	$unencodedData1=base64_decode($filteredData1);
	//Save the image
	$varimgback = uniqid();
	file_put_contents('media/customizeshirt/finalshirt/img_'.$varimgback.'.png', $unencodedData1);
	*/
	// END Saving image to folder
	
	
	//echo $item->getId();
	$cust_img = 'customizeshirt/finalshirt/img_'.$varimg.'.png';
	$item->setCustomizedShirtImage($cust_img);
	
	/*$cust_img_back = 'customizeshirt/finalshirt/img_'.$varimgback.'.png';
	$item->setCustomizedShirtBackImage($cust_img_back);*/
	//exit;
	
	$neck = Mage::app()->getRequest()->getParam('neck');
	$chest = Mage::app()->getRequest()->getParam('chest');
	$waist = Mage::app()->getRequest()->getParam('waist');
	$hip = Mage::app()->getRequest()->getParam('hip');
	$length = Mage::app()->getRequest()->getParam('length');
	$shoulder = Mage::app()->getRequest()->getParam('shoulder');
	$sleevelength = Mage::app()->getRequest()->getParam('sleevelength');
	$stdmeasure = Mage::app()->getRequest()->getParam('stdsizes');

	
	$item->setNeck($neck);
	$item->setChest($chest);
	$item->setWaist($waist);
	$item->setHip($hip);
	$item->setNeck($neck);
	$item->setLength($length);
	$item->setShoulder($shoulder);
	$item->setSleeve($sleevelength);
	$item->setStdMeasure($stdmeasure);

	}
	}
	
	public function placeorderCustomAddition(Varien_Event_Observer $observer)
	{
	 $quote = Mage::getSingleton('checkout/session/')->getQuote();
	 //$session= Mage::getSingleton('checkout/session');
	foreach($quote->getAllItems() as $item)
	{
	   $productid = $item->getProductId();
	   $productsku = $item->getSku();
	   $productname = $item->getName();
	   $productqty = $item->getQty();
	   //echo $productid;
	   if($productid == '9') {
	   
	     $neck[] = $item->getNeck(); 
		 $chest[] = $item->getChest();
		 $waist[] = $item->getWaist();
		 $hip[] = $item->getHip();
		 $length[] = $item->getLength();
		 $shoulder[] = $item->getShoulder();
		 $sleevelength[] = $item->getSleeve();
		 $stdmeasure[] = $item->getStdMeasure();
		 $cust_img[] = $item->getCustomizedShirtImage();
		 //$cust_img_back[] = $item->getCustomizedShirtBackImage();
		}
	}
	
			$order = $observer->getEvent()->getOrder();
			$i=0;
            foreach($order->getAllItems() as $_item) {
				 $product_id = $_item->getProductId();
				if($product_id == '9') {
					$_item->setCustomizedShirtImage($cust_img[$i]);
					//$_item->setCustomizedShirtBackImage($cust_img_back[$i]);
					$_item->setNeck($neck[$i]);
					$_item->setChest($chest[$i]);
					$_item->setWaist($waist[$i]);
					$_item->setHip($hip[$i]);
					$_item->setNeck($neck[$i]);
					$_item->setLength($length[$i]);
					$_item->setShoulder($shoulder[$i]);
					$_item->setSleeve($sleevelength[$i]);
					$_item->setStdMeasure($stdmeasure[$i]);
					$i++;
				}
            }
	
		
	//exit;
	
	}
    
}