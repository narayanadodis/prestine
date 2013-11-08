<?php

$installer = $this;

$installer->startSetup();

$installer->run("

-- DROP TABLE IF EXISTS {$this->getTable('customizeshirt_sleeve')};
CREATE TABLE {$this->getTable('customizeshirt_sleeve')} (
	`sleeve_id` int(11) unsigned NOT NULL auto_increment,
	`sleeve_title` varchar(255) NOT NULL default '',
	`sleeve_image` varchar(255) NOT NULL default '',
	`status` smallint(6) NOT NULL default '0',
	`switchno` int(11) NOT NULL,
	`created_time` datetime NULL,
  	`update_time` datetime NULL,
  	PRIMARY KEY (`sleeve_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

");

$installer->endSetup();
