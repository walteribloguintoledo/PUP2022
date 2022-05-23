<?php
include "connect.php";

$uname = $_POST['uname'];
$email = $_POST['email'];
$password = $_POST['pswd'];
$sql = "SELECT * FROM users WHERE username = '$uname' AND email = '$email' AND password = '$password'";
// $mysql = "SELECT COUNT(username) FROM users WHERE username = '$uname'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) == 1) {
    echo "User Found";
   
}
else {
    echo "User does not exist";
  }
?>