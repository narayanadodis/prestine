<?php

class Adodis_Customizeshirt_Block_Adminhtml_Cuff_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
	$model = Mage::registry('cuff_data');
      $form = new Varien_Data_Form();
      $this->setForm($form);
      $fieldset = $form->addFieldset('customizeshirt_form', array('legend'=>Mage::helper('customizeshirt')->__('Item information')));
     
      $fieldset->addField('cuff_title', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Cuff Title'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'cuff_title',
      ));

      $object = Mage::getModel('customizeshirt/cuff')->load( $this->getRequest()->getParam('id') );
		$note = false;
		$img = '';
		$fieldset->addField('imagethumb', 'hidden', array(
	          	'name'        => 'imagethumb',
	      	));

		if( $object["cuff_image"] ){
	  		//$fieldset->addField('imagethumb', 'hidden', array(
	         // 	'name'        => 'imagethumb',
	      	//));

			$config = Mage::getModel('customizeshirt/cuff');
			$image = Mage::getModel('customizeshirt/cuff');
			$image->setConfig($config);

			$imageFile =  Mage::getBaseUrl('media').$object["cuff_image"];
			$strimg = $object["cuff_image"];
			$aryimg = explode("/",$strimg);
			$imge = $aryimg[2].'/'.$aryimg[3].'/'.$aryimg[4];
			$imge = ltrim(rtrim($imge));
			If ($imageFile) {
				$img = '<img src="' . $imageFile . '" border="0" width="150" height="150" align="center"/>';
			}
		}



	  $fieldset->addField('cuff_image', 'file', array(
			'label'        => Mage::helper('customizeshirt')->__('Cuff Image'),
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
      
     
      if ( Mage::getSingleton('adminhtml/session')->getCuffData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getCuffData());
          Mage::getSingleton('adminhtml/session')->getCuffData(null);
      } elseif ( Mage::registry('cuff_data') ) {
          $form->setValues(Mage::registry('cuff_data')->getData());
      }
      return parent::_prepareForm();
  }
}