<?php

class Adodis_Customizeshirt_Adminhtml_CuffController extends Mage_Adminhtml_Controller_action
{

	protected function _initAction() {
		$this->loadLayout()
			->_setActiveMenu('customizeshirt/items')
			->_addBreadcrumb(Mage::helper('adminhtml')->__('Items Manager'), Mage::helper('adminhtml')->__('Item Manager'));
		
		return $this;
	}   
 
	public function indexAction() {
		$this->_initAction()
			->renderLayout();
	}

	public function editAction() {
		$id     = $this->getRequest()->getParam('id');
		$model  = Mage::getModel('customizeshirt/cuff')->load($id);

		if ($model->getId() || $id == 0) {
			$data = Mage::getSingleton('adminhtml/session')->getFormData(true);
			if (!empty($data)) {
				$model->setData($data);
			}

			Mage::register('cuff_data', $model);

			$this->loadLayout();
			$this->_setActiveMenu('customizeshirt/items');

			$this->_addBreadcrumb(Mage::helper('adminhtml')->__('Item Manager'), Mage::helper('adminhtml')->__('Item Manager'));
			$this->_addBreadcrumb(Mage::helper('adminhtml')->__('Item News'), Mage::helper('adminhtml')->__('Item News'));

			$this->getLayout()->getBlock('head')->setCanLoadExtJs(true);

			$this->_addContent($this->getLayout()->createBlock('customizeshirt/adminhtml_cuff_edit'))
				->_addLeft($this->getLayout()->createBlock('customizeshirt/adminhtml_cuff_edit_tabs'));

			$this->renderLayout();
		} else {
			Mage::getSingleton('adminhtml/session')->addError(Mage::helper('customizeshirt')->__('Item does not exist'));
			$this->_redirect('*/*/');
		}
	}
 
	public function newAction() {
		$this->_forward('edit');
	}
 
	public function saveAction() {
		if ($data = $this->getRequest()->getPost()) {
	  			
			$model = Mage::getModel('customizeshirt/cuff');		
			
			if(isset($_FILES['filename']['name']) && $_FILES['filename']['name'] != '') {
				try {	
					$result = array();
				$result = $this->uploadFile('filename');
				$fieldname = str_replace('_uploader','',$result['fieldname']);
				//echo $result['url'];

				$data['cuff_image'] = $result['url'];

				$model->setCuffImage($data['cuff_image']);
				//$model->save();
					
				} catch (Exception $e) {
		      echo 'Error Message: '.$e->getMessage();
		        }
	        
		        //this way the name is saved in DB
	  			//$data['filename'] = $_FILES['filename']['name'];
			}
			
			$model->setData($data)
				->setId($this->getRequest()->getParam('id'));
				//print_r($data['effect']);exit;				
			//$data['stores']=$data['stores'][0];
			//print_r($data);exit;
			try {
				if ($model->getCreatedTime == NULL || $model->getUpdateTime() == NULL) {
					$model->setCreatedTime(now())
						->setUpdateTime(now());
				} else {
					$model->setUpdateTime(now());
				}	
				
				$model->save();
				Mage::getSingleton('adminhtml/session')->addSuccess(Mage::helper('customizeshirt')->__('Item was successfully saved'));
				Mage::getSingleton('adminhtml/session')->setFormData(false);

				if ($this->getRequest()->getParam('back')) {
					$this->_redirect('*/*/edit', array('id' => $model->getId()));
					return;
				}
				$this->_redirect('*/*/');
				return;
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
                Mage::getSingleton('adminhtml/session')->setFormData($data);
                $this->_redirect('*/*/edit', array('id' => $this->getRequest()->getParam('id')));
                return;
            }
        }
        Mage::getSingleton('adminhtml/session')->addError(Mage::helper('customizeshirt')->__('Unable to find item to save'));
        $this->_redirect('*/*/');
	}
 
	public function deleteAction() {
		if( $this->getRequest()->getParam('id') > 0 ) {
			try {
				$model = Mage::getModel('customizeshirt/cuff');
				 
				$model->setId($this->getRequest()->getParam('id'))
					->delete();
					 
				Mage::getSingleton('adminhtml/session')->addSuccess(Mage::helper('adminhtml')->__('Item was successfully deleted'));
				$this->_redirect('*/*/');
			} catch (Exception $e) {
				Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
				$this->_redirect('*/*/edit', array('id' => $this->getRequest()->getParam('id')));
			}
		}
		$this->_redirect('*/*/');
	}

    public function massDeleteAction() {
        $customizeshirtIds = $this->getRequest()->getParam('cuff');
        if(!is_array($customizeshirtIds)) {
			Mage::getSingleton('adminhtml/session')->addError(Mage::helper('adminhtml')->__('Please select item(s)'));
        } else {
            try {
                foreach ($customizeshirtIds as $customizeshirtId) {
                    $customizeshirt = Mage::getModel('customizeshirt/cuff')->load($customizeshirtId);
                    $customizeshirt->delete();
                }
                Mage::getSingleton('adminhtml/session')->addSuccess(
                    Mage::helper('adminhtml')->__(
                        'Total of %d record(s) were successfully deleted', count($customizeshirtIds)
                    )
                );
            } catch (Exception $e) {
                Mage::getSingleton('adminhtml/session')->addError($e->getMessage());
            }
        }
        $this->_redirect('*/*/index');
    }
	
    public function massStatusAction()
    {
        $customizeshirtIds = $this->getRequest()->getParam('cuff');
        if(!is_array($customizeshirtIds)) {
            Mage::getSingleton('adminhtml/session')->addError($this->__('Please select item(s)'));
        } else {
            try {
                foreach ($customizeshirtIds as $customizeshirtId) {
                    $customizeshirt = Mage::getSingleton('customizeshirt/cuff')
                        ->load($customizeshirtId)
                        ->setStatus($this->getRequest()->getParam('status'))
                        ->setIsMassupdate(true)
                        ->save();
                }
                $this->_getSession()->addSuccess(
                    $this->__('Total of %d record(s) were successfully updated', count($customizeshirtIds))
                );
            } catch (Exception $e) {
                $this->_getSession()->addError($e->getMessage());
            }
        }
        $this->_redirect('*/*/index');
    }
  
    public function exportCsvAction()
    {
        $fileName   = 'cuff.csv';
        $content    = $this->getLayout()->createBlock('customizeshirt/adminhtml_cuff_grid')
            ->getCsv();

        $this->_sendUploadResponse($fileName, $content);
    }

    public function exportXmlAction()
    {
        $fileName   = 'cuff.xml';
        $content    = $this->getLayout()->createBlock('customizeshirt/adminhtml_cuff_grid')
            ->getXml();

        $this->_sendUploadResponse($fileName, $content);
    }

    protected function _sendUploadResponse($fileName, $content, $contentType='application/octet-stream')
    {
        $response = $this->getResponse();
        $response->setHeader('HTTP/1.1 200 OK','');
        $response->setHeader('Pragma', 'public', true);
        $response->setHeader('Cache-Control', 'must-revalidate, post-check=0, pre-check=0', true);
        $response->setHeader('Content-Disposition', 'attachment; filename='.$fileName);
        $response->setHeader('Last-Modified', date('r'));
        $response->setHeader('Accept-Ranges', 'bytes');
        $response->setHeader('Content-Length', strlen($content));
        $response->setHeader('Content-type', $contentType);
        $response->setBody($content);
        $response->sendResponse();
        die;
    }
	
	protected function uploadFiles( $files ){
        if( !empty($files) && is_array($files) ){
            $result = array();
            foreach( $files as $file=>$info ){
                $result[] = $this->uploadFile( $file );
            }
            return $result;
        }
    }


	protected function uploadFile( $file_name ){

        if( !empty($_FILES[$file_name]['name']) ){
		try {
			$result = array();
			$dynamicScmsURL = 'customizeshirt/cuff';
			$baseScmsMediaURL = Mage::getBaseUrl('media') . DS . 'customizeshirt/cuff';
			$baseScmsMediaPath = Mage::getBaseDir('media') . DS .  'customizeshirt/cuff';

			$uploader = new Varien_File_Uploader( $file_name );
			$uploader->setAllowedExtensions(array('jpg','jpeg','png','gif'));
			$uploader->setAllowRenameFiles(true);
			$uploader->setFilesDispersion(true);
			$result = $uploader->save( $baseScmsMediaPath );

			$file = str_replace(DS, '/', $result['file']);
			if( substr($baseScmsMediaURL, strlen($baseScmsMediaURL)-1)=='/' && substr($file, 0, 1)=='/' )    $file = substr($file, 1);

			$ScmsMediaUrl = $dynamicScmsURL.$file;

			$result['fieldname'] = $file_name;
			$result['url'] = $ScmsMediaUrl;
			$result['file'] = $result['file'];
			return $result;
		     } catch (Exception $e) {

			Mage::getSingleton('adminhtml/session')->addError('Media File with this extension is not allowed to Upload');
		}
        } else {
            return false;
        }
    }
	
}