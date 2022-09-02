<?php
$username = $_POST['username'];
$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$bday = $_POST['birthday'];
$age = $_POST['age'];
$contactnumber = $_POST['cnumber'];
$password = $_POST['password'];

$servername = "localhost";
$adminname = "root";
$adminpassword = "";
$dbname = "blog";
// Database Connection Code
$conn = new mysqli($servername, $adminname, $adminpassword, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // in case of error
}
else{
    echo $username, $name , $email, $address, $bday, $age, $contactnumber, $password;
    $sql = "SELECT * FROM allusers WHERE Username='$username'";
    if ($result = mysqli_query($conn, $sql)) {
        $rowcount = mysqli_num_rows( $result );
        if ($rowcount>0){
            echo "Error: Username Already Exist!!!";
        }
        else{
            $sql = "SELECT * FROM allusers WHERE Email='$email'";
            if ($result = mysqli_query($conn, $sql)) {
                $rowcount = mysqli_num_rows( $result );
                if ($rowcount>0){
                    echo "Error: Email Already Exist!!!";
                }
                else{
                    $sql = "INSERT INTO allusers (Username, Name, Email, Address, Birthdate, Age, ContactNumber, Password)
                VALUES ('$username', '$name' , '$email', '$address', '$bday', $age, '$contactnumber', '$password')";
                if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
                } else {
                echo "Error: " . $sql . "\n" . $conn->error;
                }
                }
            }
        }
     }
    $conn->close();
}






?>

