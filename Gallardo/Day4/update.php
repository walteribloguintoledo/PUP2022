<?php
include "connect.php";

$update = $_POST['edit'];
$newname = $_POST['name'];
$newaddress = $_POST['address'];
$newuname = $_POST['uname'];
$newemail = $_POST['email'];
$newpassword =$_POST['password'];
$newbday = $_POST['bday'];
$newcontact = $_POST['contact'];

$sql = "UPDATE users SET fullname = '$newname',address= '$newaddress',username = '$newuname',email = '$newemail',password = '$newpassword',birthday = '$newbday', contact= '$newcontact' WHERE userid = '$update'";
$emailsql = "SELECT * FROM users WHERE email = '$newemail'";
$ures = mysqli_query($conn, $unamesql);
$resemail = mysqli_query($conn, $emailsql);

if(mysqli_num_rows($resemail) == 1 )
{
    $emailtaken = 2;
    echo $emailtaken;
}
else{
    if (mysqli_query($conn, $sql)) {
        echo "Record updated successfully";
      } else {
        echo "Error updating record: " . mysqli_error($conn);
      }
}

?>