<?php

function deleteUser($delid)
{
  // include "connect.php";
  $sql = "DELETE FROM users WHERE userid = $delid";
  $sql = ORM::for_table('users')->find_one($delid);
  $sql -> delete();
  return true;
}

?>