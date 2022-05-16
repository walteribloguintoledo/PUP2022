<?php
include "connect.php";

$name = $_POST["fullname"];
$address = $_POST["address"];
$uname = $_POST["username"];
$email = $_POST["email"];
$password =$_POST["password"];
$bday = $_POST["bday"];
$contact = $_POST["contact"];
$sql = "INSERT INTO users (fullname,address,username,email,password,birthday, contact) VALUES ('$name','$address','$uname','$email','$password','$bday', '$contact')";
mysqli_query($conn, $sql);
echo "<script>alert('New record created successfully')</script>"
;

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <h1>Welcome</h1>
    <h3>These are your inputs</h3>
    <p>
        Your Name is <?php echo $_POST["fullname"];?><br>
        You live at <?php echo $_POST["address"];?><br>
        Your username is <?php echo $_POST["username"]; ?><br>
        Your email is <?php echo $_POST["email"]; ?><br>
        Your were born in <?php echo $_POST["bday"]; ?><br>
        Your contact number is <?php echo $_POST["contact"];?>
    </p>
    <script>$('#input').trigger("reset");</scripalert>
</body>
</html>