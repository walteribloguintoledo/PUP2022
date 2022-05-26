<?php
function getInfo($uid)
{
    include "connect.php";
    $sql = "SELECT * FROM users WHERE userid = $uid"; 

    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) > 0) 
    {
        while($row = mysqli_fetch_assoc($result)) 
        {
            $data = array(
                "userid" => $row["userid"],
                "fullname" => $row["fullname"],
                "address" => $row["address"],
                "username" => $row["username"],
                "email" => $row['email'],
                "password" => $row["password"],
                "birthday" => $row["birthday"],
                "contact" => $row["contact"]
            );
        }
        return $data;
        
    } 
    else 
    {
        echo "0 results";
    }
}


?>
