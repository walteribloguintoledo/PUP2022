<?php
function getInfo($uid)
{
    // include "connect.php";
    
    $sql =  ORM::for_table('users')->where('userid',$uid)->find_many();
    
    foreach ($sql as $row)
    {
        return $data = array("userid"=>$row->userid,
                            "fullname"=>$row->fullname,
                            "address"=>$row->address,
                            "username"=>$row->username,
                            "email"=>$row->email,
                            "password"=>$row->password,
                            "birthday"=>$row->birthday,
                            "contact"=>$row->contact);
    }
}
   
?>
