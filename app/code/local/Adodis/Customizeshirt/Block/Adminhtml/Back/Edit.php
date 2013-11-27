<?php

class Adodis_Customizeshirt_Block_Adminhtml_Back_Edit extends Mage_Adminhtml_Block_Widget_Form_Container
{
    public function __construct()
    {
        parent::__construct();
                 
        $this->_objectId = 'id';
        $this->_blockGroup = 'customizeshirt';
        $this->_controller = 'adminhtml_back';
        
        $this->_updateButton('save', 'label', Mage::helper('customizeshirt')->__('Save Item'));
        $this->_updateButton('delete', 'label', Mage::helper('customizeshirt')->__('Delete Item'));
		
        $this->_addButton('saveandcontinue', array(
            'label'     => Mage::helper('adminhtml')->__('Save And Continue Edit'),
            'onclick'   => 'saveAndContinueEdit()',
            'class'     => 'save',
        ), -100);

        $this->_formScripts[] = "
            function toggleEditor() {
                if (tinyMCE.getInstanceById('customizeshirt_content') == null) {
                    tinyMCE.execCommand('mceAddControl', false, 'customizeshirt_content');
                } else {
                    tinyMCE.execCommand('mceRemoveControl', false, 'customizeshirt_content');
                }
            }

            function saveAndContinueEdit(){
                editForm.submit($('edit_form').action+'back/edit/');
            }
        ";
    }

    public function getHeaderText()
    {
        if( Mage::registry('back_data') && Mage::registry('back_data')->getId() ) {
            return Mage::helper('customizeshirt')->__("Edit Item '%s'", $this->htmlEscape(Mage::registry('back_data')->getTitle()));
        } else {
            return Mage::helper('customizeshirt')->__('Add Item');
        }
    }
}