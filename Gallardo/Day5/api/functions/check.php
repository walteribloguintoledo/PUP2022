<?php
function checkUser($uname,$email,$pswd)
{
    // include "connect.php";
    $data = array();
    
    $sql = ORM::for_table('users')->where('username',$uname)->where('email',$email)->where('password',$pswd)->find_many();
    
    foreach ($sql as $row)
    {
        $data = array("valid" => true, "userid"=> $row->userid,"uname" => $row->username, "email" => $row->email,"password" => $row->password);
    }
    echo json_encode($data);
}
?>