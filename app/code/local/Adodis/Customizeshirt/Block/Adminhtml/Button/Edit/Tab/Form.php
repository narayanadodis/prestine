<?php

class Adodis_Customizeshirt_Block_Adminhtml_Button_Edit_Tab_Form extends Mage_Adminhtml_Block_Widget_Form
{
  protected function _prepareForm()
  {
	$model = Mage::registry('button_data');
      $form = new Varien_Data_Form();
      $this->setForm($form);
      $fieldset = $form->addFieldset('customizeshirt_form', array('legend'=>Mage::helper('customizeshirt')->__('Item information')));
     
      $fieldset->addField('button_title', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Button / Thread Title'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'button_title',
      ));

      $fieldset->addField('button_color', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Button Color'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'button_color',
      ));

      $fieldset->addField('button_thread_color', 'text', array(
          'label'     => Mage::helper('customizeshirt')->__('Thread Color'),
          'class'     => 'required-entry',
          'required'  => true,
          'name'      => 'button_thread_color',
      ));

      /*$object = Mage::getModel('customizeshirt/button')->load( $this->getRequest()->getParam('id') );
		$note = false;
		$img = '';
		$fieldset->addField('imagethumb', 'hidden', array(
	          	'name'        => 'imagethumb',
	      	));

		if( $object["button_image"] ){
	  		//$fieldset->addField('imagethumb', 'hidden', array(
	         // 	'name'        => 'imagethumb',
	      	//));

			$config = Mage::getModel('customizeshirt/button');
			$image = Mage::getModel('customizeshirt/button');
			$image->setConfig($config);

			$imageFile =  Mage::getBaseUrl('media').$object["button_image"];
			$strimg = $object["button_image"];
			$aryimg = explode("/",$strimg);
			$imge = $aryimg[2].'/'.$aryimg[3].'/'.$aryimg[4];
			$imge = ltrim(rtrim($imge));
			If ($imageFile) {
				$img = '<img src="' . $imageFile . '" border="0" width="150" height="150" align="center"/>';
			}
		}



	  $fieldset->addField('button_image', 'file', array(
			'label'        => Mage::helper('customizeshirt')->__('Button Image'),
			'note'      => $note,
			'name'        => 'filename',
			'after_element_html' => $img,
   		 ));*/
		
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
          'label'     => Mage::helper('customizeshirt')->__('Button / Thread Switch_no'),
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
      
     
      if ( Mage::getSingleton('adminhtml/session')->getButtonData() )
      {
          $form->setValues(Mage::getSingleton('adminhtml/session')->getButtonData());
          Mage::getSingleton('adminhtml/session')->getButtonData(null);
      } elseif ( Mage::registry('button_data') ) {
          $form->setValues(Mage::registry('button_data')->getData());
      }
      return parent::_prepareForm();
  }
}
?>


<script type="text/javascript">
jQuery('#button_color').ColorPicker({
  onSubmit: function(hsb, hex, rgb, el) {
    jQuery(el).val(hex);
    jQuery(el).ColorPickerHide();
  },
  onBeforeShow: function () {
    jQuery(this).ColorPickerSetColor(this.value);
  }
});
</script>