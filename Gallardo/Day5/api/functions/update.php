<?php

function updateUser($uid,$newfname,$newaddress,$newuname,$newemail,$newpswd,$newbday,$newcontact){

  // include "connect.php";
  $existsql = ORM::for_table('users')->where('username',$newuname)->where('email',$newemail)->count();
  
  if($existsql == 0)
  {
      $sql = ORM::for_table('users')->where('userid',$uid)->find_many();
      $sql->set('fullname',$newfname);
      $sql->set('address', $newaddress);  
      $sql->set('username',$newuname);
      $sql->set('email' ,$newemail);
      $sql->set('password',$newpswd);
      $sql->set('birthday',$newbday);
      $sql->set('contact',$newcontact);
      $sql->save();
      $data = array("valid" => true,"userid" => $uid, "fullname" => $newfname, "address" => $newaddress, "username" => $newuname, "email" => $newemail, "password" => $newpswd, "bday" => $newbday, "contact" => $newcontact);
  }
  else
  {
      $data = array("valid" => false);
  }
  
  return $data;
}
?>