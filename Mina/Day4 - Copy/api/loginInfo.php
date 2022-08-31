<?php
$username = $_POST['user'];
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
    $sql = "SELECT * FROM allusers WHERE Username = '$username' OR Email ='$username' AND Password = '$password' ";
    if ($result = mysqli_query($conn, $sql)) {
        $rowcount = mysqli_num_rows( $result );
        if ($rowcount<1){
            echo "Error: In";
        }
        else{
            echo "WELCOME ", $username ;
            $sql = "SELECT Username, Name, Email, Address, Birthdate, Age, ContactNumber, Password FROM allusers WHERE Username='$username'";
            if ($result = mysqli_query($conn, $sql)) {
            // Fetch one and one row
            while ($row = mysqli_fetch_row($result)) {
                $dbusername = $row[0];
                $dbname = $row[1];
                $dbemail = $row[2];
                $dbaddress = $row[3];
                $dbbday = $row[4];
                $dbage = $row[5];
                $dbcnum = $row[6];
                $dbpass = $row[7];
            }
            mysqli_free_result($result);
            }
            else {
                echo "failed";
            }
        }
     }
    $conn->close();
}






?>

