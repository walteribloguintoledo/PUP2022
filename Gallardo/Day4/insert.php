<?php
include "connect.php";

$fname = $_POST['name'];
$address = $_POST['address'];
$uname = $_POST['uname'];
$email = $_POST['email'];
$password =$_POST['password'];
$bday = $_POST['bday'];
$contact = $_POST['contact'];

$sql = "INSERT INTO users (fullname, address, username, email, password, birthday, contact) VALUES ('$fname','$address','$uname','$email','$password','$bday','$contact')";

$mysql = "SELECT * FROM users WHERE username = '$uname' AND email = '$email' AND password = '$password'";

$result = mysqli_query($conn, $mysql);

if(mysqli_num_rows($result) == 1) {
    echo "User exist";
}
else 
{
    echo "User does not exist";
    if(mysqli_query($conn, $sql))
    {
        // echo 'New record created successfully';
    }
    else
    {
        echo "Error: " . $sql . " " . mysqli_error($conn);
    }
}




?>
