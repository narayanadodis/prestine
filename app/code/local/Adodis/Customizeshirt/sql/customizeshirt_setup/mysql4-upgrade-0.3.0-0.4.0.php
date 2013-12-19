<?php

$installer = $this;

$installer->startSetup();

$installer->run("

ALTER TABLE `{$installer->getTable('sales_flat_quote_item')}` ADD `customized_shirt_image` VARCHAR( 255 ) NOT NULL, ADD `customized_shirt_back_image` VARCHAR( 255 ) NOT NULL, ADD `neck` INT(11) NOT NULL, ADD `chest` INT(11) NOT NULL, ADD `waist` INT(11) NOT NULL, ADD `hip` INT(11) NOT NULL, ADD `length` INT(11) NOT NULL, ADD `shoulder` INT(11) NOT NULL, ADD `sleeve` INT(11) NOT NULL, ADD `std_measure` VARCHAR( 50 ) NOT NULL;
ALTER TABLE `{$installer->getTable('sales_flat_order_item')}` ADD `customized_shirt_image` VARCHAR( 255 ) NOT NULL, ADD `customized_shirt_back_image` VARCHAR( 255 ) NOT NULL, ADD `neck` INT(11) NOT NULL, ADD `chest` INT(11) NOT NULL, ADD `waist` INT(11) NOT NULL, ADD `hip` INT(11) NOT NULL, ADD `length` INT(11) NOT NULL, ADD `shoulder` INT(11) NOT NULL, ADD `sleeve` INT(11) NOT NULL, ADD `std_measure` VARCHAR( 50 ) NOT NULL;

");

$installer->endSetup();
