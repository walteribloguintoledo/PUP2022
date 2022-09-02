<?php
ORM::configure('mysql:host=localhost;dbname=blog');
ORM::configure('username','root');
ORM:: configure('password','');
ORM::configure('return_result_sets', true);
ORM::configure('id_column', 'uid','id');
// $servername = "localhost";
// $adminname = "root";
// $adminpassword = "";
// $dbname = "blog";
// // Database Connection Code
// $conn = new mysqli($servername, $adminname, $adminpassword, $dbname);
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error); // in case of error
// }
?>