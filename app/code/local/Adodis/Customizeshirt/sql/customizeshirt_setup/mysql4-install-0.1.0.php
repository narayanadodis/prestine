<?php

$installer = $this;

$installer->startSetup();

$installer->run("

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt')};
CREATE TABLE {$this->getTable('customizeshirt')} (
  `customizeshirt_id` int(11) unsigned NOT NULL auto_increment,
  `title` varchar(255) NOT NULL default '',
  `filename` varchar(255) NOT NULL default '',
  `content` text NOT NULL default '',
  `status` smallint(6) NOT NULL default '0',
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`customizeshirt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_collar')};
CREATE TABLE {$this->getTable('customizeshirt_collar')} (
  `collar_id` int(11) unsigned NOT NULL auto_increment,
  `collar_title` varchar(255) NOT NULL default '',
  `collar_image` varchar(255) NOT NULL default '', 
  `status` smallint(6) NOT NULL default '0', 
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`collar_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_cuff')};
CREATE TABLE {$this->getTable('customizeshirt_cuff')} (
  `cuff_id` int(11) unsigned NOT NULL auto_increment,
  `cuff_title` varchar(255) NOT NULL default '',
  `cuff_image` varchar(255) NOT NULL default '',
  `status` smallint(6) NOT NULL default '0',  
  `created_time` datetime NULL,
  `update_time` datetime NULL,
  PRIMARY KEY (`cuff_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

    ");

$installer->endSetup(); 