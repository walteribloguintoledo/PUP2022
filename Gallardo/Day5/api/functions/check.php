<?php
function checkUser($uname,$email,$pswd)
{
    include "connect.php";
    $data = array();
    $sql = "SELECT * FROM users WHERE username = '$uname' AND email = '$email' AND password = '$pswd'";
    $result = mysqli_query($conn, $sql);
        if(mysqli_num_rows($result) == 1) 
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $data = array("valid" => true, "userid"=> $row['userid'],"uname" => $row['username'], "email" => $row['email'], "password" => $row['password']);
                
            }
            
            // echo "User Found";
        }
        else
        {
            while($row = mysqli_fetch_assoc($result))
            {
                $data = array("valid" => false, "userid"=> $row['userid'],"uname" => $row['username'], "email" => $row['email'], "password" => $row['password']);
            }
            
        }
        echo json_encode($data);
    
    
}
?>