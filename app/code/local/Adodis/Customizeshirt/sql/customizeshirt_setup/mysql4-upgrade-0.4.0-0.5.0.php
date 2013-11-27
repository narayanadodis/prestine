<?php

$installer = $this;

$installer->startSetup();

$installer->run("

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_button')};
CREATE TABLE {$this->getTable('customizeshirt_button')} (
	`button_id` int(11) unsigned NOT NULL auto_increment,
	`button_title` varchar(255) NOT NULL default '',
	`button_color` varchar(255) NOT NULL default '',
	`button_image` varchar(255) NOT NULL default '',
	`button_thread_color` varchar(255) NOT NULL default '',
	`status` smallint(6) NOT NULL default '0',
	`switchno` int(11) NOT NULL,
	`created_time` datetime NULL,
  	`update_time` datetime NULL,
  	PRIMARY KEY (`button_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_pocket')};
CREATE TABLE {$this->getTable('customizeshirt_pocket')} (
	`pocket_id` int(11) unsigned NOT NULL auto_increment,
	`pocket_title` varchar(255) NOT NULL default '',
	`pocket_image` varchar(255) NOT NULL default '',
	`status` smallint(6) NOT NULL default '0',
	`switchno` int(11) NOT NULL,
	`created_time` datetime NULL,
  	`update_time` datetime NULL,
  	PRIMARY KEY (`pocket_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_back')};
CREATE TABLE {$this->getTable('customizeshirt_back')} (
	`back_id` int(11) unsigned NOT NULL auto_increment,
	`back_title` varchar(255) NOT NULL default '',
	`back_image` varchar(255) NOT NULL default '',
	`status` smallint(6) NOT NULL default '0',
	`switchno` int(11) NOT NULL,
	`created_time` datetime NULL,
  	`update_time` datetime NULL,
  	PRIMARY KEY (`back_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

");

$installer->endSetup();
