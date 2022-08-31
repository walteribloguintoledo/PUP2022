<?php
// ORM::configure('mysql:host=localhost;dbname=olex');
// ORM::configure('username','minacoe25');
// ORM:: configure('password','Abc123');
// ORM::configure('return_result_sets', true);
// ORM::configure('id_column', 'uid','id');
// global $conn;

$servername = "localhost";
$adminname = "root";
$adminpassword = "";
$dbname = "blog";
// Database Connection Code
$conn = new mysqli($servername, $adminname, $adminpassword, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // in case of error
}
?>