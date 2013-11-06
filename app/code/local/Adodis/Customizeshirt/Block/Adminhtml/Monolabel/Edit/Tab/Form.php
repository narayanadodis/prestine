<?php

class Adodis_Customizeshirt_Block_Adminhtml_Monolabel_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
	$model = Mage::registry('monolabel_data');
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
	  
	  $fieldset->addField('monolabel_title', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Monolabel Title'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'monolabel_title',
      ));

      $object = Mage::getModel('customizeshirt/monolabel')->load( $this->getRequest()->getParam('id') );
		$note = false;
		$img = '';
		$fieldset->addField('imagethumb', 'hidden', array(
	          	'name'        => 'imagethumb',
	      	));

		if( $object["monolabel_image"] ){
	  		//$fieldset->addField('imagethumb', 'hidden', array(
	         // 	'name'        => 'imagethumb',
	      	//));

			$config = Mage::getModel('customizeshirt/monolabel');
			$image = Mage::getModel('customizeshirt/monolabel');
			$image->setConfig($config);

			$imageFile =  Mage::getBaseUrl('media').$object["monolabel_image"];
			$strimg = $object["monolabel_image"];
			$aryimg = explode("/",$strimg);
			$imge = $aryimg[2].'/'.$aryimg[3].'/'.$aryimg[4];
			$imge = ltrim(rtrim($imge));
			If ($imageFile) {
				$img = '<img src="' . $imageFile . '" border="0" width="150" height="150" align="center"/>';
			}
		}



	  $fieldset->addField('monolabel_image', 'file', array(
			'label'        => Mage::helper('customizeshirt')->__('Monolabel Image'),
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
          'label'     => Mage::helper('customizeshirt')->__('Monolabel Switch_no'),
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
      
     
      if ( Mage::getSingleton('adminhtml/session')->getMonolabelData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getMonolabelData());
          Mage::getSingleton('adminhtml/session')->getMonolabelData(null);
      } elseif ( Mage::registry('monolabel_data') ) {
          $form->setValues(Mage::registry('monolabel_data')->getData());
      }
      return parent::_prepareForm();
  }
}