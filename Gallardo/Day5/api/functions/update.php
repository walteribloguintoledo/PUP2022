<?php
function updateUser($update,$newfname,$newaddress,$newuname,$newemail,$newpswd,$newbday,$newcontact){

  include "connect.php";

  $sql = "UPDATE users SET fullname = '$newfname',address= '$newaddress',username = '$newuname',email = '$newemail',password = '$newpswd',birthday = '$newbday', contact= '$newcontact' WHERE userid = '$update'";
  $existsql = "SELECT * FROM users WHERE username = '$newuname' OR email = '$newemail'";
  $resExist = mysqli_query($conn, $existsql);

  if(mysqli_num_rows($resExist) == 0 )
  {
    if (mysqli_query($conn, $sql)) 
    {
      $data = array("valid" => true,"userid" => $update, "fullname" => $newfname, "address" => $newaddress, "username" => $newuname, "email" => $newemail, "password" => $newpswd, "bday" => $newbday, "contact" => $newcontact);
    } 
    
  }
  else
  {
    $data = array("valid" => false);
  }
  return $data;
}

?>