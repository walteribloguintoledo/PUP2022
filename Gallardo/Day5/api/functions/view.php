<?php

  function viewUsers($uid)
  {
    include "connect.php";
    $sql = "SELECT * FROM users WHERE NOT userid = $uid";
    $result = mysqli_query($conn, $sql);
    $user = array();
  if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) 
      {
        $data = array("userid" => $row["userid"],
                      "fullname" => $row["fullname"],
                      "address" => $row["address"],
                      "username" => $row["username"],
                      "email" => $row['email'],
                      "password" => $row["password"],
                      "birthday" => $row["birthday"],
                      "contact" => $row["contact"]);
          $user[] = $data;           
      }
      return $user;
    } 
    
// else {
    
//   }
    
  }
?>
