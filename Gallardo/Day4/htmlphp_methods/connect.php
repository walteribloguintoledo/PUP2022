<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "gallardo";
// Create connection
$conn = new mysqli($server, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
?>