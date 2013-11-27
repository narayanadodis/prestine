<?php

class Adodis_Customizeshirt_Block_Adminhtml_Back_Grid extends Mage_Adminhtml_Block_Widget_Grid
{
  public function __construct()
  {
      parent::__construct();
      $this->setId('backGrid');
      $this->setDefaultSort('back_id');
      $this->setDefaultDir('ASC');
      $this->setSaveParametersInSession(true);
  }

  protected function _prepareCollection()
  {
      $collection = Mage::getModel('customizeshirt/back')->getCollection();
      $this->setCollection($collection);
      return parent::_prepareCollection();
  }

  protected function _prepareColumns()
  {
      $this->addColumn('back_id', array(
          'header'    => Mage::helper('customizeshirt')->__('ID'),
          'align'     =>'right',
          'width'     => '50px',
          'index'     => 'back_id',
      ));

      $this->addColumn('back_title', array(
          'header'    => Mage::helper('customizeshirt')->__('Title'),
          'align'     =>'left',
          'index'     => 'back_title',
      ));
	  

	  $this->addColumn('back_image', array(
            'header'    => Mage::helper('customizeshirt')->__('Image'),
            'align'     => 'center',
            'width'     => '300px',
            'index'     => 'back_image',
            'type'      => 'image',
            'escape'    => true,
            'sortable'  => false,
            'filter'    => false,
            'renderer'  => 'customizeshirt/adminhtml_back_grid_renderer_image',
        ));
	  
	  /*
      $this->addColumn('content', array(
			'header'    => Mage::helper('customizeshirt')->__('Item Content'),
			'width'     => '150px',
			'index'     => 'content',
      ));
	  */

      $this->addColumn('status', array(
          'header'    => Mage::helper('customizeshirt')->__('Status'),
          'align'     => 'left',
          'width'     => '80px',
          'index'     => 'status',
          'type'      => 'options',
          'options'   => array(
              1 => 'Enabled',
              2 => 'Disabled',
          ),
      ));
	  
        $this->addColumn('action',
            array(
                'header'    =>  Mage::helper('customizeshirt')->__('Action'),
                'width'     => '100',
                'type'      => 'action',
                'getter'    => 'getId',
                'actions'   => array(
                    array(
                        'caption'   => Mage::helper('customizeshirt')->__('Edit'),
                        'url'       => array('base'=> '*/*/edit'),
                        'field'     => 'id'
                    )
                ),
                'filter'    => false,
                'sortable'  => false,
                'index'     => 'stores',
                'is_system' => true,
        ));
		
		$this->addExportType('*/*/exportCsv', Mage::helper('customizeshirt')->__('CSV'));
		$this->addExportType('*/*/exportXml', Mage::helper('customizeshirt')->__('XML'));
	  
      return parent::_prepareColumns();
  }

    protected function _prepareMassaction()
    {
        $this->setMassactionIdField('back_id');
        $this->getMassactionBlock()->setFormFieldName('back');

        $this->getMassactionBlock()->addItem('delete', array(
             'label'    => Mage::helper('customizeshirt')->__('Delete'),
             'url'      => $this->getUrl('*/*/massDelete'),
             'confirm'  => Mage::helper('customizeshirt')->__('Are you sure?')
        ));

        $statuses = Mage::getSingleton('customizeshirt/status')->getOptionArray();

        array_unshift($statuses, array('label'=>'', 'value'=>''));
        $this->getMassactionBlock()->addItem('status', array(
             'label'=> Mage::helper('customizeshirt')->__('Change status'),
             'url'  => $this->getUrl('*/*/massStatus', array('_current'=>true)),
             'additional' => array(
                    'visibility' => array(
                         'name' => 'status',
                         'type' => 'select',
                         'class' => 'required-entry',
                         'label' => Mage::helper('customizeshirt')->__('Status'),
                         'values' => $statuses
                     )
             )
        ));
        return $this;
    }

  public function getRowUrl($row)
  {
      return $this->getUrl('*/*/edit', array('id' => $row->getId()));
  }

}