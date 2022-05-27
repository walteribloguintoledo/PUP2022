<?php

  function viewUsers($uid)
  {
    // include "connect.php";
    $data = array();
    $sql = ORM::for_table('users')->where_not_equal('userid',$uid)->find_many();
    foreach ($sql as $row)
    {
       $data[] = array("userid"=>$row->userid,
                          "fullname"=>$row->fullname,
                          "address"=>$row->address,
                          "username"=>$row->username,
                          "email"=>$row->email,
                          "password"=>$row->password,
                          "birthday"=>$row->birthday,
                          "contact"=>$row->contact);
        //$user[] = $data;
    }

    return $data;
 
  }
    
?>
