<?php

$installer = $this;

$installer->startSetup();

$installer->run("

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_monolabel')};
CREATE TABLE {$this->getTable('customizeshirt_monolabel')} (
  `monolabel_id` int(11) unsigned NOT NULL auto_increment,
  `personalize_type` varchar(255) NOT NULL default '',
  `monolabel_title` varchar(255) NOT NULL default '',
  `monolabel_image` varchar(255) NOT NULL default '',
  `status` smallint(6) NOT NULL default '0',  
  `switchno` int(11) NOT NULL,
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`monolabel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_embroidery')};
CREATE TABLE {$this->getTable('customizeshirt_embroidery')} (
  `embroidery_id` int(11) unsigned NOT NULL auto_increment,
  `embroidery_title` varchar(255) NOT NULL default '',
  `embroidery_image` varchar(255) NOT NULL default '',
  `status` smallint(6) NOT NULL default '0',  
  `switchno` int(11) NOT NULL,
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`embroidery_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    ");

$installer->endSetup(); 