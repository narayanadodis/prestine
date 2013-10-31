<?php
class Jextn_Testimonials_Block_Testimonials extends Mage_Core_Block_Template
{
	public function _prepareLayout()
    {
		$this->getLayout()->getBlock('head')->setTitle(Mage::helper('testimonials')->getTestimonialsTitle());
		return parent::_prepareLayout();
    }

    public function getTestimonials()
     {
		$collection = Mage::getModel('testimonials/testimonials')->getCollection()
							->addIsActiveFilter();
        return $collection;
    }

	public function getSidebarTestimonials()
     {
		$collection = Mage::getModel('testimonials/testimonials')->getCollection()
							->addSidebarFilter()
							->addIsActiveFilter();
        return $collection;
    }

	public function getFormAction()
	{
		return $this->getUrl('testimonials/submit/post', array('_secure' => true));
	}
}