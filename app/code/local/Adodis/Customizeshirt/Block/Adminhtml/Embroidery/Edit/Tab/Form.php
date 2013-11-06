<?php

class Adodis_Customizeshirt_Block_Adminhtml_Embroidery_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
	$model = Mage::registry('embroidery_data');
      $form = new Varien_Data_Form();
      $this->setForm($form);
      $fieldset = $form->addFieldset('customizeshirt_form', array('legend'=>Mage::helper('customizeshirt')->__('Item information')));
     
      $fieldset->addField('personalize_type', 'select', array(
          'label'     => Mage::helper('customizeshirt')->__('Type'),
          'name'      => 'personalize_type',
          'values'    => array(
			  array(
                  'value'     => Mage::helper('customizeshirt')->__('monogram'),
                  'label'     => Mage::helper('customizeshirt')->__('monogram'),
              ),
              array(
                  'value'     => Mage::helper('customizeshirt')->__('label'),
                  'label'     => Mage::helper('customizeshirt')->__('label'),
              ),			  
          ),
      )); 
	  
	  $fieldset->addField('embroidery_title', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Embroidery Title'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'embroidery_title',
      ));

      $object = Mage::getModel('customizeshirt/embroidery')->load( $this->getRequest()->getParam('id') );
		$note = false;
		$img = '';
		$fieldset->addField('imagethumb', 'hidden', array(
	          	'name'        => 'imagethumb',
	      	));

		if( $object["embroidery_image"] ){
	  		//$fieldset->addField('imagethumb', 'hidden', array(
	         // 	'name'        => 'imagethumb',
	      	//));

			$config = Mage::getModel('customizeshirt/embroidery');
			$image = Mage::getModel('customizeshirt/embroidery');
			$image->setConfig($config);

			$imageFile =  Mage::getBaseUrl('media').$object["embroidery_image"];
			$strimg = $object["embroidery_image"];
			$aryimg = explode("/",$strimg);
			$imge = $aryimg[2].'/'.$aryimg[3].'/'.$aryimg[4];
			$imge = ltrim(rtrim($imge));
			If ($imageFile) {
				$img = '<img src="' . $imageFile . '" border="0" width="150" height="150" align="center"/>';
			}
		}



	  $fieldset->addField('embroidery_image', 'file', array(
			'label'        => Mage::helper('customizeshirt')->__('Embroidery Image'),
			'note'      => $note,
			'name'        => 'filename',
			'after_element_html' => $img,
   		 ));
		
      $fieldset->addField('status', 'select', array(
          'label'     => Mage::helper('customizeshirt')->__('Status'),
          'name'      => 'status',
          'values'    => array(
              array(
                  'value'     => 1,
                  'label'     => Mage::helper('customizeshirt')->__('Enabled'),
              ),

              array(
                  'value'     => 2,
                  'label'     => Mage::helper('customizeshirt')->__('Disabled'),
              ),
          ),
      ));  
	  
	  $fieldset->addField('switchno', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Embroidery Switch_no'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'switchno',
      ));
      
	if (!Mage::app()->isSingleStoreMode()) {
		$fieldset->addField('store_id', 'multiselect', 
				array (
						'name' => 'stores[]', 
						'label' => Mage::helper('customizeshirt')->__('Store view'), 
						'title' => Mage::helper('customizeshirt')->__('Store view'), 
						'required' => true, 
						'values' => Mage::getSingleton('adminhtml/system_store')->getStoreValuesForForm(false, true) ));
	}
	else {
		$fieldset->addField('store_id', 'hidden', array (
				'name' => 'stores[]', 
				'value' => Mage::app()->getStore(true)->getId() ));
		$model->setStoreId(Mage::app()->getStore(true)->getId());
	} 
      
     
      if ( Mage::getSingleton('adminhtml/session')->getEmbroideryData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getEmbroideryData());
          Mage::getSingleton('adminhtml/session')->getEmbroideryData(null);
      } elseif ( Mage::registry('embroidery_data') ) {
          $form->setValues(Mage::registry('embroidery_data')->getData());
      }
      return parent::_prepareForm();
  }
}