<?php
function checkUser($email,$pswd) // Checks if the user exist
{
    $data = array();
    
    $sql = ORM::for_table('users')->where('email',$email)->where('password',$pswd)->find_many();
    
    foreach ($sql as $row)
    {
        $data = array("valid" => true, "id"=> $row->id,"uid" => $row->uid, "userType" => $row->userType, "firstname"=> $row->firstname, "middlename" => $row->middlename, "lastname" => $row->lastname,  "email" => $row->email,"password" => $row->password, "category" => $row->category);
    }
    return $data;
}
?>