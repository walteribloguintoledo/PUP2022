<?php
include "connect.php";
// $uname = $_GET['username'];
$sql = "SELECT * FROM users"; 

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) 
{
    while($row = mysqli_fetch_assoc($result)) {
        $data = array(
            "userid" => $row["userid"],
            "fullname" => $row["fullname"],
            "address" => $row["address"],
            "username" => $row["username"],
            "password" => $row["password"],
            "birthday" => $row["birthday"],
            "contact" => $row["contact"]
        );
        // $id = $row["userid"];
        echo $data;
        // echo "<br>";
    }
    
} 
else 
{
    echo "0 results";
}
?>
