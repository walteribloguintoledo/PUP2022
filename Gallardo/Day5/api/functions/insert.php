<?php
    function insertUser($fname,$address,$uname,$email,$pswd,$bday,$contact)
    {
        include "connect.php";

        $sql = "INSERT INTO users (fullname, address, username, email, password, birthday, contact) VALUES ('$fname','$address','$uname','$email','$pswd','$bday','$contact')";
        $mysql = "SELECT * FROM users WHERE username = '$uname' OR email = '$email'";
        $result = mysqli_query($conn, $mysql);
        
        if(mysqli_num_rows($result) == 0) 
        {
            if(mysqli_query($conn, $sql))
            {
                $data = array("valid" => true, "fullname" => $fname, "address" => $address, "username" => $uname, "email" => $email, "password" => $pswd, "bday" => $bday, "contact" => $contact);
            }
        }
        else
            {
                $data = array("valid" => false, "fullname" => $fname, "address" => $address, "username" => $uname, "email" => $email, "password" => $pswd, "bday" => $bday, "contact" => $contact);
            }
        return $data;
    }
?>
