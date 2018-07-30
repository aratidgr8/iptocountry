# iptocountry
This is a REST API built using node.js version 8.11.2, express framework and MySQL database, which fetches user's public IP address and finds his (2 character)country code, country name, state/region and city name and returns result in JSON format.

<strong>Steps to install</strong>

1. You can clone using command<br /><code>git clone https://github.com/aratidgr8/iptocountry.git;</code><br />or<br />Download iptocountry-master.zip file. 

2. Navigate to folder in terminal or command line interface.

3. To install all node modules and their dependencies required in code, from package.json file, run below command:<br /><code> npm install </code>

4. Unzip csv-databases.zip folder. 

5. Move  IP2LOCATION-LITE-DB3.CSV and IP2LOCATION-LITE-DB3.IPV6.CSV files from csv-databases directory to root folder (same folder, where <strong>csv2sql.php</strong> file is present).

6. Create database ip2location<br /> 
<code>CREATE DATABASE ip2location;</code>

7. Create table <strong>ip2location_db3</strong> which stores; IPV4, country code, country name, state and city name information.<br />
<code>CREATE TABLE `ip2location_db3`(`ip_from` INT(10) UNSIGNED,`ip_to` INT(10) UNSIGNED,`country_code` CHAR(2),	`country_name` VARCHAR(64),	`region_name` VARCHAR(128),	`city_name` VARCHAR(128),	INDEX `idx_ip_from` (`ip_from`),INDEX `idx_ip_to` (`ip_to`),INDEX `idx_ip_from_to` (`ip_from`, `ip_to`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;</code>

8. Create table <strong>ip2location_db3_ipv6</strong> which stores; IPV6, country code, country name, state and city name information.<br />
<code>CREATE TABLE `ip2location_db3_ipv6`(`ip_from` DECIMAL(39,0) UNSIGNED NULL DEFAULT NULL,`ip_to` DECIMAL(39,0) UNSIGNED NOT NULL,`country_code` CHAR(2),`country_name` VARCHAR(64),`region_name` VARCHAR(128),`city_name` VARCHAR(128), INDEX `idx_ip_from` (`ip_from`), INDEX `idx_ip_to` (`ip_to`), INDEX `idx_ip_from_to` (`ip_from`, `ip_to`)) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;</code>

9. Open <strong>csv2sql.php</strong> file on your localhost and submit form to import data from CSV file <strong>IP2LOCATION-LITE-DB3.CSV</strong> to Mysql table: ip2location_db3. <br /><strong>It should load table ip2location_db3 with 3278000 rows.</strong>

10. In <strong>csv2sql.php</strong> file now change the "table name" input to <strong>ip2location_db3_ipv6</strong> and "Name of the file" input to <strong>IP2LOCATION-LITE-DB3.IPV6.CSV</strong> and submit the form once again. <br /><strong>It should load table ip2location_db3_ipv6 with 3719942 rows.</strong>

11. Now, go to the browser and load below URL:<br /> <code>http://localhost:4001/api/v1/userscountry</code>

12. Script fetched your IP address and returns your location information in JSON format as below:<br />
<code>{"country_code":"IN","country_name":"India","region_name":"Gujarat","city_name":"Chanasma"}</code>
