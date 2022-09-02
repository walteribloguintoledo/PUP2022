<?php
require_once 'idiorm.php';
\ORM::configure('sqlite:./example.db');
function configureDb($database, $username, $password)
 {
     \ORM::configure("mysql:host=localhost;dbname={$database};charset=utf8mb4");
     \ORM::configure('username', $username);
     \ORM::configure('password', $password);
     $this->config->set("data.dbName", $database);
 }

// End Comment