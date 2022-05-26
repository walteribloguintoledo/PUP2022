<?php

function deleteUser($delid)
{
  include "connect.php";
  $sql = "DELETE FROM users WHERE userid = $delid";

  if (mysqli_query($conn, $sql)) 
  {
    $res = true;
    // echo "Record deleted successfully";
    return $res;
  } else {
    $res = true;
    // echo "Error deleting record: " . mysqli_error($conn);
    return $res;
  }
}


?>